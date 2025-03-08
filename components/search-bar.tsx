"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function SearchBar() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [destination, setDestination] = useState("")
  const [travelers, setTravelers] = useState("2")
  const [tripType, setTripType] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir la URL de búsqueda con los parámetros
    const searchParams = new URLSearchParams()
    if (destination) searchParams.set("destino", destination)
    if (tripType) searchParams.set("tipo", tripType)
    if (date) searchParams.set("fecha", format(date, "yyyy-MM-dd"))
    if (travelers) searchParams.set("viajeros", travelers)

    // Redirigir a la página de resultados de búsqueda
    router.push(`/resultados-busqueda?${searchParams.toString()}`)
  }

  return (
    <div className="w-full max-w-4xl rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
      <form onSubmit={handleSearch} className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto_auto]">
        <div>
          <Label htmlFor="destination" className="sr-only">
            Destino
          </Label>
          <Input
            id="destination"
            placeholder="¿A dónde quieres ir?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="h-10"
          />
        </div>

        <div>
          <Label htmlFor="trip-type" className="sr-only">
            Tipo de viaje
          </Label>
          <Select value={tripType} onValueChange={setTripType}>
            <SelectTrigger id="trip-type" className="h-10 w-[140px]">
              <SelectValue placeholder="Tipo de viaje" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="adventure">Aventura</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="nature">Naturaleza</SelectItem>
              <SelectItem value="expedition">Expedición</SelectItem>
              <SelectItem value="cruise">Crucero</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("h-10 w-[140px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: es }) : "Fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={es} />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="travelers" className="sr-only">
            Viajeros
          </Label>
          <Select value={travelers} onValueChange={setTravelers}>
            <SelectTrigger id="travelers" className="h-10 w-[140px]">
              <SelectValue placeholder="Viajeros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Viajero</SelectItem>
              <SelectItem value="2">2 Viajeros</SelectItem>
              <SelectItem value="3">3 Viajeros</SelectItem>
              <SelectItem value="4">4 Viajeros</SelectItem>
              <SelectItem value="5+">5+ Viajeros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="h-10">
          <Search className="mr-2 h-4 w-4" />
          Buscar
        </Button>
      </form>
    </div>
  )
}

