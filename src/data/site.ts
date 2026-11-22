import { SITE_URL } from './site-url.mjs';

/**
 * Datos del negocio. Todo lo marcado con TODO debe confirmarse antes de publicar,
 * porque alimenta los datos estructurados (Google) y los botones de contacto.
 */
export const site = {
	name: 'Invitard',
	legalName: 'Invitard – Invitaciones Digitales',
	tagline: 'Invitaciones digitales que se sienten como la fiesta',
	url: SITE_URL,
	locale: 'es_PE',
	lang: 'es-PE',
	description:
		'Invitaciones digitales web para bodas, quinceaños, cumpleaños, bautizos, baby shower, primera comunión, mascotas, fiestas patronales, yunsas y eventos empresariales. Con confirmación por WhatsApp, cuenta regresiva, mapa, música y galería. Entrega en Perú y todo el mundo.',
	whatsapp: '51940077408',
	whatsappDisplay: '+51 940 077 408',
	// TODO: correo real.
	email: 'hola@invitard.com',
	city: 'Cusco',
	region: 'Cusco',
	country: 'PE',
	areaServed: ['Perú', 'Latinoamérica', 'España', 'Estados Unidos'],
	// TODO: URLs reales de redes sociales (se usan en sameAs del schema).
	social: {
		instagram: 'https://www.instagram.com/invitard',
		facebook: 'https://www.facebook.com/invitard',
		tiktok: 'https://www.tiktok.com/@invitard',
		github: 'https://github.com/Invitard',
	},
	priceRange: 'S/ 29 – S/ 299',
	currency: 'PEN',
} as const;

export function whatsappLink(message: string): string {
	return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta interna con el base path del despliegue (GitHub Pages usa /invitard_web_app). */
export function url(path = '/'): string {
	if (/^(https?:|mailto:|tel:)/.test(path)) return path;
	const clean = path.startsWith('/') ? path : `/${path}`;
	return `${BASE}${clean}`;
}

/** URL absoluta (canonical, Open Graph, schema). */
export function absoluteUrl(path = '/'): string {
	return new URL(url(path), site.url).href;
}
