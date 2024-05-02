import { MetadataRoute } from 'next';
import { getDataFromApi } from './actions';

type SitemapLocation = {
  url: string;
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority: number;
  lastmod?: Date;
};
const websiteUrl = 'https://frontend-developer-technical-task-vg.vercel.app/';

const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(),
  },
  { url: '/products', priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getDataFromApi();
  const productUrls: SitemapLocation[] = (products || []).map((product) => {
    return {
      url: `/products/${product.id}`,
      priority: 0.5,
    };
  });

  const locations = [...defaultUrls, ...productUrls];

  const sitemap = locations.map((location) => {
    return {
      url: `${websiteUrl}${location.url}`,
      priority: location.priority,
      lastModified: location.lastmod,
    };
  });
  return sitemap;
}
