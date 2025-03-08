import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const destinations = [
  {
    id: 1,
    title: "Patagonia Argentina",
    description: "Aventura en el fin del mundo",
    image: "/placeholder.svg?height=400&width=600",
    price: "2.499€",
    duration: "12 días",
    continent: "América",
    badge: "Popular",
    slug: "/destinos/america/patagonia-argentina",
  },
  {
    id: 2,
    title: "Safari en Tanzania",
    description: "Vida salvaje en estado puro",
    image: "/placeholder.svg?height=400&width=600",
    price: "3.299€",
    duration: "10 días",
    continent: "África",
    badge: "Destacado",
    slug: "/destinos/africa/safari-tanzania",
  },
  {
    id: 3,
    title: "Islandia",
    description: "Tierra de hielo y fuego",
    image: "/placeholder.svg?height=400&width=600",
    price: "2.199€",
    duration: "8 días",
    continent: "Europa",
    badge: "Nuevo",
    slug: "/destinos/europa/islandia",
  },
  {
    id: 4,
    title: "Nepal",
    description: "Trekking por el Himalaya",
    image: "/placeholder.svg?height=400&width=600",
    price: "2.799€",
    duration: "15 días",
    continent: "Asia",
    badge: "Aventura",
    slug: "/destinos/asia/nepal-himalaya",
  },
]

export function FeaturedDestinations() {
  return (
    <section className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Destinos Destacados</h2>
          <p className="text-muted-foreground">Descubre nuestras experiencias más populares</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/destinos">Ver todos los destinos</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className="absolute right-2 top-2">{destination.badge}</Badge>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-1">{destination.title}</CardTitle>
              <CardDescription>{destination.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{destination.duration}</div>
                <div className="text-sm font-medium">{destination.continent}</div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
              <div className="font-bold text-primary">{destination.price}</div>
              <Button variant="outline" size="sm" asChild>
                <Link href={destination.slug}>Ver detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

