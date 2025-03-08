import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Laura Martínez",
    location: "Madrid, España",
    text: "Una experiencia increíble en Patagonia. La organización fue perfecta y nuestro guía conocía cada rincón. Sin duda, repetiré con AventuraViajes.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Patagonia Argentina",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Barcelona, España",
    text: "El viaje a Tanzania superó todas mis expectativas. Ver a los animales en su hábitat natural fue una experiencia que nunca olvidaré.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Safari en Tanzania",
  },
  {
    id: 3,
    name: "Ana García",
    location: "Valencia, España",
    text: "El trekking por Nepal fue desafiante pero increíblemente gratificante. Los paisajes del Himalaya son espectaculares y el equipo local fue muy atento.",
    image: "/placeholder.svg?height=100&width=100",
    trip: "Nepal - Trekking",
  },
]

export function Testimonials() {
  return (
    <section className="container py-12 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Lo que dicen nuestros viajeros</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Experiencias reales de quienes han vivido la aventura con nosotros
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <CardDescription>{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 h-6 w-6 text-muted-foreground/20" />
                <p className="pl-5 text-muted-foreground">{testimonial.text}</p>
              </div>
              <p className="mt-4 text-sm font-medium text-primary">Viaje: {testimonial.trip}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

