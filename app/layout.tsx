import type { Metadata } from "next";
import { Days_One, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const daysOne = Days_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const description =
  "A+ Audition, audioprothésiste indépendant à Cannes, quartier Alexandre III : bilan auditif gratuit, essai 30 jours, appareils 100 % santé sans reste à charge.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aplusaudition.fr"),
  title: "A+ Audition, audioprothésiste à Cannes",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "A+ Audition",
    title: "A+ Audition, audioprothésiste à Cannes",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "A+ Audition",
  description,
  url: "https://aplusaudition.fr/",
  telephone: "+33422328231",
  email: site.email,
  image: "https://aplusaudition.fr/images/devanture.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 boulevard Alexandre III",
    postalCode: "06400",
    addressLocality: "Cannes",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.54636, longitude: 7.03744 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:30", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "14:00" },
  ],
  founder: { "@type": "Person", name: "Gabriel Nabeth", jobTitle: "Audioprothésiste diplômé d'État" },
  memberOf: { "@type": "Organization", name: "Total Audition" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${sourceSans.variable} ${daysOne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sable-900 focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
