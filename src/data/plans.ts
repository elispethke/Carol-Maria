import { Plan } from '@/types'
import bannerClub from '@/assets/img/clube.png'
import bannerPlus from '@/assets/img/banner1.png'
import card from '@/assets/img/card1.png'
import card2 from '@/assets/img/card2.png'

export const plans: Plan[] = [
  {
    id: 'plan-1',
    title: 'Plano Essencial',
    description:
      'Acesso completo por 1 Ano. Do básico ao avançado. O pontapé inicial para sua fluência.',
    imageUrl:
      bannerClub,
    price: '',
    features: [
      'Aulas de conversação',
      'Material exclusivo',
      'Acesso à comunidade',
    ],
  },
  {
    id: 'plan-2',
    title: 'Plano Plus',
    description:
      'Acesso por 6 meses com aulas extras. Acelere seu aprendizado.',
    imageUrl:
      card,
    price: '',
    features: [
      'Tudo do Plano Essencial',
      'Aulas de reforço semanais',
      'Suporte prioritário via WhatsApp',
      'Acesso a comunidade exclussiva do Curso'
    ],
  },
  {
    id: 'plan-3',
    title: 'Plano Premium',
    description:
      'Acesso anual com mentoria. A experiência completa para a fluência.',
    imageUrl:
      card2,
    price: '',
    features: [
      'Tudo do Plano Plus',
      'Mentoria individual semanal',
      'Acesso a todos os cursos,',
      'Suporte Vip no WhatApp',
      'Conversaçao diaria com a professora via WhatsApp',
      'Imersao Personalizada',
      'Material exclussivo,'
    ],
  },
]
