import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import bodyWashImg from "@/assets/product-nahla.jpg";
import bodyButterImg from "@/assets/mood-warm.jpg";
import bodyLotionImg from "@/assets/mood-radiant.jpg";
import bodyOilImg from "@/assets/product-velvet.jpg";
import perfumeOilImg from "@/assets/product-discovery.jpg";

const cards = [
  {
    title: "Body Wash",
    subtitle: "Cleanse",
    image: bodyWashImg,
    to: "/body-wash" as const,
  },
  {
    title: "Body Butter",
    subtitle: "Rich hydration",
    image: bodyButterImg,
    to: "/moisture" as const,
  },
  {
    title: "Body Lotion",
    subtitle: "Light hydration",
    image: bodyLotionImg,
    to: "/moisture" as const,
  },
  {
    title: "Body Oil",
    subtitle: "Seal and soften",
    image: bodyOilImg,
    to: "/body-oil" as const,
  },
  {
    title: "Perfume Oil",
    subtitle: "The finishing touch",
    image: perfumeOilImg,
    to: "/perfume-oils" as const,
  },
];

export function ShopByProduct() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="hairline" />
          <span className="eyebrow text-gold">Shop By Product</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
            >
              <Link
                to={card.to}
                className="group block"
              >
                <div className="relative overflow-hidden bg-cream aspect-[4/5] mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      className="text-ivory text-lg md:text-xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-ivory/75 text-xs mt-1 serif-italic">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
