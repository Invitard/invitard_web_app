# Invitard · Web de invitaciones digitales

Sitio estático (Astro 7) de **Invitard**: invitaciones digitales web para bodas, quinceaños,
cumpleaños, baby shower, mascotas, sacramentos, fiestas patronales, yunsas y eventos institucionales.

## Desarrollo

```sh
npm install
npx astro dev --background   # servidor de desarrollo
npm run build                # genera dist/
npm run preview
```

## Dónde editar el contenido

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site-url.mjs` | Dominio y base path del despliegue |
| `src/data/site.ts` | WhatsApp, correo, ciudad, redes sociales (**revisar los TODO**) |
| `src/data/categories.ts` | Grupos y categorías: textos SEO, beneficios, estilos y FAQ de cada página |
| `src/data/content.ts` | Planes y precios, complementos, catálogo de modelos, proceso y FAQ generales |

Cada categoría genera su página en `/invitaciones/<slug>/` automáticamente.

## SEO incluido

- Título, descripción, canonical, Open Graph y Twitter Card por página (imagen OG propia por categoría).
- JSON-LD: `ProfessionalService`, `WebSite`, `Service` con ofertas, `OfferCatalog`, `FAQPage`,
  `BreadcrumbList`, `CollectionPage`.
- `sitemap-index.xml`, `robots.txt`, `llms.txt` y `manifest.webmanifest`.
- Imágenes AVIF/WebP responsivas; la imagen principal se carga con `fetchpriority="high"`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica en cada `push` a `main`.

Configuración única en GitHub (repo `Invitard/invitard_web_app`):
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

URL resultante: https://invitard.github.io/invitard_web_app/

### Dominio propio (recomendado para SEO)

1. En `src/data/site-url.mjs`: `SITE_URL = 'https://tudominio.com'` y `BASE_PATH = '/'`.
2. Crea `public/CNAME` con el dominio (una sola línea).
3. Configura el DNS y el dominio en *Settings → Pages*.

Con dominio propio, `robots.txt` queda en la raíz del dominio. En una URL de proyecto
(`*.github.io/<repo>/`) los buscadores no lo leen, así que envía el sitemap desde Google Search Console.

## Créditos de fotografía

Fotos de stock de [Unsplash](https://unsplash.com/license) (licencia libre), en `src/assets/stock/`.
Los modelos del catálogo se basan en trabajos de Invitard, sin datos personales de clientes.
