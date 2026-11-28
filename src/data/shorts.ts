import type { ImageMetadata } from 'astro';
import { categories } from './categories';
import type { Lang } from '../i18n';

import bodaPareja from '../assets/stock/boda-pareja.jpg';
import bodaAnillos from '../assets/stock/boda-anillos.jpg';
import mesaFloral from '../assets/stock/catalogo-mesa-floral.jpg';
import quinceSalon from '../assets/stock/quinceanos-salon.jpg';
import pastel from '../assets/stock/catalogo-pastel.jpg';
import esferasDisco from '../assets/stock/catalogo-esferas-disco.jpg';
import cumpleGlobos from '../assets/stock/cumpleanos-globos.jpg';
import babyPiecitos from '../assets/stock/babyshower-piecitos.jpg';
import mascotaPerrito from '../assets/stock/mascotas-perrito.jpg';
import mascotaGatito from '../assets/stock/mascotas-gatito.jpg';
import bautizoBebe from '../assets/stock/bautizo-bebe.jpg';
import comunionIglesia from '../assets/stock/primera-comunion-iglesia.jpg';
import confirmacionCatedral from '../assets/stock/confirmacion-catedral.jpg';
import capilla from '../assets/stock/festividad-religiosa-capilla.jpg';
import patronalesBaile from '../assets/stock/fiestas-patronales-baile.jpg';
import yunsaGlobos from '../assets/stock/yunsa-globos.jpg';
import auditorio from '../assets/stock/ceremonia-oficial-auditorio.jpg';
import conferencia from '../assets/stock/evento-empresarial-conferencia.jpg';
import brindis from '../assets/stock/celebracion-brindis.jpg';

/**
 * Shorts (videos verticales 9:16) de invitaciones reales. Son el catálogo de modelos.
 *
 * Para publicar un video: graba la invitación en el celular (vertical, 9:16,
 * idealmente 720×1280, MP4 H.264, menos de 4 MB), guárdalo en `public/shorts/`
 * y escribe su nombre en `video`. Mientras no haya video se muestra una vista
 * animada de la invitación a partir de `poster`.
 */
export interface Short {
	id: string;
	categorySlug: string;
	/** Nombre del modelo. */
	title: string;
	caption: string;
	/** Archivo dentro de public/shorts/ (opcional). */
	video?: string;
	poster: ImageMetadata;
	posterAlt: string;
	/** Textos que se ven sobre la invitación animada. */
	script: string;
	names: string;
	date: string;
	tags: string[];
}

export const shorts: Short[] = [
	{
		id: 'boda-sobre-real',
		categorySlug: 'bodas',
		title: 'Sobre Real',
		caption: 'El sobre se abre, suena su canción y aparece la cuenta regresiva. Así la reciben sus invitados por WhatsApp.',
		poster: bodaPareja,
		posterAlt: 'Pareja de novios caminando de la mano en un jardín',
		script: 'Nos casamos',
		names: 'Ana & Luis',
		date: 'Sábado 12 · Diciembre',
		tags: ['Sobre animado', 'Música', 'RSVP'],
	},
	{
		id: 'boda-eterno',
		categorySlug: 'bodas',
		title: 'Eterno',
		caption: 'Minimal y elegante: anillos, padrinos, dos ubicaciones y mesa de regalos con Yape y Plin.',
		poster: bodaAnillos,
		posterAlt: 'Manos de novios con anillos de boda sobre un ramo',
		script: 'Para siempre',
		names: 'Sofía & Diego',
		date: 'Viernes 20 · Marzo',
		tags: ['Padrinos', 'Mapa', 'Regalos'],
	},
	{
		id: 'quince-jardin',
		categorySlug: 'quinceanos',
		title: 'Jardín de Quince',
		caption: 'Flores que se animan al deslizar, itinerario de la noche y código de vestimenta.',
		poster: mesaFloral,
		posterAlt: 'Mesa de banquete con arreglos florales y copas',
		script: 'Mis XV años',
		names: 'Valentina',
		date: 'Sábado 7 · Febrero',
		tags: ['Itinerario', 'Dress code'],
	},
	{
		id: 'quince-gala',
		categorySlug: 'quinceanos',
		title: 'Noche de Gala',
		caption: 'Fondo oscuro, destellos dorados y vals de entrada con su canción favorita.',
		poster: quinceSalon,
		posterAlt: 'Salón de fiesta con candelabros y mesas redondas',
		script: 'Te espero en',
		names: 'Camila XV',
		date: 'Sábado 18 · Abril',
		tags: ['Glam', 'Galería'],
	},
	{
		id: 'cumple-disco',
		categorySlug: 'cumpleanos',
		title: 'Doble Fiesta Disco',
		caption: 'Dos cumpleañeros, una bola disco animada y globos con sus edades.',
		poster: esferasDisco,
		posterAlt: 'Esferas de discoteca brillantes sobre fondo oscuro',
		script: '¡A bailar!',
		names: 'Mateo & Lucía',
		date: 'Sábado 3 · Mayo',
		tags: ['Disco', 'Cuenta regresiva'],
	},
	{
		id: 'cumple-bosque',
		categorySlug: 'cumpleanos',
		title: 'Bosque Encantado',
		caption: 'Un cuento ilustrado para los peques, con calendario y confirmación en un toque.',
		poster: pastel,
		posterAlt: 'Pastel de cumpleaños con chispas de colores',
		script: 'Mi primer añito',
		names: 'Thiago',
		date: 'Domingo 14 · Junio',
		tags: ['Infantil', 'Música'],
	},
	{
		id: 'cumple-globos',
		categorySlug: 'cumpleanos',
		title: 'Globos de Colores',
		caption: 'Colores vivos, confeti animado y ubicación con un botón directo a Google Maps.',
		poster: cumpleGlobos,
		posterAlt: 'Globos de colores flotando en una fiesta',
		script: 'Cumplo 30',
		names: 'Andrea',
		date: 'Viernes 9 · Octubre',
		tags: ['Confeti', 'Mapa'],
	},
	{
		id: 'baby-nubes',
		categorySlug: 'baby-shower',
		title: 'Nubes y Estrellas',
		caption: 'Celestes suaves, lista de regalos y juego de adivinar el nombre del bebé.',
		poster: babyPiecitos,
		posterAlt: 'Piecitos de un bebé envueltos en una manta blanca',
		script: 'Baby shower',
		names: 'Bebé Rojas',
		date: 'Domingo 22 · Marzo',
		tags: ['Lista de regalos', 'Juegos'],
	},
	{
		id: 'mascota-huellitas',
		categorySlug: 'mascotas',
		title: 'Huellitas Pop',
		caption: 'Huesitos animados, galería de fotos y menú especial para los invitados de cuatro patas.',
		poster: mascotaPerrito,
		posterAlt: 'Perrito beagle sonriente mirando a la cámara',
		script: '¡Guau, cumplo 3!',
		names: 'Rocky',
		date: 'Sábado 16 · Mayo',
		tags: ['Galería', 'Divertido'],
	},
	{
		id: 'mascota-gatuno',
		categorySlug: 'mascotas',
		title: 'Gatuno Chic',
		caption: 'Elegante y tierno, con bigotes animados y confirmación por WhatsApp.',
		poster: mascotaGatito,
		posterAlt: 'Gato blanco y negro de ojos verdes asomado sobre un borde de bambú',
		script: 'Miau-cumpleaños',
		names: 'Luna',
		date: 'Domingo 7 · Junio',
		tags: ['Tierno', 'RSVP'],
	},
	{
		id: 'bautizo-blanco-oro',
		categorySlug: 'bautizo',
		title: 'Blanco y Oro',
		caption: 'Palomitas animadas, datos de la parroquia, padrinos y recepción.',
		poster: bautizoBebe,
		posterAlt: 'Bebé durmiendo sobre una manta blanca',
		script: 'Mi bautizo',
		names: 'Emilia',
		date: 'Domingo 19 · Abril',
		tags: ['Padrinos', 'Parroquia'],
	},
	{
		id: 'comunion-luz',
		categorySlug: 'primera-comunion',
		title: 'Cáliz y Espigas',
		caption: 'Símbolos clásicos en dorado, hora de la misa y ubicación de la celebración.',
		poster: comunionIglesia,
		posterAlt: 'Interior de una iglesia con bancas de madera',
		script: 'Mi primera comunión',
		names: 'Sebastián',
		date: 'Sábado 30 · Mayo',
		tags: ['Misa', 'Recepción'],
	},
	{
		id: 'confirmacion-paloma',
		categorySlug: 'confirmacion',
		title: 'Luz y Paloma',
		caption: 'Blancos y celestes con destellos de luz, padrinos y mensaje del confirmando.',
		poster: confirmacionCatedral,
		posterAlt: 'Arcos blancos en el interior de una catedral',
		script: 'Mi confirmación',
		names: 'Isabella',
		date: 'Domingo 8 · Noviembre',
		tags: ['Padrinos', 'Mensaje'],
	},
	{
		id: 'festividad-capilla',
		categorySlug: 'festividades-religiosas',
		title: 'Capilla Andina',
		caption: 'Novena, procesión y misa central con el programa día por día.',
		poster: capilla,
		posterAlt: 'Capilla celeste de madera rodeada de montañas',
		script: 'Festividad de la',
		names: 'Virgen del Carmen',
		date: '15 al 18 · Julio',
		tags: ['Programa', 'Procesión'],
	},
	{
		id: 'patronal-danzas',
		categorySlug: 'fiestas-patronales',
		title: 'Danzas y Bandas',
		caption: 'Mayordomos, padrinos, bandas y la ubicación de cada jornada en un solo enlace.',
		poster: patronalesBaile,
		posterAlt: 'Pista llena de personas bailando en una fiesta',
		script: 'Gran fiesta patronal',
		names: 'San Juan 2026',
		date: '22 al 25 · Junio',
		tags: ['Mayordomos', 'Programa'],
	},
	{
		id: 'yunsa-colores',
		categorySlug: 'yunsas',
		title: 'Yunsa de Colores',
		caption: 'Árbol, padrinos del cortamonte y lista de colaboradores con mucho color.',
		poster: yunsaGlobos,
		posterAlt: 'Globos de colores vivos amarrados con cintas',
		script: 'Gran yunsa',
		names: 'Familia Quispe',
		date: 'Domingo 1 · Marzo',
		tags: ['Padrinos', 'Cortamonte'],
	},
	{
		id: 'oficial-protocolo',
		categorySlug: 'ceremonias-oficiales',
		title: 'Protocolo',
		caption: 'Sobria e impecable: programa oficial, lista de autoridades y registro de asistentes.',
		poster: auditorio,
		posterAlt: 'Auditorio con público frente a un escenario',
		script: 'Ceremonia de',
		names: 'Graduación 2026',
		date: 'Viernes 11 · Diciembre',
		tags: ['Programa', 'Registro'],
	},
	{
		id: 'empresa-summit',
		categorySlug: 'eventos-empresariales',
		title: 'Summit',
		caption: 'Agenda de ponentes, registro con formulario y tu marca en cada detalle.',
		poster: conferencia,
		posterAlt: 'Asistentes sentados en una conferencia empresarial',
		script: 'Te invitamos al',
		names: 'Summit 2026',
		date: 'Jueves 15 · Octubre',
		tags: ['Agenda', 'Marca propia'],
	},
	{
		id: 'empresa-brindis',
		categorySlug: 'eventos-empresariales',
		title: 'Brindis de Fin de Año',
		caption: 'La cena de la empresa con dress code, menú y confirmación de cada colaborador.',
		poster: brindis,
		posterAlt: 'Invitados brindando con copas en un salón decorado con luces',
		script: '¡Salud!',
		names: 'Cena Anual',
		date: 'Viernes 18 · Diciembre',
		tags: ['Dress code', 'RSVP'],
	},
];

type ShortText = Pick<Short, 'caption' | 'posterAlt' | 'script' | 'date' | 'tags'> & { names?: string };

const shortsEn: Record<string, ShortText> = {
	'boda-sobre-real': {
		caption: 'The envelope opens, your song plays and the countdown appears. This is how guests receive it on WhatsApp.',
		posterAlt: 'Bride and groom walking hand in hand in a garden',
		script: 'We’re getting married',
		date: 'Saturday · December 12',
		tags: ['Animated envelope', 'Music', 'RSVP'],
	},
	'boda-eterno': {
		caption: 'Minimal and elegant: rings, sponsors, two locations and a gift registry.',
		posterAlt: 'Bride and groom’s hands with wedding rings over a bouquet',
		script: 'Forever',
		date: 'Friday · March 20',
		tags: ['Sponsors', 'Map', 'Gifts'],
	},
	'quince-jardin': {
		caption: 'Flowers that animate as you scroll, the night’s itinerary and dress code.',
		posterAlt: 'Banquet table with floral arrangements and glasses',
		script: 'My quinceañera',
		date: 'Saturday · February 7',
		tags: ['Itinerary', 'Dress code'],
	},
	'quince-gala': {
		caption: 'Dark background, golden sparkle and a grand entrance waltz with her favorite song.',
		posterAlt: 'Party hall with chandeliers and round tables',
		script: 'Join me at',
		date: 'Saturday · April 18',
		tags: ['Glam', 'Gallery'],
	},
	'cumple-disco': {
		caption: 'Two birthday stars, an animated disco ball and balloons with their ages.',
		posterAlt: 'Shiny disco balls on a dark background',
		script: 'Let’s dance!',
		date: 'Saturday · May 3',
		tags: ['Disco', 'Countdown'],
	},
	'cumple-bosque': {
		caption: 'An illustrated storybook for little ones, with a calendar and one-tap RSVP.',
		posterAlt: 'Birthday cake covered in colorful sprinkles',
		script: 'My first birthday',
		date: 'Sunday · June 14',
		tags: ['Kids', 'Music'],
	},
	'cumple-globos': {
		caption: 'Bright colors, animated confetti and a location button straight to Google Maps.',
		posterAlt: 'Colorful balloons floating at a party',
		script: 'Turning 30',
		date: 'Friday · October 9',
		tags: ['Confetti', 'Map'],
	},
	'baby-nubes': {
		caption: 'Soft blues, a gift registry and a game to guess the baby’s name.',
		posterAlt: 'Baby feet wrapped in a white blanket',
		script: 'Baby shower',
		names: 'Baby Rojas',
		date: 'Sunday · March 22',
		tags: ['Gift registry', 'Games'],
	},
	'mascota-huellitas': {
		caption: 'Animated bones, a photo gallery and a special menu for four-legged guests.',
		posterAlt: 'Smiling beagle puppy looking at the camera',
		script: 'Woof, I’m turning 3!',
		date: 'Saturday · May 16',
		tags: ['Gallery', 'Fun'],
	},
	'mascota-gatuno': {
		caption: 'Elegant and sweet, with animated whiskers and RSVP via WhatsApp.',
		posterAlt: 'Black and white cat with green eyes peeking over a bamboo edge',
		script: 'Purr-thday party',
		date: 'Sunday · June 7',
		tags: ['Sweet', 'RSVP'],
	},
	'bautizo-blanco-oro': {
		caption: 'Animated doves, church details, godparents and reception.',
		posterAlt: 'Baby sleeping on a white blanket',
		script: 'My baptism',
		date: 'Sunday · April 19',
		tags: ['Godparents', 'Church'],
	},
	'comunion-luz': {
		caption: 'Classic gold symbols, mass time and the location of the celebration.',
		posterAlt: 'Church interior with wooden pews',
		script: 'My first communion',
		date: 'Saturday · May 30',
		tags: ['Mass', 'Reception'],
	},
	'confirmacion-paloma': {
		caption: 'Whites and sky blues with rays of light, sponsors and a message from the confirmand.',
		posterAlt: 'White arches inside a cathedral',
		script: 'My confirmation',
		date: 'Sunday · November 8',
		tags: ['Sponsors', 'Message'],
	},
	'festividad-capilla': {
		caption: 'Novena, procession and main mass with a day-by-day program.',
		posterAlt: 'Light blue wooden chapel surrounded by mountains',
		script: 'Feast of',
		names: 'Our Lady of Mount Carmel',
		date: 'July 15–18',
		tags: ['Program', 'Procession'],
	},
	'patronal-danzas': {
		caption: 'Hosts, sponsors, bands and the location of each day in a single link.',
		posterAlt: 'Dance floor full of people dancing at a party',
		script: 'Grand patron festival',
		names: 'Saint John 2026',
		date: 'June 22–25',
		tags: ['Hosts', 'Program'],
	},
	'yunsa-colores': {
		caption: 'The tree, the cortamonte godparents and a list of contributors, full of color.',
		posterAlt: 'Brightly colored balloons tied with ribbons',
		script: 'Grand yunsa',
		names: 'Quispe Family',
		date: 'Sunday · March 1',
		tags: ['Godparents', 'Cortamonte'],
	},
	'oficial-protocolo': {
		caption: 'Sober and flawless: official program, list of authorities and guest registration.',
		posterAlt: 'Auditorium with an audience in front of a stage',
		script: 'Ceremony of',
		names: 'Class of 2026',
		date: 'Friday · December 11',
		tags: ['Program', 'Registration'],
	},
	'empresa-summit': {
		caption: 'Speaker agenda, sign-up form and your brand in every detail.',
		posterAlt: 'Attendees seated at a business conference',
		script: 'You’re invited to',
		date: 'Thursday · October 15',
		tags: ['Agenda', 'Your brand'],
	},
	'empresa-brindis': {
		caption: 'The company dinner with dress code, menu and RSVP from every team member.',
		posterAlt: 'Guests raising glasses in a hall decorated with lights',
		script: 'Cheers!',
		names: 'Annual Dinner',
		date: 'Friday · December 18',
		tags: ['Dress code', 'RSVP'],
	},
};

export function getShorts(lang: Lang = 'es'): Short[] {
	return lang === 'es' ? shorts : shorts.map((s) => ({ ...s, ...shortsEn[s.id] }));
}

/** Shorts para la portada: uno por categoría primero, luego el resto. */
export function featuredShorts(lang: Lang = 'es'): Short[] {
	const all = getShorts(lang);
	const seen = new Set<string>();
	const first: Short[] = [];
	const rest: Short[] = [];
	for (const s of all) {
		if (seen.has(s.categorySlug)) rest.push(s);
		else {
			seen.add(s.categorySlug);
			first.push(s);
		}
	}
	return [...first, ...rest];
}

/** Shorts de una categoría; si son pocos, se completan con los de su mismo grupo. */
export function shortsFor(slug: string, lang: Lang = 'es', min = 4): Short[] {
	const all = getShorts(lang);
	const own = all.filter((s) => s.categorySlug === slug);
	if (own.length >= min) return own;
	const group = categories.find((c) => c.slug === slug)?.group;
	const sameGroup = all.filter(
		(s) => s.categorySlug !== slug && categories.find((c) => c.slug === s.categorySlug)?.group === group,
	);
	return [...own, ...sameGroup].slice(0, Math.max(min, own.length));
}
