"use client"

import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Filter } from "lucide-react"

// Datos de ejemplo para mostrar resultados
const allTrips = [
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
    destination: "suiza",
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
    destination: "costa rica",
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
    destination: "japón",
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
    destination: "kenia",
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
    category: "adventure",
    continent: "europa",
    destination: "islandia",
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
    destination: "patagonia",
    slug: "/proximas-salidas/patagonia-noviembre",
  },
]

export default function SearchResultsPage() {
  const searchParams = useSearchParams()

  const destino = searchParams.get("destino")?.toLowerCase() || ""
  const tipo = searchParams.get("tipo")?.toLowerCase() || ""
  const fecha = searchParams.get("fecha") || ""
  const viajeros = searchParams.get("viajeros") || ""

  // Filtrar los viajes según los parámetros de búsqueda
  const filteredTrips = allTrips.filter((trip) => {
    // Si hay un destino especificado, filtrar por él
    if (
      destino &&
      !trip.destination.toLowerCase().includes(destino) &&
      !trip.continent.toLowerCase().includes(destino) &&
      !trip.title.toLowerCase().includes(destino)
    ) {
      return false
    }

    // Si hay un tipo especificado, filtrar por él
    if (tipo && trip.category !== tipo) {
      return false
    }

    // Aquí podrías añadir más filtros para fecha y viajeros

    return true
  })

  return (
    <main className="flex-1">
      <section className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Resultados de búsqueda</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {destino && <Badge variant="secondary">Destino: {destino}</Badge>}
            {tipo && <Badge variant="secondary">Tipo: {tipo}</Badge>}
            {fecha && <Badge variant="secondary">Fecha: {fecha}</Badge>}
            {viajeros && <Badge variant="secondary">Viajeros: {viajeros}</Badge>}
          </div>
          <p className="mt-4 text-muted-foreground">
            Se encontraron {filteredTrips.length} viajes que coinciden con tu búsqueda
          </p>
        </div>

        {filteredTrips.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTrips.map((trip) => (
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
                    <Link href={`/reservar?viaje=${trip.id}`}>Reservar</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 text-muted-foreground">
              <Filter className="mx-auto h-12 w-12 opacity-20" />
            </div>
            <h2 className="text-xl font-semibold">No se encontraron resultados</h2>
            <p className="mt-2 text-muted-foreground">
              No hay viajes que coincidan con tus criterios de búsqueda. Intenta con otros filtros.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}

