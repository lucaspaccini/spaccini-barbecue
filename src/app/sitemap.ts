import type { MetadataRoute } from "next";

const canonicalUrl = "https://www.spaccinibarbecue.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: canonicalUrl }];
}
