import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { u as useCart } from "./router-Dx3ENEbb.js";
import "@tanstack/react-query";
import "@tanstack/history";
const WHATSAPP_BASE = "https://wa.me/254700000000";
function CheckoutPage() {
  const {
    items,
    subtotal,
    setQty,
    remove
  } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "Nairobi",
    address: "",
    notes: "",
    delivery: "nairobi"
  });
  const deliveryCost = form.delivery === "nairobi" ? 500 : form.delivery === "outside" ? 1200 : 0;
  const total = subtotal + (items.length > 0 ? deliveryCost : 0);
  const lines = items.map((i) => `• ${i.name}${i.variant ? ` — ${i.variant}` : ""} × ${i.qty}  (KSh ${(i.price * i.qty).toLocaleString()})`).join("\n");
  const deliveryLabel = form.delivery === "nairobi" ? "Nairobi delivery" : form.delivery === "outside" ? "Outside Nairobi" : "Studio pickup";
  const message = encodeURIComponent(`Hello Scented Space concierge — I'd like to place this order:

${lines}

Subtotal: KSh ${subtotal.toLocaleString()}
${deliveryLabel}: KSh ${deliveryCost.toLocaleString()}
Total: KSh ${total.toLocaleString()}

Name: ${form.name || "—"}
Phone: ${form.phone || "—"}
City: ${form.city || "—"}
Address: ${form.address || "—"}
Notes: ${form.notes || "—"}`);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-brown h-20 md:h-24" }),
    /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-12 md:py-20", children: [
      /* @__PURE__ */ jsxs("nav", { className: "eyebrow text-brown/55 mb-8 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-terracotta", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: "/shop", className: "hover:text-terracotta", children: "Shop" }),
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "text-brown", children: "Cart & Checkout" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "hairline" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Your Ritual" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "display-lg text-brown mb-12 md:mb-16", children: [
        "Review & ",
        /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "complete." })
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7
      }, className: "border border-brown/15 bg-cream/40 py-20 px-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-brown/70 max-w-md mx-auto leading-relaxed", children: "Your cart is quiet. Begin with the Discovery Set, or speak to the concierge for a composed recommendation." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-3 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/shop", className: "inline-flex justify-center bg-terracotta text-ivory px-8 py-4 eyebrow hover:bg-brown transition-colors", children: "Browse Rituals" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex justify-center border border-brown/30 text-brown px-8 py-4 eyebrow hover:bg-cream transition-colors", children: "Speak to Concierge" })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "eyebrow text-brown/60 mb-6", children: "In your cart" }),
            /* @__PURE__ */ jsx("ul", { className: "divide-y divide-brown/15 border-t border-b border-brown/15", children: items.map((i) => /* @__PURE__ */ jsxs("li", { className: "py-6 flex gap-5", children: [
              /* @__PURE__ */ jsx("img", { src: i.image, alt: "", className: "w-24 h-28 object-cover bg-cream shrink-0" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-brown text-xl", style: {
                    fontFamily: "var(--font-display)"
                  }, children: i.name }),
                  /* @__PURE__ */ jsxs("span", { className: "text-brown text-sm whitespace-nowrap tabular-nums", children: [
                    "KSh ",
                    (i.price * i.qty).toLocaleString()
                  ] })
                ] }),
                i.variant && /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-xs mt-1", children: i.variant }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center border border-brown/20", children: [
                    /* @__PURE__ */ jsx("button", { onClick: () => setQty(i.id, i.qty - 1), className: "w-9 h-9 text-brown/70 hover:text-terracotta", children: "−" }),
                    /* @__PURE__ */ jsx("span", { className: "w-9 text-center text-sm text-brown", children: i.qty }),
                    /* @__PURE__ */ jsx("button", { onClick: () => setQty(i.id, i.qty + 1), className: "w-9 h-9 text-brown/70 hover:text-terracotta", children: "+" })
                  ] }),
                  /* @__PURE__ */ jsx("button", { onClick: () => remove(i.id), className: "text-xs text-brown/55 hover:text-terracotta tracking-wider uppercase", children: "Remove" })
                ] })
              ] })
            ] }, i.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "eyebrow text-brown/60 mb-6", children: "Your details" }),
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsx(FormField, { label: "Full name", value: form.name, onChange: (v) => setForm({
                ...form,
                name: v
              }), placeholder: "As on the door bell" }),
              /* @__PURE__ */ jsx(FormField, { label: "Phone (WhatsApp)", value: form.phone, onChange: (v) => setForm({
                ...form,
                phone: v
              }), placeholder: "+254 …" }),
              /* @__PURE__ */ jsx(FormField, { label: "City", value: form.city, onChange: (v) => setForm({
                ...form,
                city: v
              }), placeholder: "Nairobi" }),
              /* @__PURE__ */ jsx(FormField, { label: "Address / Building", value: form.address, onChange: (v) => setForm({
                ...form,
                address: v
              }), placeholder: "Estate, building, gate" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "eyebrow text-brown/60 mb-6", children: "Delivery" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [{
              key: "nairobi",
              title: "Nairobi delivery",
              body: "Hand-delivered, 1–2 days.",
              cost: 500
            }, {
              key: "outside",
              title: "Outside Nairobi",
              body: "Courier, 2–4 days.",
              cost: 1200
            }, {
              key: "pickup",
              title: "Studio pickup",
              body: "By appointment, in Nairobi.",
              cost: 0
            }].map((opt) => {
              const active = form.delivery === opt.key;
              return /* @__PURE__ */ jsxs("button", { onClick: () => setForm({
                ...form,
                delivery: opt.key
              }), type: "button", className: `w-full text-left p-5 border flex items-center justify-between gap-4 transition-colors ${active ? "border-terracotta bg-terracotta/5" : "border-brown/20 hover:border-brown/40"}`, children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-brown text-lg", style: {
                    fontFamily: "var(--font-display)"
                  }, children: opt.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-brown/60 text-sm mt-1", children: opt.body })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-brown text-sm tabular-nums", children: opt.cost === 0 ? "Free" : `KSh ${opt.cost.toLocaleString()}` })
              ] }, opt.key);
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "eyebrow text-brown/60 mb-4", children: "Anything else" }),
            /* @__PURE__ */ jsx("textarea", { value: form.notes, onChange: (e) => setForm({
              ...form,
              notes: e.target.value
            }), rows: 3, placeholder: "A gift note, a delivery window, a preference …", className: "w-full bg-transparent border border-brown/25 p-4 text-brown placeholder:text-brown/40 focus:outline-none focus:border-terracotta transition-colors resize-none" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: "lg:col-span-5 lg:col-start-8", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-28 bg-cream/50 border border-brown/15 p-6 md:p-8 space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "eyebrow text-brown/60", children: "Order summary" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsx(Row, { label: "Subtotal", value: `KSh ${subtotal.toLocaleString()}` }),
            /* @__PURE__ */ jsx(Row, { label: deliveryLabel, value: deliveryCost === 0 ? "Free" : `KSh ${deliveryCost.toLocaleString()}` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-brown/20 pt-4 flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown", children: "Total" }),
            /* @__PURE__ */ jsxs("span", { className: "text-brown text-2xl tabular-nums", style: {
              fontFamily: "var(--font-display)"
            }, children: [
              "KSh ",
              total.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("a", { href: `${WHATSAPP_BASE}?text=${message}`, target: "_blank", rel: "noopener noreferrer", className: "block w-full text-center bg-terracotta text-ivory eyebrow px-6 py-4 hover:bg-brown transition-colors", children: "Complete via WhatsApp" }),
          /* @__PURE__ */ jsx("p", { className: "text-[0.625rem] text-brown/55 tracking-wider uppercase text-center leading-relaxed", children: "Personal concierge order · No payment taken on site · We confirm everything before dispatch" }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-brown/15 pt-5 text-xs text-brown/60 leading-relaxed serif-italic", children: "We pay attention to the small things — the packaging, the handwritten note, the way it arrives. Tell us if it's a gift; we'll dress it." })
        ] }) })
      ] })
    ] }) })
  ] });
}
function FormField({
  label,
  value,
  onChange,
  placeholder
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60 block mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { value, onChange: (e) => onChange(e.target.value), placeholder, className: "w-full bg-transparent border-b border-brown/25 py-3 text-brown placeholder:text-brown/40 focus:outline-none focus:border-terracotta transition-colors" })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-brown/75", children: [
    /* @__PURE__ */ jsx("span", { children: label }),
    /* @__PURE__ */ jsx("span", { className: "text-brown tabular-nums", children: value })
  ] });
}
export {
  CheckoutPage as component
};
