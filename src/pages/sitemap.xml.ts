const pages = ['', 'about/', 'projects/', 'contact/', 'donate/']

export function GET() {
  const urls = pages.map(path => `<url><loc>https://alldrit.ca/${path}</loc></url>`).join('')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  )
}
