import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Check } from "lucide-react"

// Datos de los tipos de viajes
const tripTypes = {
  grupos: {
    id: "grupos",
    title: "Viajes en Grupo",
    description:
      "Viaja con personas que comparten tus mismos intereses y forma parte de una experiencia colectiva única.",
    longDescription:
      "Nuestros viajes en grupo están diseñados para crear conexiones significativas entre viajeros con intereses similares. Con grupos reducidos de máximo 16 personas, garantizamos una experiencia personalizada mientras disfrutas de la compañía de otros aventureros.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Grupos reducidos (máx. 16 personas)",
      "Guía especializado",
      "Itinerarios cuidadosamente diseñados",
      "Ambiente social y colaborativo",
    ],
    benefits: [
      "Conoce gente nueva con intereses similares",
      "Comparte gastos y ahorra en el viaje",
      "Mayor seguridad al viajar acompañado",
      "Experiencias compartidas más enriquecedoras",
    ],
  },
  privados: {
    id: "privados",
    title: "Viajes Privados",
    description: "Viajes exclusivos diseñados a tu medida, con total flexibilidad para adaptarse a tus preferencias.",
    longDescription:
      "Los viajes privados ofrecen la máxima flexibilidad y personalización. Diseñamos cada detalle según tus preferencias, desde el alojamiento hasta las actividades, para crear una experiencia exclusiva que se adapte perfectamente a tus deseos y necesidades.",
    image: "/placeholder.svg?height=600&width=1200",
    features: ["Itinerario 100% personalizado", "Fechas flexibles", "Servicios exclusivos", "Atención personalizada"],
    benefits: [
      "Máxima privacidad y exclusividad",
      "Flexibilidad total en el itinerario",
      "Experiencias adaptadas a tus intereses",
      "Atención personalizada durante todo el viaje",
    ],
  },
  aventura: {
    id: "aventura",
    title: "Viajes de Aventura",
    description: "Experiencias llenas de adrenalina para los espíritus más intrépidos y amantes de la acción.",
    longDescription:
      "Para aquellos que buscan emociones fuertes, nuestros viajes de aventura ofrecen experiencias llenas de adrenalina en entornos naturales espectaculares. Desde rafting en aguas bravas hasta escalada en roca, estos viajes están diseñados para desafiarte y crear recuerdos inolvidables.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Actividades de alto impacto",
      "Guías especializados en deportes de aventura",
      "Equipamiento profesional",
      "Diferentes niveles de dificultad",
    ],
    benefits: [
      "Supera tus límites y desafía tus miedos",
      "Experimenta la adrenalina en entornos seguros",
      "Aprende nuevas habilidades con expertos",
      "Conecta con la naturaleza de forma activa",
    ],
  },
  culturales: {
    id: "culturales",
    title: "Viajes Culturales",
    description: "Sumérgete en las tradiciones, historia y costumbres de los destinos más fascinantes del mundo.",
    longDescription:
      "Nuestros viajes culturales te permiten sumergirte profundamente en la historia, tradiciones y forma de vida de las comunidades locales. Con guías expertos en antropología e historia, descubrirás aspectos únicos de cada cultura que no encontrarías en un viaje convencional.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Guías expertos en historia y cultura local",
      "Visitas a comunidades tradicionales",
      "Experiencias gastronómicas auténticas",
      "Talleres artesanales",
    ],
    benefits: [
      "Comprensión profunda de las culturas locales",
      "Experiencias auténticas lejos del turismo masivo",
      "Intercambio cultural enriquecedor",
      "Aprendizaje vivencial de tradiciones ancestrales",
    ],
  },
  expediciones: {
    id: "expediciones",
    title: "Grandes Rutas y Expediciones",
    description:
      "Viajes épicos que recorren vastos territorios, siguiendo rutas históricas o explorando regiones remotas.",
    longDescription:
      "Las grandes rutas y expediciones son viajes ambiciosos que atraviesan múltiples regiones o países, siguiendo rutas históricas o explorando territorios poco frecuentados. Estas aventuras de larga duración ofrecen una inmersión profunda en paisajes cambiantes y diversas culturas.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Itinerarios extensos",
      "Combinación de paisajes y culturas",
      "Logística especializada",
      "Experiencia transformadora",
    ],
    benefits: [
      "Viajes transformadores de larga duración",
      "Exploración de territorios poco frecuentados",
      "Experiencia completa de inmersión",
      "Sensación de verdadera expedición",
    ],
  },
  naturaleza: {
    id: "naturaleza",
    title: "Naturaleza & Vida Salvaje",
    description: "Conecta con los ecosistemas más impresionantes del planeta y observa fauna en su hábitat natural.",
    longDescription:
      "Los viajes de naturaleza y vida salvaje te acercan a los ecosistemas más impresionantes del planeta. Acompañado por guías naturalistas, tendrás la oportunidad de observar animales en su hábitat natural y aprender sobre la conservación de estos entornos únicos.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Observación de fauna salvaje",
      "Guías naturalistas especializados",
      "Alojamientos eco-friendly",
      "Contribución a proyectos de conservación",
    ],
    benefits: [
      "Observación de especies en su hábitat natural",
      "Contribución a la conservación de ecosistemas",
      "Alojamientos integrados en la naturaleza",
      "Fotografía de naturaleza y vida salvaje",
    ],
  },
  polares: {
    id: "polares",
    title: "Viajes Polares",
    description: "Aventuras en los confines del mundo, explorando los paisajes más extremos y remotos del planeta.",
    longDescription:
      "Las regiones polares representan la última frontera del turismo de aventura. Nuestras expediciones al Ártico y la Antártida te llevan a paisajes de hielo espectaculares, donde podrás observar fauna única y experimentar la majestuosidad de estos ecosistemas extremos.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Expediciones en barco especializado",
      "Equipo polar profesional",
      "Charlas científicas a bordo",
      "Avistamiento de fauna polar",
    ],
    benefits: [
      "Exploración de los últimos territorios vírgenes",
      "Avistamiento de fauna polar única",
      "Experiencia en condiciones extremas con seguridad",
      "Fotografía en paisajes de hielo espectaculares",
    ],
  },
  senderismo: {
    id: "senderismo",
    title: "Viajes de Senderismo",
    description: "Rutas a pie por los senderos más espectaculares, desde caminatas suaves hasta trekkings exigentes.",
    longDescription:
      "Nuestros viajes de senderismo abarcan desde caminatas suaves por paisajes accesibles hasta trekkings exigentes en alta montaña. Con diferentes niveles de dificultad, estos viajes te permiten explorar a tu ritmo, conectando profundamente con la naturaleza.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Rutas seleccionadas por expertos",
      "Diferentes niveles de dificultad",
      "Apoyo logístico para equipaje",
      "Alojamientos estratégicamente ubicados",
    ],
    benefits: [
      "Conexión profunda con la naturaleza",
      "Actividad física adaptada a tu nivel",
      "Exploración de territorios solo accesibles a pie",
      "Sensación de logro al completar rutas",
    ],
  },
  vela: {
    id: "vela",
    title: "Viajes en Velero",
    description: "Navega por mares y océanos, descubriendo costas, islas y calas solo accesibles por agua.",
    longDescription:
      "Los viajes en velero ofrecen una perspectiva única del mundo, permitiéndote acceder a calas y bahías solo accesibles por mar. A bordo de embarcaciones confortables, combinarás la aventura de la navegación con la exploración de costas e islas paradisíacas.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Embarcaciones de calidad",
      "Patrón experimentado",
      "Itinerarios flexibles según condiciones",
      "Experiencia náutica (no se requiere experiencia previa)",
    ],
    benefits: [
      "Acceso a calas y bahías exclusivas",
      "Experiencia de navegación auténtica",
      "Flexibilidad para adaptar la ruta según el clima",
      "Convivencia en un entorno único",
    ],
  },
  crucero: {
    id: "crucero",
    title: "Cruceros de Expedición",
    description: "Expediciones marítimas que combinan confort a bordo con exploración de destinos fascinantes.",
    longDescription:
      "Nuestros cruceros de expedición combinan el confort de una embarcación bien equipada con la emoción de explorar destinos remotos. A diferencia de los cruceros convencionales, nuestras rutas priorizan la experiencia en tierra y el contacto con la naturaleza y culturas locales.",
    image: "/placeholder.svg?height=600&width=1200",
    features: [
      "Barcos de pequeño/mediano tamaño",
      "Equipo de expedición especializado",
      "Desembarcos en zodiacs",
      "Conferencias a bordo",
    ],
    benefits: [
      "Exploración de destinos remotos con comodidad",
      "Actividades diarias en tierra",
      "Aprendizaje continuo con expertos a bordo",
      "Navegación por zonas de difícil acceso",
    ],
  },
}

// Datos de ejemplo para viajes relacionados
const relatedTrips = [
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
    slug: "/proximas-salidas/japon-septiembre",
  },
]

export default function TripTypePage({ params }: { params: { tipo: string } }) {
  const tripType = tripTypes[params.tipo as keyof typeof tripTypes]

  // Si no existe el tipo de viaje, mostrar 404
  if (!tripType) {
    notFound()
  }

  return (
    <main className="flex-1">
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={tripType.image || "/placeholder.svg"}
          alt={tripType.title}
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{tripType.title}</h1>
          <p className="max-w-2xl text-lg text-white/90">{tripType.description}</p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sobre este tipo de viaje</h2>
            <p className="mt-4 text-muted-foreground">{tripType.longDescription}</p>
            <h3 className="mt-8 text-xl font-semibold">Características principales</h3>
            <ul className="mt-4 space-y-2">
              {tripType.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Beneficios</h3>
            <ul className="mt-4 space-y-4">
              {tripType.benefits.map((benefit, index) => (
                <li key={index} className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {index + 1}
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/proximas-salidas">Ver próximas salidas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight">Próximas salidas</h2>
          <p className="mt-2 text-muted-foreground">
            Descubre nuestros próximos viajes de {tripType.title.toLowerCase()}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedTrips.map((trip) => (
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
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/proximas-salidas">Ver todas las salidas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">¿Necesitas más información?</h2>
          <p className="mt-2 text-muted-foreground">
            Nuestros asesores especializados están disponibles para ayudarte a planificar tu próxima aventura
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/proximas-salidas">Ver calendario</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

