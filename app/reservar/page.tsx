"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de ejemplo para mostrar el viaje seleccionado
const allTrips = [
  {
    id: 1,
    title: "Trekking en los Alpes",
    description: "Recorre los senderos más impresionantes de Suiza",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "15 Jun 2025",
    endDate: "22 Jun 2025",
    price: "1.899€",
    priceNumeric: 1899,
    availableSpots: 4,
    totalSpots: 12,
    category: "senderismo",
    continent: "europa",
    destination: "Suiza",
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
    priceNumeric: 2499,
    availableSpots: 6,
    totalSpots: 14,
    category: "naturaleza",
    continent: "america",
    destination: "Costa Rica",
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
    priceNumeric: 3299,
    availableSpots: 8,
    totalSpots: 16,
    category: "cultural",
    continent: "asia",
    destination: "Japón",
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
    priceNumeric: 3199,
    availableSpots: 5,
    totalSpots: 12,
    category: "naturaleza",
    continent: "africa",
    destination: "Kenia",
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
    priceNumeric: 2399,
    availableSpots: 7,
    totalSpots: 14,
    category: "adventure",
    continent: "europa",
    destination: "Islandia",
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
    priceNumeric: 3099,
    availableSpots: 10,
    totalSpots: 16,
    category: "senderismo",
    continent: "america",
    destination: "Patagonia",
    slug: "/proximas-salidas/patagonia-noviembre",
  },
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const tripId = Number.parseInt(searchParams.get("viaje") || "1")

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    travelers: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "España",
    specialRequirements: "",
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvc: "",
    acceptTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Encontrar el viaje seleccionado
  const selectedTrip = allTrips.find((trip) => trip.id === tripId) || allTrips[0]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleTravelersChange = (value: string) => {
    setFormData((prev) => ({ ...prev, travelers: Number.parseInt(value) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      setStep(step + 1)
      return
    }

    // Simulación de envío del formulario
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <main className="flex-1">
        <section className="container max-w-4xl py-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">¡Reserva confirmada!</h1>
            <p className="mt-4 text-muted-foreground">
              Gracias por reservar tu viaje con AventuraViajes. Hemos enviado un correo electrónico de confirmación a{" "}
              {formData.email} con todos los detalles de tu reserva.
            </p>
            <div className="mt-8 w-full max-w-md rounded-lg border p-6">
              <h2 className="text-xl font-semibold">Resumen de la reserva</h2>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viaje:</span>
                  <span className="font-medium">{selectedTrip.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destino:</span>
                  <span>{selectedTrip.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fechas:</span>
                  <span>
                    {selectedTrip.startDate} - {selectedTrip.endDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viajeros:</span>
                  <span>{formData.travelers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total:</span>
                  <span className="font-bold text-primary">
                    {(selectedTrip.priceNumeric * formData.travelers).toLocaleString("es-ES")}€
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/proximas-salidas">Ver más viajes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="flex-1">
      <section className="container max-w-6xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Reservar viaje</h1>
          <p className="mt-2 text-muted-foreground">Completa el formulario para reservar tu plaza en este viaje</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <div>
            <div className="mb-6 flex justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium",
                    step >= 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground text-muted-foreground",
                  )}
                >
                  1
                </div>
                <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Detalles del viaje</span>
              </div>
              <div className="h-px w-12 self-center bg-muted-foreground/30"></div>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium",
                    step >= 2
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground text-muted-foreground",
                  )}
                >
                  2
                </div>
                <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Información personal</span>
              </div>
              <div className="h-px w-12 self-center bg-muted-foreground/30"></div>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium",
                    step >= 3
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground text-muted-foreground",
                  )}
                >
                  3
                </div>
                <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Pago</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detalles del viaje</CardTitle>
                      <CardDescription>Selecciona el número de viajeros y cualquier requisito especial</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="travelers">Número de viajeros</Label>
                        <Select
                          value={formData.travelers.toString()}
                          onValueChange={(value) => handleTravelersChange(value)}
                        >
                          <SelectTrigger id="travelers">
                            <SelectValue placeholder="Selecciona el número de viajeros" />
                          </SelectTrigger>
                          <SelectContent>
                            {[...Array(selectedTrip.availableSpots)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1} {i === 0 ? "Viajero" : "Viajeros"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="specialRequirements">Requisitos especiales (opcional)</Label>
                        <Textarea
                          id="specialRequirements"
                          name="specialRequirements"
                          placeholder="Dietas especiales, necesidades de accesibilidad, etc."
                          value={formData.specialRequirements}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button type="button" onClick={() => setStep(2)}>
                        Continuar
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Información personal</CardTitle>
                      <CardDescription>Introduce tus datos de contacto</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="firstName">Nombre</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="lastName">Apellidos</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="city">Ciudad</Label>
                          <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="postalCode">Código postal</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="country">País</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Selecciona un país" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="España">España</SelectItem>
                            <SelectItem value="Argentina">Argentina</SelectItem>
                            <SelectItem value="México">México</SelectItem>
                            <SelectItem value="Colombia">Colombia</SelectItem>
                            <SelectItem value="Chile">Chile</SelectItem>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setStep(1)}>
                        Atrás
                      </Button>
                      <Button type="button" onClick={() => setStep(3)}>
                        Continuar
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Método de pago</CardTitle>
                      <CardDescription>Selecciona tu método de pago preferido</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={handleRadioChange}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Tarjeta de crédito/débito
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="transfer" id="transfer" />
                          <Label htmlFor="transfer">Transferencia bancaria</Label>
                        </div>
                      </RadioGroup>

                      {formData.paymentMethod === "card" && (
                        <div className="mt-4 space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="cardNumber">Número de tarjeta</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              placeholder="NOMBRE APELLIDOS"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="cardExpiry">Fecha de caducidad</Label>
                              <Input
                                id="cardExpiry"
                                name="cardExpiry"
                                placeholder="MM/AA"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cardCvc">CVC</Label>
                              <Input
                                id="cardCvc"
                                name="cardCvc"
                                placeholder="123"
                                value={formData.cardCvc}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {formData.paymentMethod === "transfer" && (
                        <div className="mt-4 rounded-lg border p-4">
                          <p className="text-sm">Realiza una transferencia a la siguiente cuenta bancaria:</p>
                          <div className="mt-2 space-y-1 text-sm">
                            <p>
                              <span className="font-medium">Banco:</span> Banco Aventura
                            </p>
                            <p>
                              <span className="font-medium">Titular:</span> AventuraViajes S.L.
                            </p>
                            <p>
                              <span className="font-medium">IBAN:</span> ES12 3456 7890 1234 5678 9012
                            </p>
                            <p>
                              <span className="font-medium">Concepto:</span> Reserva {selectedTrip.id} -{" "}
                              {formData.lastName}
                            </p>
                          </div>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Una vez realizada la transferencia, te enviaremos un correo de confirmación.
                          </p>
                        </div>
                      )}

                      <div className="mt-4 flex items-start space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          checked={formData.acceptTerms}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <Label htmlFor="acceptTerms" className="text-sm">
                          He leído y acepto los{" "}
                          <Link href="/terminos" className="text-primary hover:underline">
                            términos y condiciones
                          </Link>{" "}
                          y la{" "}
                          <Link href="/privacidad" className="text-primary hover:underline">
                            política de privacidad
                          </Link>
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setStep(2)}>
                        Atrás
                      </Button>
                      <Button type="submit" disabled={!formData.acceptTerms || isSubmitting}>
                        {isSubmitting ? "Procesando..." : "Completar reserva"}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}
            </form>
          </div>

          <div>
            <div className="sticky top-20">
              <Card>
                <CardHeader>
                  <CardTitle>Resumen de la reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-md">
                    <Image
                      src={selectedTrip.image || "/placeholder.svg"}
                      alt={selectedTrip.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{selectedTrip.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedTrip.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Destino:</span>
                      <span>{selectedTrip.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fechas:</span>
                      <span>
                        {selectedTrip.startDate} - {selectedTrip.endDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Viajeros:</span>
                      <span>{formData.travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio por persona:</span>
                      <span>{selectedTrip.price}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span className="text-primary">
                          {(selectedTrip.priceNumeric * formData.travelers).toLocaleString("es-ES")}€
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

