// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://www.tiasasolution.com";
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/pos-system`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/custom-software`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
