import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/site/PageHeader";
import {
  moods,
  perfumeOils,
  rituals,
  discoverySetProducts,
} from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — The Scented Space" },
      {
        name: "description",
        content:
          "Browse Discovery Sets, complete Ritual Collections, perfume oils, and the body collection — composed in Nairobi.",
      },
      { property: "og:title", content: "Shop — The Scented Space" },
      {
        property: "og:description",
        content:
          "Discovery Sets, Rituals, Perfume Oils — composed in Nairobi.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const visibleMoods = moods.filter((m) => m.key !== "discovery");

  return (
    <>
      <PageHeader
        eyebrow="The Atelier"
        title={
          <>
            Shop the <span className="serif-italic text-gold">house.</span>
          </>
        }
        intro="Begin where it fits — with a Discovery Set, a complete Ritual, a single perfume oil, or by the feeling you are in today."
      />

      {/* Discovery Sets */}
      <Section eyebrow="Begin Here" title="Discovery Sets" id="discovery">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {discoverySetProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                to="/shop/$productId"
                params={{ productId: p.id }}
                className="group block"
              >
                <div className="relative overflow-hidden bg-cream aspect-[4/5] mb-5">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3
                  className="text-brown text-xl md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="text-brown/65 text-sm mt-2 serif-italic">
                  {p.character}
                </p>
                <p className="mt-3 text-brown/80 text-sm tracking-wider">
                  KSh {p.price.toLocaleString()}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Ritual Collections */}
      <Section
        eyebrow="The Full Ritual"
        title="Ritual Collections"
        intro="Cleanse, hydrate, seal, scent — composed in one box."
        cta={{ to: "/rituals", label: "View all rituals →" }}
        tone="cream"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {rituals.slice(0, 4).map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                to="/shop/$productId"
                params={{ productId: r.id }}
                className="group block"
              >
                <div className="relative overflow-hidden bg-ivory aspect-[4/5] mb-5">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-brown text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {r.name}
                </h3>
                <p className="text-brown/55 text-xs mt-1 serif-italic">
                  {r.moodLabel}
                </p>
                <p className="text-brown/65 text-sm mt-2 leading-relaxed">
                  {r.tagline}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Shop by Feeling */}
      <Section
        eyebrow="Shop by Feeling"
        title="By Mood"
        intro="The mood you are in today. The right fragrance follows."
        tone="ivory"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10">
          {visibleMoods.map((m, i) => (
            <motion.div
              key={m.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            >
              <Link
                to="/perfume-oils"
                hash={m.key}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-cream">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="eyebrow text-gold text-[0.625rem]">
                      {m.eyebrow}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-brown text-base md:text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h3>
                <p className="text-brown/55 text-xs mt-1.5 serif-italic line-clamp-2">
                  {m.scents.slice(0, 3).join(" · ")}…
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* All perfume oils preview */}
      <Section
        eyebrow="The Full Collection"
        title="All Perfume Oils"
        intro="Twenty signatures, composed in small batches."
        cta={{ to: "/perfume-oils", label: "Explore all perfume oils →" }}
        tone="cream"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-10">
          {perfumeOils.slice(0, 12).map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04, ease: "easeOut" }}
            >
              <Link
                to="/shop/$productId"
                params={{ productId: p.id }}
                className="group block"
              >
                <div className="relative overflow-hidden bg-ivory aspect-[4/5] mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-brown text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="text-brown/55 text-xs mt-1 serif-italic">
                  {p.noteSummary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Section({
  eyebrow,
  title,
  intro,
  id,
  tone = "ivory",
  cta,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "ivory" | "cream";
  cta?: { to: "/rituals" | "/perfume-oils"; label: string };
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={tone === "cream" ? "bg-cream" : "bg-ivory"}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="hairline" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className="display-lg text-brown">{title}</h2>
            {intro && (
              <p className="mt-4 text-brown/70 leading-relaxed max-w-xl">
                {intro}
              </p>
            )}
          </div>
          {cta && (
            <Link
              to={cta.to}
              className="eyebrow text-terracotta border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors self-start md:self-end"
            >
              {cta.label}
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
