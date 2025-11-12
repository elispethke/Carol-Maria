import { Instagram, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-foreground"
          >
            <img
              src="/logo.png"
              alt="Inglês com Carol Maria Logo"
              className="h-32 sm:h-40"
            />
          </Link>
        </div>

        {/* Redes Sociais centralizadas */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com/inglescarolmaria/"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@inglescarolmaria"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@inglescarolmaria"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mt-4 pt-4" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm mt-2">
          © {new Date().getFullYear()} Inglês com Carol Maria. Todos os direitos reservados.
          <p className="text-center text-muted-foreground text-sm mt-2">Desenvolvido por Elis Pethke</p>
        </div>
      </div>
    </footer>
  )
}
