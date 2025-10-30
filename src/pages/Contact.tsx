import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)


  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Entre em Contato
        </h1>
      </div>

      <div className="flex  items-center justify-center">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Nossos Contatos</h2>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">E-mail</h3>
              <p className="text-muted-foreground">
                Envie suas dúvidas para nosso e-mail de suporte.
              </p>
              <a
                href="mailto:carolina.cunha91@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                carolina.cunha91@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Telefone</h3>
              <p className="text-muted-foreground">
                Ligue para nós ou envie uma mensagem no WhatsApp.
              </p>
              <a
                href="tel:+35 1962284627 Portugal"
                className="text-primary font-medium hover:underline"
              >
                +35 1962284627 Portugal
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p className="text-muted-foreground">
                Aulas 100% online, aprenda de qualquer lugar do mundo.
              </p>
              <span className="text-primary font-medium">
                Liboa,Portugal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ContactPage
