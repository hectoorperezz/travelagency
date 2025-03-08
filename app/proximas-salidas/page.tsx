import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Filter } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const upcomingTrips = [
  {
    id: 1,
    title: "Trekking en los Alpes",
    description: "Recorre los senderos más impresionantes de Suiza",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "15 Jun 2025",
    endDate: "22 Jun 2025",
    price: "1.899€",
    availableSpots: 4,
    totalSpots: 12,
    category: "senderismo",
    continent: "europa",
    slug: "/proximas-salidas/trekking-alpes-junio",
  },
  {
    id: 2,
    title: "Costa Rica: Pura Vida",
    description: "Aventura en la selva tropical y playas paradisíacas",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "3 Jul 2025",
    endDate: "14 Jul 2025",
    price: "2.499€",
    availableSpots: 6,
    totalSpots: 14,
    category: "naturaleza",
    continent: "america",
    slug: "/proximas-salidas/costa-rica-julio",
  },
  {
    id: 3,
    title: "Japón: Ruta del Norte",
    description: "De Tokio a Hokkaido, descubriendo el Japón rural",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "10 Sep 2025",
    endDate: "24 Sep 2025",
    price: "3.299€",
    availableSpots: 8,
    totalSpots: 16,
    category: "cultural",
    continent: "asia",
    slug: "/proximas-salidas/japon-septiembre",
  },
  {
    id: 4,
    title: "Safari en Kenia",
    description: "Observación de la gran migración en Masai Mara",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "5 Ago 2025",
    endDate: "15 Ago 2025",
    price: "3.199€",
    availableSpots: 5,
    totalSpots: 12,
    category: "naturaleza",
    continent: "africa",
    slug: "/proximas-salidas/safari-kenia-agosto",
  },
  {
    id: 5,
    title: "Islandia: Tierra de Hielo y Fuego",
    description: "Recorrido por los paisajes más impresionantes de Islandia",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "20 Jul 2025",
    endDate: "28 Jul 2025",
    price: "2.399€",
    availableSpots: 7,
    totalSpots: 14,
    category: "aventura",
    continent: "europa",
    slug: "/proximas-salidas/islandia-julio",
  },
  {
    id: 6,
    title: "Patagonia: Fin del Mundo",
    description: "Trekking por los parques nacionales más espectaculares",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "10 Nov 2025",
    endDate: "24 Nov 2025",
    price: "3.099€",
    availableSpots: 10,
    totalSpots: 16,
    category: "senderismo",
    continent: "america",
    slug: "/proximas-salidas/patagonia-noviembre",
  },
]

export default function UpcomingTripsPage() {
  return (
    <main className="flex-1">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Próximas salidas"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Próximas Salidas</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Viajes en grupo con fechas confirmadas. ¡Únete a la aventura!
          </p>
        </div>
      </section>

      <section className="container py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="america">América</TabsTrigger>
              <TabsTrigger value="europa">Europa</TabsTrigger>
              <TabsTrigger value="africa">África</TabsTrigger>
              <TabsTrigger value="asia">Asia</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Ordenar por:</span>
              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                <option value="date">Fecha (próxima)</option>
                <option value="price-asc">Precio (menor a mayor)</option>
                <option value="price-desc">Precio (mayor a menor)</option>
                <option value="duration">Duración</option>
              </select>
            </div>
          </div>

          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </TabsContent>

          {["america", "europa", "africa", "asia"].map((continent) => (
            <TabsContent key={continent} value={continent}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingTrips
                  .filter((trip) => trip.continent === continent)
                  .map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  )
}

function TripCard({ trip }: { trip: (typeof upcomingTrips)[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-normal">
            <Calendar className="mr-1 h-3 w-3" />
            {trip.startDate}
          </Badge>
          <span className="text-sm text-muted-foreground">
            <Users className="mr-1 inline-block h-3 w-3" />
            {trip.availableSpots}/{trip.totalSpots}
          </span>
        </div>
        <CardTitle className="mt-2 line-clamp-1">{trip.title}</CardTitle>
        <CardDescription>{trip.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-sm text-muted-foreground">
          {trip.startDate} - {trip.endDate}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="font-bold text-primary">{trip.price}</div>
        <Button size="sm" asChild>
          <Link href={trip.slug}>Reservar</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

