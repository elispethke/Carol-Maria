import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { PlansSection } from '@/components/PlansSection'
import { banners } from '@/data/banners'
import { CourseBanner } from '@/components/CourseBanner'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const Index = () => {
  const location = useLocation()
  const { ref: videoRef, isVisible: isVideoVisible } = useScrollAnimation<HTMLElement>({ triggerOnce: true })

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.1),_transparent_30%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_hsl(var(--primary)/0.1),_transparent_30%)]"></div>

        <div className=" absolute inset-0">
          <img
            src="/carol.png"
            alt="Background"
            className="w-90 h-90 object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in-down">
            Fale Inglês com Confiança e Fluência
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Aulas dinâmicas e personalizadas com a professora Carol Maria para
            você alcançar seus objetivos.
          </p>

        </div>
      </section>

      <PlansSection />

      <section
        ref={videoRef}
        className={cn(
          'py-20 bg-background transition-opacity duration-1000',
          isVideoVisible ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Assista uma aula Experimental!
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto bg-gray-200">
            {import.meta.env.VITEST ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">
                  Player de vídeo desabilitado em ambiente de teste.
                </p>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/JFTXY2-n4V0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
        </div>
      </section>

      <section id="cursos" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Transforme seu Inglês com Nossos Cursos
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Cursos completos e focados em resultados reais, do básico à
              fluência, para você se comunicar sem medo.
            </p>
          </div>
          <div className="space-y-12">
            {banners.map((banner, index) => (
              <CourseBanner
                key={banner.id}
                banner={banner}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="depoimentos">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-2">
            O que nossos alunos dizem
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Histórias de sucesso de quem já está no caminho da fluência com a
            gente.
          </p>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <TestimonialCard
                      testimonial={testimonial}
                      variant="simple"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default Index
