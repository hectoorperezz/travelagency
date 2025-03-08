import Link from "next/link"
import { Compass, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-bold">AventuraViajes</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Creando aventuras inolvidables desde 1992. Especialistas en viajes de aventura y experiencias únicas.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Destinos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinos/america" className="text-muted-foreground hover:text-foreground">
                  América
                </Link>
              </li>
              <li>
                <Link href="/destinos/europa" className="text-muted-foreground hover:text-foreground">
                  Europa
                </Link>
              </li>
              <li>
                <Link href="/destinos/africa" className="text-muted-foreground hover:text-foreground">
                  África
                </Link>
              </li>
              <li>
                <Link href="/destinos/asia" className="text-muted-foreground hover:text-foreground">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="/destinos/oceania" className="text-muted-foreground hover:text-foreground">
                  Oceanía
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Tipos de Viajes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tipos-de-viajes/grupos" className="text-muted-foreground hover:text-foreground">
                  Grupos
                </Link>
              </li>
              <li>
                <Link href="/tipos-de-viajes/privados" className="text-muted-foreground hover:text-foreground">
                  Privados
                </Link>
              </li>
              <li>
                <Link href="/tipos-de-viajes/aventura" className="text-muted-foreground hover:text-foreground">
                  Aventura
                </Link>
              </li>
              <li>
                <Link href="/tipos-de-viajes/naturaleza" className="text-muted-foreground hover:text-foreground">
                  Naturaleza & Vida Salvaje
                </Link>
              </li>
              <li>
                <Link href="/tipos-de-viajes/expediciones" className="text-muted-foreground hover:text-foreground">
                  Grandes Rutas y Expediciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quienes-somos" className="text-muted-foreground hover:text-foreground">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/proximas-salidas" className="text-muted-foreground hover:text-foreground">
                  Próximas Salidas
                </Link>
              </li>
              <li>
                <Link href="/sostenibilidad" className="text-muted-foreground hover:text-foreground">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog de Viajes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-foreground">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/cancelacion" className="text-muted-foreground hover:text-foreground">
                  Política de Cancelación
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AventuraViajes. Todos los derechos reservados. CICMA 1234
          </p>
        </div>
      </div>
    </footer>
  )
}

