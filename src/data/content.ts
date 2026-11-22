import type { ImageMetadata } from 'astro';
import type { Faq } from './categories';

import bodaAnillos from '../assets/stock/boda-anillos.jpg';
import mesaFloral from '../assets/stock/catalogo-mesa-floral.jpg';
import pastel from '../assets/stock/catalogo-pastel.jpg';
import esferasDisco from '../assets/stock/catalogo-esferas-disco.jpg';

/* ───────────── Planes ─────────────
 * TODO: confirmar precios y alcances antes de publicar.
 */
export interface Plan {
	id: string;
	name: string;
	tagline: string;
	price: number;
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
		price: 99,
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
		price: 169,
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
		price: 299,
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

export const extras = [
	{ name: 'Flyer para estados e historias', price: 29, text: 'Formato vertical para WhatsApp, Instagram y TikTok.' },
	{ name: 'Video invitación', price: 149, text: 'Video animado de 30 a 45 segundos con música.' },
	{ name: 'Entrega urgente', price: 49, text: 'Tu invitación lista en 24 horas.' },
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
	{ title: 'Elige plan y estilo', text: 'Te mostramos modelos y te recomendamos el plan que mejor se ajusta a tu evento.' },
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
		q: '¿Trabajan solo en Cusco?',
		a: 'No. Al ser digitales, atendemos a clientes de todo el Perú y del extranjero. Todo el proceso se coordina por WhatsApp.',
	},
	{
		q: '¿Cómo se paga?',
		a: 'Aceptamos Yape, Plin y transferencias bancarias. Pagas el 50 % para iniciar y el resto al aprobar el diseño.',
	},
];
