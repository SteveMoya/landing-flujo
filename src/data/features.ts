import type { IconName } from '../components/ui/Icon.astro';

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error';
  tag?: string;
}

export const features: Feature[] = [
  {
    icon: 'grid',
    title: 'Tableros que se adaptan a ti',
    description:
      'Kanban, lista o calendario — cambia la vista cuando quieras sin perder el contexto. Los filtros se guardan por persona.',
    color: 'primary',
    tag: 'POPULAR',
  },
  {
    icon: 'sparkles',
    title: 'Asistente con IA',
    description:
      'Redacta resúmenes, divide tareas complejas y sugiere prioridades basándose en tu historial. Tú apruebas, la IA propone.',
    color: 'secondary',
  },
  {
    icon: 'chart',
    title: 'Reportes automáticos',
    description:
      'Progreso, carga del equipo y velocidad de entrega. Reportes listos el lunes a las 8:00, sin que nadie los arme.',
    color: 'tertiary',
  },
  {
    icon: 'users',
    title: 'Colaboración en tiempo real',
    description:
      'Comentarios, menciones y revisión de archivos sin salir de la tarea. Todo el mundo ve lo mismo, siempre.',
    color: 'primary',
  },
  {
    icon: 'plug',
    title: 'Integraciones profundas',
    description:
      'Slack, GitHub, Figma, Drive y 120 más. La información viaja sola; tú te quedas en Flujo.',
    color: 'secondary',
  },
  {
    icon: 'shield',
    title: 'Seguridad de nivel empresa',
    description:
      'SSO, permisos granulares y auditorías de actividad. SOC 2 Tipo II desde el primer día.',
    color: 'tertiary',
  },
];