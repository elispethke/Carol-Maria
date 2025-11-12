import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CourseBanner as CourseBannerType } from '@/types'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface CourseBannerProps {
  banner: CourseBannerType
  reverse?: boolean
}

export const CourseBanner = ({
  banner,
  reverse = false,
}: CourseBannerProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 md:p-12 transition-all duration-700 ease-out',
        isVisible
          ? 'animate-fade-in-up opacity-100'
          : 'opacity-0 translate-y-8',
        banner.highlight && 'border-primary/50 shadow-lg shadow-primary/10',
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-8 md:gap-12 lg:flex-row lg:items-center',
          reverse && 'lg:flex-row-reverse',
        )}
      >
        <div className="lg:w-1/2">
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-auto rounded-lg object-cover shadow-subtle transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {banner.title}
          </h3>
          <p className="text-muted-foreground mb-6 text-base md:text-lg">
            {banner.description}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {banner.price}
            </p>
            <Button
              asChild
              size="lg"
              className="btn-primary group rounded-full px-8 py-6 text-lg"
            >
              <a
                href={banner.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {banner.buttonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      {banner.highlight && (
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      )}
    </div>
  )
}
