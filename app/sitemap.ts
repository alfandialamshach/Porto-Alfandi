import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alamshach.site";

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
