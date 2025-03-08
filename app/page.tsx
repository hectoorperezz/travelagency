import { SearchBar } from "@/components/search-bar"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { UpcomingTrips } from "@/components/upcoming-trips"
import { TripTypes } from "@/components/trip-types"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Paisaje de aventura"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Descubre el mundo con experiencias únicas de aventura
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Viajes personalizados para aventureros desde 1992
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Upcoming Trips */}
      <UpcomingTrips />

      {/* Trip Types */}
      <TripTypes />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}

