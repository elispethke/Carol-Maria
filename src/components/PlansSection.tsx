import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { plans } from '@/data/plans'
import { PlanCard } from './PlanCard'

export const PlansSection = () => {
  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Planos Promocionais
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Escolha o plano que melhor se adapta à sua jornada e comece a
          transformar seu inglês hoje.
        </p>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {plans.map((plan) => (
              <CarouselItem
                key={plan.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <PlanCard plan={plan} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
