import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { service } from "../../data/Servicios";

const SITE_URL = "https://www.notariaramirez.com.pe";
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_SOCIAL_IMAGE_ALT = "Notaría Ramírez en Lince, Lima";

const homeSeo = {
  title: "Notaría Ramírez en Lince | Servicios notariales en Lima",
  description:
    "Notaría Alejandro Ramírez Carranza en Lince. Servicios notariales: compraventa, poderes, legalizaciones, sucesiones, testamentos, constitución de empresas y más.",
  canonical: `${SITE_URL}/`,
  schema: {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Notaría Alejandro Ramírez Carranza",
    url: `${SITE_URL}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. César Vallejo 290",
      addressLocality: "Lince",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    areaServed: "Lima, Perú",
    telephone: ["+51-1-222-6281", "+51-1-256-5990"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  },
};

const seoByPath = {
  "/": homeSeo,
  "/nosotros": {
    title: "Sobre la Notaría Alejandro Ramírez Carranza | Notaría en Lince",
    description:
      "Conoce la trayectoria de la Notaría Alejandro Ramírez Carranza en Lince, su experiencia notarial, misión, visión y compromiso con la seguridad jurídica.",
    canonical: `${SITE_URL}/nosotros`,
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre la Notaría Alejandro Ramírez Carranza",
      url: `${SITE_URL}/nosotros`,
      about: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        founder: {
          "@type": "Person",
          name: "Alejandro Ramírez Carranza",
          jobTitle: "Notario de Lima",
        },
      },
    },
  },
  "/servicios": {
    title: "Servicios notariales en Lince | Notaría Ramírez",
    description:
      "Servicios notariales en Lince: compraventa, arrendamiento, legalizaciones, poderes, sucesiones, testamentos, constitución de empresas y más.",
    canonical: `${SITE_URL}/servicios`,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Servicios notariales de la Notaría Alejandro Ramírez Carranza",
      url: `${SITE_URL}/servicios`,
      about: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
      },
    },
  },
  "/ubicanos": {
    title: "Ubicación de Notaría Ramírez en Lince | Av. César Vallejo 290",
    description:
      "Encuentra la Notaría Alejandro Ramírez Carranza en Av. César Vallejo 290, Lince. Consulta ubicación, mapa y horario de atención.",
    canonical: `${SITE_URL}/ubicanos`,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Ubicación de la Notaría Alejandro Ramírez Carranza",
      url: `${SITE_URL}/ubicanos`,
      about: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        telephone: ["+51-1-222-6281", "+51-1-256-5990"],
      },
    },
  },
  "/contacto": {
    title: "Contacto | Notaría Ramírez en Lince",
    description:
      "Contacta con la Notaría Alejandro Ramírez Carranza en Lince. Teléfonos, anexos, correos y atención para consultas y trámites notariales.",
    canonical: `${SITE_URL}/contacto`,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contacto de la Notaría Alejandro Ramírez Carranza",
      url: `${SITE_URL}/contacto`,
      about: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
        telephone: ["+51-1-222-6281", "+51-1-256-5990"],
        email: [
          "alejandra@notariaramirez.com.pe",
          "joseramirez@notariaramirez.com.pe",
          "legaliza@notariaramirez.com.pe",
          "kardex@notariaramirez.com.pe",
        ],
      },
    },
  },
  "/libro-reclamaciones": {
    title: "Libro de Reclamaciones | Notaría Ramírez en Lince",
    description:
      "Registra reclamos o quejas en el Libro de Reclamaciones de la Notaría Alejandro Ramírez Carranza, ubicada en Lince, Lima.",
    canonical: `${SITE_URL}/libro-reclamaciones`,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Libro de Reclamaciones de la Notaría Alejandro Ramírez Carranza",
      url: `${SITE_URL}/libro-reclamaciones`,
      about: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
      },
    },
  },
};

const getServiceSeo = (pathname) => {
  const match = pathname.match(/^\/servicios\/([^/]+)$/);
  if (!match) return null;

  const currentService = service.find((item) => item.slug === match[1]);
  if (!currentService) return null;

  const title = `${currentService.titulo} | Notaría Ramírez en Lince`;
  const description = `Conoce los requisitos del servicio notarial de ${currentService.titulo} en la Notaría Alejandro Ramírez Carranza, ubicada en Lince, Lima.`;
  const canonical = `${SITE_URL}/servicios/${currentService.slug}`;

  return {
    title,
    description,
    canonical,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: currentService.titulo,
      url: canonical,
      provider: {
        "@type": "LegalService",
        name: "Notaría Alejandro Ramírez Carranza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. César Vallejo 290",
          addressLocality: "Lince",
          addressRegion: "Lima",
          addressCountry: "PE",
        },
      },
      areaServed: "Lima, Perú",
    },
  };
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const upsertSchema = (schema) => {
  let element = document.head.querySelector("#route-seo-schema");
  if (!element) {
    element = document.createElement("script");
    element.id = "route-seo-schema";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getServiceSeo(pathname) ?? seoByPath[pathname] ?? homeSeo;

    document.title = seo.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: seo.canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: seo.image ?? DEFAULT_SOCIAL_IMAGE,
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: seo.imageAlt ?? DEFAULT_SOCIAL_IMAGE_ALT,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "630",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: seo.image ?? DEFAULT_SOCIAL_IMAGE,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: seo.imageAlt ?? DEFAULT_SOCIAL_IMAGE_ALT,
    });
    upsertCanonical(seo.canonical);
    upsertSchema(seo.schema);
  }, [pathname]);

  return null;
};

export default SeoManager;
