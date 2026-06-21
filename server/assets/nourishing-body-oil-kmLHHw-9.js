import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { e as oilsWithFormat } from "./router-D5fhqgTe.js";
import "@tanstack/react-query";
import "react";
const availableScents = [{
  name: "Nahla",
  notes: "Creamy • Vanilla • Caramel"
}, {
  name: "Alina",
  notes: "Fruity • Sweet • Elegant"
}];
function NourishingBodyOilPage() {
  const items = oilsWithFormat("nourishing-body-oil");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Nourishing Body Oil", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Richer. More conditioning.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "More indulgent." })
    ] }), intro: "A slower, more nourishing oil that conditions deeply and lasts. Ideal for dry skin, after-shower locking in moisture, and a calming night-time ritual." }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/50 text-[0.625rem] uppercase tracking-widest block mb-4", children: "Available scents" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-x-6 gap-y-3", children: availableScents.map((scent) => /* @__PURE__ */ jsxs("li", { className: "text-brown/80 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-brown", children: scent.name }),
          /* @__PURE__ */ jsx("span", { className: "block text-brown/55 text-xs serif-italic mt-0.5", children: scent.notes })
        ] }, scent.name)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12", children: items.map((p, i) => /* @__PURE__ */ jsx(NourishingBodyOilCard, { p, delay: i * 0.06 }, p.id)) })
    ] }) })
  ] });
}
function NourishingBodyOilCard({
  p,
  delay
}) {
  return /* @__PURE__ */ jsxs(motion.article, { initial: {
    opacity: 0,
    y: 22
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-60px"
  }, transition: {
    duration: 0.7,
    delay,
    ease: "easeOut"
  }, className: "group flex flex-col", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
      productId: p.id
    }, className: "relative overflow-hidden bg-cream aspect-[4/5] mb-5 block", children: [
      /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }),
      p.bestseller && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 eyebrow text-[0.625rem] bg-ivory/90 backdrop-blur-sm text-brown px-3 py-1.5", children: "Bestseller" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "text-brown text-xl md:text-2xl", style: {
      fontFamily: "var(--font-display)"
    }, children: /* @__PURE__ */ jsx(Link, { to: "/shop/$productId", params: {
      productId: p.id
    }, className: "hover:text-terracotta transition-colors", children: p.name }) }),
    p.inspiredBy && /* @__PURE__ */ jsxs("p", { className: "text-brown/50 text-xs mt-1 serif-italic", children: [
      "Inspired by ",
      p.inspiredBy
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-brown/65 text-sm mt-2 serif-italic", children: p.noteSummary }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-brown/80 text-sm tracking-wider", children: [
      "KSh ",
      p.price.toLocaleString()
    ] })
  ] });
}
export {
  NourishingBodyOilPage as component
};
