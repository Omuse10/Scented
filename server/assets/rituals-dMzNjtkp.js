import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { r as rituals, u as useCart, F as FORMAT_LABEL } from "./router-hF0FH8D9.js";
import "@tanstack/react-query";
import "@tanstack/history";
function RitualsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "Ritual Collections", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "Ritual." })
    ] }), intro: "Beautiful scent begins with beautiful skin. Each ritual is the full layering — composed in one of our signature scents, in one box." }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28 space-y-28 md:space-y-36", children: rituals.map((r, i) => /* @__PURE__ */ jsx(RitualBlock, { r, flip: i % 2 === 1 }, r.id)) }) })
  ] });
}
function RitualBlock({
  r,
  flip
}) {
  const {
    add,
    setOpen
  } = useCart();
  const [variantIdx, setVariantIdx] = useState(0);
  const variantLabel = r.variants?.[variantIdx]?.label;
  return /* @__PURE__ */ jsxs(motion.div, { id: r.id, initial: {
    opacity: 0,
    y: 28
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.9,
    ease: "easeOut"
  }, className: `grid md:grid-cols-12 gap-10 md:gap-16 items-center scroll-mt-32 ${flip ? "md:[&>:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
      productId: r.id
    }, className: "md:col-span-6 relative aspect-[5/6] overflow-hidden bg-cream group block", children: [
      /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }),
      r.bestseller && /* @__PURE__ */ jsx("span", { className: "absolute top-5 left-5 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5", children: "Bestseller" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:col-start-8", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: r.moodLabel }),
      /* @__PURE__ */ jsx("h2", { className: "display-lg text-brown mt-3", children: r.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/80 leading-relaxed serif-italic", children: r.tagline }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-brown/65 leading-relaxed", children: r.story }),
      /* @__PURE__ */ jsx("ol", { className: "mt-8 border-t border-brown/15", children: r.steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-baseline justify-between gap-6 border-b border-brown/10 py-3.5", children: [
        /* @__PURE__ */ jsxs("span", { className: "eyebrow text-gold text-[0.625rem] w-6", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("span", { className: "flex-1 text-brown", style: {
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem"
        }, children: FORMAT_LABEL[s.format] })
      ] }, s.format + i)) }),
      r.variants && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60 block mb-3", children: "Available in" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: r.variants.map((v, i) => /* @__PURE__ */ jsx("button", { onClick: () => setVariantIdx(i), className: `eyebrow px-4 py-2.5 border transition-colors ${i === variantIdx ? "bg-brown text-ivory border-brown" : "border-brown/25 text-brown/75 hover:border-terracotta hover:text-terracotta"}`, children: v.label }, v.scentId)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-baseline gap-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-brown text-2xl", style: {
          fontFamily: "var(--font-display)"
        }, children: [
          "KSh ",
          r.price.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/50 text-[0.625rem]", children: "Complete Ritual" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => {
          add({
            id: r.id + (variantLabel ? `:${variantIdx}` : ""),
            name: r.name,
            variant: variantLabel,
            price: r.price,
            image: r.image
          }, 1);
          setOpen(true);
        }, className: "flex-1 bg-terracotta text-ivory eyebrow py-4 px-8 hover:bg-brown transition-colors", children: "Add Entire Ritual" }),
        /* @__PURE__ */ jsx(Link, { to: "/shop/$productId", params: {
          productId: r.id
        }, className: "text-center border border-brown/30 text-brown eyebrow py-4 px-8 hover:bg-cream transition-colors", children: "View Details" })
      ] })
    ] })
  ] });
}
export {
  RitualsPage as component
};
