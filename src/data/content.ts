import type { ImageMetadata } from 'astro';
import type { Faq } from './categories';
import type { Lang } from '../i18n';

import bodaAnillos from '../assets/stock/boda-anillos.jpg';
import mesaFloral from '../assets/stock/catalogo-mesa-floral.jpg';
import pastel from '../assets/stock/catalogo-pastel.jpg';
import esferasDisco from '../assets/stock/catalogo-esferas-disco.jpg';

/* ───────────── Planes ─────────────
 * `price` en soles (clientes en Perú) y `priceUsd` en dólares (clientes fuera del Perú),
 * ambos fijados a mano. Los complementos sí calculan sus dólares con PEN_PER_USD.
 */

/** Soles por dólar. Tipo de cambio de cierre del 27/11/2026 (S/ 3.455). */
export const PEN_PER_USD = 3.455;

/** Convierte soles a dólares, redondeado al centavo. */
export const toUsd = (pen: number): number => Math.round((pen / PEN_PER_USD) * 100) / 100;

/** Muestra un monto en dólares: sin decimales si es exacto (30), con dos si no (8.39). */
export const formatUsd = (usd: number): string => (Number.isInteger(usd) ? String(usd) : usd.toFixed(2));
export interface Plan {
	id: string;
	name: string;
	tagline: string;
	price: number;
	priceUsd: number;
	featured?: boolean;
	includes: string[];
	notIncluded?: string[];
	revisions: number;
	delivery: string;
}

export const plans: Plan[] = [
	{
		id: 'esencial',
		name: 'Esencial',
		tagline: 'Lo necesario, bien hecho',
		price: 100,
		priceUsd: 30,
		includes: [
			'Invitación web de una página adaptada a celular',
			'Diseño según tu temática y colores',
			'Botón de ubicación a Google Maps',
			'Confirmación de asistencia por WhatsApp',
			'Calendario con la fecha marcada',
			'Hasta 3 fotos',
		],
		notIncluded: ['Música de fondo', 'Cuenta regresiva'],
		revisions: 2,
		delivery: '2 días hábiles',
	},
	{
		id: 'celebra',
		name: 'Celebra',
		tagline: 'El favorito de nuestros clientes',
		price: 200,
		priceUsd: 60,
		featured: true,
		includes: [
			'Todo lo del plan Esencial',
			'Música de fondo con botón de pausa',
			'Cuenta regresiva animada',
			'Galería de hasta 12 fotos',
			'Animaciones de entrada y portada temática',
			'Itinerario o programa del evento',
			'Sección de regalos (Yape, Plin, cuentas)',
		],
		revisions: 3,
		delivery: '3 a 4 días hábiles',
	},
	{
		id: 'inolvidable',
		name: 'Inolvidable',
		tagline: 'Una experiencia completa',
		price: 300,
		priceUsd: 90,
		includes: [
			'Todo lo del plan Celebra',
			'Sobre o portada animada de apertura',
			'Pases personalizados con nombre del invitado',
			'Galería ilimitada y video',
			'Código de vestimenta ilustrado',
			'Libro de deseos para los invitados',
			'Enlace corto personalizado y vigencia de 12 meses',
		],
		revisions: 5,
		delivery: '5 a 7 días hábiles',
	},
];

export interface Extra {
	name: string;
	price: number;
	priceUsd: number;
	text: string;
}

export const extras: Extra[] = [
	{ name: 'Flyer para estados e historias', price: 29, priceUsd: toUsd(29), text: 'Formato vertical para WhatsApp, Instagram y TikTok.' },
	{ name: 'Video invitación', price: 149, priceUsd: toUsd(149), text: 'Video animado de 30 a 45 segundos con música.' },
	{ name: 'Entrega urgente', price: 49, priceUsd: toUsd(49), text: 'Tu invitación lista en 24 horas.' },
];

/* ───────────── Funcionalidades ───────────── */
export const features = [
	{ icon: 'rsvp', title: 'Confirmación en un toque', text: 'Tus invitados confirman por WhatsApp con un mensaje ya escrito. Sin apps, sin registros.' },
	{ icon: 'clock', title: 'Cuenta regresiva', text: 'Días, horas y minutos que faltan para el gran momento, en vivo.' },
	{ icon: 'map', title: 'Mapa y cómo llegar', text: 'Un botón por cada lugar que abre Google Maps o Waze directamente.' },
	{ icon: 'music', title: 'Tu canción de fondo', text: 'La música que elijas, con control de pausa para el invitado.' },
	{ icon: 'gallery', title: 'Galería de fotos', text: 'Imágenes optimizadas que cargan rápido incluso con datos móviles.' },
	{ icon: 'gift', title: 'Regalos sin incomodar', text: 'Yape, Plin, cuentas bancarias o lista de tiendas con botón de copiar.' },
	{ icon: 'calendar', title: 'Guardar en calendario', text: 'La fecha queda en Google Calendar o en el calendario del celular.' },
	{ icon: 'edit', title: 'Cambios sin reimprimir', text: '¿Se movió la hora? Actualizamos y el mismo enlace muestra el cambio.' },
] as const;

/* ───────────── Proceso ───────────── */
export const steps = [
	{ title: 'Cuéntanos tu evento', text: 'Escríbenos por WhatsApp con la fecha, el tipo de celebración y la idea que tienes en mente.' },
	{ title: 'Elige plan y estilo', text: 'Te recomendamos el plan ideal para tu evento. Con el pago del 100 % reservamos tu fecha y empezamos.' },
	{ title: 'Diseñamos y ajustamos', text: 'Recibes una vista previa en tu celular y pides los cambios que necesites.' },
	{ title: 'Comparte el enlace', text: 'Envíalo por WhatsApp, redes o correo y mira llegar las confirmaciones.' },
];

/* ───────────── Catálogo de diseños ─────────────
 * Basado en trabajos reales de Invitard (github.com/Invitard), presentado sin datos
 * personales de los clientes y con fotografías de stock.
 */
export interface CatalogItem {
	name: string;
	categorySlug: string;
	image: ImageMetadata;
	imageAlt: string;
	text: string;
	features: string[];
}

export const catalog: CatalogItem[] = [
	{
		name: 'Sobre Real',
		categorySlug: 'bodas',
		image: bodaAnillos,
		imageAlt: 'Manos de novios con anillos de boda sobre un ramo de flores',
		text: 'La invitación aparece dentro de un sobre que se abre con un toque. Pase personalizado, padrinos, bendición y mesa de regalos.',
		features: ['Sobre animado', 'Pase de invitado', 'Dos ubicaciones', 'Música'],
	},
	{
		name: 'Jardín de Quince',
		categorySlug: 'quinceanos',
		image: mesaFloral,
		imageAlt: 'Mesa de banquete decorada con arreglos florales y copas',
		text: 'Decoración floral animada, línea de tiempo de la noche, código de vestimenta y sección de regalos con Yape.',
		features: ['Itinerario', 'Dress code', 'Paleta propia', 'Reproductor'],
	},
	{
		name: 'Bosque Encantado',
		categorySlug: 'cumpleanos',
		image: pastel,
		imageAlt: 'Pastel de cumpleaños de capas cubierto de chispas de colores',
		text: 'Un cuento ilustrado para los más pequeños: animalitos del bosque, pasto animado, calendario y confirmación por WhatsApp.',
		features: ['Ilustraciones', 'Calendario', 'Cuenta regresiva', 'Música'],
	},
	{
		name: 'Doble Fiesta Disco',
		categorySlug: 'cumpleanos',
		image: esferasDisco,
		imageAlt: 'Esferas de discoteca brillantes sobre un fondo oscuro',
		text: 'Para dos cumpleañeros que celebran juntos: globos con sus edades, bola disco animada y galería de recuerdos.',
		features: ['Dos homenajeados', 'Globos de números', 'Galería', 'Cuenta regresiva'],
	},
];

/* ───────────── Preguntas frecuentes generales ───────────── */
export const generalFaqs: Faq[] = [
	{
		q: '¿Qué es una invitación digital web?',
		a: 'Es una página web exclusiva para tu evento que se abre desde un enlace. A diferencia de una imagen o un PDF, puede tener música, cuenta regresiva, mapas, galería y confirmación de asistencia, y se actualiza sin reenviarla.',
	},
	{
		q: '¿Cuánto tiempo demora el diseño?',
		a: 'Entre 2 y 7 días hábiles según el plan, contados desde que recibimos toda la información. Si tienes prisa, ofrecemos entrega urgente en 24 horas.',
	},
	{
		q: '¿Mis invitados necesitan instalar alguna aplicación?',
		a: 'No. La invitación se abre en el navegador de cualquier celular, tablet o computadora, en Android o iPhone.',
	},
	{
		q: '¿Cómo se comparte la invitación?',
		a: 'Con un enlace que puedes enviar por WhatsApp, Instagram, Facebook, TikTok, correo o código QR impreso.',
	},
	{
		q: '¿Puedo pedir cambios después de recibirla?',
		a: 'Sí. Cada plan incluye rondas de cambios gratuitas, y si la hora o el lugar cambian después de enviarla, el mismo enlace muestra la información actualizada.',
	},
	{
		q: '¿Trabajan con clientes de otros países?',
		a: 'Sí. Trabajamos con clientes de todo el mundo, sin importar el país ni el idioma: diseñamos tu invitación en español, inglés o el idioma que necesites, con los horarios y mapas de tu ciudad. Todo el proceso se coordina por WhatsApp.',
	},
	{
		q: '¿Cómo se paga?',
		a: 'Se paga el 100 % del plan antes de empezar el diseño. En Perú aceptamos Yape, Plin y transferencias bancarias; si estás en otro país, te indicamos por WhatsApp las opciones de pago internacional.',
	},
];

/* ───────────── English ───────────── */
const plansEnText: Record<string, Pick<Plan, 'tagline' | 'includes' | 'notIncluded' | 'delivery'>> = {
	esencial: {
		tagline: 'The essentials, done right',
		includes: [
			'One-page web invitation designed for phones',
			'Design based on your theme and colors',
			'Google Maps location button',
			'RSVP via WhatsApp',
			'Calendar with the date marked',
			'Up to 3 photos',
		],
		notIncluded: ['Background music', 'Countdown'],
		delivery: '2 business days',
	},
	celebra: {
		tagline: 'Our clients’ favorite',
		includes: [
			'Everything in the Esencial plan',
			'Background music with pause button',
			'Animated countdown',
			'Gallery of up to 12 photos',
			'Entrance animations and themed cover',
			'Event itinerary or program',
			'Gift section (bank accounts, payment apps)',
		],
		delivery: '3 to 4 business days',
	},
	inolvidable: {
		tagline: 'A complete experience',
		includes: [
			'Everything in the Celebra plan',
			'Animated opening envelope or cover',
			'Personalized passes with each guest’s name',
			'Unlimited gallery and video',
			'Illustrated dress code',
			'Guest wishes book',
			'Custom short link, online for 12 months',
		],
		delivery: '5 to 7 business days',
	},
};

const extrasEnText = [
	{ name: 'Flyer for stories and status', text: 'Vertical format for WhatsApp, Instagram and TikTok.' },
	{ name: 'Video invitation', text: 'Animated 30–45 second video with music.' },
	{ name: 'Rush delivery', text: 'Your invitation ready in 24 hours.' },
];

const featuresEn = [
	{ icon: 'rsvp', title: 'One-tap RSVP', text: 'Guests confirm via WhatsApp with a pre-written message. No apps, no sign-ups.' },
	{ icon: 'clock', title: 'Countdown', text: 'Days, hours and minutes left until the big moment, live.' },
	{ icon: 'map', title: 'Map and directions', text: 'A button for each venue that opens Google Maps or Waze directly.' },
	{ icon: 'music', title: 'Your background song', text: 'The music you choose, with a pause control for guests.' },
	{ icon: 'gallery', title: 'Photo gallery', text: 'Optimized images that load fast even on mobile data.' },
	{ icon: 'gift', title: 'Gifts, gracefully', text: 'Bank accounts, payment apps or store registries with a copy button.' },
	{ icon: 'calendar', title: 'Save to calendar', text: 'The date goes straight into Google Calendar or the phone’s calendar.' },
	{ icon: 'edit', title: 'Changes without reprinting', text: 'Time changed? We update it and the same link shows the change.' },
] as const;

const stepsEn = [
	{ title: 'Tell us about your event', text: 'Message us on WhatsApp with the date, type of celebration and the idea you have in mind.' },
	{ title: 'Choose plan and style', text: 'We recommend the best plan for your event. Once 100% is paid, we book your date and start.' },
	{ title: 'We design and refine', text: 'You get a preview on your phone and ask for any changes you need.' },
	{ title: 'Share the link', text: 'Send it via WhatsApp, social media or email and watch the RSVPs roll in.' },
];

const generalFaqsEn: Faq[] = [
	{
		q: 'What is a digital web invitation?',
		a: 'It’s a web page made just for your event that opens from a link. Unlike an image or a PDF, it can have music, a countdown, maps, a gallery and RSVP, and it can be updated without resending it.',
	},
	{
		q: 'How long does the design take?',
		a: 'Between 2 and 7 business days depending on the plan, counted from when we receive all the information. If you’re in a hurry, we offer 24-hour rush delivery.',
	},
	{
		q: 'Do my guests need to install an app?',
		a: 'No. The invitation opens in the browser of any phone, tablet or computer, on Android or iPhone.',
	},
	{
		q: 'How is the invitation shared?',
		a: 'With a link you can send via WhatsApp, Instagram, Facebook, TikTok, email or a printed QR code.',
	},
	{
		q: 'Can I request changes after receiving it?',
		a: 'Yes. Every plan includes free rounds of changes, and if the time or place changes after sending it, the same link shows the updated information.',
	},
	{
		q: 'Do you work with clients outside Peru?',
		a: 'Yes. We work with clients all over the world, no matter the country or language: we design your invitation in English, Spanish or any language you need, with your local times and maps. The whole process is handled via WhatsApp.',
	},
	{
		q: 'How do I pay?',
		a: 'The plan is paid 100% before we start designing. Outside Peru, prices are in US dollars and we’ll share the international payment options with you on WhatsApp.',
	},
];

export function getPlans(lang: Lang = 'es'): Plan[] {
	return lang === 'es' ? plans : plans.map((p) => ({ ...p, ...plansEnText[p.id] }));
}

export function getExtras(lang: Lang = 'es'): Extra[] {
	return lang === 'es' ? extras : extras.map((e, i) => ({ ...e, ...extrasEnText[i] }));
}

export function getFeatures(lang: Lang = 'es') {
	return lang === 'es' ? features : featuresEn;
}

export function getSteps(lang: Lang = 'es') {
	return lang === 'es' ? steps : stepsEn;
}

export function getGeneralFaqs(lang: Lang = 'es'): Faq[] {
	return lang === 'es' ? generalFaqs : generalFaqsEn;
}
