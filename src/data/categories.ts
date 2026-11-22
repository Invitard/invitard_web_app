import type { ImageMetadata } from 'astro';

import bodaPareja from '../assets/stock/boda-pareja.jpg';
import quinceSalon from '../assets/stock/quinceanos-salon.jpg';
import cumpleGlobos from '../assets/stock/cumpleanos-globos.jpg';
import babyPiecitos from '../assets/stock/babyshower-piecitos.jpg';
import mascotaPerrito from '../assets/stock/mascotas-perrito.jpg';
import bautizoBebe from '../assets/stock/bautizo-bebe.jpg';
import comunionIglesia from '../assets/stock/primera-comunion-iglesia.jpg';
import confirmacionCatedral from '../assets/stock/confirmacion-catedral.jpg';
import capilla from '../assets/stock/festividad-religiosa-capilla.jpg';
import patronalesBaile from '../assets/stock/fiestas-patronales-baile.jpg';
import yunsaGlobos from '../assets/stock/yunsa-globos.jpg';
import auditorio from '../assets/stock/ceremonia-oficial-auditorio.jpg';
import conferencia from '../assets/stock/evento-empresarial-conferencia.jpg';

export type GroupId = 'sociales' | 'fe' | 'tradicion' | 'institucional';

export interface CategoryGroup {
	id: GroupId;
	name: string;
	kicker: string;
	description: string;
	/** Matiz OKLCH del acento visual del grupo. */
	hue: number;
}

export interface Faq {
	q: string;
	a: string;
}

export interface Category {
	slug: string;
	group: GroupId;
	/** Nombre corto para tarjetas y menú. */
	name: string;
	/** Etiqueta del evento en plural/singular natural para frases. */
	eventLabel: string;
	seoTitle: string;
	metaDescription: string;
	h1: string;
	lead: string;
	image: ImageMetadata;
	imageAlt: string;
	keywords: string[];
	/** Lo que esta invitación incluye de forma especial para este tipo de evento. */
	highlights: { title: string; text: string }[];
	/** Estilos o líneas de diseño sugeridas. */
	styles: { name: string; text: string }[];
	body: string[];
	faqs: Faq[];
	whatsappMessage: string;
}

export const groups: CategoryGroup[] = [
	{
		id: 'sociales',
		name: 'Celebraciones sociales',
		kicker: 'Para brindar, bailar y soplar velitas',
		description:
			'Bodas, quinceaños, cumpleaños, baby shower y hasta el cumple de tu mascota: invitaciones con música, cuenta regresiva y confirmación en un toque.',
		hue: 20,
	},
	{
		id: 'fe',
		name: 'Sacramentos y fe',
		kicker: 'Momentos sagrados, compartidos con cariño',
		description:
			'Bautizos, primera comunión, confirmación y festividades religiosas con un diseño sereno, datos de la parroquia, padrinos y recepción.',
		hue: 230,
	},
	{
		id: 'tradicion',
		name: 'Fiestas tradicionales',
		kicker: 'Nuestras costumbres, ahora en el celular',
		description:
			'Fiestas patronales, yunsas y cortamontes con el programa completo, mayordomos, padrinos, bandas y ubicaciones de cada jornada.',
		hue: 75,
	},
	{
		id: 'institucional',
		name: 'Institucional y empresarial',
		kicker: 'Protocolo impecable, imagen profesional',
		description:
			'Ceremonias oficiales, aniversarios institucionales, lanzamientos y eventos corporativos con registro de asistentes y agenda.',
		hue: 280,
	},
];

export const categories: Category[] = [
	// ───────────── Celebraciones sociales ─────────────
	{
		slug: 'bodas',
		group: 'sociales',
		name: 'Bodas',
		eventLabel: 'tu boda',
		seoTitle: 'Invitaciones Digitales para Boda | Web con RSVP y Música',
		metaDescription:
			'Invitaciones de boda digitales y elegantes: sobre animado, cuenta regresiva, ubicación de iglesia y recepción, mesa de regalos y confirmación por WhatsApp.',
		h1: 'Invitaciones digitales para boda',
		lead:
			'Una invitación web que abre como un sobre, suena con su canción y lleva a cada invitado a la iglesia y a la recepción sin perderse. Ustedes disfrutan; nosotros nos encargamos del detalle.',
		image: bodaPareja,
		imageAlt: 'Pareja de recién casados sonriendo y caminando de la mano en un jardín',
		keywords: [
			'invitaciones de boda digitales',
			'invitación web para boda',
			'invitaciones de matrimonio virtuales',
			'invitación de boda con confirmación de asistencia',
			'invitaciones de boda Perú',
		],
		highlights: [
			{ title: 'Sobre animado de apertura', text: 'La invitación se abre como una carta real, con sello y sus iniciales.' },
			{ title: 'Ceremonia y recepción', text: 'Botones directos a Google Maps para la iglesia, el civil y el local de la fiesta.' },
			{ title: 'Padres y padrinos', text: 'Una sección cuidada para nombrar a quienes los acompañan en el altar.' },
			{ title: 'Mesa de regalos y lluvia de sobres', text: 'Cuentas bancarias, Yape o Plin con botón para copiar el número.' },
			{ title: 'Pase personalizado', text: 'Enlaces con el nombre del invitado y el número de cupos reservados.' },
			{ title: 'Código de vestimenta', text: 'Paleta sugerida y colores reservados para los novios, explicados con elegancia.' },
		],
		styles: [
			{ name: 'Clásico atemporal', text: 'Serif fina, marfil y dorado suave, ornamentos discretos.' },
			{ name: 'Jardín botánico', text: 'Acuarelas de hojas y flores, ideal para bodas de día o campestres.' },
			{ name: 'Minimal moderno', text: 'Mucho aire, tipografía protagonista y una sola foto poderosa.' },
		],
		body: [
			'Una boda reúne a familias enteras, a veces de distintas ciudades y países. Por eso tu invitación digital de boda tiene que funcionar perfecto en cualquier celular, cargar rápido aunque la señal sea débil y responder las preguntas de siempre: ¿a qué hora?, ¿dónde queda?, ¿cómo llego?, ¿qué me pongo?',
			'En Invitard diseñamos cada invitación de matrimonio desde cero con sus nombres, su historia y su paleta. Incluimos cuenta regresiva al gran día, música de fondo con su canción, galería de fotos de la preboda y confirmación de asistencia por WhatsApp para que lleven la lista de invitados sin hojas de cálculo.',
		],
		faqs: [
			{
				q: '¿Puedo poner dos ubicaciones, iglesia y recepción?',
				a: 'Sí. Cada lugar tiene su propio botón a Google Maps con la hora correspondiente; también podemos sumar la ceremonia civil.',
			},
			{
				q: '¿Se puede personalizar con el nombre de cada invitado?',
				a: 'Sí. Generamos enlaces personalizados que muestran el nombre de la familia y el número de pases asignados.',
			},
			{
				q: '¿Cómo agrego los datos para la lluvia de sobres?',
				a: 'Nos envías los números de cuenta, CCI, Yape o Plin y los mostramos con un botón para copiarlos al instante.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación digital para mi boda 💍',
	},
	{
		slug: 'quinceanos',
		group: 'sociales',
		name: 'Quinceaños',
		eventLabel: 'tus quince años',
		seoTitle: 'Invitaciones Digitales de 15 Años | Quinceañera Web',
		metaDescription:
			'Invitaciones digitales de quinceañera con itinerario, vals, padrinos, código de vestimenta, cuenta regresiva y confirmación por WhatsApp. Diseños únicos.',
		h1: 'Invitaciones digitales de quince años',
		lead:
			'Tu noche merece una entrada a la altura. Diseñamos invitaciones de quinceañera con tus colores, tu frase favorita y el itinerario de la fiesta, listas para compartir en un solo enlace.',
		image: quinceSalon,
		imageAlt: 'Salón de fiesta decorado con candelabros y mesas redondas para una celebración de quince años',
		keywords: [
			'invitaciones de 15 años digitales',
			'invitación de quinceañera web',
			'invitaciones de quinceaños virtuales',
			'tarjeta de quince años digital',
		],
		highlights: [
			{ title: 'Itinerario de la noche', text: 'Recepción, ingreso, vals, cena y sorpresa, en una línea de tiempo animada.' },
			{ title: 'Padres y padrinos', text: 'Reconocimiento especial para tu familia y padrinos de honor.' },
			{ title: 'Paleta de colores propia', text: 'Llevamos tu paleta (lila, dorado, celeste…) a cada detalle del diseño.' },
			{ title: 'Tu frase y tu música', text: 'La canción de tu vals de fondo y la frase que te inspira en portada.' },
			{ title: 'Dress code', text: 'Indicaciones de vestimenta con ilustraciones claras para tus invitados.' },
			{ title: 'Sección de regalos', text: 'Yape, Plin o lista de deseos con un botón para copiar.' },
		],
		styles: [
			{ name: 'Princesa floral', text: 'Flores en acuarela, tonos pastel y brillos sutiles.' },
			{ name: 'Glam de noche', text: 'Fondo oscuro, destellos dorados y tipografía de gala.' },
			{ name: 'Fresh & cool', text: 'Colores vivos, stickers y animaciones divertidas.' },
		],
		body: [
			'Los quince años son una de las fiestas más esperadas, y la invitación es el primer adelanto de lo que se viene. Una invitación digital de quinceañera te permite incluir todo lo que no entra en una tarjeta impresa: el itinerario completo, la canción del vals, fotos de tu sesión y la confirmación de asistencia en tiempo real.',
			'Trabajamos contigo y con tu familia para que el diseño refleje tu personalidad. Y como es un enlace, puedes compartirla por WhatsApp, Instagram o TikTok el mismo día que esté lista.',
		],
		faqs: [
			{
				q: '¿Puedo usar mi paleta de colores?',
				a: 'Claro. Envíanos tus colores (incluso en código hexadecimal) y adaptamos fondos, botones y ornamentos.',
			},
			{
				q: '¿Se puede incluir la canción del vals?',
				a: 'Sí, con un reproductor que el invitado activa con un toque, respetando el silencio del celular.',
			},
			{
				q: '¿Pueden agregar una galería de mi sesión de fotos?',
				a: 'Sí. Optimizamos las fotos para que carguen rápido incluso con datos móviles.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación digital para mis quince años 👑',
	},
	{
		slug: 'cumpleanos',
		group: 'sociales',
		name: 'Cumpleaños',
		eventLabel: 'tu cumpleaños',
		seoTitle: 'Invitaciones Digitales de Cumpleaños | Infantiles y Adultos',
		metaDescription:
			'Invitaciones de cumpleaños digitales para niños y adultos: temáticas personalizadas, cuenta regresiva, mapa, música y confirmación por WhatsApp.',
		h1: 'Invitaciones digitales de cumpleaños',
		lead:
			'Del primer añito a los ochenta y tantos: invitaciones de cumpleaños temáticas, divertidas o elegantes, que tus invitados querrán abrir dos veces.',
		image: cumpleGlobos,
		imageAlt: 'Globos de colores flotando en una fiesta de cumpleaños',
		keywords: [
			'invitaciones de cumpleaños digitales',
			'invitación de cumpleaños infantil virtual',
			'invitación de cumpleaños para WhatsApp',
			'invitaciones de cumpleaños temáticas',
		],
		highlights: [
			{ title: 'Temáticas a medida', text: 'Bosque encantado, fútbol, princesas, dinosaurios, disco… lo que imagines.' },
			{ title: 'Cumpleaños compartidos', text: 'Diseños dobles para hermanos, parejas o abuelos que celebran juntos.' },
			{ title: 'Calendario y cuenta regresiva', text: 'El día marcado en un calendario y los segundos que faltan para la fiesta.' },
			{ title: 'Confirmación en un toque', text: 'El invitado confirma por WhatsApp con un mensaje ya redactado.' },
			{ title: 'Música de fondo', text: 'La canción favorita del cumpleañero, con botón de pausa.' },
			{ title: 'Galería de recuerdos', text: 'Fotos del cumpleañero a lo largo de los años.' },
		],
		styles: [
			{ name: 'Infantil ilustrado', text: 'Personajes, colores primarios y animaciones juguetonas.' },
			{ name: 'Fiesta disco', text: 'Esferas brillantes, neón y números gigantes en globo.' },
			{ name: 'Elegante adulto', text: 'Tipografía sobria, tonos profundos y detalles dorados.' },
		],
		body: [
			'Una invitación de cumpleaños digital se comparte en segundos por WhatsApp y llega a todos al mismo tiempo. Nada de tarjetas que se pierden en la mochila: tus invitados tienen la dirección, la hora y el mapa siempre a la mano.',
			'Hemos creado invitaciones para cumpleaños infantiles con temática de cuento, cumpleaños dobles con globos de números y fiestas de 60 y 65 años con mucho estilo. Cada diseño es original y se adapta a la edad y la personalidad del cumpleañero.',
		],
		faqs: [
			{
				q: '¿Hacen invitaciones para cumpleaños de adultos?',
				a: 'Sí. Desde 18 hasta 90 años, con estilos elegantes, divertidos o temáticos según la celebración.',
			},
			{
				q: '¿Se puede hacer una invitación para dos cumpleañeros?',
				a: 'Sí, diseñamos invitaciones dobles con la edad y el nombre de cada uno y una temática para cada persona.',
			},
			{
				q: '¿Cuánto demora una invitación de cumpleaños?',
				a: 'Normalmente entre 2 y 4 días hábiles después de recibir los datos, según el plan elegido.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación digital de cumpleaños 🎂',
	},
	{
		slug: 'baby-shower',
		group: 'sociales',
		name: 'Baby shower',
		eventLabel: 'tu baby shower',
		seoTitle: 'Invitaciones Digitales para Baby Shower y Revelación',
		metaDescription:
			'Invitaciones digitales de baby shower y revelación de género: diseños tiernos, lista de regalos, mapa, cuenta regresiva y confirmación por WhatsApp.',
		h1: 'Invitaciones digitales para baby shower',
		lead:
			'Para dar la bienvenida al bebé con ternura: invitaciones de baby shower y revelación de género con lista de regalos y confirmación instantánea.',
		image: babyPiecitos,
		imageAlt: 'Piecitos de un bebé recién nacido envueltos en una manta blanca',
		keywords: [
			'invitaciones de baby shower digitales',
			'invitación revelación de género',
			'invitación baby shower WhatsApp',
			'tarjeta de baby shower virtual',
		],
		highlights: [
			{ title: 'Revelación de género', text: 'Una sorpresa interactiva: ¿niño o niña? que se descubre con un toque.' },
			{ title: 'Lista de regalos', text: 'Pañales por talla, lista de tiendas o aporte por Yape y Plin.' },
			{ title: 'Ecografía o sesión de fotos', text: 'Galería suave con las primeras imágenes del bebé.' },
			{ title: 'Juegos y dinámica', text: 'Adelanta los juegos del baby shower o pide a los invitados apostar.' },
		],
		styles: [
			{ name: 'Nubes y estrellas', text: 'Celestes y blancos, ilustraciones suaves.' },
			{ name: 'Safari bebé', text: 'Animalitos en acuarela, verdes y arena.' },
			{ name: 'Neutro natural', text: 'Tonos tierra, hojas secas y tipografía manuscrita.' },
		],
		body: [
			'El baby shower es una celebración íntima y llena de cariño. Una invitación digital permite incluir la lista de regalos y la ubicación en el mismo lugar, sin que la futura mamá tenga que responder decenas de mensajes.',
			'Si además van a revelar el sexo del bebé, creamos una revelación interactiva para quienes no puedan asistir en persona.',
		],
		faqs: [
			{
				q: '¿Pueden diseñar una revelación de género?',
				a: 'Sí. Podemos mantener la sorpresa hasta el día del evento y actualizar la invitación con el resultado.',
			},
			{
				q: '¿Se puede compartir una lista de regalos?',
				a: 'Sí, con enlaces a tiendas, tallas de pañal sugeridas o datos para aportes por transferencia.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación digital para un baby shower 🍼',
	},
	{
		slug: 'mascotas',
		group: 'sociales',
		name: 'Cumpleaños de mascotas',
		eventLabel: 'el cumple de tu mascota',
		seoTitle: 'Invitaciones Digitales para Cumpleaños de Mascotas',
		metaDescription:
			'Invitaciones digitales para el cumpleaños de tu perrito, gatito y más. Diseños divertidos con su foto, pet party, mapa y confirmación por WhatsApp.',
		h1: 'Invitaciones para el cumpleaños de tu mascota',
		lead:
			'Porque también es de la familia: invitaciones para el cumple de perritos, gatitos, conejos y cualquier peludito que merezca su pet party.',
		image: mascotaPerrito,
		imageAlt: 'Perrito beagle sonriente con la lengua afuera mirando a la cámara',
		keywords: [
			'invitación cumpleaños de perro',
			'invitación cumpleaños de gato',
			'invitaciones para mascotas',
			'pet party invitación digital',
		],
		highlights: [
			{ title: 'Protagonista peludo', text: 'Su foto, su nombre y sus “años humanos” en portada.' },
			{ title: 'Reglas de la pet party', text: 'Correa, vacunas al día y snacks permitidos, explicados con humor.' },
			{ title: 'Invitados de cuatro patas', text: 'La confirmación pide nombre del humano y de la mascota.' },
			{ title: 'Lista de antojos', text: 'Juguetes, snacks o donaciones a un albergue como regalo.' },
		],
		styles: [
			{ name: 'Huellitas pop', text: 'Colores alegres, huellitas y huesitos animados.' },
			{ name: 'Gatuno chic', text: 'Elegante, con bigotes, ovillos y tonos suaves.' },
			{ name: 'Picnic en el parque', text: 'Verde, mantel a cuadros y sol de tarde.' },
		],
		body: [
			'Celebrar el cumpleaños de tu mascota es cada vez más común, y una invitación digital es la forma más divertida de convocar a sus amigos (y a sus humanos). Ponemos su foto como protagonista y adaptamos el texto a su personalidad.',
			'Diseñamos para perros, gatos, conejos, hámsters y cualquier compañero. También para “adopciónversarios” y bienvenidas de nuevos miembros peludos.',
		],
		faqs: [
			{
				q: '¿Hacen invitaciones para gatos u otras mascotas?',
				a: 'Sí, para cualquier mascota: gatos, conejos, hámsters, aves… Adaptamos ilustraciones y textos a cada especie.',
			},
			{
				q: '¿Se puede celebrar el aniversario de adopción?',
				a: 'Claro. Hacemos invitaciones para “adopciónversarios” y bienvenidas de mascotas nuevas.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero una invitación para el cumpleaños de mi mascota 🐶🐱',
	},

	// ───────────── Sacramentos y fe ─────────────
	{
		slug: 'bautizo',
		group: 'fe',
		name: 'Bautizo',
		eventLabel: 'el bautizo',
		seoTitle: 'Invitaciones Digitales de Bautizo | Diseños Tiernos',
		metaDescription:
			'Invitaciones digitales de bautizo con datos de la parroquia, padrinos, recepción, mapa y confirmación por WhatsApp. Diseños delicados para niño o niña.',
		h1: 'Invitaciones digitales de bautizo',
		lead:
			'Un diseño sereno y luminoso para el primer sacramento de tu bebé, con la parroquia, los padrinos y la recepción en un solo enlace.',
		image: bautizoBebe,
		imageAlt: 'Bebé durmiendo plácidamente sobre una manta blanca',
		keywords: [
			'invitaciones de bautizo digitales',
			'invitación de bautizo para WhatsApp',
			'invitación bautizo niño niña virtual',
			'tarjeta de bautizo digital',
		],
		highlights: [
			{ title: 'Parroquia y horario', text: 'Nombre del templo, hora de la misa y botón a Google Maps.' },
			{ title: 'Padrinos de bautizo', text: 'Una sección especial para los padrinos y sus nombres completos.' },
			{ title: 'Cita bíblica o dedicatoria', text: 'Un versículo o mensaje de los papás para el bebé.' },
			{ title: 'Recepción familiar', text: 'Ubicación y hora del almuerzo o brindis después de la ceremonia.' },
		],
		styles: [
			{ name: 'Blanco y oro', text: 'Pureza, palomitas y detalles dorados.' },
			{ name: 'Acuarela pastel', text: 'Celeste o rosa suave, nubes y angelitos.' },
			{ name: 'Rústico natural', text: 'Ramas de olivo, lino y tonos crema.' },
		],
		body: [
			'El bautizo reúne a la familia en torno a un momento de fe y gratitud. Tu invitación digital de bautizo informa con claridad la parroquia, el horario y la recepción, y deja espacio para una dedicatoria especial para tu bebé.',
			'Diseñamos invitaciones para bautizo de niño, de niña y bautizos compartidos de hermanos o primos.',
		],
		faqs: [
			{
				q: '¿Pueden incluir dos bebés en la misma invitación?',
				a: 'Sí, hacemos invitaciones para bautizos compartidos con los nombres y padrinos de cada niño.',
			},
			{
				q: '¿Puedo agregar una cita bíblica?',
				a: 'Por supuesto. Te sugerimos versículos o usamos el que tú elijas.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación digital de bautizo 🕊️',
	},
	{
		slug: 'primera-comunion',
		group: 'fe',
		name: 'Primera comunión',
		eventLabel: 'la primera comunión',
		seoTitle: 'Invitaciones Digitales de Primera Comunión',
		metaDescription:
			'Invitaciones digitales de primera comunión para niños y niñas: parroquia, padrinos, recepción, mapa, música y confirmación por WhatsApp.',
		h1: 'Invitaciones digitales de primera comunión',
		lead:
			'Un recuerdo luminoso para un día que no se olvida: invitaciones de primera comunión con todos los datos de la misa y la celebración.',
		image: comunionIglesia,
		imageAlt: 'Interior de una iglesia con bancas de madera y luz natural entrando por las ventanas',
		keywords: [
			'invitaciones de primera comunión digitales',
			'invitación primera comunión niño',
			'invitación primera comunión niña virtual',
			'tarjeta de primera comunión WhatsApp',
		],
		highlights: [
			{ title: 'Misa y parroquia', text: 'Templo, hora y ubicación con botón a Google Maps.' },
			{ title: 'Padrinos de comunión', text: 'Sección dedicada a los padrinos y catequistas.' },
			{ title: 'Foto del comulgante', text: 'Retrato del niño o niña con marco delicado.' },
			{ title: 'Recepción y almuerzo', text: 'Datos del lugar de celebración familiar.' },
		],
		styles: [
			{ name: 'Cáliz y espigas', text: 'Símbolos clásicos en dorado sobre blanco.' },
			{ name: 'Floral suave', text: 'Flores blancas y verdes en acuarela.' },
			{ name: 'Moderno y limpio', text: 'Tipografía clara y foto protagonista.' },
		],
		body: [
			'La primera comunión es un paso importante en la vida de fe de tu hijo o hija. Con una invitación digital compartes la fecha, la parroquia y la celebración con toda la familia, incluso con quienes viven lejos.',
			'También diseñamos invitaciones grupales para colegios y parroquias que celebran la primera comunión de varios niños el mismo día.',
		],
		faqs: [
			{
				q: '¿Hacen invitaciones para comuniones grupales de colegio?',
				a: 'Sí, diseñamos una invitación general para la promoción o la parroquia con el programa de la misa.',
			},
			{
				q: '¿Se puede incluir un recordatorio?',
				a: 'Sí, añadimos un recordatorio descargable con la foto y la fecha para guardar de recuerdo.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación de primera comunión ✨',
	},
	{
		slug: 'confirmacion',
		group: 'fe',
		name: 'Confirmación',
		eventLabel: 'la confirmación',
		seoTitle: 'Invitaciones Digitales de Confirmación',
		metaDescription:
			'Invitaciones digitales de confirmación con datos de la ceremonia, padrino o madrina, recepción y confirmación por WhatsApp. Diseños juveniles y sobrios.',
		h1: 'Invitaciones digitales de confirmación',
		lead:
			'Un diseño juvenil y sobrio para reafirmar la fe: ceremonia, padrino o madrina y celebración en una invitación que se comparte en segundos.',
		image: confirmacionCatedral,
		imageAlt: 'Arcos blancos y ventanales altos en el interior de una catedral',
		keywords: [
			'invitaciones de confirmación digitales',
			'invitación de confirmación católica',
			'invitación confirmación WhatsApp',
		],
		highlights: [
			{ title: 'Ceremonia con el obispo', text: 'Lugar, hora y detalles de la celebración litúrgica.' },
			{ title: 'Padrino o madrina', text: 'Un espacio de reconocimiento para quien acompaña.' },
			{ title: 'Paloma y fuego', text: 'Simbología del Espíritu Santo integrada al diseño.' },
			{ title: 'Celebración posterior', text: 'Ubicación de la reunión familiar o con amigos.' },
		],
		styles: [
			{ name: 'Luz y paloma', text: 'Blancos, celestes y destellos de luz.' },
			{ name: 'Juvenil moderno', text: 'Colores frescos y tipografía actual.' },
		],
		body: [
			'La confirmación suele celebrarse en la adolescencia, por eso diseñamos invitaciones que equilibran lo solemne con un estilo actual con el que el confirmando se sienta identificado.',
		],
		faqs: [
			{
				q: '¿Puedo elegir un estilo más moderno?',
				a: 'Sí. Proponemos diseños juveniles sin perder el sentido religioso de la ceremonia.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero cotizar una invitación de confirmación 🕊️',
	},
	{
		slug: 'festividades-religiosas',
		group: 'fe',
		name: 'Festividades religiosas',
		eventLabel: 'la festividad',
		seoTitle: 'Invitaciones Digitales para Festividades Religiosas',
		metaDescription:
			'Invitaciones digitales para misas, novenas, procesiones, aniversarios parroquiales y festividades religiosas. Programa completo, ubicación y confirmación.',
		h1: 'Invitaciones para festividades religiosas',
		lead:
			'Novenas, misas de honra, procesiones y aniversarios parroquiales: comparte el programa completo con la comunidad en una invitación digna y clara.',
		image: capilla,
		imageAlt: 'Capilla celeste de madera con campanario rodeada de montañas',
		keywords: [
			'invitación misa digital',
			'invitación novena virtual',
			'invitación festividad religiosa',
			'invitación procesión',
		],
		highlights: [
			{ title: 'Programa por días', text: 'Novena, vísperas, misa central y procesión con sus horarios.' },
			{ title: 'Imagen venerada', text: 'Fotografía o ilustración del santo patrón o la Virgen.' },
			{ title: 'Organizadores', text: 'Hermandades, cofradías y familias responsables.' },
			{ title: 'Varias ubicaciones', text: 'Templo, recorrido de la procesión y local de recepción.' },
		],
		styles: [
			{ name: 'Barroco andino', text: 'Marcos dorados y ornamentos inspirados en retablos.' },
			{ name: 'Sobrio solemne', text: 'Fondo oscuro, luz de velas y tipografía clásica.' },
		],
		body: [
			'Las festividades religiosas convocan a familias, hermandades y comunidades enteras. Una invitación digital permite publicar el programa de cada día y actualizarlo si cambia un horario, algo imposible con un afiche impreso.',
		],
		faqs: [
			{
				q: '¿Se puede actualizar el programa después de enviarla?',
				a: 'Sí. Como es una página web, el enlace sigue siendo el mismo y los cambios se ven al instante.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero una invitación digital para una festividad religiosa ⛪',
	},

	// ───────────── Fiestas tradicionales ─────────────
	{
		slug: 'fiestas-patronales',
		group: 'tradicion',
		name: 'Fiestas patronales',
		eventLabel: 'la fiesta patronal',
		seoTitle: 'Invitaciones Digitales para Fiestas Patronales',
		metaDescription:
			'Invitaciones digitales para fiestas patronales: programa de días, mayordomos, alferados, bandas, comparsas, ubicaciones y confirmación por WhatsApp.',
		h1: 'Invitaciones digitales para fiestas patronales',
		lead:
			'Mayordomos, alferados y cargontes: anuncien su fiesta con un programa claro, fotos de la imagen y el recorrido de cada jornada. Tradición que llega a todos, incluso a los paisanos que viven lejos.',
		image: patronalesBaile,
		imageAlt: 'Vista desde arriba de una pista llena de personas bailando en una fiesta',
		keywords: [
			'invitación fiesta patronal',
			'invitación mayordomo fiesta patronal',
			'invitación alferado digital',
			'invitación fiesta costumbrista',
		],
		highlights: [
			{ title: 'Programa de la fiesta', text: 'Víspera, día central y despedida: cada jornada con su horario.' },
			{ title: 'Mayordomos y cargontes', text: 'Los nombres de quienes asumen el cargo, con el honor que merecen.' },
			{ title: 'Bandas y comparsas', text: 'Orquestas, bandas típicas y danzas invitadas.' },
			{ title: 'Para paisanos lejanos', text: 'Transmisión en vivo o galería para quienes celebran a la distancia.' },
		],
		styles: [
			{ name: 'Costumbrista', text: 'Colores vivos, textiles andinos y tipografía festiva.' },
			{ name: 'Retablo', text: 'Inspirado en el arte popular peruano y sus marcos.' },
		],
		body: [
			'Las fiestas patronales son el corazón de muchos pueblos del Perú. Con una invitación digital, los mayordomos pueden convocar a familiares, amigos y paisanos de otras ciudades o del extranjero con un solo mensaje de WhatsApp.',
			'Incluimos el programa completo, la imagen del santo patrón, los auspiciadores y las ubicaciones de la misa, la procesión y la fiesta.',
		],
		faqs: [
			{
				q: '¿Pueden aparecer varios mayordomos o padrinos?',
				a: 'Sí, organizamos a mayordomos, alferados, padrinos de banda, de castillo y demás cargos en secciones claras.',
			},
			{
				q: '¿La invitación puede tener varios días de programa?',
				a: 'Sí, cada día tiene su propia sección con actividades, horarios y ubicaciones.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero una invitación digital para nuestra fiesta patronal 🎺',
	},
	{
		slug: 'yunsas',
		group: 'tradicion',
		name: 'Yunsas y cortamontes',
		eventLabel: 'la yunsa',
		seoTitle: 'Invitaciones Digitales para Yunsa y Cortamonte',
		metaDescription:
			'Invitaciones digitales para yunsas y cortamontes de carnaval: padrinos del árbol, programa, música, ubicación y confirmación. Diseños con identidad andina.',
		h1: 'Invitaciones digitales para yunsas y cortamontes',
		lead:
			'El árbol cargado de regalos, la música de carnaval y los padrinos con su hacha: invitaciones de yunsa con colorido andino para que nadie se pierda la celebración.',
		image: yunsaGlobos,
		imageAlt: 'Globos de colores vivos amarrados con cintas, como los que adornan una yunsa',
		keywords: [
			'invitación yunsa',
			'invitación cortamonte',
			'invitación unsha carnaval',
			'invitación padrinos de yunsa',
		],
		highlights: [
			{ title: 'Padrinos de la yunsa', text: 'Los padrinos de este año y el anuncio de los próximos.' },
			{ title: 'Programa de carnaval', text: 'Plantado del árbol, baile alrededor y tumbamonte.' },
			{ title: 'Música y comparsas', text: 'Huaylarsh, carnaval y orquestas invitadas.' },
			{ title: 'Ubicación y hora', text: 'Botón directo al lugar donde se planta el árbol.' },
		],
		styles: [
			{ name: 'Carnaval andino', text: 'Serpentinas, flores y colores intensos.' },
			{ name: 'Textil tradicional', text: 'Patrones inspirados en mantas y fajas andinas.' },
		],
		body: [
			'La yunsa, también llamada cortamonte o unsha, es una de las tradiciones de carnaval más alegres de los Andes. Diseñamos invitaciones que respetan su identidad: colores vivos, música y el protagonismo de los padrinos.',
		],
		faqs: [
			{
				q: '¿Pueden diseñar con motivos andinos?',
				a: 'Sí. Trabajamos ilustraciones y patrones inspirados en textiles y arte popular de la región.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero una invitación digital para nuestra yunsa 🌳🎉',
	},

	// ───────────── Institucional y empresarial ─────────────
	{
		slug: 'ceremonias-oficiales',
		group: 'institucional',
		name: 'Ceremonias oficiales',
		eventLabel: 'la ceremonia',
		seoTitle: 'Invitaciones Digitales para Ceremonias Oficiales',
		metaDescription:
			'Invitaciones digitales protocolares para ceremonias oficiales, aniversarios institucionales, graduaciones e inauguraciones. Registro de asistentes y agenda.',
		h1: 'Invitaciones digitales para ceremonias oficiales',
		lead:
			'Aniversarios institucionales, juramentaciones, graduaciones e inauguraciones: invitaciones con protocolo, logotipos oficiales y registro de asistencia.',
		image: auditorio,
		imageAlt: 'Auditorio con público sentado frente a un escenario durante una ceremonia',
		keywords: [
			'invitación ceremonia oficial digital',
			'invitación protocolar',
			'invitación aniversario institucional',
			'invitación graduación digital',
		],
		highlights: [
			{ title: 'Protocolo y orden', text: 'Programa oficial con himno, discursos y reconocimientos.' },
			{ title: 'Identidad institucional', text: 'Logotipos, escudos y colores oficiales respetados al detalle.' },
			{ title: 'Registro de asistentes', text: 'Formulario con nombre, cargo e institución.' },
			{ title: 'Autoridades invitadas', text: 'Sección de anfitriones y autoridades presentes.' },
		],
		styles: [
			{ name: 'Institucional', text: 'Sobrio, ordenado y con los colores de la entidad.' },
			{ name: 'Gala', text: 'Fondo oscuro, dorado y tipografía clásica.' },
		],
		body: [
			'Municipalidades, colegios, universidades y asociaciones confían en las invitaciones digitales para ahorrar impresión y llegar a todos sus invitados a tiempo. Diseñamos piezas protocolares que respetan la identidad visual de cada institución.',
		],
		faqs: [
			{
				q: '¿Emiten comprobante de pago para instituciones?',
				a: 'Escríbenos por WhatsApp con los datos de la institución y te indicamos las opciones de comprobante disponibles.',
			},
			{
				q: '¿Pueden enviar las invitaciones personalizadas a cada autoridad?',
				a: 'Sí, generamos enlaces con el nombre y cargo de cada invitado.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Necesito invitaciones digitales para una ceremonia oficial 🏛️',
	},
	{
		slug: 'eventos-empresariales',
		group: 'institucional',
		name: 'Eventos empresariales',
		eventLabel: 'tu evento',
		seoTitle: 'Invitaciones Digitales para Eventos Corporativos',
		metaDescription:
			'Invitaciones digitales para eventos empresariales: lanzamientos, aniversarios, fiestas de fin de año, conferencias y networking. Agenda y registro.',
		h1: 'Invitaciones digitales para eventos empresariales',
		lead:
			'Lanzamientos, aniversarios de empresa, fiestas de fin de año y conferencias: invitaciones con tu marca, agenda y registro de asistentes listo para tu equipo.',
		image: conferencia,
		imageAlt: 'Asistentes sentados en un auditorio durante una conferencia empresarial',
		keywords: [
			'invitación evento corporativo',
			'invitación digital empresa',
			'invitación lanzamiento de producto',
			'invitación fiesta de fin de año empresa',
		],
		highlights: [
			{ title: 'Tu marca al centro', text: 'Colores, tipografías y logotipo de tu empresa.' },
			{ title: 'Agenda del evento', text: 'Ponentes, horarios y bloques de networking.' },
			{ title: 'Registro y aforo', text: 'Formulario de inscripción para controlar el aforo.' },
			{ title: 'Añadir al calendario', text: 'Botón para guardar el evento en Google Calendar u Outlook.' },
		],
		styles: [
			{ name: 'Corporativo limpio', text: 'Ordenado, legible y alineado al manual de marca.' },
			{ name: 'Fiesta de fin de año', text: 'Brillos, confeti y tono festivo con tu marca.' },
		],
		body: [
			'Una invitación digital para tu evento corporativo transmite profesionalismo desde el primer clic. Tus invitados ven la agenda, se registran y llegan con la ubicación exacta, mientras tu equipo controla el aforo.',
		],
		faqs: [
			{
				q: '¿Pueden adaptar el diseño a nuestro manual de marca?',
				a: 'Sí. Trabajamos con tus colores, tipografías y logotipos oficiales.',
			},
			{
				q: '¿Se puede hacer una invitación en dos idiomas?',
				a: 'Sí, preparamos versiones en español e inglés para eventos con invitados internacionales.',
			},
		],
		whatsappMessage: '¡Hola Invitard! Quiero invitaciones digitales para un evento de mi empresa 💼',
	},
];

export function categoriesByGroup(groupId: GroupId): Category[] {
	return categories.filter((c) => c.group === groupId);
}

export function groupOf(category: Category): CategoryGroup {
	return groups.find((g) => g.id === category.group)!;
}

export function categoryPath(category: Pick<Category, 'slug'>): string {
	return `/invitaciones/${category.slug}/`;
}
