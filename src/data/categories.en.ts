/**
 * English version of the categories. Keyed by the Spanish slug (the category id).
 * `slug` is the English URL: /en/invitations/<slug>/
 */
import type { Category, CategoryGroup, GroupId } from './categories';

type CategoryText = Pick<
	Category,
	| 'name'
	| 'eventLabel'
	| 'seoTitle'
	| 'metaDescription'
	| 'h1'
	| 'lead'
	| 'imageAlt'
	| 'keywords'
	| 'highlights'
	| 'styles'
	| 'body'
	| 'faqs'
	| 'whatsappMessage'
> & { slug: string };

export const groupsEn: Record<GroupId, Pick<CategoryGroup, 'name' | 'kicker' | 'description'>> = {
	sociales: {
		name: 'Social celebrations',
		kicker: 'To toast, dance and blow out the candles',
		description:
			'Weddings, quinceañeras, birthdays, baby showers and even your pet’s birthday: invitations with music, a countdown and one-tap RSVP.',
	},
	fe: {
		name: 'Sacraments and faith',
		kicker: 'Sacred moments, shared with love',
		description:
			'Baptisms, first communions, confirmations and religious celebrations with a serene design, church details, godparents and reception.',
	},
	tradicion: {
		name: 'Traditional festivals',
		kicker: 'Our customs, now on your phone',
		description:
			'Patron saint festivals and yunsas (cortamontes) with the full program, hosts, godparents, bands and the location of every day.',
	},
	institucional: {
		name: 'Institutional and corporate',
		kicker: 'Flawless protocol, professional image',
		description:
			'Official ceremonies, institutional anniversaries, launches and corporate events with guest registration and agenda.',
	},
};

export const categoriesEn: Record<string, CategoryText> = {
	bodas: {
		slug: 'weddings',
		name: 'Weddings',
		eventLabel: 'your wedding',
		seoTitle: 'Digital Wedding Invitations | Website with RSVP & Music',
		metaDescription:
			'Elegant digital wedding invitations: animated envelope, countdown, church and reception maps, gift registry and RSVP via WhatsApp. Made for couples worldwide.',
		h1: 'Digital wedding invitations',
		lead:
			'A web invitation that opens like an envelope, plays your song and guides every guest to the ceremony and reception without getting lost. You enjoy the day; we take care of the details.',
		imageAlt: 'Newlywed couple smiling and walking hand in hand in a garden',
		keywords: [
			'digital wedding invitations',
			'wedding invitation website',
			'online wedding invitations',
			'wedding invitation with RSVP',
			'WhatsApp wedding invitation',
		],
		highlights: [
			{ title: 'Animated opening envelope', text: 'The invitation opens like a real letter, with a wax seal and your initials.' },
			{ title: 'Ceremony and reception', text: 'Direct Google Maps buttons for the church, the civil ceremony and the party venue.' },
			{ title: 'Parents and sponsors', text: 'A thoughtful section to name the people standing with you at the altar.' },
			{ title: 'Gift registry and cash gifts', text: 'Bank accounts or payment apps with a button to copy the details.' },
			{ title: 'Personalized pass', text: 'Links with each guest’s name and the number of reserved seats.' },
			{ title: 'Dress code', text: 'Suggested palette and colors reserved for the couple, explained with elegance.' },
		],
		styles: [
			{ name: 'Timeless classic', text: 'Fine serif, ivory and soft gold, discreet ornaments.' },
			{ name: 'Botanical garden', text: 'Watercolor leaves and flowers, ideal for daytime or countryside weddings.' },
			{ name: 'Modern minimal', text: 'Plenty of white space, bold typography and one powerful photo.' },
		],
		body: [
			'A wedding brings whole families together, often from different cities and countries. That’s why your digital wedding invitation has to work perfectly on any phone, load fast even on a weak signal and answer the usual questions: what time?, where is it?, how do I get there?, what should I wear?',
			'At Invitard we design every wedding invitation from scratch with your names, your story and your palette. We include a countdown to the big day, background music with your song, a pre-wedding photo gallery and RSVP via WhatsApp so you can manage your guest list without spreadsheets.',
		],
		faqs: [
			{
				q: 'Can I add two locations, church and reception?',
				a: 'Yes. Each venue gets its own Google Maps button with its time; we can also add the civil ceremony.',
			},
			{
				q: 'Can it be personalized with each guest’s name?',
				a: 'Yes. We create personalized links that show the family’s name and the number of seats assigned.',
			},
			{
				q: 'How do I add details for cash gifts?',
				a: 'Send us your account numbers or payment app details and we display them with a one-tap copy button.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a digital wedding invitation 💍',
	},
	quinceanos: {
		slug: 'quinceanera',
		name: 'Quinceañeras',
		eventLabel: 'your quinceañera',
		seoTitle: 'Digital Quinceañera Invitations | Sweet 15 Website',
		metaDescription:
			'Digital quinceañera invitations with itinerary, waltz, sponsors, dress code, countdown and RSVP via WhatsApp. Unique designs for your XV años.',
		h1: 'Digital quinceañera invitations',
		lead:
			'Your night deserves a grand entrance. We design quinceañera invitations with your colors, your favorite quote and the party itinerary, ready to share in a single link.',
		imageAlt: 'Party hall decorated with chandeliers and round tables for a quinceañera celebration',
		keywords: [
			'digital quinceañera invitations',
			'quinceañera invitation website',
			'XV años invitations online',
			'sweet 15 digital invitation',
		],
		highlights: [
			{ title: 'Night itinerary', text: 'Reception, grand entrance, waltz, dinner and surprise, in an animated timeline.' },
			{ title: 'Parents and sponsors', text: 'Special recognition for your family and godparents.' },
			{ title: 'Your own color palette', text: 'We bring your palette (lilac, gold, sky blue…) to every detail.' },
			{ title: 'Your quote and your music', text: 'Your waltz song in the background and your favorite quote on the cover.' },
			{ title: 'Dress code', text: 'Clear illustrated dress guidelines for your guests.' },
			{ title: 'Gift section', text: 'Payment apps or wish list with a copy button.' },
		],
		styles: [
			{ name: 'Floral princess', text: 'Watercolor flowers, pastel tones and subtle sparkle.' },
			{ name: 'Night glam', text: 'Dark background, gold glitter and gala typography.' },
			{ name: 'Fresh & cool', text: 'Bright colors, stickers and playful animations.' },
		],
		body: [
			'A quinceañera is one of the most anticipated parties, and the invitation is the first preview of what’s coming. A digital quinceañera invitation lets you include everything a printed card can’t: the full itinerary, the waltz song, photos from your shoot and real-time RSVP.',
			'We work with you and your family so the design reflects your personality. And since it’s a link, you can share it on WhatsApp, Instagram or TikTok the same day it’s ready.',
		],
		faqs: [
			{
				q: 'Can I use my own color palette?',
				a: 'Of course. Send us your colors (even as hex codes) and we adapt backgrounds, buttons and ornaments.',
			},
			{
				q: 'Can the waltz song be included?',
				a: 'Yes, with a player the guest starts with one tap, respecting the phone’s silent mode.',
			},
			{
				q: 'Can you add a gallery from my photo shoot?',
				a: 'Yes. We optimize the photos so they load fast even on mobile data.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a digital quinceañera invitation 👑',
	},
	cumpleanos: {
		slug: 'birthday',
		name: 'Birthdays',
		eventLabel: 'your birthday',
		seoTitle: 'Digital Birthday Invitations | Kids & Adults',
		metaDescription:
			'Digital birthday invitations for kids and adults: custom themes, countdown, map, music and RSVP via WhatsApp. Share them in one link.',
		h1: 'Digital birthday invitations',
		lead:
			'From the first birthday to the eighties and beyond: themed, fun or elegant birthday invitations your guests will want to open twice.',
		imageAlt: 'Colorful balloons floating at a birthday party',
		keywords: [
			'digital birthday invitations',
			'online kids birthday invitation',
			'WhatsApp birthday invitation',
			'themed birthday invitations',
		],
		highlights: [
			{ title: 'Custom themes', text: 'Enchanted forest, soccer, princesses, dinosaurs, disco… whatever you imagine.' },
			{ title: 'Shared birthdays', text: 'Double designs for siblings, couples or grandparents celebrating together.' },
			{ title: 'Calendar and countdown', text: 'The date marked on a calendar and the seconds left until the party.' },
			{ title: 'One-tap RSVP', text: 'Guests confirm via WhatsApp with a pre-written message.' },
			{ title: 'Background music', text: 'The birthday person’s favorite song, with a pause button.' },
			{ title: 'Memories gallery', text: 'Photos of the birthday person through the years.' },
		],
		styles: [
			{ name: 'Illustrated kids', text: 'Characters, primary colors and playful animations.' },
			{ name: 'Disco party', text: 'Shiny disco balls, neon and giant number balloons.' },
			{ name: 'Elegant adult', text: 'Sober typography, deep tones and gold details.' },
		],
		body: [
			'A digital birthday invitation is shared in seconds on WhatsApp and reaches everyone at the same time. No more cards lost in a backpack: your guests always have the address, time and map at hand.',
			'We’ve created storybook-themed kids’ birthday invitations, double birthdays with number balloons and stylish 60th and 65th birthday parties. Every design is original and adapted to the age and personality of the birthday person.',
		],
		faqs: [
			{
				q: 'Do you make invitations for adult birthdays?',
				a: 'Yes. From 18 to 90, with elegant, fun or themed styles depending on the celebration.',
			},
			{
				q: 'Can one invitation be for two birthday people?',
				a: 'Yes, we design double invitations with each person’s name and age and a theme for each.',
			},
			{
				q: 'How long does a birthday invitation take?',
				a: 'Usually 2 to 4 business days after we receive the details, depending on the plan.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a digital birthday invitation 🎂',
	},
	'baby-shower': {
		slug: 'baby-shower',
		name: 'Baby showers',
		eventLabel: 'your baby shower',
		seoTitle: 'Digital Baby Shower & Gender Reveal Invitations',
		metaDescription:
			'Digital baby shower and gender reveal invitations: sweet designs, gift registry, map, countdown and RSVP via WhatsApp.',
		h1: 'Digital baby shower invitations',
		lead:
			'Welcome the baby with tenderness: baby shower and gender reveal invitations with a gift registry and instant RSVP.',
		imageAlt: 'Newborn baby feet wrapped in a white blanket',
		keywords: [
			'digital baby shower invitations',
			'gender reveal invitation',
			'online baby shower invitation',
			'WhatsApp baby shower invitation',
		],
		highlights: [
			{ title: 'Gender reveal', text: 'An interactive surprise: boy or girl? revealed with one tap.' },
			{ title: 'Gift registry', text: 'Diapers by size, store registries or contributions via payment apps.' },
			{ title: 'Ultrasound or photo shoot', text: 'A soft gallery with the baby’s first pictures.' },
			{ title: 'Games and activities', text: 'Preview the baby shower games or let guests place their bets.' },
		],
		styles: [
			{ name: 'Clouds and stars', text: 'Sky blues and whites, soft illustrations.' },
			{ name: 'Baby safari', text: 'Watercolor animals, greens and sand tones.' },
			{ name: 'Natural neutral', text: 'Earth tones, dried leaves and handwritten type.' },
		],
		body: [
			'A baby shower is an intimate celebration full of love. A digital invitation puts the gift registry and the location in one place, so the mom-to-be doesn’t have to answer dozens of messages.',
			'If you’re also revealing the baby’s gender, we create an interactive reveal for those who can’t attend in person.',
		],
		faqs: [
			{
				q: 'Can you design a gender reveal?',
				a: 'Yes. We can keep the surprise until the day of the event and update the invitation with the result.',
			},
			{
				q: 'Can I share a gift registry?',
				a: 'Yes, with links to stores, suggested diaper sizes or details for transfers.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a digital baby shower invitation 🍼',
	},
	mascotas: {
		slug: 'pet-birthday',
		name: 'Pet birthdays',
		eventLabel: 'your pet’s birthday',
		seoTitle: 'Digital Pet Birthday Invitations | Dog & Cat Party',
		metaDescription:
			'Digital invitations for your dog’s, cat’s or any pet’s birthday. Fun designs with their photo, pet party rules, map and RSVP via WhatsApp.',
		h1: 'Invitations for your pet’s birthday',
		lead:
			'Because they’re family too: birthday invitations for dogs, cats, bunnies and any furry friend who deserves a pet party.',
		imageAlt: 'Smiling beagle puppy with its tongue out looking at the camera',
		keywords: ['dog birthday invitation', 'cat birthday invitation', 'pet party invitation', 'digital pet invitation'],
		highlights: [
			{ title: 'Furry star', text: 'Their photo, name and “human years” on the cover.' },
			{ title: 'Pet party rules', text: 'Leash, vaccines up to date and allowed snacks, explained with humor.' },
			{ title: 'Four-legged guests', text: 'The RSVP asks for both the human’s and the pet’s name.' },
			{ title: 'Treat wish list', text: 'Toys, snacks or donations to a shelter as gifts.' },
		],
		styles: [
			{ name: 'Pop paws', text: 'Cheerful colors, paw prints and animated bones.' },
			{ name: 'Cat chic', text: 'Elegant, with whiskers, yarn balls and soft tones.' },
			{ name: 'Picnic in the park', text: 'Green, checkered tablecloth and afternoon sun.' },
		],
		body: [
			'Celebrating your pet’s birthday is more and more common, and a digital invitation is the most fun way to gather their friends (and their humans). We make their photo the star and adapt the text to their personality.',
			'We design for dogs, cats, bunnies, hamsters and any companion. Also for “gotcha days” and welcome parties for new furry family members.',
		],
		faqs: [
			{
				q: 'Do you make invitations for cats or other pets?',
				a: 'Yes, for any pet: cats, bunnies, hamsters, birds… We adapt illustrations and texts to each species.',
			},
			{
				q: 'Can we celebrate an adoption anniversary?',
				a: 'Of course. We make invitations for “gotcha days” and welcome parties for new pets.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like an invitation for my pet’s birthday 🐶🐱',
	},
	bautizo: {
		slug: 'baptism',
		name: 'Baptisms',
		eventLabel: 'the baptism',
		seoTitle: 'Digital Baptism & Christening Invitations',
		metaDescription:
			'Digital baptism invitations with church details, godparents, reception, map and RSVP via WhatsApp. Delicate designs for a boy or girl.',
		h1: 'Digital baptism invitations',
		lead:
			'A serene, luminous design for your baby’s first sacrament, with the church, the godparents and the reception in one link.',
		imageAlt: 'Baby sleeping peacefully on a white blanket',
		keywords: [
			'digital baptism invitations',
			'christening invitation online',
			'WhatsApp baptism invitation',
			'baptism invitation boy girl',
		],
		highlights: [
			{ title: 'Church and time', text: 'Name of the church, mass time and Google Maps button.' },
			{ title: 'Godparents', text: 'A special section for the godparents and their full names.' },
			{ title: 'Bible verse or dedication', text: 'A verse or a message from the parents to the baby.' },
			{ title: 'Family reception', text: 'Location and time of the lunch or toast after the ceremony.' },
		],
		styles: [
			{ name: 'White and gold', text: 'Purity, doves and golden details.' },
			{ name: 'Pastel watercolor', text: 'Soft blue or pink, clouds and little angels.' },
			{ name: 'Rustic natural', text: 'Olive branches, linen and cream tones.' },
		],
		body: [
			'A baptism gathers the family around a moment of faith and gratitude. Your digital baptism invitation clearly shows the church, the time and the reception, and leaves room for a special dedication to your baby.',
			'We design baptism invitations for boys, girls and shared baptisms of siblings or cousins.',
		],
		faqs: [
			{
				q: 'Can two babies be in the same invitation?',
				a: 'Yes, we make invitations for shared baptisms with each child’s name and godparents.',
			},
			{
				q: 'Can I add a Bible verse?',
				a: 'Of course. We can suggest verses or use the one you choose.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a digital baptism invitation 🕊️',
	},
	'primera-comunion': {
		slug: 'first-communion',
		name: 'First communions',
		eventLabel: 'the first communion',
		seoTitle: 'Digital First Communion Invitations',
		metaDescription:
			'Digital first communion invitations for boys and girls: church, godparents, reception, map, music and RSVP via WhatsApp.',
		h1: 'Digital first communion invitations',
		lead:
			'A luminous keepsake for an unforgettable day: first communion invitations with every detail of the mass and the celebration.',
		imageAlt: 'Church interior with wooden pews and natural light coming through the windows',
		keywords: [
			'digital first communion invitations',
			'first communion invitation boy',
			'first communion invitation girl online',
			'WhatsApp first communion invitation',
		],
		highlights: [
			{ title: 'Mass and church', text: 'Church, time and location with a Google Maps button.' },
			{ title: 'Communion godparents', text: 'A section dedicated to godparents and catechists.' },
			{ title: 'Photo of the communicant', text: 'Portrait of the boy or girl in a delicate frame.' },
			{ title: 'Reception and lunch', text: 'Details of the family celebration venue.' },
		],
		styles: [
			{ name: 'Chalice and wheat', text: 'Classic symbols in gold on white.' },
			{ name: 'Soft floral', text: 'White and green watercolor flowers.' },
			{ name: 'Modern and clean', text: 'Clear typography and a featured photo.' },
		],
		body: [
			'The first communion is an important step in your child’s life of faith. With a digital invitation you share the date, the church and the celebration with the whole family, even those who live far away.',
			'We also design group invitations for schools and parishes celebrating the first communion of several children on the same day.',
		],
		faqs: [
			{
				q: 'Do you make invitations for group school communions?',
				a: 'Yes, we design one general invitation for the class or the parish with the mass program.',
			},
			{
				q: 'Can a keepsake card be included?',
				a: 'Yes, we add a downloadable keepsake with the photo and date.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a first communion invitation ✨',
	},
	confirmacion: {
		slug: 'confirmation',
		name: 'Confirmations',
		eventLabel: 'the confirmation',
		seoTitle: 'Digital Confirmation Invitations',
		metaDescription:
			'Digital confirmation invitations with ceremony details, sponsor, reception and RSVP via WhatsApp. Youthful yet respectful designs.',
		h1: 'Digital confirmation invitations',
		lead:
			'A youthful, respectful design to reaffirm the faith: ceremony, sponsor and celebration in an invitation shared in seconds.',
		imageAlt: 'White arches and tall windows inside a cathedral',
		keywords: ['digital confirmation invitations', 'catholic confirmation invitation', 'WhatsApp confirmation invitation'],
		highlights: [
			{ title: 'Ceremony with the bishop', text: 'Place, time and details of the liturgical celebration.' },
			{ title: 'Sponsor', text: 'A space to honor the person who accompanies the confirmand.' },
			{ title: 'Dove and fire', text: 'Holy Spirit symbolism woven into the design.' },
			{ title: 'Celebration afterwards', text: 'Location of the family or friends gathering.' },
		],
		styles: [
			{ name: 'Light and dove', text: 'Whites, sky blues and rays of light.' },
			{ name: 'Youthful modern', text: 'Fresh colors and contemporary typography.' },
		],
		body: [
			'Confirmation usually happens in the teenage years, so we design invitations that balance solemnity with a current style the confirmand can relate to.',
		],
		faqs: [
			{
				q: 'Can I choose a more modern style?',
				a: 'Yes. We propose youthful designs without losing the religious meaning of the ceremony.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a quote for a confirmation invitation 🕊️',
	},
	'festividades-religiosas': {
		slug: 'religious-celebrations',
		name: 'Religious celebrations',
		eventLabel: 'the celebration',
		seoTitle: 'Digital Invitations for Religious Celebrations',
		metaDescription:
			'Digital invitations for masses, novenas, processions, parish anniversaries and religious festivities. Full program, locations and RSVP.',
		h1: 'Invitations for religious celebrations',
		lead:
			'Novenas, memorial masses, processions and parish anniversaries: share the full program with your community in a dignified, clear invitation.',
		imageAlt: 'Light blue wooden chapel with a bell tower surrounded by mountains',
		keywords: ['digital mass invitation', 'online novena invitation', 'religious festivity invitation', 'procession invitation'],
		highlights: [
			{ title: 'Day-by-day program', text: 'Novena, vespers, main mass and procession with their times.' },
			{ title: 'Venerated image', text: 'Photo or illustration of the patron saint or the Virgin.' },
			{ title: 'Organizers', text: 'Brotherhoods, confraternities and host families.' },
			{ title: 'Several locations', text: 'Church, procession route and reception venue.' },
		],
		styles: [
			{ name: 'Andean baroque', text: 'Gold frames and ornaments inspired by altarpieces.' },
			{ name: 'Solemn sober', text: 'Dark background, candlelight and classic typography.' },
		],
		body: [
			'Religious celebrations bring together families, brotherhoods and entire communities. A digital invitation lets you publish each day’s program and update it if a time changes, something impossible with a printed poster.',
		],
		faqs: [
			{
				q: 'Can the program be updated after sending it?',
				a: 'Yes. Since it’s a web page, the link stays the same and changes show up instantly.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a digital invitation for a religious celebration ⛪',
	},
	'fiestas-patronales': {
		slug: 'patron-saint-festivals',
		name: 'Patron saint festivals',
		eventLabel: 'the patron saint festival',
		seoTitle: 'Digital Invitations for Patron Saint Festivals',
		metaDescription:
			'Digital invitations for patron saint festivals: day-by-day program, hosts (mayordomos), bands, dance groups, locations and RSVP via WhatsApp.',
		h1: 'Digital invitations for patron saint festivals',
		lead:
			'Mayordomos, alferados and sponsors: announce your festival with a clear program, photos of the saint and the route of each day. Tradition that reaches everyone, even friends and family living far away.',
		imageAlt: 'Overhead view of a dance floor full of people dancing at a party',
		keywords: [
			'patron saint festival invitation',
			'fiesta patronal invitation',
			'mayordomo invitation',
			'traditional festival digital invitation',
		],
		highlights: [
			{ title: 'Festival program', text: 'Eve, main day and farewell: each day with its schedule.' },
			{ title: 'Hosts and sponsors', text: 'The names of those taking on the role, with the honor they deserve.' },
			{ title: 'Bands and dance groups', text: 'Orchestras, traditional bands and guest dances.' },
			{ title: 'For those far away', text: 'Live stream or gallery for those celebrating from a distance.' },
		],
		styles: [
			{ name: 'Folk tradition', text: 'Bright colors, Andean textiles and festive typography.' },
			{ name: 'Retablo', text: 'Inspired by Peruvian folk art and its frames.' },
		],
		body: [
			'Patron saint festivals are the heart of many towns in Peru and Latin America. With a digital invitation, hosts can invite family, friends and fellow townspeople in other cities or abroad with a single WhatsApp message.',
			'We include the full program, the image of the patron saint, sponsors and the locations of the mass, the procession and the party.',
		],
		faqs: [
			{
				q: 'Can several hosts or sponsors be listed?',
				a: 'Yes, we organize mayordomos, alferados, band and fireworks sponsors and other roles in clear sections.',
			},
			{
				q: 'Can the invitation include a multi-day program?',
				a: 'Yes, each day has its own section with activities, times and locations.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a digital invitation for our patron saint festival 🎺',
	},
	yunsas: {
		slug: 'yunsa-cortamonte',
		name: 'Yunsas and cortamontes',
		eventLabel: 'the yunsa',
		seoTitle: 'Digital Invitations for Yunsa & Cortamonte',
		metaDescription:
			'Digital invitations for Andean carnival yunsas and cortamontes: tree godparents, program, music, location and RSVP. Designs with Andean identity.',
		h1: 'Digital invitations for yunsas and cortamontes',
		lead:
			'The tree loaded with gifts, carnival music and the godparents with their axe: yunsa invitations full of Andean color so nobody misses the celebration.',
		imageAlt: 'Brightly colored balloons tied with ribbons, like the ones decorating a yunsa',
		keywords: ['yunsa invitation', 'cortamonte invitation', 'Andean carnival invitation', 'yunsa godparents invitation'],
		highlights: [
			{ title: 'Yunsa godparents', text: 'This year’s godparents and the announcement of next year’s.' },
			{ title: 'Carnival program', text: 'Planting the tree, dancing around it and cutting it down.' },
			{ title: 'Music and dance groups', text: 'Huaylarsh, carnival music and guest orchestras.' },
			{ title: 'Location and time', text: 'A direct button to where the tree is planted.' },
		],
		styles: [
			{ name: 'Andean carnival', text: 'Streamers, flowers and intense colors.' },
			{ name: 'Traditional textile', text: 'Patterns inspired by Andean blankets and sashes.' },
		],
		body: [
			'The yunsa, also called cortamonte or unsha, is one of the most joyful carnival traditions of the Andes. We design invitations that respect its identity: bright colors, music and the godparents in the spotlight.',
		],
		faqs: [
			{
				q: 'Can you design with Andean motifs?',
				a: 'Yes. We work with illustrations and patterns inspired by the region’s textiles and folk art.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like a digital invitation for our yunsa 🌳🎉',
	},
	'ceremonias-oficiales': {
		slug: 'official-ceremonies',
		name: 'Official ceremonies',
		eventLabel: 'the ceremony',
		seoTitle: 'Digital Invitations for Official Ceremonies',
		metaDescription:
			'Formal digital invitations for official ceremonies, institutional anniversaries, graduations and inaugurations. Guest registration and agenda.',
		h1: 'Digital invitations for official ceremonies',
		lead:
			'Institutional anniversaries, swearing-in ceremonies, graduations and inaugurations: invitations with protocol, official logos and attendance registration.',
		imageAlt: 'Auditorium with an audience seated in front of a stage during a ceremony',
		keywords: [
			'official ceremony digital invitation',
			'formal protocol invitation',
			'institutional anniversary invitation',
			'digital graduation invitation',
		],
		highlights: [
			{ title: 'Protocol and order', text: 'Official program with anthem, speeches and awards.' },
			{ title: 'Institutional identity', text: 'Logos, crests and official colors respected to the detail.' },
			{ title: 'Guest registration', text: 'Form with name, position and organization.' },
			{ title: 'Invited authorities', text: 'A section for hosts and attending authorities.' },
		],
		styles: [
			{ name: 'Institutional', text: 'Sober, orderly and in the organization’s colors.' },
			{ name: 'Gala', text: 'Dark background, gold and classic typography.' },
		],
		body: [
			'Municipalities, schools, universities and associations rely on digital invitations to save on printing and reach every guest on time. We design formal pieces that respect each institution’s visual identity.',
		],
		faqs: [
			{
				q: 'Do you issue payment receipts for institutions?',
				a: 'Message us on WhatsApp with the institution’s details and we’ll tell you the receipt options available.',
			},
			{
				q: 'Can you send personalized invitations to each authority?',
				a: 'Yes, we generate links with each guest’s name and position.',
			},
		],
		whatsappMessage: 'Hi Invitard! I need digital invitations for an official ceremony 🏛️',
	},
	'eventos-empresariales': {
		slug: 'corporate-events',
		name: 'Corporate events',
		eventLabel: 'your event',
		seoTitle: 'Digital Invitations for Corporate Events',
		metaDescription:
			'Digital invitations for corporate events: product launches, company anniversaries, year-end parties, conferences and networking. Agenda and registration.',
		h1: 'Digital invitations for corporate events',
		lead:
			'Launches, company anniversaries, year-end parties and conferences: invitations with your brand, agenda and guest registration ready for your team.',
		imageAlt: 'Attendees seated in an auditorium during a business conference',
		keywords: [
			'corporate event invitation',
			'digital business invitation',
			'product launch invitation',
			'company holiday party invitation',
		],
		highlights: [
			{ title: 'Your brand at the center', text: 'Your company’s colors, typefaces and logo.' },
			{ title: 'Event agenda', text: 'Speakers, times and networking blocks.' },
			{ title: 'Registration and capacity', text: 'Sign-up form to control capacity.' },
			{ title: 'Add to calendar', text: 'A button to save the event in Google Calendar or Outlook.' },
		],
		styles: [
			{ name: 'Clean corporate', text: 'Orderly, readable and aligned with your brand guidelines.' },
			{ name: 'Year-end party', text: 'Sparkle, confetti and a festive tone with your brand.' },
		],
		body: [
			'A digital invitation for your corporate event conveys professionalism from the first click. Guests see the agenda, register and arrive at the exact location, while your team keeps track of capacity.',
		],
		faqs: [
			{
				q: 'Can you adapt the design to our brand guidelines?',
				a: 'Yes. We work with your official colors, typefaces and logos.',
			},
			{
				q: 'Can the invitation be in two languages?',
				a: 'Yes, we prepare versions in English, Spanish or any language your guests need.',
			},
		],
		whatsappMessage: 'Hi Invitard! I’d like digital invitations for a company event 💼',
	},
};
