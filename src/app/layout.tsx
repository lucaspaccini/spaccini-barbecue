import type { Metadata } from "next";
import "./globals.css";

const canonicalUrl = "https://www.spaccinibarbecue.com";
const description =
  "Barbecue dal vivo e cotture lente per eventi a Perugia e in Umbria, con preparazioni su prenotazione e servizio concordato sull'occasione.";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Barbecue per eventi in Umbria | Spaccini Barbecue",
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
    title: "Barbecue per eventi in Umbria | Spaccini Barbecue",
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
      <body>
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important;}"}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
