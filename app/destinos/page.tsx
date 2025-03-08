import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const continents = [
  { id: "america", name: "América" },
  { id: "europa", name: "Europa" },
  { id: "africa", name: "África" },
  { id: "asia", name: "Asia" },
  { id: "oceania", name: "Oceanía" },
]

const destinations = {
  america: [
    {
      id: 1,
      title: "Patagonia Argentina",
      description: "Aventura en el fin del mundo",
      image: "/placeholder.svg?height=400&width=600",
      price: "2.499€",
      duration: "12 días",
      slug: "/destinos/america/patagonia-argentina",
    },
    {
      id: 2,
      title: "Costa Rica",
      description: "Pura vida entre selvas y playas",
      image: "/placeholder.svg?height=400&width=600",
      price: "2.199€",
      duration: "10 días",
      slug: "/destinos/america/costa-rica",
    },
    {
      id: 3,
      title: "Perú - Camino Inca",
      description: "Tras los pasos de los Incas",
      image: "/placeholder.svg?height=400&width=600",
      price: "2.399€",
      duration: "14 días",
      slug: "/destinos/america/peru-camino-inca",
    },
    {
      id: 4,
      title: "Alaska",
      description: "Naturaleza salvaje en estado puro",
      image: "/placeholder.svg?height=400&width=600",
      price: "3.299€",
      duration: "12 días",
      slug: "/destinos/america/alaska",
    },
  ],
  europa: [
    {
      id: 1,
      title: "Islandia",
      description: "Tierra de hielo y fuego",
      image: "/placeholder.svg?height=400&width=600",
      price: "2.199€",
      duration: "8 días",
      slug: "/destinos/europa/islandia",
    },
    {
      id: 2,
      title: "Alpes Suizos",
      description: "Trekking por paisajes de ensueño",
      image: "/placeholder.svg?height=400&width=600",
      price: "1.899€",
      duration: "7 días",
      slug: "/destinos/europa/alpes-suizos",
    },
  ],
  africa: [
    {
      id: 1,
      title: "Safari en Tanzania",
      description: "Vida salvaje en estado puro",
      image: "/placeholder.svg?height=400&width=600",
      price: "3.299€",
      duration: "10 días",
      slug: "/destinos/africa/safari-tanzania",
    },
    {
      id: 2,
      title: "Marruecos",
      description: "Del desierto a las montañas del Atlas",
      image: "/placeholder.svg?height=400&width=600",
      price: "1.499€",
      duration: "8 días",
      slug: "/destinos/africa/marruecos",
    },
  ],
  asia: [
    {
      id: 1,
      title: "Nepal",
      description: "Trekking por el Himalaya",
      image: "/placeholder.svg?height=400&width=600",
      price: "2.799€",
      duration: "15 días",
      slug: "/destinos/asia/nepal-himalaya",
    },
    {
      id: 2,
      title: "Japón",
      description: "Tradición y modernidad",
      image: "/placeholder.svg?height=400&width=600",
      price: "3.499€",
      duration: "14 días",
      slug: "/destinos/asia/japon",
    },
  ],
  oceania: [
    {
      id: 1,
      title: "Nueva Zelanda",
      description: "Aventura en la tierra media",
      image: "/placeholder.svg?height=400&width=600",
      price: "3.899€",
      duration: "16 días",
      slug: "/destinos/oceania/nueva-zelanda",
    },
    {
      id: 2,
      title: "Australia",
      description: "Del outback a la Gran Barrera de Coral",
      image: "/placeholder.svg?height=400&width=600",
      price: "3.699€",
      duration: "14 días",
      slug: "/destinos/oceania/australia",
    },
  ],
}

export default function DestinationsPage() {
  return (
    <main className="flex-1">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Destinos de aventura"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Destinos</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Explora nuestros destinos por todo el mundo y encuentra tu próxima aventura
          </p>
        </div>
      </section>

      <section className="container py-12">
        <Tabs defaultValue="america" className="w-full">
          <TabsList className="mb-8 flex w-full justify-start overflow-x-auto">
            {continents.map((continent) => (
              <TabsTrigger key={continent.id} value={continent.id} className="min-w-[100px]">
                {continent.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(destinations).map(([continent, destinationList]) => (
            <TabsContent key={continent} value={continent}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {destinationList.map((destination) => (
                  <Card key={destination.id} className="overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{destination.title}</CardTitle>
                      <CardDescription>{destination.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-sm text-muted-foreground">{destination.duration}</div>
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
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  )
}

