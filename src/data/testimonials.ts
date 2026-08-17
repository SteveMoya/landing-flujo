export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// mock: testimonios ficticios
export const testimonials: Testimonial[] = [
  {
    quote:
      'Dejamos tres herramientas y el correo interminable. Flujo es el único lugar donde el trabajo realmente avanza.',
    name: 'Daniela Rojas',
    role: 'Product Lead · Norte Studio',
    initials: 'DR',
  },
  {
    quote:
      'Los reportes del lunes se hicieron solos por primera vez en la historia de la empresa. Eso ya justifica el precio.',
    name: 'Jorge Sandoval',
    role: 'CTO · Kauda',
    initials: 'JS',
  },
  {
    quote:
      'La adopción fue inmediata: en una semana todo el equipo usaba Flujo sin pedirlo. Eso nunca pasa con software.',
    name: 'Marta Pineda',
    role: 'COO · Basecamp coffee',
    initials: 'MP',
  },
];