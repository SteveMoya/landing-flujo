export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube' | 'linkedin';
}

export const site = {
  name: 'Flujo',
  tagline: 'Tu trabajo fluye.',
  description:
    'La app de gestión de proyectos que mantiene a tu equipo alineado: tableros, tareas y reportes en un solo lugar sin fricción.',
  url: 'https://flujo.stevemoya.me',
  email: 'hola@flujo.app',
  founded: 2022,

  nav: [
    { label: 'Funciones', href: '#funciones' },
    { label: 'Cómo fluye', href: '#como' },
    { label: 'Integraciones', href: '#integraciones' },
    { label: 'Precios', href: '#precios' },
  ] satisfies NavItem[],

  hero: {
    badge: 'NUEVO · Tableros con IA',
    title: { start: 'Haz que tu trabajo', accent: 'fluya.' },
    subtitle:
      'Organiza tareas, alinea equipos y demuestra tu avance con reportes que se arman solos. Sin fricción, sin reuniones innecesarias.',
    primaryCta: 'Empezar gratis',
    secondaryCta: 'Ver cómo funciona',
  },

  stats: [
    { value: '40.000+', label: 'equipos activos' },
    { value: '4,9/5', label: 'valoración media' },
    { value: '98%', label: 'de retención a 12 meses' },
    { value: '120+', label: 'integraciones' },
  ],

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/flujo.app', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/flujoapp', icon: 'x' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/flujo', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://youtube.com/@flujoapp', icon: 'youtube' },
  ] satisfies Social[],

  newsletter: {
    title: 'Recibe tips de productividad',
    subtitle: 'Un correo cada martes, sin spam. Aprende a fluir mejor con tu equipo.',
    placeholder: 'tu@empresa.com',
    button: 'Suscribirme',
    success: '¡Listo! Revisa tu correo para confirmar. ✉️',
  },

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;