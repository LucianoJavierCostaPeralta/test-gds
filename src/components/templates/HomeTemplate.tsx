import { Container } from "@/components/atoms";
import { CTAButton } from "@/components/atoms/CTAButton";
import { Card } from "@/components/molecules";

const cards = [
  {
    title: "Layout simple",
    description: "Una estructura clara para empezar a trabajar con Git.",
  },
  {
    title: "Componentes base",
    description: "Un boton, un container y una card reutilizable.",
  },
  {
    title: "Listo para crecer",
    description: "Despues se pueden sumar ramas, estilos y nuevas secciones.",
  },
];

export function HomeTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 text-slate-950">
      <Container>
        <section className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Proyecto inicial
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Feature | Titulo alternativo 2
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Esta base es intencionalmente simple: sirve para hacer un commit
            inicial, luego separar tareas de layout, componentes y estilos sin
            mezclar todo.
          </p>
          <div className="mt-8">
            <CTAButton>Ver nas informacion</CTAButton>
          </div>
        </section>

        <section id="componentes" className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </section>
      </Container>
    </main>
  );
}
