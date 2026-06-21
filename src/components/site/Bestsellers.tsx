import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { bestsellers } from "@/lib/products";

export function Bestsellers() {
  const items = bestsellers();
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Bestsellers</span>
            </div>
            <h2 className="display-lg text-brown">
              Most <span className="serif-italic">reached for.</span>
            </h2>
          </div>
          <Link
            to="/perfume-oils"
            className="eyebrow text-terracotta border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors self-start md:self-end"
          >
            View all perfume oils →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10">
          {items.map((p, i) => (
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
                <div className="relative overflow-hidden bg-ivory aspect-[4/5] mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-brown text-lg md:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </h3>
                <p className="text-brown/55 text-xs mt-1.5 serif-italic">
                  {p.noteSummary}
                </p>
                <p className="text-brown/75 text-sm mt-2 tracking-wider">
                  KSh {p.price.toLocaleString()}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
