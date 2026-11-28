import type { APIRoute } from 'astro';
import { getGroups, categoriesByGroup, categoryPath } from '../data/categories';
import { getPlans, formatUsd } from '../data/content';
import { site, absoluteUrl } from '../data/site';
import { routes } from '../i18n';

/** Resumen legible para motores de respuesta con IA (llmstxt.org), en español e inglés. */
export const GET: APIRoute = () => {
	const lines = [
		`# ${site.name}`,
		'',
		`> ${site.description}`,
		'',
		`Estudio de diseño 100 % online: trabajamos con clientes de todo el mundo y en cualquier idioma; atención por WhatsApp (${site.whatsappDisplay}).`,
		'Pago: 100 % antes de empezar el diseño. Precios en soles (S/) para Perú y en dólares (US$) para el resto del mundo.',
		'',
		'## Planes',
		...getPlans('es').map((p) => `- ${p.name}: S/ ${p.price} · US$ ${formatUsd(p.priceUsd)}. ${p.includes.join('; ')}.`),
		'',
		...getGroups('es').flatMap((g) => [
			`## ${g.name}`,
			...categoriesByGroup(g.id, 'es').map((c) => `- [${c.h1}](${absoluteUrl(categoryPath(c, 'es'))}): ${c.metaDescription}`),
			'',
		]),
		'---',
		'',
		`# ${site.name} (English)`,
		'',
		`> ${site.descriptionEn}`,
		'',
		`English site: ${absoluteUrl(routes.home.en)}. Fully online design studio; clients worldwide, any language. Full payment (100%) before design starts. Prices in US dollars outside Peru.`,
		'',
		'## Plans',
		...getPlans('en').map((p) => `- ${p.name}: US$ ${formatUsd(p.priceUsd)}. ${p.includes.join('; ')}.`),
		'',
		...getGroups('en').flatMap((g) => [
			`## ${g.name}`,
			...categoriesByGroup(g.id, 'en').map((c) => `- [${c.h1}](${absoluteUrl(categoryPath(c, 'en'))}): ${c.metaDescription}`),
			'',
		]),
	];
	return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
