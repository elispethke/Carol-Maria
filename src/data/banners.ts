import { CourseBanner } from '@/types'
import bannerClub from '@/assets/img/clube.png'
import banner1 from '@/assets/img/banner1.png'
import bannerViagem from '@/assets/img/banner-viagem.png'
import banner2 from '@/assets/img/banner2.png'
import banner3 from '@/assets/img/banner3.png'




export const banners: CourseBanner[] = [
  {
    id: 'pronuncia-imersao',
    title: 'Curso Sons do Inglês:',
    description:
      'Aprenda como os sons do inglês funcionam de verdade — e pare de falar como no português. Imersão com filmes e músicas. Aprenda o inglês que as pessoas realmente falam. Aulas simples, diretas e 100% aplicáveis. Acesso de 1 ano. Renovação opcional.',
    price: '67 reais',
    buttonText: 'Comprar Agora',
    buttonLink: 'https://pay.kiwify.com.br/fAxsX2t',
    imageUrl:
      banner1,
    highlight: true,
  },
  {
    id: 'ingles-viagem',
    title: 'Inglês para Viagem',
    description:
      'O que tem: Documentos, Aeroporto, Táxi, Hotel, Restaurante, Compras e Imprevistos. Aulas práticas e objetivas, sem enrolação, para otimizar o seu tempo. Aprenda com cenas de filmes, com o inglês que as pessoas REALMENTE USAM no dia a dia.',
    price: '48 reais',
    buttonText: 'Garantir meu Acesso',
    buttonLink: 'https://pay.kiwify.com.br/ok54R0d',
    imageUrl: bannerViagem,

  },
  {
    id: 'club',
    title: 'Club',
    description:
      'Curso Sons do Inglês incluso. Imersão com filmes e músicas. Aulas simples, diretas e 100% aplicáveis. Acesso de 1 ano com renovação opcional. Pode assistir quando e onde quiser — estude no seu ritmo.',
    price: '497',
    buttonText: 'Entrar para o Club',
    buttonLink: 'https://pay.kiwify.com.br/lEZYr12',
    imageUrl:
      banner2,
  },
  {
    id: 'aulas-individuais',
    title: 'Aulas Individuais e Personalizadas',
    description:
      'Tenha aulas focadas 100% nas suas necessidades e objetivos. Flexibilidade de horários e um plano de estudos feito sob medida para você acelerar sua fluência.',
    price: 'Valor Personalizado',
    buttonText: 'Falar no WhatsApp',
    buttonLink: 'https://wa.me/351962284627',
    imageUrl:
      banner3,
  },
]
