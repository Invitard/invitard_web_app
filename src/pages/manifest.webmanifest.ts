import type { APIRoute } from 'astro';
import { site, url } from '../data/site';

export const GET: APIRoute = () =>
	new Response(
		JSON.stringify({
			name: site.legalName,
			short_name: site.name,
			description: site.description,
			lang: site.lang,
			start_url: url('/'),
			scope: url('/'),
			display: 'standalone',
			background_color: '#ffffff',
			theme_color: '#bee3ef',
			icons: [
				{ src: url('/icon-192.png'), sizes: '192x192', type: 'image/png' },
				{ src: url('/icon-512.png'), sizes: '512x512', type: 'image/png' },
			],
		}),
		{ headers: { 'Content-Type': 'application/manifest+json' } },
	);
