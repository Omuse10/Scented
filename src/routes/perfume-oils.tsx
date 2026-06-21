import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import { Bestsellers } from "@/components/site/Bestsellers";
import { moods, oilsByMood, type Product } from "@/lib/products";

export const Route = createFileRoute("/perfume-oils")({
  head: () => ({
    meta: [
      { title: "Perfume Oils — The Scented Space" },
      {
        name: "description",
        content:
          "The complete collection of long-wear perfume oils, composed in Nairobi. Browse by feeling — warm, radiant, bold, refined, distinguished.",
      },
      { property: "og:title", content: "Perfume Oils — The Scented Space" },
      {
        property: "og:description",
        content:
          "Long-wear perfume oils for skin — warm, radiant, bold, refined, distinguished.",
      },
    ],
  }),
  component: PerfumeOilsPage,
});

function PerfumeOilsPage() {
  const visibleMoods = moods.filter((m) => m.key !== "discovery");

  return (
    <>
      <PageHeader
        eyebrow="Perfume Oils"
        title={
          <>
            The full <span className="serif-italic text-gold">collection.</span>
          </>
        }
        intro="Long-wear perfume oils, poured in small batches in Nairobi. Choose a feeling — the right scent follows."
      />

      <Bestsellers />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
          {visibleMoods.map((m) => {
            const items = oilsByMood(m.key);
            if (items.length === 0) return null;
            return (
              <div key={m.key} id={m.key} className="scroll-mt-32">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="hairline" />
                      <span className="eyebrow text-gold">{m.eyebrow}</span>
                    </div>
                    <h2 className="display-lg text-brown">
                      {m.title.split(" & ")[0]}{" "}
                      {m.title.includes(" & ") && (
                        <span className="serif-italic">
                          &amp; {m.title.split(" & ")[1]}
                        </span>
                      )}
                    </h2>
                    <p className="mt-4 text-brown/75 leading-relaxed serif-italic">
                      {m.emotion}
                    </p>
                  </div>
                  <p className="md:col-span-4 md:col-start-9 text-brown/65 text-sm leading-relaxed">
                    {m.forWhom}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {items.map((p, i) => (
                    <OilCard key={p.id} p={p} delay={(i % 4) * 0.05} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function OilCard({ p, delay }: { p: Product; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="group flex flex-col"
    >
      <Link
        to="/shop/$productId"
        params={{ productId: p.id }}
        className="relative overflow-hidden bg-cream aspect-[4/5] mb-5 block"
      >
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
        />
        {p.bestseller && (
          <span className="absolute top-4 left-4 eyebrow text-[0.625rem] bg-ivory/90 backdrop-blur-sm text-brown px-3 py-1.5">
            Bestseller
          </span>
        )}
      </Link>
      <h3
        className="text-brown text-xl md:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <Link
          to="/shop/$productId"
          params={{ productId: p.id }}
          className="hover:text-terracotta transition-colors"
        >
          {p.name}
        </Link>
      </h3>
      {p.inspiredBy && (
        <p className="text-brown/50 text-xs mt-1 serif-italic">
          Inspired by {p.inspiredBy}
        </p>
      )}
      <p className="text-brown/65 text-sm mt-2 serif-italic">{p.noteSummary}</p>
      <p className="mt-4 text-brown/80 text-sm tracking-wider">
        KSh {p.price.toLocaleString()}
      </p>
    </motion.article>
  );
}
