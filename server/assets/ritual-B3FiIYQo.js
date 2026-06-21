import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { a as ritualImg, b as bodyWashImg, c as bodyOilImg } from "./router-hF0FH8D9.js";
import "@tanstack/react-query";
import "@tanstack/history";
import "react";
const steps = [{
  n: "01",
  title: "Cleanse",
  body: "A shower gel composed to ready the skin — not strip it.",
  detail: "Warm water. Slow hands. The skin opens; the ritual begins.",
  adds: "Prepares the canvas",
  img: ritualImg
}, {
  n: "02",
  title: "Hydrate",
  body: "Whipped body butter, deeply nourishing, never heavy.",
  detail: "Apply on still-damp skin. Press, do not rub. Let the butter melt where it lands.",
  adds: "Cushions the scent",
  img: bodyWashImg
}, {
  n: "03",
  title: "Seal",
  body: "A silken body oil that locks in moisture and warms the fragrance to come.",
  detail: "A few drops, palm to palm. Glide down the limbs, the back of the neck.",
  adds: "Locks fragrance to the skin",
  img: bodyOilImg
}, {
  n: "04",
  title: "Scent",
  body: "Long-wear perfume oil — the signature, drawn close to the skin.",
  detail: "Roll along pulse points: inner wrist, behind the ear, the soft inside of the elbow.",
  adds: "Crowns the ritual",
  img: bodyWashImg
}];
const pairings = [{
  name: "The Quiet Morning",
  body: "Shower Gel · Body Butter · Théa Perfume Oil",
  body2: "For daylight hours and understated grace.",
  to: "alina-ritual"
}, {
  name: "The Slow Evening",
  body: "Shower Gel · Body Oil · Nahla Perfume Oil",
  body2: "For low light, slow dinners, and lingering warmth.",
  to: "nahla-ritual"
}, {
  name: "The Late Bloom",
  body: "Body Butter · Body Oil · Carmine Perfume Oil",
  body2: "For evenings designed to be remembered.",
  to: "velvet-elegance-ritual"
}];
function Chapter({
  eyebrow,
  title,
  children,
  flip,
  img
}) {
  return /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 28
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-60px"
  }, transition: {
    duration: 0.9,
    ease: "easeOut"
  }, className: `grid md:grid-cols-12 gap-8 md:gap-16 items-center ${flip ? "md:[&>:first-child]:order-2" : ""}`, children: [
    img && /* @__PURE__ */ jsx("div", { className: "md:col-span-6 relative aspect-[5/6] overflow-hidden bg-cream", children: /* @__PURE__ */ jsx("img", { src: img, alt: "", className: "absolute inset-0 w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsxs("div", { className: img ? "md:col-span-5" : "md:col-span-10 md:col-start-2", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "display-lg text-brown mt-3", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4 text-brown/80 leading-relaxed md:text-lg", children })
    ] })
  ] });
}
function RitualPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "The Ritual", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The art of ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "scented skin." })
    ] }), intro: "Fragrance is not a finishing touch. It is built — slowly, layer by layer. This is how scent is meant to live on the skin." }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28 space-y-28 md:space-y-36", children: [
      /* @__PURE__ */ jsxs(Chapter, { eyebrow: "Chapter I", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Why fragrance ",
        /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "fades." })
      ] }), img: ritualImg, children: [
        /* @__PURE__ */ jsx("p", { children: "On unprepared skin, even the most beautiful composition disappears within hours. Dry skin cannot hold scent — the molecules lift, drift, and vanish into the air." }),
        /* @__PURE__ */ jsx("p", { className: "serif-italic text-brown/65", children: "Most fragrances vanish within 2–3 hours on bare skin." })
      ] }),
      /* @__PURE__ */ jsx(Chapter, { eyebrow: "Chapter II", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Why preparation ",
        /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "matters." })
      ] }), img: bodyWashImg, flip: true, children: /* @__PURE__ */ jsx("p", { children: "Hydrated, oiled skin gives fragrance somewhere to live. Oils slow evaporation. Butters add a soft, scented cushion. The ritual is not decoration — it is what makes the scent last from morning until evening." }) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Expected longevity" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-brown/70 max-w-2xl mb-8 leading-relaxed", children: "A simple difference, measured on the same skin, with the same scent." }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 md:gap-10", children: [{
          label: "Unprepared skin",
          value: "2 – 3 hours",
          w: "20%"
        }, {
          label: "The full ritual",
          value: "8 – 12 hours",
          w: "92%"
        }].map((row) => /* @__PURE__ */ jsxs("div", { className: "border-t border-brown/15 pt-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/65", children: row.label }),
            /* @__PURE__ */ jsx("span", { className: "text-brown text-xl", style: {
              fontFamily: "var(--font-display)"
            }, children: row.value })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-px bg-brown/15 relative overflow-hidden", children: /* @__PURE__ */ jsx(motion.div, { initial: {
            width: 0
          }, whileInView: {
            width: row.w
          }, viewport: {
            once: true
          }, transition: {
            duration: 1.4,
            ease: "easeOut",
            delay: 0.2
          }, className: "h-px bg-gold absolute left-0 top-0", style: {
            height: 2,
            top: -0.5
          } }) })
        ] }, row.label)) })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Chapter III · The four steps" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown max-w-3xl", children: [
          "How ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "layering" }),
          " works."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-brown/70 max-w-2xl mt-4 leading-relaxed", children: "Each step adds something the next cannot. Together, they hold a fragrance close to the skin from morning until evening." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 mt-14", children: steps.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-40px"
        }, transition: {
          duration: 0.7,
          delay: i * 0.08,
          ease: "easeOut"
        }, className: "border-t border-brown/15 pt-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold text-sm tracking-[0.3em]", children: s.n }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/50", children: "Step" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-brown text-2xl mb-2", style: {
            fontFamily: "var(--font-display)"
          }, children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "text-brown/75 text-sm leading-relaxed", children: s.body }),
          /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-sm leading-relaxed mt-2 serif-italic", children: s.detail }),
          /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-block eyebrow text-[0.625rem] text-gold border-t border-gold/40 pt-2", children: [
            "Adds · ",
            s.adds
          ] })
        ] }, s.n)) })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.8,
        ease: "easeOut"
      }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Chapter IV · Recommended pairings" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown max-w-3xl", children: [
          "Three rituals, ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "composed." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-10 mt-12", children: pairings.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
          productId: p.to
        }, className: "group block border-t border-brown/15 pt-6 hover:border-terracotta transition-colors", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-brown text-2xl", style: {
            fontFamily: "var(--font-display)"
          }, children: p.name }),
          /* @__PURE__ */ jsx("p", { className: "text-brown/70 text-sm mt-3 leading-relaxed", children: p.body }),
          /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-sm mt-2 serif-italic", children: p.body2 }),
          /* @__PURE__ */ jsx("span", { className: "mt-5 inline-block eyebrow text-terracotta border-b border-terracotta/30 pb-1", children: "Begin this ritual →" })
        ] }, p.name)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-brown text-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 md:px-10 py-24 md:py-32 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "hairline" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-ivory/70", children: "Begin" }),
        /* @__PURE__ */ jsx("span", { className: "hairline" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "display-lg text-ivory", children: [
        "The full ritual, ",
        /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "composed for you." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-ivory/75 leading-relaxed md:text-lg", children: "All four pieces, in your chosen scent. The slowest, most beautiful way to wear fragrance." }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "mt-10 inline-flex items-center gap-3 bg-ivory text-brown px-10 py-4 eyebrow hover:bg-gold transition-colors", children: [
        "Shop Rituals ",
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
      ] })
    ] }) })
  ] });
}
export {
  RitualPage as component
};
