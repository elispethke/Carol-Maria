import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Testimonial } from '@/types'
import { cn } from '@/lib/utils'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
  variant?: 'default' | 'simple'
}

export const TestimonialCard = ({
  testimonial,
  className,
  variant = 'default',
}: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    triggerOnce: true,
  })

  return (
    <Card
      ref={ref}
      className={cn(
        'transform transition-all duration-700 ease-out bg-card h-full',
        isVisible
          ? 'animate-fade-in-up opacity-100'
          : 'opacity-0 translate-y-4',
        className,
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
        {variant === 'default' && (
          <Avatar className="w-16 h-16 mb-4">
            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
        <h3 className="font-semibold text-lg text-foreground">
          {testimonial.name}
        </h3>
        {variant === 'default' && (
          <div className="flex my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-5 h-5',
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300',
                )}
              />
            ))}
          </div>
        )}
        <p className="text-muted-foreground text-sm mt-2">
          "{testimonial.text}"
        </p>
      </CardContent>
    </Card>
  )
}
