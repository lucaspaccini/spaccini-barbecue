import type { Metadata } from "next";
import "./globals.css";

const canonicalUrl = "https://www.spaccinibarbecue.com";
const description =
  "Cotture lente e barbecue per eventi a Perugia e in Umbria. Il nuovo sito è in preparazione.";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Spaccini Barbecue",
    template: "%s | Spaccini Barbecue",
  },
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: canonicalUrl,
    siteName: "Spaccini Barbecue",
    title: "Spaccini Barbecue",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
