export type ProductStatus = 'pilot' | 'live' | 'studio' | 'beta';

export interface SocialLink {
  icon: 'qi' | 'linkedin' | 'github' | 'xcom';
  url: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Product {
  name: string;
  tagline: string;
  url: string;
  status: ProductStatus;
  tags: string[];
  cta: string;
}

export const content = {
  meta: {
    title: 'Noematic — Software Engineering & Applied AI',
    description:
      'Distributed systems, RAG pipelines, and SaaS products — built in Go from Avrillé, France.',
  },
  hero: {
    title: 'Engineering studio',
    subtitle: '15+ years building distributed, data-intensive systems',
    description:
      'We design and ship backend platforms, applied AI, and indie SaaS — from architecture to production.',
  },
  services: {
    title: 'What we do',
    subtitle:
      'Senior engineering for teams that need production-grade systems, not slide decks.',
    items: [
      {
        icon: '☁',
        title: 'Distributed systems & cloud',
        description:
          'Go backends, Kubernetes, AWS/GCP — high-concurrency APIs, observability, and cost-aware infrastructure.',
        tags: ['Go', 'Kubernetes', 'AWS', 'OpenTelemetry'],
      },
      {
        icon: '◈',
        title: 'Applied AI & RAG',
        description:
          'Retrieval pipelines, agents, and hybrid search — self-hosted, evaluable, GDPR-conscious.',
        tags: ['RAG', 'Embeddings', 'Ollama', 'Vector search'],
      },
      {
        icon: '⬡',
        title: 'SaaS product engineering',
        description:
          'From prototype to paying beta — auth, billing hooks, landing pages, and dogfood-ready deploys.',
        tags: ['SaaS', 'Fiber', 'PostgreSQL', 'Docker'],
      },
      {
        icon: '◎',
        title: 'Desktop & data tools',
        description:
          'Cross-platform apps with native GUIs, embedded storage, and offline-first workflows.',
        tags: ['Fyne', 'Badger', 'Rust', 'CLI'],
      },
    ] satisfies Service[],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Product updates, engineering notes, and studio behind-the-scenes — once a month, no spam.',
  },
  products: {
    title: 'Tools & products',
    subtitle:
      'Small products for problems I hit myself — pilots and live tools under our control. Honest status, no fake public betas.',
    statusLabels: {
      pilot: 'pilot',
      live: 'live',
      studio: 'studio',
      beta: 'beta',
    } satisfies Record<ProductStatus, string>,
    items: [
      {
        name: 'Living Memoirs',
        tagline:
          "Guide family interviews, structure the story, then chat with the biography — grounded in the author's own words. Product pilot, invite-first.",
        url: 'https://living-memoirs.noematic.eu',
        status: 'pilot',
        tags: ['SaaS', 'AI', 'RGPD'],
        cta: 'Visit site',
      },
      {
        name: 'WatchNoCode',
        tagline:
          'Lightweight RUM for no-code builders — JS errors, failed fetches, and Core Web Vitals without Datadog. Free pilot; no public pricing yet.',
        url: 'https://watchnocode.noematic.eu',
        status: 'pilot',
        tags: ['SaaS', 'Observability', 'Webflow'],
        cta: 'Join the pilot',
      },
      {
        name: 'Ciblo',
        tagline:
          'Inverted marketplace with AI matching — post your need for services, second-hand, or rentals, and get relevant offers. Preprod pilot.',
        url: 'https://ciblo.noematic.eu',
        status: 'pilot',
        tags: ['SaaS', 'AI', 'Marketplace'],
        cta: 'Visit pilot',
      },
      {
        name: 'AI RAG Agent',
        tagline:
          'Self-hosted RAG service in Go — hybrid BM25 + vector search, disk-backed chunks, production eval gates.',
        url: 'https://rag.noematic.eu',
        status: 'live',
        tags: ['Go', 'RAG', 'Open source'],
        cta: 'Explore',
      },
      {
        name: 'Media Cataloger',
        tagline:
          'Fast media library indexing on SSD/NVMe — walk, dedup, birdview, and RAG sync for your personal archive.',
        url: 'https://qi.noematic.eu/apps/media-cataloger',
        status: 'live',
        tags: ['Desktop', 'Go', 'macOS · Win · Linux'],
        cta: 'Download',
      },
      {
        name: 'Qi',
        tagline:
          'Qualitative indie apps & games — our consumer studio for polished desktop and mobile experiences.',
        url: 'https://qi.noematic.eu',
        status: 'studio',
        tags: ['Apps', 'Games', 'Indie'],
        cta: 'Browse apps',
      },
    ] satisfies Product[],
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    email: 'contact@noematic.eu',
    addressLabel: 'Address',
    address: '28 avenue du Maréchal Lyautey 49240 Avrillé, France',
  },
  footer: {
    copyright: '2026 © Noematic. All rights reserved.',
  },
  socialLinks: [
    { icon: 'qi', url: 'https://qi.noematic.eu/', label: 'Qi' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/noematic/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/noematic-eu', label: 'GitHub' },
    { icon: 'xcom', url: 'https://x.com/Noematic_eu', label: 'X' },
  ] satisfies SocialLink[],
};