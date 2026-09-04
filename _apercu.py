"""Apres `npm run build` (export statique dans out/) :
   1. sert out/ en local et capture 390 / 1280 (+ menu mobile ouvert) dans _captures/
   2. assemble un fichier autonome pour l'artefact claude.ai (CSS, JS et images inlines,
      sans <!DOCTYPE>/<html>/<head>/<body>) si un dossier est passe en argument.

   python _apercu.py [dossier_scratch]
"""
import base64, http.server, mimetypes, os, re, socketserver, sys, threading

ICI = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ICI, "out")
CAPT = os.path.join(ICI, "_captures")
PORT = 8765


def serveur():
    class H(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *a, **k):
            super().__init__(*a, directory=OUT, **k)
        def log_message(self, *a):
            pass
    socketserver.TCPServer.allow_reuse_address = True
    srv = socketserver.TCPServer(("127.0.0.1", PORT), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def captures():
    from playwright.sync_api import sync_playwright
    os.makedirs(CAPT, exist_ok=True)
    url = f"http://127.0.0.1:{PORT}/"
    with sync_playwright() as p:
        b = p.chromium.launch()
        for w in (390, 1280):
            pg = b.new_page(viewport={"width": w, "height": 900}, device_scale_factor=1)
            pg.goto(url, wait_until="networkidle", timeout=60000)
            pg.wait_for_timeout(800)
            pg.screenshot(path=os.path.join(CAPT, f"capture-{w}.png"), full_page=True)
            if w == 390:
                pg.click("button[aria-label='Ouvrir le menu']")
                pg.wait_for_timeout(500)
                pg.screenshot(path=os.path.join(CAPT, "capture-390-menu.png"))
            pg.close()
        b.close()
    print("captures ->", CAPT)


def data_uri(path):
    mime = mimetypes.guess_type(path)[0] or "application/octet-stream"
    with open(path, "rb") as f:
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode("ascii")


def local(path):
    return os.path.join(OUT, path.lstrip("/").split("?")[0])


def autonome(dest_dir):
    html = open(os.path.join(OUT, "index.html"), encoding="utf-8").read()
    # feuilles de style -> <style>
    def css(m):
        return "<style>" + open(local(m.group(1)), encoding="utf-8").read() + "</style>"
    html = re.sub(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>', css, html)
    # scripts externes -> inline (meme ordre, meme attributs async)
    def js(m):
        src = m.group(1)
        p = local(src)
        if not os.path.exists(p):
            return ""
        code = open(p, encoding="utf-8", errors="replace").read().replace("�", "")
        # l'artefact refuse les echappements \u de demi-surrogates non appaires
        code = re.sub(r'\\u[dD][89abAB][0-9a-fA-F]{2}(?!\\u[dD][c-fC-F][0-9a-fA-F]{2})', r'\\u0020', code)
        code = re.sub(r'(?<!\\u[dD][89abAB][0-9a-fA-F]{2})\\u[dD][c-fC-F][0-9a-fA-F]{2}', r'\\u0020', code)
        return "<script>" + code + "</script>"
    html = re.sub(r'<script[^>]+src="([^"]+)"[^>]*></script>', js, html)
    # images et polices locales -> data URI
    def img(m):
        p = local(m.group(2))
        return m.group(1) + '="' + (data_uri(p) if os.path.exists(p) else m.group(2)) + '"'
    html = re.sub(r'\b(src|href)="(/images/[^"]+|/_next/static/media/[^"]+)"', img, html)
    html = re.sub(r'url\((/_next/static/media/[^)]+)\)', lambda m: "url(" + data_uri(local(m.group(1))) + ")", html)
    # squelette artefact
    s = re.sub(r'^\s*<!DOCTYPE[^>]*>\s*', '', html, flags=re.I)
    s = re.sub(r'<html[^>]*>', '', s, count=1).replace('</html>', '')
    s = s.replace('<head>', '').replace('</head>', '')
    s = re.sub(r'<body[^>]*>', '', s, count=1).replace('</body>', '')
    dest = os.path.join(dest_dir, "aplusaudition-v1.html")
    open(dest, "w", encoding="utf-8").write(s)
    print("autonome ->", dest, os.path.getsize(dest), "octets")


if __name__ == "__main__":
    srv = serveur()
    try:
        captures()
    finally:
        srv.shutdown()
    if len(sys.argv) > 1:
        autonome(sys.argv[1])
