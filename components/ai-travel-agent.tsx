"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant"
  content: string
}

// Respuestas predefinidas para simular la IA
const predefinedResponses: Record<string, string> = {
  default:
    "¡Hola! Soy AventuraBot, tu asistente virtual de viajes. ¿En qué puedo ayudarte hoy? Puedo recomendarte destinos, darte información sobre nuestros tipos de viajes o ayudarte a planificar tu próxima aventura.",
  destinos:
    "Ofrecemos destinos en los 5 continentes. Nuestros destinos más populares incluyen Patagonia en América, Safari en Tanzania en África, Islandia en Europa, Nepal en Asia y Nueva Zelanda en Oceanía. ¿Hay alguna región específica que te interese explorar?",
  tipos:
    "Tenemos varios tipos de viajes: Aventura, Culturales, Naturaleza, Expediciones, Senderismo, Polares, Vela y Cruceros. Cada uno está diseñado para ofrecer experiencias únicas según tus intereses. ¿Qué tipo de experiencia estás buscando?",
  precios:
    "Nuestros precios varían según el destino, duración y tipo de viaje. Los viajes en grupo suelen comenzar desde 1.500€, mientras que las expediciones polares o los viajes más exclusivos pueden superar los 3.500€. Todos incluyen alojamiento, guías especializados y actividades. ¿Tienes un presupuesto específico en mente?",
  fechas:
    "Organizamos viajes durante todo el año, adaptándonos a la mejor temporada para cada destino. Puedes consultar nuestras próximas salidas en la sección 'Próximas Salidas' de nuestra web. También ofrecemos viajes privados con fechas flexibles según tus necesidades.",
  grupos:
    "Nuestros viajes en grupo tienen un máximo de 16 personas para garantizar una experiencia personalizada. Son perfectos para viajeros solitarios o personas que quieren compartir experiencias con otros viajeros con intereses similares. ¿Te gustaría más información sobre algún viaje en grupo específico?",
  privados:
    "Los viajes privados ofrecen máxima flexibilidad y personalización. Diseñamos cada detalle según tus preferencias, desde el alojamiento hasta las actividades. Son ideales para familias, parejas o grupos de amigos que buscan una experiencia exclusiva.",
  reserva:
    "Para reservar, puedes seleccionar el viaje que te interese en nuestra web y hacer clic en 'Reservar'. También puedes llamarnos al +34 91 123 45 67 o enviarnos un email a reservas@aventuraviajes.com y un asesor te ayudará personalmente con tu reserva.",
  contacto:
    "Puedes contactarnos por teléfono al +34 91 123 45 67, por email a info@aventuraviajes.com o visitando nuestra oficina en Madrid. También puedes usar el formulario de contacto en nuestra web y te responderemos a la brevedad.",
  covid:
    "Seguimos todas las recomendaciones sanitarias en nuestros viajes. Antes de cada salida, te informaremos sobre los requisitos específicos del destino. Ofrecemos políticas de cancelación flexibles en caso de restricciones de viaje imprevistas.",
  equipaje:
    "Te enviaremos una lista de equipaje recomendado específica para tu viaje tras la reserva. Para la mayoría de nuestros viajes de aventura, recomendamos ropa cómoda, calzado adecuado para caminatas, protección solar y una mochila pequeña para excursiones diarias.",
  guias:
    "Todos nuestros guías son profesionales con amplia experiencia y conocimiento local. Hablan español y el idioma local del destino, y están certificados en primeros auxilios. Muchos son especialistas en áreas como biología, historia o fotografía, añadiendo valor a tu experiencia.",
  sostenibilidad:
    "Estamos comprometidos con el turismo sostenible. Trabajamos con proveedores locales, minimizamos nuestro impacto ambiental, apoyamos proyectos de conservación y respetamos las culturas locales. Nuestro objetivo es que nuestros viajes beneficien tanto a los viajeros como a las comunidades que visitamos.",
}

export function AITravelAgent({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: predefinedResponses.default }])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simular tiempo de respuesta
    setTimeout(() => {
      let response = predefinedResponses.default

      // Buscar palabras clave en el mensaje del usuario
      const lowerCaseMessage = userMessage.toLowerCase()

      if (
        lowerCaseMessage.includes("destino") ||
        lowerCaseMessage.includes("lugar") ||
        lowerCaseMessage.includes("país") ||
        lowerCaseMessage.includes("continente")
      ) {
        response = predefinedResponses.destinos
      } else if (
        lowerCaseMessage.includes("tipo") ||
        lowerCaseMessage.includes("clase") ||
        lowerCaseMessage.includes("categoría")
      ) {
        response = predefinedResponses.tipos
      } else if (
        lowerCaseMessage.includes("precio") ||
        lowerCaseMessage.includes("costo") ||
        lowerCaseMessage.includes("tarifa") ||
        lowerCaseMessage.includes("cuánto cuesta")
      ) {
        response = predefinedResponses.precios
      } else if (
        lowerCaseMessage.includes("fecha") ||
        lowerCaseMessage.includes("cuando") ||
        lowerCaseMessage.includes("temporada") ||
        lowerCaseMessage.includes("mes")
      ) {
        response = predefinedResponses.fechas
      } else if (
        lowerCaseMessage.includes("grupo") ||
        lowerCaseMessage.includes("personas") ||
        lowerCaseMessage.includes("viajeros")
      ) {
        response = predefinedResponses.grupos
      } else if (
        lowerCaseMessage.includes("privado") ||
        lowerCaseMessage.includes("exclusivo") ||
        lowerCaseMessage.includes("personalizado")
      ) {
        response = predefinedResponses.privados
      } else if (
        lowerCaseMessage.includes("reserva") ||
        lowerCaseMessage.includes("reservar") ||
        lowerCaseMessage.includes("comprar") ||
        lowerCaseMessage.includes("pagar")
      ) {
        response = predefinedResponses.reserva
      } else if (
        lowerCaseMessage.includes("contacto") ||
        lowerCaseMessage.includes("teléfono") ||
        lowerCaseMessage.includes("email") ||
        lowerCaseMessage.includes("llamar")
      ) {
        response = predefinedResponses.contacto
      } else if (
        lowerCaseMessage.includes("covid") ||
        lowerCaseMessage.includes("pandemia") ||
        lowerCaseMessage.includes("sanitario") ||
        lowerCaseMessage.includes("salud")
      ) {
        response = predefinedResponses.covid
      } else if (
        lowerCaseMessage.includes("equipaje") ||
        lowerCaseMessage.includes("maleta") ||
        lowerCaseMessage.includes("llevar") ||
        lowerCaseMessage.includes("ropa")
      ) {
        response = predefinedResponses.equipaje
      } else if (
        lowerCaseMessage.includes("guía") ||
        lowerCaseMessage.includes("guias") ||
        lowerCaseMessage.includes("acompañante") ||
        lowerCaseMessage.includes("experto")
      ) {
        response = predefinedResponses.guias
      } else if (
        lowerCaseMessage.includes("sostenible") ||
        lowerCaseMessage.includes("ecológico") ||
        lowerCaseMessage.includes("ambiente") ||
        lowerCaseMessage.includes("responsable")
      ) {
        response = predefinedResponses.sostenibilidad
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <Bot className="h-5 w-5 text-primary" />
            AventuraBot
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </CardHeader>
        <ScrollArea className="h-[400px] px-4">
          <CardContent className="space-y-4 pt-0">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                <div className="flex items-center gap-2">
                  {message.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  <span className="font-medium">{message.role === "assistant" ? "AventuraBot" : "Tú"}</span>
                </div>
                <div>{message.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="flex w-max max-w-[80%] flex-col gap-2 rounded-lg bg-muted px-3 py-2 text-sm">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  <span className="font-medium">AventuraBot</span>
                </div>
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
        </ScrollArea>
        <CardFooter className="p-4 pt-0">
          <div className="flex w-full items-center space-x-2">
            <Input
              ref={inputRef}
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSend} disabled={!input.trim() || isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Enviar</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

