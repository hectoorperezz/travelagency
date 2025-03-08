import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const tripTypes = [
  {
    id: 1,
    title: "Aventura",
    description: "Experiencias llenas de adrenalina",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/aventura",
  },
  {
    id: 2,
    title: "Culturales",
    description: "Sumérgete en tradiciones locales",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/culturales",
  },
  {
    id: 3,
    title: "Naturaleza & Vida Salvaje",
    description: "Conecta con la naturaleza",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/naturaleza",
  },
  {
    id: 4,
    title: "Grandes Rutas",
    description: "Viajes épicos por tierra y mar",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/expediciones",
  },
  {
    id: 5,
    title: "Polares",
    description: "Aventuras en los confines del mundo",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/polares",
  },
  {
    id: 6,
    title: "Senderismo",
    description: "Rutas a pie por paisajes espectaculares",
    image: "/placeholder.svg?height=300&width=400",
    slug: "/tipos-de-viajes/senderismo",
  },
]

export function TripTypes() {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Tipos de Viajes</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Encuentra el estilo de viaje que mejor se adapte a tus preferencias
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tripTypes.map((type) => (
          <Link key={type.id} href={type.slug} className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src={type.image || "/placeholder.svg"}
                alt={type.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold">{type.title}</h3>
              <p className="mt-1 text-sm text-white/80">{type.description}</p>
              <div className="mt-2 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explorar <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

