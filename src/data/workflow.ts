export interface WorkflowStep {
  num: string;
  title: string;
  description: string;
  icon: 'grid' | 'sparkles' | 'plug' | 'chart' | 'check';
}

export const workflow: WorkflowStep[] = [
  {
    num: '01',
    title: 'Crea el proyecto',
    description:
      'Importa una plantilla o empieza en blanco. Invita a tu equipo con un enlace — no hay que instalar nada.',
    icon: 'grid',
  },
  {
    num: '02',
    title: 'Asigna y fluye',
    description:
      'Tareas con dueño, fecha y prioridad. Las dependencias se dibujan solas cuando conectas una tarea con otra.',
    icon: 'sparkles',
  },
  {
    num: '03',
    title: 'Conecta tus herramientas',
    description:
      'Slack avisa, GitHub mueve tarjetas, Drive adjunta. Flujo sincroniza en los dos sentidos en tiempo real.',
    icon: 'plug',
  },
  {
    num: '04',
    title: 'Mide y mejora',
    description:
      'El reporte semanal llega solo: qué se entregó, qué se atascó y dónde está la próxima mejora.',
    icon: 'chart',
  },
];