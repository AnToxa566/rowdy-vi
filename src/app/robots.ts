import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/*', '/login/'],
    },
    sitemap: 'https://rowdy-barbershop.com/sitemap.xml',
  }
}