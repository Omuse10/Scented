import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { P as PageHeader } from "./PageHeader-DzctN4Fx.js";
import { u as useCart } from "./router-hF0FH8D9.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@tanstack/history";
import "react";
function ContactPage() {
  const {
    whatsappHref
  } = useCart();
  const channels = [{
    eyebrow: "Fastest",
    title: "WhatsApp",
    body: "The fastest way to reach a real person. Recommendations, orders, gifting — usually within the day.",
    cta: "Open WhatsApp",
    href: whatsappHref
  }, {
    eyebrow: "Studio",
    title: "Email",
    body: "For gifting, press and wholesale enquiries.",
    cta: "hello@thescentedspace.com",
    href: "mailto:hello@thescentedspace.com"
  }, {
    eyebrow: "From the studio",
    title: "Instagram",
    body: "Behind the pour, new arrivals, slow studio days.",
    cta: "@thescentedspace",
    href: "https://instagram.com"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { eyebrow: "The Concierge", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Tell us where",
      " ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "you are." })
    ] }), intro: "Every message is read by a person. Whichever door suits you — we'll reply slowly and well." }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 md:gap-10", children: channels.map((c, i) => /* @__PURE__ */ jsxs(motion.a, { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", initial: {
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
        delay: i * 0.08,
        ease: "easeOut"
      }, className: "group block border-t border-brown/15 pt-6 hover:border-terracotta transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold text-[0.625rem]", children: c.eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "text-brown text-3xl md:text-4xl mt-3", style: {
          fontFamily: "var(--font-display)"
        }, children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/70 leading-relaxed", children: c.body }),
        /* @__PURE__ */ jsxs("span", { className: "mt-6 inline-block eyebrow text-terracotta border-b border-terracotta/30 pb-1 group-hover:border-terracotta transition-colors", children: [
          c.cta,
          " →"
        ] })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 md:mt-28 border-t border-brown/10 pt-10 grid md:grid-cols-2 gap-10 text-brown/70 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/55", children: "The Atelier" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "Nairobi · Kenya — by appointment only. We'll arrange the address with you on WhatsApp." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/55", children: "Hours" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed", children: "Mon — Sat · 09:00 – 18:00 EAT. WhatsApp answered until 21:00." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
