import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Depoimentos', path: '/#depoimentos' },
  { name: 'Contato', path: '/contato' },
]

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavLinkClick = (path: string) => {
    setIsMobileMenuOpen(false)
    const [pathname, hash] = path.split('#')
    const targetPathname = pathname === '' ? '/' : pathname

    if (hash && targetPathname === location.pathname) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className=" mx-auto flex h-30 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img
              src="/logo.png"
              alt="Inglês com Carol Maria Logo"
              className=" h-40"
            />
          </Link>

          <nav className="hidden items-center space-x-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => handleNavLinkClick(link.path)}
                className={({ isActive }) =>
                  cn(
                    'font-medium transition-colors hover:text-primary',
                    isActive && !link.path.includes('#')
                      ? 'text-primary'
                      : 'text-foreground/80',
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute left-0 top-20 w-full animate-fade-in-down bg-card shadow-lg lg:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavLinkClick(link.path)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md p-2 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
                      isActive && !link.path.includes('#')
                        ? 'bg-muted text-primary'
                        : '',
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
