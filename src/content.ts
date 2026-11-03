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

export interface Fact {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}

export interface ProofItem {
  name: string;
  role: string;
  body: string;
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

export interface Cta {
  label: string;
  href: string;
}

export interface MediaCatalogerPage {
  meta: { title: string; description: string };
  nav: {
    studio: string;
    product: string;
  };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    status: string;
    version: string;
    imageAlt: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  problem: {
    title: string;
    items: { title: string; body: string }[];
  };
  steps: {
    title: string;
    subtitle: string;
    items: { n: string; title: string; body: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
  };
  audience: { title: string; items: string[] };
  pricing: {
    title: string;
    subtitle: string;
    note: string;
    plans: {
      name: string;
      price: string;
      period: string;
      blurb: string;
      featured?: boolean;
      cta: Cta;
      includes: string[];
    }[];
  };
  honesty: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  close: { title: string; body: string; cta: Cta };
}

export const content = {
  meta: {
    title: 'Noematic — Pipeline design and development',
    description:
      'Design and development engineer in Avrillé. Pipelines on Linux, in Go: model, services, tests, production, supervision. Shared time, Angers or remote France.',
  },
  hero: {
    title: 'Design and development',
    subtitle: 'Pipelines on Linux · Go · Angers or remote',
    description:
      'I study an event stream, develop it in Go on Linux, test it, and put it into production. Supervision and documentation close the work. The rest of the calendar I teach and build my own tools — those live on Qi.',
  },
  availability: {
    title: 'How I work',
    subtitle: 'Part-time on purpose — not a disguised full-time CDI.',
    items: [
      {
        title: 'Shared time',
        body: 'I teach at ESPL / My Digital School (SysML, embedded, software) and I build my own projects. The split is not even — not across the week, not across the year. This holds until June 2027.',
      },
      {
        title: 'Angers or remote',
        body: 'Avrillé (49) · full remote France / EU · occasional travel in western France. No exclusive on-site outside the area.',
      },
      {
        title: 'Write',
        body: 'One email with the need. We see if it fits.',
        href: 'mailto:contact@noematic.eu?subject=Mission',
        cta: 'contact@noematic.eu',
      },
    ] satisfies Fact[],
  },
  services: {
    title: 'What I can take on',
    subtitle:
      'A stream to design, or one already in service. Not a product built from scratch, and not a workstation fleet.',
    items: [
      {
        icon: '⌘',
        title: 'Design',
        description:
          'Model of the events, the data, and the split. The stream before the code.',
        tags: ['Streams', 'Data', 'Contracts'],
      },
      {
        icon: '☁',
        title: 'Development',
        description:
          'Go services on Linux: APIs, concurrency, Kafka, Pub/Sub, PostgreSQL.',
        tags: ['Go', 'Kafka', 'PostgreSQL', 'Linux'],
      },
      {
        icon: '◉',
        title: 'Tests and production',
        description:
          'Load with k6, deployment, Kubernetes (EKS, GKE) when the stream runs there.',
        tags: ['k6', 'Kubernetes', 'EKS', 'GKE'],
      },
      {
        icon: '◈',
        title: 'Supervision and documentation',
        description:
          'OpenTelemetry, Prometheus, Grafana, Datadog. The team in place takes the system over.',
        tags: ['OpenTelemetry', 'Prometheus', 'Datadog'],
      },
    ] satisfies Service[],
  },
  proof: {
    title: 'Already in production',
    subtitle: 'Missions, not slides.',
    items: [
      {
        name: 'Objenious',
        role: 'Bouygues Telecom · LoRaWAN IoT',
        body: 'Pipeline designed in Go. Map latency from over 5 s to about 150 ms. Kafka, Pub/Sub, Cassandra, GCP GKE.',
        tags: ['Go', 'Kafka', 'GKE'],
      },
      {
        name: 'ConsenSys Infura',
        role: 'Ethereum node infrastructure',
        body: 'k6 load tests and production rollout of the node fleets on AWS EKS. Sizing, Karpenter, spot instances.',
        tags: ['k6', 'EKS', 'Go'],
      },
      {
        name: 'LivingPackets',
        role: 'Freelance · 2025',
        body: 'Go services fixed in production. Backend documented. Tracing moved from Instana to OpenTelemetry and Datadog.',
        tags: ['Go', 'OTel', 'Datadog'],
      },
      {
        name: 'Alluvial Finance',
        role: 'Freelance · 2025',
        body: 'SMS v2 MVP designed (Go, PostgreSQL), not put into production. Proxy cache measured outside production: 50% to 90% hit rate.',
        tags: ['Go', 'PostgreSQL', 'cache'],
      },
    ] satisfies ProofItem[],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Engineering notes and availability — once a month, no spam.',
  },
  lab: {
    title: 'Apps, games, and tools',
    subtitle:
      'Indie products — disk catalog, games, RAG, PugDB — live on Qi. This site is for missions.',
    url: 'https://qi.noematic.eu',
    cta: 'Browse Qi',
  },
  products: {
    title: 'Tools & products',
    subtitle: '',
    statusLabels: {
      pilot: 'pilot',
      live: 'live',
      studio: 'studio',
      beta: 'beta',
    } satisfies Record<ProductStatus, string>,
    items: [] satisfies Product[],
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    email: 'contact@noematic.eu',
    addressLabel: 'Address',
    address: '28 avenue du Maréchal Lyautey 49240 Avrillé, France',
    note: 'One email with the need is enough.',
  },
  footer: {
    rights: 'All rights reserved.',
    legal: 'Legal',
    legalHref: '/legal/',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    themePrefix: 'Color theme:',
    themeNextSystem: 'Use the system setting.',
    themeNextLight: 'Switch to light.',
    themeNextDark: 'Switch to dark.',
  },
  notFound: {
    title: 'Page not found — Noematic',
    heading: 'Page not found',
    body: 'That address does not exist on noematic.eu.',
    cta: 'Back to home',
  },
  socialLinks: [
    { icon: 'qi', url: 'https://qi.noematic.eu/', label: 'Qi' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/noematic/', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/noematic-eu', label: 'GitHub' },
    { icon: 'xcom', url: 'https://x.com/Noematic_eu', label: 'X' },
  ] satisfies SocialLink[],
  mediaCataloger: {
    meta: {
      title: 'DiskShelf — index disks & libraries | Noematic',
      description:
        'DiskShelf (formerly Media Cataloger): local disk catalog, including offline volumes. Licenses already emailed (0.2 beta) still work. macOS (Swift + nmcui), Windows and Linux (Go).',
    },
    nav: {
      studio: 'Noematic',
      product: 'DiskShelf',
    },
    hero: {
      kicker: 'DiskShelf · formerly Media Cataloger · beta 0.2',
      title: 'Know where your files live — even when the disk is unplugged.',
      lead: 'DiskShelf (formerly Media Cataloger) puts your disks on a local shelf, including volumes that are offline. Search, find duplicates without guessing, see what to plug in. Not a DAM, not iTunes, not a backup app. Any license already emailed (0.2 beta) still works.',
      status: 'beta',
      version: '0.2 · macOS · Windows · Linux · FR/EN',
      imageAlt:
        'Hard drive, SSD, SD card, portable SSD and optical disc on a dark desk',
      primaryCta: { label: 'See plans', href: '#pricing' },
      secondaryCta: { label: 'How it works', href: '#how' },
    },
    problem: {
      title: 'The file is never on the disk that is plugged in.',
      items: [
        {
          title: 'Offline volumes are invisible',
          body: 'USB disks, archives, and old laptops sit in a drawer. Finder only sees what is mounted today.',
        },
        {
          title: 'Copies multiply without a record',
          body: 'The same project lives on a work SSD, a backup HDD, and a NAS. You cannot tell which copy is still the only one.',
        },
        {
          title: 'Cleanup tools are reckless',
          body: 'A “duplicate” in a list is not proof that another readable copy still exists. Deleting from a stale index destroys the original.',
        },
      ],
    },
    steps: {
      title: 'A catalog, then advice — nothing heavy by default.',
      subtitle:
        'Enrichment (previews, ZIP index, content search, AI tags) is opt-in. Walk first; add intelligence when you need it.',
      items: [
        {
          n: '1',
          title: 'Add a media',
          body: 'A folder, an external disk, or a remote host over SSH. Give it a role: work, backup, archive, or staging.',
        },
        {
          n: '2',
          title: 'Walk',
          body: 'Inventory files and folders into a local catalog. The tree stays searchable when the volume is unplugged.',
        },
        {
          n: '3',
          title: 'Search and browse',
          body: 'Find by name, extension, or tag across every cataloged volume — connected or not.',
        },
        {
          n: '4',
          title: 'Act with a safety net',
          body: 'Insights on Home tell you what is stale, full, or uncovered. Duplicate cleanup is locked until you unlock it, and prefers quarantine.',
        },
      ],
    },
    features: {
      title: 'What 0.2 actually does',
      subtitle:
        'Positioning is disks and data — not “dupe finder plus AI”. Optional AI sits behind a switch.',
      items: [
        {
          title: 'Offline catalog',
          body: 'Browse the structure of a disk that is not connected: dates, sizes, paths. Re-walk when you plug it back in.',
        },
        {
          title: 'Search across volumes',
          body: 'Name and extension search over the whole catalog. Tag search when you have organised folders that way.',
        },
        {
          title: 'Safe duplicates',
          body: 'Find copies on one disk or across disks. Delete is off by default. Preflight checks an online second copy; quarantine beats permanent delete.',
        },
        {
          title: 'Disk advisor',
          body: 'Role and type on each volume, then explainable insights: never scanned, nearly full, work data on a slow disk, no backup-role volume.',
        },
        {
          title: 'Backup coverage, not backup',
          body: 'Declare that a work folder should exist on a backup volume. The app watches the catalog after you copy; it does not copy for you.',
        },
        {
          title: 'Remote, RAG, vision — opt-in',
          body: 'SSH walk with nmci, content extract + local RAG agent, and image tags via Ollama or xAI. Studio plan. Nothing of this runs until you ask.',
        },
      ],
    },
    audience: {
      title: 'Built for people with more disks than Finder can hold in its head.',
      items: [
        'Photographers and videographers rotating external disks',
        'Homelabs and personal archives (NAS + USB + leftover laptops)',
        'Small studios mixing work SSDs, backup HDDs, and a share',
        'Anyone who has lost a file “on a disk somewhere”',
      ],
    },
    pricing: {
      title: 'Licenses, fulfilled by email',
      subtitle:
        'The 0.0.1 public builds remain on Qi (Media Cataloger card) until a DiskShelf zip ships. 0.2 is beta: Hobby is free (one volume); Personal and Studio are paid. We send a macOS build (Swift + nmcui), or Windows / Linux (Go) — and a signed key for paid plans. Licenses already sent under the Media Cataloger name still work.',
      note: 'Pay by invoice (SEPA or card, arranged by email). One Personal license is for you, on your machines. Studio covers one operator plus remote/RAG/vision. Prices in euros, excl. VAT if applicable.',
      plans: [
        {
          name: 'Hobby',
          price: '€0',
          period: 'forever',
          blurb: 'Prove the catalog on one volume before you pay.',
          cta: {
            label: 'Request Hobby',
            href: 'mailto:contact@noematic.eu?subject=DiskShelf%20(Media%20Cataloger)%20%E2%80%94%20Hobby',
          },
          includes: [
            '1 local volume',
            'Walk, browse, name search',
            'Offline tree of that volume',
            'Simple mode, FR/EN',
          ],
        },
        {
          name: 'Personal',
          price: '€39',
          period: 'one-time',
          blurb: 'Unlimited local disks — the plan we expect most people to buy.',
          featured: true,
          cta: {
            label: 'Request Personal',
            href: 'mailto:contact@noematic.eu?subject=DiskShelf%20(Media%20Cataloger)%20%E2%80%94%20Personal%20license',
          },
          includes: [
            'Unlimited local volumes',
            'Duplicates + quarantine cleanup',
            'Roles, tags, Home insights',
            'Image previews and ZIP index',
            'Backup-rule coverage watch',
            '1 year of 0.2.x builds',
          ],
        },
        {
          name: 'Studio',
          price: '€89',
          period: '/ year',
          blurb: 'Remote hosts, content search, and image tags for a working archive.',
          cta: {
            label: 'Request Studio',
            href: 'mailto:contact@noematic.eu?subject=DiskShelf%20(Media%20Cataloger)%20%E2%80%94%20Studio%20license',
          },
          includes: [
            'Everything in Personal',
            'Remote walk over SSH',
            'Content extract + RAG search',
            'AI image tags (Ollama or xAI)',
            'Email support',
            'Renews with current Studio builds',
          ],
        },
      ],
    },
    honesty: {
      title: 'Said plainly',
      items: [
        'The catalog stays on your computer. Nothing is uploaded unless you opt into cloud vision or a RAG agent you run.',
        'This is not Time Machine, rsync, or a backup appliance. Coverage insights assume you copy files yourself, then re-walk.',
        '0.2 is beta: simple UX, advisor, RAG, remote, and trusted cleanup are in the product. Merge to the public mainline and packaged store builds are still in progress — fulfillment is email, not an app store.',
        'iOS and Android are not part of this offer. macOS has two apps: Swift + nmcd (native) and nmcui (Go / Fyne). Windows and Linux are the Go build. One license opens all three.',
        'A license key exists in the app (About → Enter License). The same file opens DiskShelf. Feature locks for Hobby vs Personal vs Studio are being tightened; we honour the plan you buy, including keys already emailed.',
      ],
    },
    faq: {
      title: 'Questions',
      items: [
        {
          q: 'Media Cataloger or DiskShelf?',
          a: 'One product. DiskShelf is the name. Media Cataloger remains the public 0.0.1 zip card on Qi. You are not buying two apps.',
        },
        {
          q: 'I already have a Media Cataloger license (0.2 beta by email)?',
          a: 'It still works. Any request and any license already sent open DiskShelf — Mac Swift, nmcui, and the Go build on Windows / Linux. A March buyer is not left out.',
        },
        {
          q: 'Is it open source?',
          a: 'No. DiskShelf is a proprietary desktop app from Noematic. Related studio tools such as the RAG agent have their own sites and licenses.',
        },
        {
          q: 'Does it need the internet?',
          a: 'No for catalog, search, duplicates, and insights. Internet is optional for xAI image tags or a remote RAG agent. Ollama stays local.',
        },
        {
          q: 'Will it delete files on its own?',
          a: 'No. Cleanup is locked until you accept a disclaimer in Settings. Prefer quarantine. Preflight wants an online second copy with the same content hash.',
        },
        {
          q: 'How do I get the app?',
          a: 'Email contact@noematic.eu with the plan you want (Hobby, Personal, Studio), your name, and your OS. We send a build and, for paid plans, a license key. The 0.0.1 public zips stay on Qi (Media Cataloger) until a DiskShelf zip ships.',
        },
        {
          q: 'What is NeoFinder-like about it?',
          a: 'Offline disk cataloging is the core: you can browse a volume that is not mounted. The extra is the advisor (roles, coverage, insights) and optional content/RAG — not a DAM or a photo editor.',
        },
      ],
    },
    close: {
      title: 'Start with one disk. Pay when the catalog earns it.',
      body: 'Hobby is enough to walk a volume and search it offline. Personal is the product. Studio is for remote hosts and content you actually query.',
      cta: {
        label: 'Email Noematic',
        href: 'mailto:contact@noematic.eu?subject=DiskShelf%20(Media%20Cataloger)%20license',
      },
    },
  } satisfies MediaCatalogerPage,
};