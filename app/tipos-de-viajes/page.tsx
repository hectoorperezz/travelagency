import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const tripTypes = [
  {
    id: "grupos",
    title: "Grupos",
    description:
      "Viaja con personas que comparten tus mismos intereses y forma parte de una experiencia colectiva única.",
    longDescription:
      "Nuestros viajes en grupo están diseñados para crear conexiones significativas entre viajeros con intereses similares. Con grupos reducidos de máximo 16 personas, garantizamos una experiencia personalizada mientras disfrutas de la compañía de otros aventureros.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Grupos reducidos (máx. 16 personas)",
      "Guía especializado",
      "Itinerarios cuidadosamente diseñados",
      "Ambiente social y colaborativo",
    ],
    slug: "/tipos-de-viajes/grupos",
  },
  {
    id: "privados",
    title: "Privados",
    description: "Viajes exclusivos diseñados a tu medida, con total flexibilidad para adaptarse a tus preferencias.",
    longDescription:
      "Los viajes privados ofrecen la máxima flexibilidad y personalización. Diseñamos cada detalle según tus preferencias, desde el alojamiento hasta las actividades, para crear una experiencia exclusiva que se adapte perfectamente a tus deseos y necesidades.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Itinerario 100% personalizado", "Fechas flexibles", "Servicios exclusivos", "Atención personalizada"],
    slug: "/tipos-de-viajes/privados",
  },
  {
    id: "aventura",
    title: "Aventura",
    description: "Experiencias llenas de adrenalina para los espíritus más intrépidos y amantes de la acción.",
    longDescription:
      "Para aquellos que buscan emociones fuertes, nuestros viajes de aventura ofrecen experiencias llenas de adrenalina en entornos naturales espectaculares. Desde rafting en aguas bravas hasta escalada en roca, estos viajes están diseñados para desafiarte y crear recuerdos inolvidables.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Actividades de alto impacto",
      "Guías especializados en deportes de aventura",
      "Equipamiento profesional",
      "Diferentes niveles de dificultad",
    ],
    slug: "/tipos-de-viajes/aventura",
  },
  {
    id: "culturales",
    title: "Culturales",
    description: "Sumérgete en las tradiciones, historia y costumbres de los destinos más fascinantes del mundo.",
    longDescription:
      "Nuestros viajes culturales te permiten sumergirte profundamente en la historia, tradiciones y forma de vida de las comunidades locales. Con guías expertos en antropología e historia, descubrirás aspectos únicos de cada cultura que no encontrarías en un viaje convencional.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Guías expertos en historia y cultura local",
      "Visitas a comunidades tradicionales",
      "Experiencias gastronómicas auténticas",
      "Talleres artesanales",
    ],
    slug: "/tipos-de-viajes/culturales",
  },
  {
    id: "expediciones",
    title: "Grandes Rutas y Expediciones",
    description:
      "Viajes épicos que recorren vastos territorios, siguiendo rutas históricas o explorando regiones remotas.",
    longDescription:
      "Las grandes rutas y expediciones son viajes ambiciosos que atraviesan múltiples regiones o países, siguiendo rutas históricas o explorando territorios poco frecuentados. Estas aventuras de larga duración ofrecen una inmersión profunda en paisajes cambiantes y diversas culturas.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Itinerarios extensos",
      "Combinación de paisajes y culturas",
      "Logística especializada",
      "Experiencia transformadora",
    ],
    slug: "/tipos-de-viajes/expediciones",
  },
  {
    id: "naturaleza",
    title: "Naturaleza & Vida Salvaje",
    description: "Conecta con los ecosistemas más impresionantes del planeta y observa fauna en su hábitat natural.",
    longDescription:
      "Los viajes de naturaleza y vida salvaje te acercan a los ecosistemas más impresionantes del planeta. Acompañado por guías naturalistas, tendrás la oportunidad de observar animales en su hábitat natural y aprender sobre la conservación de estos entornos únicos.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Observación de fauna salvaje",
      "Guías naturalistas especializados",
      "Alojamientos eco-friendly",
      "Contribución a proyectos de conservación",
    ],
    slug: "/tipos-de-viajes/naturaleza",
  },
  {
    id: "polares",
    title: "Polares",
    description: "Aventuras en los confines del mundo, explorando los paisajes más extremos y remotos del planeta.",
    longDescription:
      "Las regiones polares representan la última frontera del turismo de aventura. Nuestras expediciones al Ártico y la Antártida te llevan a paisajes de hielo espectaculares, donde podrás observar fauna única y experimentar la majestuosidad de estos ecosistemas extremos.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Expediciones en barco especializado",
      "Equipo polar profesional",
      "Charlas científicas a bordo",
      "Avistamiento de fauna polar",
    ],
    slug: "/tipos-de-viajes/polares",
  },
  {
    id: "senderismo",
    title: "Senderismo",
    description: "Rutas a pie por los senderos más espectaculares, desde caminatas suaves hasta trekkings exigentes.",
    longDescription:
      "Nuestros viajes de senderismo abarcan desde caminatas suaves por paisajes accesibles hasta trekkings exigentes en alta montaña. Con diferentes niveles de dificultad, estos viajes te permiten explorar a tu ritmo, conectando profundamente con la naturaleza.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Rutas seleccionadas por expertos",
      "Diferentes niveles de dificultad",
      "Apoyo logístico para equipaje",
      "Alojamientos estratégicamente ubicados",
    ],
    slug: "/tipos-de-viajes/senderismo",
  },
  {
    id: "vela",
    title: "Vela",
    description: "Navega por mares y océanos, descubriendo costas, islas y calas solo accesibles por agua.",
    longDescription:
      "Los viajes en velero ofrecen una perspectiva única del mundo, permitiéndote acceder a calas y bahías solo accesibles por mar. A bordo de embarcaciones confortables, combinarás la aventura de la navegación con la exploración de costas e islas paradisíacas.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Embarcaciones de calidad",
      "Patrón experimentado",
      "Itinerarios flexibles según condiciones",
      "Experiencia náutica (no se requiere experiencia previa)",
    ],
    slug: "/tipos-de-viajes/vela",
  },
  {
    id: "crucero",
    title: "Crucero",
    description: "Expediciones marítimas que combinan confort a bordo con exploración de destinos fascinantes.",
    longDescription:
      "Nuestros cruceros de expedición combinan el confort de una embarcación bien equipada con la emoción de explorar destinos remotos. A diferencia de los cruceros convencionales, nuestras rutas priorizan la experiencia en tierra y el contacto con la naturaleza y culturas locales.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Barcos de pequeño/mediano tamaño",
      "Equipo de expedición especializado",
      "Desembarcos en zodiacs",
      "Conferencias a bordo",
    ],
    slug: "/tipos-de-viajes/crucero",
  },
]

export default function TripTypesPage() {
  return (
    <main className="flex-1">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Tipos de viajes"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Tipos de Viajes</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Encuentra el estilo de viaje que mejor se adapte a tus preferencias y forma de explorar el mundo
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tripTypes.map((type) => (
            <Card key={type.id} className="overflow-hidden">
              <div className="aspect-[3/2] relative">
                <Image
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground">{type.longDescription}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={type.slug}>
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

