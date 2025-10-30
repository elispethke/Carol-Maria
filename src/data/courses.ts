import { Course } from '@/types'

const generateLessons = (moduleId: string, courseId: string, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const minutes = Math.floor(Math.random() * (15 - 5 + 1)) + 5 // Random duration between 5 and 15 minutes
    const seconds = Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')
    return {
      id: `${moduleId}l${i + 1}`,
      title: `Aula ${i + 1}: Tópico ${courseId}-${moduleId}`,
      videoId: 'rokGy0huYEA', // Using the same placeholder video
      description: `Descrição detalhada para a aula ${
        i + 1
      } do módulo ${moduleId}.`,
      duration: `${minutes}:${seconds}`,
    }
  })
}

const generateModules = (courseId: string) => {
  return [
    {
      id: `${courseId}m1`,
      title: 'Módulo 1: Fundamentos Essenciais',
      lessons: generateLessons(`${courseId}m1`, courseId, 10),
    },
    {
      id: `${courseId}m2`,
      title: 'Módulo 2: Construindo a Conversação',
      lessons: generateLessons(`${courseId}m2`, courseId, 10),
    },
    {
      id: `${courseId}m3`,
      title: 'Módulo 3: Fluência e Tópicos Avançados',
      lessons: generateLessons(`${courseId}m3`, courseId, 10),
    },
  ]
}

export const courses: Course[] = [
  {
    id: '1',
    name: 'Inglês Básico',
    description:
      'Comece sua jornada no inglês com uma base sólida. Perfeito para iniciantes.',
    price: 199.9,
    modules: generateModules('1'),
    kiwifyLink: 'https://kiwify.com.br/pay/placeholder-link-1',
  },
  {
    id: '2',
    name: 'Inglês Intermediário',
    description:
      'Aprimore suas habilidades e ganhe fluência para conversas mais complexas.',
    price: 299.9,
    modules: generateModules('2'),
    kiwifyLink: 'https://kiwify.com.br/pay/placeholder-link-2',
  },
  {
    id: '3',
    name: 'Inglês Intensivo',
    description:
      'Mergulhe de cabeça no inglês e alcance a fluência em tempo recorde.',
    price: 499.9,
    modules: generateModules('3'),
    kiwifyLink: 'https://kiwify.com.br/pay/placeholder-link-3',
  },
]
