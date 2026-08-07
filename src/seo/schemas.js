/* JSON-LD schema builders. Imported by pages that need rich structured data. */

const SITE_NAME = "Codilated";
const SITE_DESCRIPTION =
  "Codilated is an AI-first digital agency building AI automation, websites and web apps, Shopify and WordPress stores, branding, social media and marketing that grows revenue.";

/** Kept in sync with src/data/services.js. Powers the ProfessionalService offer catalogue. */
const SERVICE_CATALOGUE = [
  ["AI Automation & Process Optimization", "/services/ai-automation"],
  ["Conversational AI & Voice Agents", "/services/conversational-ai"],
  ["Custom AI Web & SaaS Development", "/services/custom-ai-development"],
  ["AI Data & Predictive Analytics", "/services/ai-data-analytics"],
  ["Full-Stack Web & App Development", "/services/web-development"],
  ["Shopify & E-Commerce Development", "/services/shopify-ecommerce"],
  ["WordPress Design & Development", "/services/wordpress-development"],
  ["Social Media Marketing & Management", "/services/social-media-marketing"],
  ["Digital Marketing, SEO & Paid Ads", "/services/digital-marketing"],
  ["Branding & Creative Design", "/services/branding-design"],
];

const getOrigin = () =>
  typeof window !== "undefined" ? window.location.origin : "";

export const organizationSchema = () => {
  const origin = getOrigin();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${origin}#organization`,
    name: SITE_NAME,
    url: origin || "https://codilated.com",
    logo: `${origin}/logo.png`,
    image: `${origin}/og-image.png`,
    description: SITE_DESCRIPTION,
    email: "info@codilated.com",
    telephone: "+1-805-251-9188",
    priceRange: "$$",
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "AI automation",
      "Conversational AI and voice agents",
      "Machine learning and predictive analytics",
      "Full-stack web development",
      "Shopify and e-commerce development",
      "WordPress and WooCommerce development",
      "Social media marketing",
      "Search engine optimisation",
      "Paid advertising",
      "Branding and visual identity design",
    ],
    sameAs: [
      "https://www.linkedin.com/company/codilated",
      "https://twitter.com/codilated",
      "https://github.com/codilated",
      "https://www.instagram.com/codilated",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Codilated Services",
      itemListElement: SERVICE_CATALOGUE.map(([name, slug]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          url: `${origin}${slug}`,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-805-251-9188",
      contactType: "sales",
      email: "info@codilated.com",
      availableLanguage: ["en"],
      areaServed: "Worldwide",
    },
  };
};

export const websiteSchema = () => {
  const origin = getOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}#website`,
    url: origin || "https://codilated.com",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${origin}#organization` },
    inLanguage: "en-US",
  };
};

export const serviceSchema = ({ name, description, slug, serviceType }) => {
  const origin = getOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    provider: { "@id": `${origin}#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    url: `${origin}${slug}`,
  };
};

export const articleSchema = ({
  title,
  description,
  slug,
  author,
  datePublished,
  category,
  image,
}) => {
  const origin = getOrigin();
  const url = `${origin}${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${origin}/og-image.png`,
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Person", name: author },
    publisher: { "@id": `${origin}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: category,
    inLanguage: "en-US",
  };
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${getOrigin()}${item.path}`,
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
});
