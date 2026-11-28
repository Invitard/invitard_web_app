// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, BASE_PATH } from './src/data/site-url.mjs';

const base = BASE_PATH.replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	base: BASE_PATH,
	trailingSlash: 'always',
	build: {
		format: 'directory',
		inlineStylesheets: 'auto',
	},
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			serialize(item) {
				const path = new URL(item.url).pathname.slice(base.length) || '/';
				if (path === '/') item.priority = 1.0;
				else if (path === '/en/') item.priority = 0.95;
				else if (path === '/invitaciones/' || path === '/en/invitations/') item.priority = 0.9;
				else if (path.startsWith('/invitaciones/') || path.startsWith('/en/invitations/')) item.priority = 0.85;
				return item;
			},
		}),
	],
});
