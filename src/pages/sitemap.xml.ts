import { nav } from '../data/site';
export function GET({ site }: {site: URL}) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routes = [...nav.map(([path]) => path), 'project-sunrise'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path => `<url><loc>${new URL(`${base}/${path ? path + '/' : ''}`, site).href}</loc></url>`).join('')}</urlset>`, {headers:{'Content-Type':'application/xml'}});
}
