import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Contacto</h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Estamos aquí para ayudarte a planificar tu próxima aventura. Contáctanos y un asesor especializado te
            atenderá personalmente.
          </p>
        </div>
      </section>

      <section className="container pb-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+34 600 000 000" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="interest">¿Qué te interesa?</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Información general</SelectItem>
                          <SelectItem value="booking">Reserva de viaje</SelectItem>
                          <SelectItem value="custom">Viaje a medida</SelectItem>
                          <SelectItem value="group">Viaje en grupo</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Diferentes formas de ponerte en contacto con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Oficina Central</h3>
                    <p className="text-sm text-muted-foreground">
                      Calle Aventura, 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      +34 91 123 45 67
                      <br />
                      +34 600 123 456 (WhatsApp)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-sm text-muted-foreground">
                      info@aventuraviajes.com
                      <br />
                      reservas@aventuraviajes.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 9:00 - 19:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Síguenos en redes sociales</CardTitle>
                <CardDescription>Mantente al día con nuestras últimas aventuras</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mapa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                  {/* Aquí iría un mapa interactivo */}
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Mapa de ubicación</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

