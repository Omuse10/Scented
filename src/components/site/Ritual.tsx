import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import ritualImg from "@/assets/ritual.jpg";
import warmImg from "@/assets/mood-warm.jpg";
import radiantImg from "@/assets/mood-radiant.jpg";
import boldImg from "@/assets/mood-bold.jpg";
import refinedImg from "@/assets/mood-refined.jpg";

const steps = [
  {
    n: "01",
    title: "Cleanse",
    sub: "Shower Gel",
    body: "A cleanse that readies the skin — never strips it. The first quiet trace of the scent begins here.",
    image: ritualImg,
  },
  {
    n: "02",
    title: "Hydrate",
    sub: "Body Lotion or Body Butter",
    body: "Deep, soft hydration. The cushion that lets fragrance settle and stay.",
    image: warmImg,
  },
  {
    n: "03",
    title: "Seal",
    sub: "Body Oil",
    body: "A finishing oil that holds moisture in and warms the fragrance to come.",
    image: radiantImg,
  },
  {
    n: "04",
    title: "Scent",
    sub: "Perfume Oil",
    body: "The signature — drawn close to the skin. Quiet, lasting, unmistakably yours.",
    image: boldImg,
  },
];

export function Ritual() {
  return (
    <section id="ritual" className="bg-cream">
      {/* Opening manifesto */}
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">The Ritual — Four Steps</span>
            </div>
            <h2 className="display-lg text-brown">
              Beautiful scent begins with{" "}
              <span className="serif-italic">beautiful skin.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-brown/75 leading-relaxed text-base md:text-lg">
            Fragrance is not a finishing touch. It is built layer by layer —
            cleansed, hydrated, sealed, and then, only then, scented.
          </p>
        </div>
      </div>

      {/* Cinematic opening image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative h-[70vh] md:h-[85vh] overflow-hidden"
      >
        <img
          src={refinedImg}
          alt="Warm afternoon light across the skin"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/30 via-transparent to-brown/15" />
        <div className="absolute bottom-10 md:bottom-16 left-5 md:left-16 right-5 md:right-16">
          <p
            className="text-ivory max-w-xl serif-italic"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            "She does not perfume herself. She prepares the skin to receive it."
          </p>
        </div>
      </motion.div>

      {/* Alternating editorial steps */}
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-36">
        <div className="space-y-28 md:space-y-44">
          {steps.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.n}
                className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden aspect-[4/5] md:aspect-[5/6] md:col-span-7 ${
                    reverse ? "md:col-start-6" : ""
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-5 left-5 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5">
                    Step {s.n}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                  className={`md:col-span-4 ${
                    reverse ? "md:col-start-2 md:row-start-1" : "md:col-start-9"
                  }`}
                >
                  <span
                    className="text-gold tracking-[0.3em] text-sm"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {s.n} — {s.sub}
                  </span>
                  <h3
                    className="text-brown mt-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                      lineHeight: 1.05,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-6 text-brown/75 leading-relaxed md:text-lg max-w-md">
                    {s.body}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mt-28 md:mt-36 text-center">
          <span className="hairline mx-auto block mb-8" />
          <Link
            to="/ritual"
            className="inline-flex items-center gap-3 bg-brown text-ivory px-10 py-4 eyebrow hover:bg-terracotta transition-colors"
          >
            Discover The Ritual <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
