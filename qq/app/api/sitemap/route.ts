export async function GET() {
  const baseUrl = 'https://cpfly.top'
  const currentDate = new Date().toISOString()

  // 主要页面配置
  const pages = [
    {
      url: '/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/how-to-play',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/game-modes',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/faq',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/reviews',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
      languages: ['zh', 'en', 'ja']
    },
    {
      url: '/download',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      languages: ['zh', 'en', 'ja']
    }
  ]

  // 生成XML内容
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  const mainUrl = page.url === '/' ? '' : page.url
  
  return `  <url>
    <loc>${baseUrl}${mainUrl}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
${page.languages.map(lang => {
  const langUrl = lang === 'zh' ? mainUrl : `/${lang}${mainUrl}`
  return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langUrl}" />`
}).join('\n')}
  </url>
${page.languages.filter(lang => lang !== 'zh').map(lang => {
  const langUrl = `/${lang}${mainUrl}`
  return `  <url>
    <loc>${baseUrl}${langUrl}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
${page.languages.map(altLang => {
  const altUrl = altLang === 'zh' ? mainUrl : `/${altLang}${mainUrl}`
  return `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}${altUrl}" />`
}).join('\n')}
  </url>`
}).join('\n')}`
}).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600' // 缓存1小时
    }
  })
} 