import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users } from "lucide-react"

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
    slug: "/proximas-salidas/japon-septiembre",
  },
]

export function UpcomingTrips() {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Próximas Salidas</h2>
            <p className="text-muted-foreground">Viajes en grupo con fechas confirmadas</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/proximas-salidas">Ver todas las salidas</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {upcomingTrips.map((trip) => (
            <Card key={trip.id} className="overflow-hidden">
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
          ))}
        </div>
      </div>
    </section>
  )
}

