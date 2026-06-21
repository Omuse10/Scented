import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { m as moods, d as discoverySetProducts, r as rituals, p as perfumeOils } from "./router-D5fhqgTe.js";
import "@tanstack/react-query";
import "react";
function ShopPage() {
  const visibleMoods = moods.filter((m) => m.key !== "discovery");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "The Atelier", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Shop the ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "house." })
    ] }), intro: "Begin where it fits — with a Discovery Set, a complete Ritual, a single perfume oil, or by the feeling you are in today." }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Begin Here", title: "Discovery Sets", id: "discovery", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12", children: discoverySetProducts.map((p, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.6,
      delay: i * 0.06,
      ease: "easeOut"
    }, children: /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
      productId: p.id
    }, className: "group block", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-cream aspect-[4/5] mb-5", children: [
        /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }),
        p.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5", children: p.badge })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-brown text-xl md:text-2xl", style: {
        fontFamily: "var(--font-display)"
      }, children: p.name }),
      /* @__PURE__ */ jsx("p", { className: "text-brown/65 text-sm mt-2 serif-italic", children: p.character }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-brown/80 text-sm tracking-wider", children: [
        "KSh ",
        p.price.toLocaleString()
      ] })
    ] }) }, p.id)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "The Full Ritual", title: "Ritual Collections", intro: "Cleanse, hydrate, seal, scent — composed in one box.", cta: {
      to: "/rituals",
      label: "View all rituals →"
    }, tone: "cream", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12", children: rituals.slice(0, 4).map((r, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.6,
      delay: i * 0.06,
      ease: "easeOut"
    }, children: /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
      productId: r.id
    }, className: "group block", children: [
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-ivory aspect-[4/5] mb-5", children: /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-brown text-xl", style: {
        fontFamily: "var(--font-display)"
      }, children: r.name }),
      /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-xs mt-1 serif-italic", children: r.moodLabel }),
      /* @__PURE__ */ jsx("p", { className: "text-brown/65 text-sm mt-2 leading-relaxed", children: r.tagline })
    ] }) }, r.id)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Shop by Feeling", title: "By Mood", intro: "The mood you are in today. The right fragrance follows.", tone: "ivory", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10", children: visibleMoods.map((m, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
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
      delay: i * 0.05,
      ease: "easeOut"
    }, children: /* @__PURE__ */ jsxs(Link, { to: "/perfume-oils", hash: m.key, className: "group block", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[4/5] mb-4 bg-cream", children: [
        /* @__PURE__ */ jsx("img", { src: m.image, alt: m.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 right-3", children: /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold text-[0.625rem]", children: m.eyebrow }) })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-brown text-base md:text-lg", style: {
        fontFamily: "var(--font-display)"
      }, children: m.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-brown/55 text-xs mt-1.5 serif-italic line-clamp-2", children: [
        m.scents.slice(0, 3).join(" · "),
        "…"
      ] })
    ] }) }, m.key)) }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "The Full Collection", title: "All Perfume Oils", intro: "Twenty signatures, composed in small batches.", cta: {
      to: "/perfume-oils",
      label: "Explore all perfume oils →"
    }, tone: "cream", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-10", children: perfumeOils.slice(0, 12).map((p, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 18
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-40px"
    }, transition: {
      duration: 0.5,
      delay: i % 6 * 0.04,
      ease: "easeOut"
    }, children: /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
      productId: p.id
    }, className: "group block", children: [
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-ivory aspect-[4/5] mb-3", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-brown text-base", style: {
        fontFamily: "var(--font-display)"
      }, children: p.name }),
      /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-xs mt-1 serif-italic", children: p.noteSummary })
    ] }) }, p.id)) }) })
  ] });
}
function Section({
  eyebrow,
  title,
  intro,
  id,
  tone = "ivory",
  cta,
  children
}) {
  return /* @__PURE__ */ jsx("section", { id, className: tone === "cream" ? "bg-cream" : "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "display-lg text-brown", children: title }),
        intro && /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/70 leading-relaxed max-w-xl", children: intro })
      ] }),
      cta && /* @__PURE__ */ jsx(Link, { to: cta.to, className: "eyebrow text-terracotta border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors self-start md:self-end", children: cta.label })
    ] }),
    children
  ] }) });
}
export {
  ShopPage as component
};
