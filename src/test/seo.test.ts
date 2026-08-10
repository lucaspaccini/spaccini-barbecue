import { describe, expect, it } from "vitest";

import RootLayout, { metadata } from "@/app/layout";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const canonicalUrl = "https://www.spaccinibarbecue.com";
const description =
  "Cotture lente e barbecue per eventi a Perugia e in Umbria. Il nuovo sito è in preparazione.";

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
      default: "Spaccini Barbecue",
      template: "%s | Spaccini Barbecue",
    });
    expect(metadata.description).toBe(description);
    expect(metadata.alternates).toMatchObject({ canonical: canonicalUrl });
    expect(metadata.openGraph).toMatchObject({
      url: canonicalUrl,
      type: "website",
      locale: "it_IT",
      siteName: "Spaccini Barbecue",
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
