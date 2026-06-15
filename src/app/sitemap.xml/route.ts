import { NextResponse } from "next/server";

export async function GET() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://himanshuraj.me</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://himanshuraj.me/srijan-startup-competition-winner.webp</image:loc>
      <image:title>Himanshu Raj - Winner of Srijan Startup Presentation Competition</image:title>
      <image:caption>Himanshu Raj presenting a startup idea before IIT Roorkee professors and winning the Srijan Project Presentation Competition.</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://himanshuraj.me/gaurdeo-startup-presentation.webp</image:loc>
      <image:title>Himanshu Raj presenting Gaurdeo Startup</image:title>
      <image:caption>Himanshu Raj presenting Gaurdeo, a startup concept, before the Chairman of Uttarakhand Technical University.</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://himanshuraj.me/investor-interaction-sachin-karnatak.webp</image:loc>
      <image:title>Himanshu Raj with POCONUT Founder Sachint Karnatak</image:title>
      <image:caption>Himanshu Raj participating in an investor-focused discussion with Sachint Karnatak, founder of POCONUT, covering fundraising, startup growth, and team building.</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://himanshuraj.me/founders-day-winner.webp</image:loc>
      <image:title>Himanshu Raj - Founders Day Winner</image:title>
      <image:caption>Himanshu Raj receiving recognition for an award-winning project focused on AI implementation and business innovation.</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://himanshuraj.me/startup-incubation-jbit.webp</image:loc>
      <image:title>Himanshu Raj - Startup Incubation Selection at JBIT</image:title>
      <image:caption>Himanshu Raj's startup selected for incubation support and mentorship at JB Institute of Technology, recognized by institutional leadership.</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
