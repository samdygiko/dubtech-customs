import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dubtech Customs Limited | Custom Car Specialists — Brentwood, Essex",
  description:
    "Brentwood's premier custom car specialists. Vehicle remapping, professional wheel refurbishment, MOT testing, used VW parts, recovery & 4x4 specialist. Based in South Weald, Essex.",
  openGraph: {
    title: "Dubtech Customs Limited",
    description:
      "Custom car specialists in Brentwood, Essex. Remapping, wheel refurb, MOT, VW parts and more.",
    url: "https://dubtechcustoms.co.uk",
    siteName: "Dubtech Customs Limited",
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Dubtech Customs Limited",
  description:
    "Custom car specialists offering vehicle remapping, wheel refurbishment, MOT testing, used VW parts, recovery and 4x4 servicing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fell'y Farm, Lincolns Ln, South Weald",
    addressLocality: "Brentwood",
    postalCode: "CM14 5RS",
    addressCountry: "GB",
  },
  telephone: "07469257945",
  url: "https://dubtechcustoms.co.uk",
  sameAs: ["https://www.instagram.com/dubtech_customs"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "26",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
