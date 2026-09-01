export interface SuccessMetric {
  value: string;
  label: string;
}

export interface SuccessStory {
  eyebrow: string;
  title: string;
  accent: string;
  client: string;
  industry: string;
  challenge: string;
  quote: string;
  author: string;
  authorRole: string;
  metrics: SuccessMetric[];
  image: {
    src: string;
    alt: string;
  };
}

export const successStory: SuccessStory = {
  eyebrow: 'Caso de uso · Estudio Norte',
  title: 'Del caos de planos a un equipo que',
  accent: 'fluye en tiempo real',
  client: 'Estudio Norte',
  industry: 'Arquitectura y construcción · 48 personas',
  challenge:
    'Rojo copiaba verde, los planos viajaban por correo y las obras se atrasaban por falta de una única fuente de verdad. En obras como la remodelación del estadio, tres equipos distintos no sabían quién seguía cada tarea.',
  quote:
    'Por primera vez, el residente de obra, el arquitecto y la constructora vieron el mismo tablero a la vez. Los planos dejaron de perderse y las reuniones pasaron a ser solo para decidir.',
  author: 'Camila Reyes',
  authorRole: 'Directora de Proyectos · Estudio Norte',
  metrics: [
    { value: '+38%', label: 'entregas a tiempo' },
    { value: '−12 h', label: 'en reuniones por semana' },
    { value: '2,7×', label: 'más rápido al día' },
  ],
  image: {
    src: '/team-office.jpg',
    alt: 'Equipo de Estudio Norte revisando planos del proyecto en una reunión',
  },
};