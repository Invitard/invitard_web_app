import type { APIRoute } from 'astro';
import { groups, categoriesByGroup, categoryPath } from '../data/categories';
import { plans } from '../data/content';
import { site, absoluteUrl } from '../data/site';

/** Resumen legible para motores de respuesta con IA (llmstxt.org). */
export const GET: APIRoute = () => {
	const lines = [
		`# ${site.name}`,
		'',
		`> ${site.description}`,
		'',
		`Sede: ${site.city}, Perú. Atención por WhatsApp (${site.whatsappDisplay}) para clientes de ${site.areaServed.join(', ')}.`,
		'',
		'## Planes',
		...plans.map((p) => `- ${p.name}: S/ ${p.price}. ${p.includes.join('; ')}.`),
		'',
		...groups.flatMap((g) => [
			`## ${g.name}`,
			...categoriesByGroup(g.id).map((c) => `- [${c.h1}](${absoluteUrl(categoryPath(c))}): ${c.metaDescription}`),
			'',
		]),
	];
	return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
