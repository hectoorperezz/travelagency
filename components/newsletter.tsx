import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">Mantente informado</h2>
          <p className="mt-2">
            Suscríbete a nuestro boletín para recibir ofertas exclusivas y novedades sobre nuestros viajes
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="max-w-sm bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary">Suscribirse</Button>
          </div>
          <p className="mt-2 text-xs text-primary-foreground/80">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}

