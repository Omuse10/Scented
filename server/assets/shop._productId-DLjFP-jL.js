import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { R as Route, u as useCart, q as products, p as perfumeOils, o as oilsByMood, F as FORMAT_LABEL } from "./router-hF0FH8D9.js";
import "@tanstack/react-query";
import "@tanstack/history";
function ProductPage() {
  const {
    product
  } = Route.useLoaderData();
  const {
    add,
    setOpen
  } = useCart();
  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState(product.availableIn[0] ?? null);
  const selectedVariant = product.variants?.[variantIdx];
  const price = selectedVariant?.price ?? product.price;
  const variantLabel = selectedVariant?.label;
  const sameScentVariants = products.filter((p) => p.id !== product.id && p.name.split(" ")[0] === product.name.split(" ")[0]);
  const related = (product.mood === "discovery" ? perfumeOils : oilsByMood(product.mood)).filter((p) => p.id !== product.id).slice(0, 3);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brown h-20 md:h-24" }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-10 md:py-16", children: [
      /* @__PURE__ */ jsxs("nav", { className: "eyebrow text-brown/55 mb-8 flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-terracotta", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/shop", className: "hover:text-terracotta", children: "Shop" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-brown", children: product.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 md:gap-16", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 1.02
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }, className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] bg-cream overflow-hidden", children: [
            /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "absolute inset-0 w-full h-full object-cover" }),
            product.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-5 left-5 eyebrow bg-ivory/90 backdrop-blur-sm text-brown px-3 py-1.5", children: product.badge })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 mt-3", children: [product.image, product.image, product.image].map((src, i) => /* @__PURE__ */ jsx("div", { className: "relative aspect-square bg-cream overflow-hidden", children: /* @__PURE__ */ jsx("img", { src, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-90" }) }, i)) })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.9,
          delay: 0.15,
          ease: "easeOut"
        }, className: "md:col-span-5 md:pt-6", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: product.moodLabel }),
          /* @__PURE__ */ jsx("h1", { className: "display-lg text-brown mt-3", children: product.name }),
          product.inspiredBy && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-brown/55 serif-italic", children: [
            "Inspired by ",
            product.inspiredBy
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/85 leading-relaxed serif-italic", children: product.noteSummary }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-brown text-2xl", style: {
              fontFamily: "var(--font-display)"
            }, children: [
              "KSh ",
              price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/50 text-[0.625rem]", children: "Inclusive · Nairobi delivery extra" })
          ] }),
          product.availableIn.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60 block mb-3", children: "Available in" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.availableIn.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setSelectedFormat(f), className: `eyebrow px-4 py-2.5 border transition-colors ${selectedFormat === f ? "bg-brown text-ivory border-brown" : "border-brown/25 text-brown/75 hover:border-terracotta hover:text-terracotta"}`, children: FORMAT_LABEL[f] }, f)) })
          ] }),
          product.variants && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60 block mb-3", children: "Choose" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: product.variants.map((v, i) => {
              const active = i === variantIdx;
              return /* @__PURE__ */ jsxs("button", { onClick: () => setVariantIdx(i), className: `text-left px-4 py-3 border flex items-center justify-between transition-colors ${active ? "border-terracotta bg-terracotta/5 text-brown" : "border-brown/20 text-brown/75 hover:border-brown/50"}`, children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: v.label }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm tabular-nums", children: [
                  "KSh ",
                  v.price.toLocaleString()
                ] })
              ] }, v.label);
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-stretch gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center border border-brown/25", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => setQty(Math.max(1, qty - 1)), className: "w-10 h-12 text-brown/70 hover:text-terracotta", "aria-label": "Decrease", children: "−" }),
              /* @__PURE__ */ jsx("span", { className: "w-10 text-center text-brown", children: qty }),
              /* @__PURE__ */ jsx("button", { onClick: () => setQty(qty + 1), className: "w-10 h-12 text-brown/70 hover:text-terracotta", "aria-label": "Increase", children: "+" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: () => {
              add({
                id: product.id + (variantLabel ? `:${variantIdx}` : "") + (selectedFormat ? `:${selectedFormat}` : ""),
                name: product.name,
                variant: variantLabel ?? (selectedFormat ? FORMAT_LABEL[selectedFormat] : void 0),
                price,
                image: product.image
              }, qty);
              setOpen(true);
            }, className: "flex-1 bg-terracotta text-ivory eyebrow hover:bg-brown transition-colors", children: [
              "Add to Cart · KSh ",
              (price * qty).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 space-y-8", children: [
            /* @__PURE__ */ jsx(Section, { title: "Scent Profile", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 text-sm", children: ["top", "heart", "base"].map((k) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/55 block mb-2", children: k }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-brown/80", children: product.notes[k].map((n) => /* @__PURE__ */ jsx("li", { children: n }, n)) })
            ] }, k)) }) }),
            /* @__PURE__ */ jsx(Section, { title: "The Feeling", children: /* @__PURE__ */ jsx("p", { className: "text-brown/75 leading-relaxed text-sm serif-italic", children: product.feeling }) }),
            /* @__PURE__ */ jsx(Section, { title: "Composition", children: /* @__PURE__ */ jsx("p", { className: "text-brown/75 leading-relaxed text-sm", children: product.composition }) })
          ] })
        ] })
      ] })
    ] }) }),
    sameScentVariants.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsx("span", { className: "hairline" }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Complete the Ritual" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
            "Wear it ",
            /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "layered." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "md:col-span-4 md:col-start-9 text-brown/70 leading-relaxed", children: [
          "Cleanse, hydrate, seal, scent — the most beautiful way to wear",
          " ",
          product.name,
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10", children: sameScentVariants.slice(0, 4).map((r) => /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
        productId: r.id
      }, className: "group block", children: [
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-ivory aspect-[4/5] mb-4", children: /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-brown text-lg", style: {
          fontFamily: "var(--font-display)"
        }, children: r.name }),
        /* @__PURE__ */ jsx("p", { className: "text-brown/60 text-sm mt-1.5 serif-italic", children: r.character }),
        /* @__PURE__ */ jsxs("p", { className: "text-brown/75 text-sm mt-2 tracking-wider", children: [
          "KSh ",
          r.price.toLocaleString()
        ] })
      ] }, r.id)) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsx("section", { className: "bg-ivory border-t border-brown/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "hairline" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "You may also like" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12", children: related.map((r) => /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: {
        productId: r.id
      }, className: "group block", children: [
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-cream aspect-[4/5] mb-4", children: /* @__PURE__ */ jsx("img", { src: r.image, alt: r.name, className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-brown text-xl", style: {
          fontFamily: "var(--font-display)"
        }, children: r.name }),
        /* @__PURE__ */ jsx("p", { className: "text-brown/60 text-sm mt-1 serif-italic", children: r.noteSummary })
      ] }, r.id)) })
    ] }) })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border-t border-brown/15 pt-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "eyebrow text-brown mb-3", children: title }),
    children
  ] });
}
export {
  ProductPage as component
};
