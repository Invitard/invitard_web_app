/**
 * Idiomas del sitio. El español vive en la raíz (/) y el inglés en /en/.
 * Cada página declara su versión en el otro idioma con <link rel="alternate" hreflang>.
 */
export type Lang = 'es' | 'en';

export const langs: Lang[] = ['es', 'en'];

export const langMeta = {
	es: { htmlLang: 'es-PE', ogLocale: 'es_PE', name: 'Español', short: 'ES' },
	en: { htmlLang: 'en', ogLocale: 'en_US', name: 'English', short: 'EN' },
} as const;

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Idioma de la página a partir de su URL. */
export function getLang(url: URL): Lang {
	const path = url.pathname.slice(BASE.length);
	return path === '/en' || path.startsWith('/en/') ? 'en' : 'es';
}

/** Rutas base de cada idioma (sin el base path del despliegue). */
export const routes = {
	home: { es: '/', en: '/en/' },
	categories: { es: '/invitaciones/', en: '/en/invitations/' },
} as const;

/** Moneda que se muestra por defecto (sin JavaScript) en cada idioma. */
export const defaultCurrency: Record<Lang, 'pen' | 'usd'> = { es: 'pen', en: 'usd' };
