import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { B as Bestsellers } from "./Bestsellers-jQp11Lms.js";
import { m as moods, o as oilsByMood } from "./router-D5fhqgTe.js";
import "@tanstack/react-query";
import "react";
function PerfumeOilsPage() {
  const visibleMoods = moods.filter((m) => m.key !== "discovery");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Perfume Oils", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The full ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "collection." })
    ] }), intro: "Long-wear perfume oils, poured in small batches in Nairobi. Choose a feeling — the right scent follows." }),
    /* @__PURE__ */ jsx(Bestsellers, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28 space-y-24 md:space-y-32", children: visibleMoods.map((m) => {
      const items = oilsByMood(m.key);
      if (items.length === 0) return null;
      return /* @__PURE__ */ jsxs("div", { id: m.key, className: "scroll-mt-32", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "hairline" }),
              /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: m.eyebrow })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
              m.title.split(" & ")[0],
              " ",
              m.title.includes(" & ") && /* @__PURE__ */ jsxs("span", { className: "serif-italic", children: [
                "& ",
                m.title.split(" & ")[1]
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/75 leading-relaxed serif-italic", children: m.emotion })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "md:col-span-4 md:col-start-9 text-brown/65 text-sm leading-relaxed", children: m.forWhom })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12", children: items.map((p, i) => /* @__PURE__ */ jsx(OilCard, { p, delay: i % 4 * 0.05 }, p.id)) })
      ] }, m.key);
    }) }) })
  ] });
}
function OilCard({
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
  PerfumeOilsPage as component
};
