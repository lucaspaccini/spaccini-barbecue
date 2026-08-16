import { describe, expect, it } from "vitest";

import RootLayout, { metadata } from "@/app/layout";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const canonicalUrl = "https://www.spaccinibarbecue.com";
const description =
  "Barbecue dal vivo e cotture lente per eventi a Perugia e in Umbria, con preparazioni su prenotazione e servizio concordato sull'occasione.";

describe("foundation SEO", () => {
  it("declares Italian as the document language", () => {
    expect(RootLayout({ children: null })).toMatchObject({
      type: "html",
      props: { lang: "it" },
    });
  });

  it("exports the approved metadata and Open Graph values", () => {
    expect(metadata.metadataBase).toEqual(new URL(canonicalUrl));
    expect(metadata.title).toEqual({
      default: "Barbecue per eventi in Umbria | Spaccini Barbecue",
      template: "%s | Spaccini Barbecue",
    });
    expect(metadata.description).toBe(description);
    expect(metadata.alternates).toMatchObject({ canonical: canonicalUrl });
    expect(metadata.openGraph).toMatchObject({
      url: canonicalUrl,
      type: "website",
      locale: "it_IT",
      siteName: "Spaccini Barbecue",
      title: "Barbecue per eventi in Umbria | Spaccini Barbecue",
      description,
    });
  });

  it("allows indexing and publishes the canonical sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${canonicalUrl}/sitemap.xml`,
      host: canonicalUrl,
    });
  });

  it("publishes only the canonical URL in the sitemap", () => {
    expect(sitemap()).toEqual([{ url: canonicalUrl }]);
  });
});
