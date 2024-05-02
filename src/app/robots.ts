import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap:
      'https://frontend-developer-technical-task-vg.vercel.app/sitemap.xml',
  };
}
