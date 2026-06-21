import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { f as bodyLotionImg, g as bodyButterImg } from "./router-hF0FH8D9.js";
import "@tanstack/react-query";
import "@tanstack/history";
import "react";
const options = [{
  title: "Body Lotion",
  intro: "For lightweight daily moisture.",
  bestFor: ["Daytime use", "Quick absorption", "Warm weather", "A soft, smooth finish"],
  cta: "Shop Body Lotion",
  to: "/body-lotion",
  image: bodyLotionImg
}, {
  title: "Body Butter",
  intro: "For richer, deeper moisture.",
  bestFor: ["Dry skin", "Night-time use", "Longer-lasting softness", "A velvety finish"],
  cta: "Shop Body Butter",
  to: "/body-butter",
  image: bodyButterImg
}];
function MoisturePage() {
  return /* @__PURE__ */ jsx("section", { className: "bg-ivory min-h-[calc(100svh-80px)] flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16 md:mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "hairline" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: "Hydration" }),
        /* @__PURE__ */ jsx("span", { className: "hairline" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "display-xl text-brown", children: [
        "Choose Your",
        " ",
        /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "Moisture" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto", children: options.map((opt, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: "easeOut"
    }, children: /* @__PURE__ */ jsxs(Link, { to: opt.to, className: "group block h-full bg-cream p-6 md:p-10 transition-colors hover:bg-cream/80", children: [
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden aspect-[4/3] mb-8 bg-ivory", children: /* @__PURE__ */ jsx("img", { src: opt.image, alt: opt.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-brown text-2xl md:text-3xl mb-3", style: {
        fontFamily: "var(--font-display)"
      }, children: opt.title }),
      /* @__PURE__ */ jsx("p", { className: "text-brown/75 serif-italic mb-8", children: opt.intro }),
      /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/50 text-[0.625rem] uppercase tracking-widest block mb-4", children: "Best for" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: opt.bestFor.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-brown/80 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" }),
          item
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center w-full bg-brown text-ivory px-8 py-4 eyebrow hover:bg-terracotta transition-colors", children: opt.cta })
    ] }) }, opt.title)) })
  ] }) });
}
export {
  MoisturePage as component
};
