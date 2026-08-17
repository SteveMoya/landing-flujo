export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Gratis',
    price: '$0',
    period: 'para siempre',
    description: 'Para equipos que empiezan su primer proyecto.',
    features: [
      'Hasta 5 proyectos',
      '3 miembros',
      'Tablero kanban y lista',
      'App móvil',
    ],
    cta: 'Crear cuenta gratis',
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'por usuario/mes',
    description: 'Para equipos que viven en Flujo todos los días.',
    features: [
      'Proyectos ilimitados',
      'Vista calendario y timeline',
      'Asistente con IA',
      'Reportes automáticos',
      'Integraciones ilimitadas',
    ],
    cta: 'Probar 14 días gratis',
    featured: true,
  },
  {
    name: 'Empresas',
    price: '$24',
    period: 'por usuario/mes',
    description: 'Para organizaciones con requisitos de seguridad.',
    features: [
      'SSO y SAML',
      'Permisos granulares',
      'Auditoría de actividad',
      'Soporte prioritario 24/7',
      'SLA 99,99%',
    ],
    cta: 'Hablar con ventas',
  },
];