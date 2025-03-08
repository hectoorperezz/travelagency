"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MapPin, Calendar, Users, Compass, Phone, Bot } from "lucide-react"

const continents = [
  {
    name: "América",
    href: "/destinos/america",
    description: "Explora desde la Patagonia hasta Alaska",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Europa",
    href: "/destinos/europa",
    description: "Descubre la riqueza cultural del viejo continente",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "África",
    href: "/destinos/africa",
    description: "Aventuras en safaris y paisajes impresionantes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Asia",
    href: "/destinos/asia",
    description: "Tradiciones milenarias y naturaleza exuberante",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Oceanía",
    href: "/destinos/oceania",
    description: "Paraísos tropicales y experiencias únicas",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const tripTypes = [
  { name: "Grupos", href: "/tipos-de-viajes/grupos" },
  { name: "Privados", href: "/tipos-de-viajes/privados" },
  { name: "Aventura", href: "/tipos-de-viajes/aventura" },
  { name: "Culturales", href: "/tipos-de-viajes/culturales" },
  { name: "Grandes Rutas y Expediciones", href: "/tipos-de-viajes/expediciones" },
  { name: "Naturaleza & Vida Salvaje", href: "/tipos-de-viajes/naturaleza" },
  { name: "Polares", href: "/tipos-de-viajes/polares" },
  { name: "Senderismo", href: "/tipos-de-viajes/senderismo" },
  { name: "Vela", href: "/tipos-de-viajes/vela" },
  { name: "Crucero", href: "/tipos-de-viajes/crucero" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Compass className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">AventuraViajes</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <MapPin className="mr-2 h-4 w-4" />
                Destinos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {continents.map((continent) => (
                    <li key={continent.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={continent.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{continent.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {continent.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/proximas-salidas" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Próximas Salidas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/quienes-somos" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Users className="mr-2 h-4 w-4" />
                  Quiénes Somos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Compass className="mr-2 h-4 w-4" />
                Tipos de Viajes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  {tripTypes.map((type) => (
                    <li key={type.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={type.href}
                          className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {type.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contacto" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Phone className="mr-2 h-4 w-4" />
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end">
          <Button variant="outline" size="icon" className="mr-2 hidden lg:flex" asChild>
            <Link href="/chat-agente">
              <Bot className="h-4 w-4" />
              <span className="sr-only">Chat con agente de viajes</span>
            </Link>
          </Button>
          <Button size="sm" className="hidden lg:flex" asChild>
            <Link href="/proximas-salidas">Reservar Ahora</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Compass className="h-6 w-6 text-primary" />
                  <span className="font-bold">AventuraViajes</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  <div className="border-b pb-2">
                    <h3 className="mb-2 font-medium">Destinos</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {continents.map((continent) => (
                        <Link
                          key={continent.name}
                          href={continent.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {continent.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/proximas-salidas"
                    className={cn(
                      "flex items-center text-sm font-medium",
                      pathname === "/proximas-salidas" ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Próximas Salidas
                  </Link>
                  <Link
                    href="/quienes-somos"
                    className={cn(
                      "flex items-center text-sm font-medium",
                      pathname === "/quienes-somos" ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Quiénes Somos
                  </Link>
                  <div className="border-b pb-2">
                    <h3 className="mb-2 font-medium">Tipos de Viajes</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {tripTypes.map((type) => (
                        <Link
                          key={type.name}
                          href={type.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {type.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contacto"
                    className={cn(
                      "flex items-center text-sm font-medium",
                      pathname === "/contacto" ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contacto
                  </Link>
                </nav>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                    <Link href="/chat-agente">
                      <Bot className="mr-2 h-4 w-4" />
                      Chat con agente
                    </Link>
                  </Button>
                  <Button onClick={() => setIsOpen(false)} asChild>
                    <Link href="/proximas-salidas">Reservar Ahora</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

