import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Plan } from '@/types'
import { Check } from 'lucide-react'

interface PlanCardProps {
  plan: Plan
}

export const PlanCard = ({ plan }: PlanCardProps) => {
  const kiwifyLink = 'https://pay.kiwify.com.br/fAxsX2t'

  return (
    <Card className="flex  flex-col h-350 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 ">
      <CardHeader>
        <img
          src={plan.imageUrl}
          alt={plan.title}
          className="rounded-lg aspect-[4/5] object-contain mb-4"
        />
        <CardTitle className="text-2xl text-primary">{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-3xl font-bold mb-4">{plan.price}</div>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

    </Card>
  )
}
