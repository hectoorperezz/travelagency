import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Globe, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Quiénes somos"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Quiénes Somos</h1>
          <p className="max-w-2xl text-lg text-white/90">Creando aventuras inolvidables desde 1992</p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Nuestra Historia</h2>
            <div className="mt-4 space-y-4">
              <p>
                Desde 1992, AventuraViajes ha sido pionera en el diseño de experiencias de viaje únicas que combinan
                aventura, cultura y naturaleza. Lo que comenzó como un pequeño proyecto entre amigos apasionados por los
                viajes, se ha convertido en una de las agencias de viajes de aventura más reconocidas en España y
                Latinoamérica.
              </p>
              <p>
                A lo largo de más de tres décadas, hemos llevado a miles de viajeros a explorar los rincones más
                fascinantes del planeta, siempre con un enfoque en la autenticidad, la sostenibilidad y el respeto por
                las culturas locales.
              </p>
              <p>
                Nuestro equipo está formado por viajeros experimentados que conocen de primera mano los destinos que
                ofrecemos, lo que nos permite diseñar itinerarios únicos y proporcionar consejos valiosos para que cada
                viaje sea una experiencia inolvidable.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Nuestro equipo en acción"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Nuestros Valores</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Estos principios guían cada viaje que diseñamos y cada experiencia que ofrecemos
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Viajes en Grupo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creemos en el poder de compartir experiencias. Nuestros viajes en grupo están diseñados para fomentar
                  conexiones significativas entre personas con intereses similares, creando amistades que duran toda la
                  vida.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Experiencias Auténticas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nos alejamos del turismo de masas para ofrecer experiencias auténticas que permiten un contacto real
                  con las culturas locales, tradiciones y entornos naturales de cada destino.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-primary" />
                <CardTitle className="mt-2">Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Estamos comprometidos con prácticas de turismo responsable que minimizan el impacto ambiental,
                  respetan las comunidades locales y contribuyen positivamente a la economía de los destinos que
                  visitamos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Equipo en montaña"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Guía con grupo"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Oficina central"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Planificando rutas"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tight">Nuestro Equipo</h2>
            <div className="mt-4 space-y-4">
              <p>
                Detrás de cada viaje hay un equipo de profesionales apasionados por la aventura y el descubrimiento.
                Nuestros guías son expertos locales con profundo conocimiento de los destinos y culturas que visitamos.
              </p>
              <p>
                El equipo de AventuraViajes incluye geógrafos, biólogos, historiadores y, sobre todo, viajeros
                experimentados que han recorrido los senderos que ofrecemos y conocen cada rincón de nuestros destinos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Guías certificados con amplia experiencia internacional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Expertos en destinos con conocimiento local</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Formación continua en primeros auxilios y seguridad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Multilingües para facilitar la comunicación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 md:py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Únete a Nuestra Próxima Aventura</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            Más de 30 años creando experiencias únicas nos avalan. Descubre por qué miles de viajeros confían en
            nosotros para vivir las aventuras más emocionantes de sus vidas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-col items-center px-6">
              <span className="text-4xl font-bold">30+</span>
              <span className="text-sm">Años de experiencia</span>
            </div>
            <div className="flex flex-col items-center px-6">
              <span className="text-4xl font-bold">50+</span>
              <span className="text-sm">Destinos</span>
            </div>
            <div className="flex flex-col items-center px-6">
              <span className="text-4xl font-bold">15k+</span>
              <span className="text-sm">Viajeros satisfechos</span>
            </div>
            <div className="flex flex-col items-center px-6">
              <span className="text-4xl font-bold">200+</span>
              <span className="text-sm">Rutas únicas</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

