import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { e as oilsWithFormat } from "./router-D5fhqgTe.js";
import "@tanstack/react-query";
import "react";
const sections = [{
  format: "shower-gel",
  title: "Shower Gels",
  eyebrow: "01 · Cleanse",
  body: "A cleanse that readies the skin — never strips it."
}, {
  format: "body-lotion",
  title: "Body Lotions",
  eyebrow: "02 · Hydrate",
  body: "Light, fast-absorbing hydration in our signature scents."
}, {
  format: "body-butter",
  title: "Body Butters",
  eyebrow: "02 · Hydrate",
  body: "Whipped, deeply nourishing, never heavy."
}, {
  format: "dry-body-oil",
  title: "Dry Body Oils",
  eyebrow: "03 · Seal",
  body: "Silken, fast-sinking — locks moisture and lifts the scent."
}, {
  format: "nourishing-body-oil",
  title: "Nourishing Body Oils",
  eyebrow: "03 · Seal",
  body: "Slower, richer — for dry skin and longer wear."
}];
function BodyPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Body Collection", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The body, ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "prepared." })
    ] }), intro: "Cleansed, hydrated, sealed — each step composed in our signature scents, so the fragrance lives on the skin from morning until evening." }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28 space-y-24 md:space-y-32", children: sections.map((s) => {
      const items = oilsWithFormat(s.format);
      if (items.length === 0) return null;
      return /* @__PURE__ */ jsxs("div", { id: s.format, className: "scroll-mt-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-10 md:mb-14", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "hairline" }),
              /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: s.eyebrow })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "display-lg text-brown", children: s.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "md:col-span-4 md:col-start-9 text-brown/70 leading-relaxed", children: s.body })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-10", children: items.map((p, i) => /* @__PURE__ */ jsx(BodyCard, { p, format: s.format, delay: i % 6 * 0.04 }, p.id)) })
      ] }, s.format);
    }) }) })
  ] });
}
function BodyCard({
  p,
  format,
  delay
}) {
  return /* @__PURE__ */ jsx(motion.div, { initial: {
    opacity: 0,
    y: 18
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-40px"
  }, transition: {
    duration: 0.6,
    delay,
    ease: "easeOut"
  }, children: /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
    productId: p.id
  }, className: "group block", title: `${p.name} · ${format}`, children: [
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-cream aspect-[4/5] mb-3", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: `${p.name} ${format}`, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-brown text-base md:text-lg", style: {
      fontFamily: "var(--font-display)"
    }, children: p.name }),
    /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-xs mt-1 serif-italic", children: p.noteSummary })
  ] }) });
}
export {
  BodyPage as component
};
