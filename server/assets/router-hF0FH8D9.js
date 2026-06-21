import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, Outlet, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { createHashHistory } from "@tanstack/history";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
const appCss = "/assets/styles-CdRdRbov.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Ctx = createContext(null);
const WHATSAPP_NUMBER = "254700000000";
const STORAGE_KEY = "tss_cart_v1";
function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
    }
  }, [items]);
  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    const lines = items.map((i) => `• ${i.name}${i.variant ? ` — ${i.variant}` : ""} × ${i.qty}  (KSh ${(i.price * i.qty).toLocaleString()})`).join("\n");
    const message = items.length === 0 ? "Hello, I'd like a recommendation from The Scented Space." : `Hello Scented Space concierge — I'd like to place this order:

${lines}

Subtotal: KSh ${subtotal.toLocaleString()}`;
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    return {
      items,
      count,
      subtotal,
      open,
      setOpen,
      add: (item, qty = 1) => setItems((prev) => {
        const existing = prev.find((p) => p.id === item.id && p.variant === item.variant);
        if (existing) {
          return prev.map((p) => p === existing ? { ...p, qty: p.qty + qty } : p);
        }
        return [...prev, { ...item, qty }];
      }),
      remove: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      setQty: (id, qty) => setItems((prev) => prev.map((p) => p.id === id ? { ...p, qty: Math.max(1, qty) } : p)),
      clear: () => setItems([]),
      whatsappHref
    };
  }, [items, open]);
  return /* @__PURE__ */ jsx(Ctx.Provider, { value, children });
}
function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}
const logoMark = "/assets/logo-mark-CJ0nS_t6.png";
function Logo({
  className = "h-full w-auto",
  alt = "The Scented Space — Luxury Craft Studio"
}) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoMark,
      alt,
      className,
      draggable: false
    }
  );
}
const links = [
  { to: "/shop", label: "Shop" },
  { to: "/perfume-oils", label: "Perfume Oils" },
  { to: "/rituals", label: "Rituals" },
  { to: "/body", label: "Body" },
  { to: "/ritual", label: "The Ritual" },
  { to: "/about", label: "About" }
];
function Nav() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);
  useEffect(() => {
    setMenu(false);
  }, [pathname]);
  const isHome = pathname === "/";
  const solid = scrolled || menu || !isHome;
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? "bg-brown/95 backdrop-blur-md border-b border-gold/20 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.45)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 h-20 md:h-24 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              "aria-label": "The Scented Space — home",
              className: "flex items-center h-full py-2 transition-transform duration-500 hover:scale-[1.04]",
              children: /* @__PURE__ */ jsx(Logo, { className: "h-full w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]" })
            }
          ),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-7 xl:gap-9", children: links.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "eyebrow text-ivory/80 hover:text-gold transition-colors",
              activeProps: { className: "eyebrow text-gold" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:gap-5", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpen(true),
                className: "eyebrow text-ivory hover:text-gold transition-colors py-2 px-1",
                "aria-label": "Open cart",
                children: [
                  "Cart ",
                  count > 0 && /* @__PURE__ */ jsxs("span", { className: "text-gold", children: [
                    "(",
                    count,
                    ")"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setMenu((v) => !v),
                className: "lg:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px]",
                "aria-label": "Menu",
                children: [
                  /* @__PURE__ */ jsx("span", { className: `block w-5 h-px bg-ivory transition-transform ${menu ? "translate-y-[3px] rotate-45" : ""}` }),
                  /* @__PURE__ */ jsx("span", { className: `block w-5 h-px bg-ivory transition-transform ${menu ? "-translate-y-[3px] -rotate-45" : ""}` })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: menu && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.25, ease: "easeOut" },
            className: "lg:hidden border-t border-gold/20 bg-brown",
            children: /* @__PURE__ */ jsx("nav", { className: "px-5 py-8 flex flex-col gap-5", children: links.map((l) => /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                onClick: () => setMenu(false),
                className: "text-ivory hover:text-gold transition-colors text-2xl",
                activeProps: { className: "text-gold text-2xl" },
                style: { fontFamily: "var(--font-display)" },
                children: l.label
              },
              l.to
            )) })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-brown text-ivory/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx(Logo, { className: "h-16 md:h-20 w-auto -ml-2" }),
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-gold/80 mt-4", children: "Est. 2023 · Nairobi" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-ivory/65 max-w-sm leading-relaxed text-sm", children: "A skin, scent & ritual house composed in Nairobi — small batch, slow-made, deeply intentional." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 md:col-start-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "eyebrow text-ivory/60 mb-5", children: "Shop" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-ivory/85 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/shop", className: "hover:text-gold transition-colors", children: "Discovery Sets" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rituals", className: "hover:text-gold transition-colors", children: "Rituals" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/perfume-oils", className: "hover:text-gold transition-colors", children: "Perfume Oils" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/body", className: "hover:text-gold transition-colors", children: "Body" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("h4", { className: "eyebrow text-ivory/60 mb-5", children: "The House" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-ivory/85 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-gold transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ritual", className: "hover:text-gold transition-colors", children: "The Ritual" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-gold transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "eyebrow text-ivory/60 mb-5", children: "Concierge" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-ivory/85 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/254700000000", target: "_blank", rel: "noreferrer", className: "hover:text-gold transition-colors", children: "WhatsApp" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:hello@thescentedspace.com", className: "hover:text-gold transition-colors", children: "hello@thescentedspace.com" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "hover:text-gold transition-colors", children: "Instagram" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row justify-between gap-4 eyebrow text-ivory/45 text-[0.625rem]", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The Scented Space"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Composed slowly, in Africa." })
    ] })
  ] }) });
}
function CartDrawer() {
  const { items, open, setOpen, subtotal, remove, setQty, whatsappHref } = useCart();
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[60] bg-brown/50 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        className: "fixed top-0 right-0 z-[70] h-[100svh] w-full sm:w-[440px] bg-ivory flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 md:px-8 h-16 md:h-20 border-b border-border", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "eyebrow text-brown/60 mb-1", children: "Your Ritual" }),
              /* @__PURE__ */ jsx("div", { className: "text-brown text-xl", style: { fontFamily: "var(--font-display)" }, children: "Cart" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: "eyebrow text-brown/70 hover:text-terracotta",
                "aria-label": "Close cart",
                children: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-6 md:px-8 py-6", children: items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center pt-20", children: [
            /* @__PURE__ */ jsx("p", { className: "text-brown/60 max-w-xs leading-relaxed", children: "Your cart is quiet. Begin with the Discovery Set, or speak to the concierge." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: "mt-8 eyebrow text-terracotta border-b border-terracotta/40 pb-1",
                children: "Browse Rituals"
              }
            )
          ] }) : /* @__PURE__ */ jsx("ul", { className: "divide-y divide-border", children: items.map((i) => /* @__PURE__ */ jsxs("li", { className: "py-5 flex gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: i.image,
                alt: "",
                className: "w-20 h-24 object-cover bg-cream shrink-0"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-brown", style: { fontFamily: "var(--font-display)", fontSize: "1.15rem" }, children: i.name }),
                /* @__PURE__ */ jsxs("span", { className: "text-brown text-sm whitespace-nowrap", children: [
                  "KSh ",
                  (i.price * i.qty).toLocaleString()
                ] })
              ] }),
              i.variant && /* @__PURE__ */ jsx("p", { className: "text-brown/60 text-xs mt-0.5", children: i.variant }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center border border-border", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setQty(i.id, i.qty - 1),
                      className: "w-8 h-8 text-brown/70 hover:text-terracotta",
                      "aria-label": "Decrease",
                      children: "−"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "w-8 text-center text-sm text-brown", children: i.qty }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setQty(i.id, i.qty + 1),
                      className: "w-8 h-8 text-brown/70 hover:text-terracotta",
                      "aria-label": "Increase",
                      children: "+"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => remove(i.id),
                    className: "text-xs text-brown/50 hover:text-terracotta tracking-wider uppercase",
                    children: "Remove"
                  }
                )
              ] })
            ] })
          ] }, i.id)) }) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border px-6 md:px-8 py-6 space-y-4 bg-cream/40", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
              /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60", children: "Subtotal" }),
              /* @__PURE__ */ jsxs("span", { className: "text-brown text-xl", style: { fontFamily: "var(--font-display)" }, children: [
                "KSh ",
                subtotal.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: whatsappHref,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => items.length === 0 && setOpen(false),
                className: `w-full inline-flex justify-center items-center px-6 py-4 eyebrow transition-colors ${items.length === 0 ? "bg-brown/20 text-brown/50 cursor-not-allowed pointer-events-none" : "bg-terracotta text-ivory hover:bg-brown"}`,
                children: "Checkout via WhatsApp"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-[0.625rem] text-brown/55 tracking-wider text-center uppercase", children: "Personal concierge order · No payment taken on site" })
          ] })
        ]
      }
    )
  ] }) });
}
function WhatsAppFab() {
  const { whatsappHref } = useCart();
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: whatsappHref,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-brown text-ivory pl-4 pr-5 py-3 rounded-full shadow-lg shadow-brown/25 hover:bg-terracotta transition-colors",
      "aria-label": "Chat with our concierge on WhatsApp",
      children: [
        /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.4-.2-.6.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.9-.4-1.8-1-2.6-1.7-.7-.7-1.2-1.5-1.7-2.4-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.3 1.7.7 2.3.8 3.1.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.1-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.4 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.25em] uppercase font-medium", children: "Concierge" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-ivory px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx("span", { className: "hairline" }),
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Lost Page" }),
      /* @__PURE__ */ jsx("span", { className: "hairline" })
    ] }),
    /* @__PURE__ */ jsxs("h1", { className: "display-lg text-brown", children: [
      "A quiet ",
      /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "cul-de-sac." })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/65", children: "This page has wandered off. Let us walk you back." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center bg-terracotta text-ivory px-8 py-4 eyebrow hover:bg-brown transition-colors",
        children: "Return Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-ivory px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "display-lg text-brown", children: "A small interruption." }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-brown/65", children: "Something went quietly wrong. Try again, or return home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center bg-terracotta text-ivory px-6 py-3 eyebrow hover:bg-brown transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "inline-flex items-center justify-center border border-brown/30 text-brown px-6 py-3 eyebrow hover:bg-cream transition-colors", children: "Go home" })
    ] })
  ] }) });
}
const Route$h = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Scented Space — Luxury Skin, Scent & Ritual House" },
      { name: "description", content: "Small-batch fragrance oils and body rituals composed in Nairobi. A luxury skin, scent and ritual house for the woman who chooses what earns a place in her life." },
      { name: "author", content: "The Scented Space" },
      { property: "og:title", content: "The Scented Space — Luxury Skin, Scent & Ritual House" },
      { property: "og:description", content: "Small-batch fragrance oils and body rituals composed in Nairobi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Scented Space — Luxury Skin, Scent & Ritual House" },
      { name: "twitter:description", content: "Small-batch fragrance oils and body rituals composed in Nairobi." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -6 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      children: /* @__PURE__ */ jsx(Outlet, {})
    },
    pathname
  ) });
}
function RootComponent() {
  const { queryClient } = Route$h.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(CartProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-ivory text-ink flex flex-col", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(RouteTransition, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsx(CartDrawer, {})
  ] }) }) });
}
const $$splitComponentImporter$g = () => import("./shop-CQBNzfI5.js");
const Route$g = createFileRoute("/shop")({
  head: () => ({
    meta: [{
      title: "Shop — The Scented Space"
    }, {
      name: "description",
      content: "Browse Discovery Sets, complete Ritual Collections, perfume oils, and the body collection — composed in Nairobi."
    }, {
      property: "og:title",
      content: "Shop — The Scented Space"
    }, {
      property: "og:description",
      content: "Discovery Sets, Rituals, Perfume Oils — composed in Nairobi."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./rituals-dMzNjtkp.js");
const Route$f = createFileRoute("/rituals")({
  head: () => ({
    meta: [{
      title: "Rituals — The Scented Space"
    }, {
      name: "description",
      content: "Complete ritual collections — Nahla, Alina, Velvet Elegance, Whispering Petals, and The Gentleman Collection. Cleanse, hydrate, seal, scent."
    }, {
      property: "og:title",
      content: "Rituals — The Scented Space"
    }, {
      property: "og:description",
      content: "Complete ritual collections — cleanse, hydrate, seal, scent."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const ritualImg = "/assets/ritual-Dm1hVIpY.jpg";
const $$splitComponentImporter$e = () => import("./ritual-B3FiIYQo.js");
const Route$e = createFileRoute("/ritual")({
  head: () => ({
    meta: [{
      title: "The Ritual — The Scented Space"
    }, {
      name: "description",
      content: "Why fragrance fades, and the four-step ritual that holds it on the skin for hours longer."
    }, {
      property: "og:title",
      content: "The Ritual — The Scented Space"
    }, {
      property: "og:description",
      content: "Cleanse, hydrate, seal, scent — fragrance that lingers, by design."
    }, {
      property: "og:image",
      content: ritualImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./perfume-oils-CbxC9kJd.js");
const Route$d = createFileRoute("/perfume-oils")({
  head: () => ({
    meta: [{
      title: "Perfume Oils — The Scented Space"
    }, {
      name: "description",
      content: "The complete collection of long-wear perfume oils, composed in Nairobi. Browse by feeling — warm, radiant, bold, refined, distinguished."
    }, {
      property: "og:title",
      content: "Perfume Oils — The Scented Space"
    }, {
      property: "og:description",
      content: "Long-wear perfume oils for skin — warm, radiant, bold, refined, distinguished."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./nourishing-body-oil-M9QrZ2T-.js");
const Route$c = createFileRoute("/nourishing-body-oil")({
  head: () => ({
    meta: [{
      title: "Nourishing Body Oil — The Scented Space"
    }, {
      name: "description",
      content: "Rich, conditioning nourishing body oil in Nahla and Alina — for dry skin, after-shower use and deep night-time nourishment."
    }, {
      property: "og:title",
      content: "Nourishing Body Oil — The Scented Space"
    }, {
      property: "og:description",
      content: "Richer, deeply conditioning body oil for dry skin and night-time ritual — long-lasting softness and indulgence."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./moisture-BjkjRB3X.js");
const Route$b = createFileRoute("/moisture")({
  head: () => ({
    meta: [{
      title: "Choose Your Moisture — The Scented Space"
    }, {
      name: "description",
      content: "Body lotion for lightweight daily moisture, or body butter for richer, deeper hydration — choose what your skin needs."
    }, {
      property: "og:title",
      content: "Choose Your Moisture — The Scented Space"
    }, {
      property: "og:description",
      content: "Find the right hydration — lightweight body lotion or rich, nourishing body butter."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./dry-body-oil-B0Op2dzf.js");
const Route$a = createFileRoute("/dry-body-oil")({
  head: () => ({
    meta: [{
      title: "Dry Body Oil — The Scented Space"
    }, {
      name: "description",
      content: "Lightweight, fast-absorbing dry body oil in Nahla, Alina, Velvet Elegance, Whispering Petals, Sensual Whispers and Carmine Temptations — for a soft glow without the weight."
    }, {
      property: "og:title",
      content: "Dry Body Oil — The Scented Space"
    }, {
      property: "og:description",
      content: "Silky, lightweight dry body oil — absorbs quickly and layers beautifully under perfume oil."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./contact-D5IS55Mc.js");
const Route$9 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — The Scented Space"
    }, {
      name: "description",
      content: "Speak to the concierge — WhatsApp, email, or Instagram. Personal recommendations, gifting and private orders, answered slowly and well."
    }, {
      property: "og:title",
      content: "Contact — The Scented Space"
    }, {
      property: "og:description",
      content: "WhatsApp, email, or Instagram — answered slowly and well."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./checkout-CFg7R0LK.js");
const Route$8 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Cart & Checkout — The Scented Space"
    }, {
      name: "description",
      content: "Review your ritual and complete your order through our personal WhatsApp concierge."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./body-wash-BSUNHPJH.js");
const Route$7 = createFileRoute("/body-wash")({
  head: () => ({
    meta: [{
      title: "Body Wash — The Scented Space"
    }, {
      name: "description",
      content: "A gentle first step for beautifully scented skin. Shower gels composed in our signature scents — Nahla, Alina, Velvet Elegance, Whispering Petals, Cipher, Tangier Twilight."
    }, {
      property: "og:title",
      content: "Body Wash — The Scented Space"
    }, {
      property: "og:description",
      content: "Shower gels composed in our signature scents — a gentle cleanse that never strips."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./body-oil-BBWCHsKH.js");
const Route$6 = createFileRoute("/body-oil")({
  head: () => ({
    meta: [{
      title: "Choose Your Oil — The Scented Space"
    }, {
      name: "description",
      content: "Dry body oil for lightweight, fast-absorbing moisture, or nourishing body oil for richer, deeper conditioning — choose your finish."
    }, {
      property: "og:title",
      content: "Choose Your Oil — The Scented Space"
    }, {
      property: "og:description",
      content: "Find the right body oil — lightweight and silky, or rich and deeply nourishing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./body-lotion-DcZu-jHv.js");
const Route$5 = createFileRoute("/body-lotion")({
  head: () => ({
    meta: [{
      title: "Body Lotion — The Scented Space"
    }, {
      name: "description",
      content: "Lightweight daily moisture in our signature scents — Nahla, Alina, Velvet Elegance, Whispering Petals, Cipher and Tangier Twilight."
    }, {
      property: "og:title",
      content: "Body Lotion — The Scented Space"
    }, {
      property: "og:description",
      content: "Lightweight daily moisture in our signature scents — choose your favourite fragrance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./body-butter-Dwa8z6ep.js");
const Route$4 = createFileRoute("/body-butter")({
  head: () => ({
    meta: [{
      title: "Body Butter — The Scented Space"
    }, {
      name: "description",
      content: "Rich, deeply nourishing body butters in Nahla and Alina — for dry skin, night-time use and long-lasting softness."
    }, {
      property: "og:title",
      content: "Body Butter — The Scented Space"
    }, {
      property: "og:description",
      content: "Rich, deeply nourishing body butters in Nahla and Alina — velvety, long-lasting softness."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./body-DPgeXc1L.js");
const Route$3 = createFileRoute("/body")({
  head: () => ({
    meta: [{
      title: "Body Collection — The Scented Space"
    }, {
      name: "description",
      content: "Shower gels, body lotions, body butters, dry body oils and nourishing body oils — each composed in our signature scents."
    }, {
      property: "og:title",
      content: "Body Collection — The Scented Space"
    }, {
      property: "og:description",
      content: "Shower gels, lotions, butters and body oils — composed in our signature scents."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const founderImg = "/assets/founder-Bscv_RLa.jpg";
const $$splitComponentImporter$2 = () => import("./about-CjqanFX3.js");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — The Scented Space"
    }, {
      name: "description",
      content: "A skin, scent and ritual house, composed slowly in Nairobi. This is our story, and the philosophy that shapes it."
    }, {
      property: "og:title",
      content: "About — The Scented Space"
    }, {
      property: "og:description",
      content: "A skin, scent and ritual house composed slowly in Nairobi."
    }, {
      property: "og:image",
      content: founderImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-MpK0RhG7.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "The Scented Space — Beautifully Scented Skin"
    }, {
      name: "description",
      content: "Luxury perfume oils and body rituals — designed to scent the skin beautifully, from the first cleanse to the last whisper of perfume."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const perfumeOilImg = "/assets/product-discovery-BKXMCLN2.jpg";
const bodyWashImg = "/assets/product-nahla-B9icXWGb.jpg";
const bodyOilImg = "/assets/product-velvet-DdaFRfkv.jpg";
const bodyButterImg = "/assets/mood-warm-DNh688Jb.jpg";
const bodyLotionImg = "/assets/mood-radiant-BFf3N4vP.jpg";
const bold = "/assets/mood-bold-C3m-jzm4.jpg";
const refined = "/assets/mood-refined-BYdiNepB.jpg";
const FORMAT_LABEL = {
  "perfume-oil": "Perfume Oil",
  "shower-gel": "Shower Gel",
  "body-lotion": "Body Lotion",
  "body-butter": "Body Butter",
  "dry-body-oil": "Dry Body Oil",
  "nourishing-body-oil": "Nourishing Body Oil"
};
const moods = [
  {
    key: "warm",
    eyebrow: "Mood I",
    title: "Warm & Indulgent",
    body: "Cashmere, cream, coffee and warm woods.",
    emotion: "Skin you do not want to wash off.",
    forWhom: "For those who enjoy warmth, softness and lingering intimacy.",
    keywords: ["Comforting", "Elegant", "Enveloping"],
    image: bodyButterImg,
    scents: ["Nahla", "Alina", "Samara", "Zafira"]
  },
  {
    key: "radiant",
    eyebrow: "Mood II",
    title: "Radiant & Feminine",
    body: "Soft florals, silk, fresh flowers and natural elegance.",
    emotion: "Sunlight through a linen curtain.",
    forWhom: "For those who appreciate understated sophistication.",
    keywords: ["Fresh", "Graceful", "Luminous"],
    image: bodyLotionImg,
    scents: ["Whispering Petals", "Théa", "Riviera Dreams", "Lyra"]
  },
  {
    key: "bold",
    eyebrow: "Mood III",
    title: "Bold & Magnetic",
    body: "Gold jewellery, evening light, luxury fabrics and rich textures.",
    emotion: "A trail rather than a whisper.",
    forWhom: "For those who enjoy leaving an impression.",
    keywords: ["Confident", "Expressive", "Unforgettable"],
    image: bold,
    scents: [
      "Velvet Elegance",
      "Sensual Whispers",
      "Carmine Temptations",
      "Aurielle",
      "Amara"
    ]
  },
  {
    key: "refined",
    eyebrow: "Mood IV",
    title: "Refined & Commanding",
    body: "Architecture, tailoring, clean lines, quiet luxury.",
    emotion: "Composure, bottled.",
    forWhom: "For those who appreciate timeless confidence.",
    keywords: ["Structured", "Polished", "Distinguished"],
    image: refined,
    scents: ["Cipher", "Griselle", "Verin", "Opulent Odyssey"]
  },
  {
    key: "distinguished",
    eyebrow: "Mood V",
    title: "Distinguished",
    body: "Leather, travel, wood, evening lounges.",
    emotion: "A worn-in confidence.",
    forWhom: "For those drawn to depth, smoke and warm wood.",
    keywords: ["Smoky", "Worn-in", "Assured"],
    image: refined,
    scents: ["Tangier Twilight", "Majestic Oud"]
  }
];
const oilSeeds = [
  // Warm & Indulgent
  {
    id: "nahla",
    name: "Nahla",
    inspiredBy: "Kayali Vanilla 28",
    mood: "warm",
    noteSummary: "Creamy • Vanilla • Caramel",
    emotion: "The scent of being cared for.",
    feeling: "Nahla is honeyed warmth — a soft, creamy embrace that lingers on the skin like cashmere drawn close.",
    bestFor: "Evenings & cool mornings",
    intensity: "Medium",
    personality: "Elegant & Comforting",
    pairsWith: "Body Butter + Nourishing Body Oil",
    notes: {
      top: ["Bergamot", "Cardamom"],
      heart: ["Honeyed Jasmine", "Tonka"],
      base: ["Vanilla Bourbon", "Caramel", "Amber"]
    },
    image: bodyWashImg,
    bestseller: true,
    availableIn: [
      "perfume-oil",
      "shower-gel",
      "body-lotion",
      "body-butter",
      "dry-body-oil",
      "nourishing-body-oil"
    ]
  },
  {
    id: "alina",
    name: "Alina",
    inspiredBy: "Delina by PdM",
    mood: "warm",
    noteSummary: "Fruity • Sweet • Elegant",
    emotion: "Being well, quietly.",
    feeling: "Alina is the softness of fresh lychee folded into Turkish rose and a warm sweet base — graceful, never loud.",
    bestFor: "Daylight & celebrations",
    intensity: "Medium",
    personality: "Graceful & Refined",
    pairsWith: "Shower Gel + Body Butter",
    notes: {
      top: ["Lychee", "Rhubarb"],
      heart: ["Turkish Rose", "Peony"],
      base: ["Vanilla", "Cashmere Wood", "Musk"]
    },
    image: bodyWashImg,
    availableIn: [
      "perfume-oil",
      "shower-gel",
      "body-lotion",
      "body-butter",
      "dry-body-oil",
      "nourishing-body-oil"
    ]
  },
  {
    id: "samara",
    name: "Samara",
    mood: "warm",
    noteSummary: "Vanilla • Amber • Warm",
    emotion: "A slow, golden hour.",
    feeling: "Samara is amber resin wrapped in vanilla bourbon and a quiet whisper of woods. Skin you keep returning to.",
    bestFor: "Cool evenings",
    intensity: "Medium",
    personality: "Soft & Sensual",
    pairsWith: "Layer over Nourishing Body Oil",
    notes: {
      top: ["Bergamot", "Pink Pepper"],
      heart: ["Orris", "Heliotrope"],
      base: ["Vanilla", "Amber", "Sandalwood"]
    },
    image: bodyButterImg,
    availableIn: ["perfume-oil"]
  },
  {
    id: "zafira",
    name: "Zafira",
    mood: "warm",
    noteSummary: "Tonka • Cocoa • Woods",
    emotion: "Comfort with backbone.",
    feeling: "Zafira is cocoa absolute and tonka over a base of warm woods — gourmand, but never sugary.",
    bestFor: "Cooler months",
    intensity: "Bold",
    personality: "Warm & Confident",
    pairsWith: "Layer over Body Butter",
    notes: {
      top: ["Mandarin", "Saffron"],
      heart: ["Cocoa Absolute", "Tonka"],
      base: ["Sandalwood", "Patchouli", "Amber"]
    },
    image: bodyButterImg,
    availableIn: ["perfume-oil"]
  },
  // Radiant & Feminine
  {
    id: "whispering-petals",
    name: "Whispering Petals",
    inspiredBy: "Mon Paris Couture",
    mood: "radiant",
    noteSummary: "Rose • Lychee • Musk",
    emotion: "Petals at dawn.",
    feeling: "Whispering Petals is a luminous bouquet of rose and lychee, lifted by a clean, weightless musk.",
    bestFor: "Daylight hours",
    intensity: "Soft",
    personality: "Romantic & Luminous",
    pairsWith: "Shower Gel + Dry Body Oil",
    notes: {
      top: ["Lychee", "Pear"],
      heart: ["Damask Rose", "Peony"],
      base: ["White Musk", "Soft Amber"]
    },
    image: bodyLotionImg,
    bestseller: true,
    availableIn: [
      "perfume-oil",
      "shower-gel",
      "body-lotion",
      "dry-body-oil"
    ]
  },
  {
    id: "thea",
    name: "Théa",
    mood: "radiant",
    noteSummary: "Floral • Citrus • Musk",
    emotion: "Sunlight through linen.",
    feeling: "Théa is bright bergamot meeting white florals and a soft, clean musk — composure with quiet brightness.",
    bestFor: "Warm afternoons",
    intensity: "Soft",
    personality: "Luminous & Graceful",
    pairsWith: "Layer over Body Oil",
    notes: {
      top: ["Bergamot", "Green Tea"],
      heart: ["Tuberose", "Jasmine"],
      base: ["White Musk", "Vanilla Wood"]
    },
    image: bodyLotionImg,
    availableIn: ["perfume-oil"]
  },
  {
    id: "riviera-dreams",
    name: "Riviera Dreams",
    mood: "radiant",
    noteSummary: "Peony • Pink Pepper • Musk",
    emotion: "A long, blue afternoon.",
    feeling: "Peony and pink pepper warmed by a soft musk — fresh, feminine, easy to wear from morning into evening.",
    bestFor: "Daytime & travel",
    intensity: "Soft",
    personality: "Fresh & Effortless",
    pairsWith: "Shower Gel + Perfume Oil",
    notes: {
      top: ["Pink Pepper", "Bergamot"],
      heart: ["Peony", "Magnolia"],
      base: ["Musk", "Cedar"]
    },
    image: bodyLotionImg,
    availableIn: ["perfume-oil"]
  },
  {
    id: "lyra",
    name: "Lyra",
    mood: "radiant",
    noteSummary: "Fruity • Floral • Amber",
    emotion: "Soft, sunlit hours.",
    feeling: "Lyra is ripe fruit and white florals settled over a quiet amber — radiant without ever raising its voice.",
    bestFor: "Daylight",
    intensity: "Medium",
    personality: "Luminous & Warm",
    pairsWith: "Body Lotion + Perfume Oil",
    notes: {
      top: ["Apricot", "Bergamot"],
      heart: ["Jasmine", "Peach Blossom"],
      base: ["Amber", "Cashmere Wood"]
    },
    image: bodyLotionImg,
    availableIn: ["perfume-oil"]
  },
  // Bold & Magnetic
  {
    id: "velvet-elegance",
    name: "Velvet Elegance",
    inspiredBy: "Hibiscus Mahajad",
    mood: "bold",
    noteSummary: "Hibiscus • Rose • Vanilla",
    emotion: "Arrive slowly. Stay late.",
    feeling: "Velvet Elegance is hibiscus and rose wrapped in warm vanilla — sensual, magnetic, unmistakable.",
    bestFor: "Evenings & occasions",
    intensity: "Bold",
    personality: "Confident & Magnetic",
    pairsWith: "Dry Body Oil + Perfume Oil",
    notes: {
      top: ["Saffron", "Pink Pepper"],
      heart: ["Hibiscus", "Rose Damascena"],
      base: ["Vanilla", "Patchouli", "Black Amber"]
    },
    image: bodyOilImg,
    bestseller: true,
    availableIn: [
      "perfume-oil",
      "shower-gel",
      "body-lotion",
      "dry-body-oil"
    ]
  },
  {
    id: "sensual-whispers",
    name: "Sensual Whispers",
    mood: "bold",
    noteSummary: "Pear • Rose • Sandalwood",
    emotion: "Skin-close, after dark.",
    feeling: "Sensual Whispers folds juicy pear into rose absolute and creamy sandalwood — an intimate, modern feminine.",
    bestFor: "Evenings",
    intensity: "Medium",
    personality: "Sensual & Modern",
    pairsWith: "Dry Body Oil + Perfume Oil",
    notes: {
      top: ["Pear", "Bergamot"],
      heart: ["Rose", "Jasmine"],
      base: ["Sandalwood", "Musk"]
    },
    image: bold,
    availableIn: ["perfume-oil", "dry-body-oil"]
  },
  {
    id: "carmine-temptations",
    name: "Carmine Temptations",
    mood: "bold",
    noteSummary: "Cherry • Rose • Amber",
    emotion: "Evenings you remember.",
    feeling: "Carmine is black cherry and rose absolute settled into a slow, smoky amber — for nights worth remembering.",
    bestFor: "Late nights",
    intensity: "Bold",
    personality: "Sensual & Unforgettable",
    pairsWith: "Layer over Dry Body Oil",
    notes: {
      top: ["Black Cherry", "Bitter Almond"],
      heart: ["Rose Absolute", "Plum"],
      base: ["Amber", "Tonka", "Benzoin"]
    },
    image: bold,
    availableIn: ["perfume-oil", "dry-body-oil"]
  },
  {
    id: "aurielle",
    name: "Aurielle",
    mood: "bold",
    noteSummary: "Rose • Vanilla • Amber",
    emotion: "Gilded and slow.",
    feeling: "Aurielle is rose petals dipped in warm vanilla, finished with a long, golden amber drydown.",
    bestFor: "Evenings",
    intensity: "Bold",
    personality: "Opulent & Warm",
    pairsWith: "Body Lotion + Perfume Oil",
    notes: {
      top: ["Saffron", "Bergamot"],
      heart: ["Rose", "Iris"],
      base: ["Vanilla", "Amber", "Oud"]
    },
    image: bold,
    availableIn: ["perfume-oil"]
  },
  {
    id: "amara",
    name: "Amara",
    mood: "bold",
    noteSummary: "Candied Citrus • Vanilla • Orange Blossom",
    emotion: "Bright, then warm.",
    feeling: "Amara opens on candied citrus and orange blossom, settling into a creamy vanilla — bright at the top, lingering at the base.",
    bestFor: "Day into evening",
    intensity: "Medium",
    personality: "Radiant & Bold",
    pairsWith: "Shower Gel + Perfume Oil",
    notes: {
      top: ["Candied Orange", "Bergamot"],
      heart: ["Orange Blossom", "Jasmine"],
      base: ["Vanilla", "Musk", "Amber"]
    },
    image: bold,
    availableIn: ["perfume-oil"]
  },
  // Refined & Commanding
  {
    id: "cipher",
    name: "Cipher",
    inspiredBy: "Aventus",
    mood: "refined",
    noteSummary: "Pineapple • Woods • Amber",
    emotion: "Quiet authority.",
    feeling: "Cipher is bright pineapple lifted over smoked birch and a warm amber base — composed, confident, unmistakably his.",
    bestFor: "Work & daily wear",
    intensity: "Medium",
    personality: "Composed & Tailored",
    pairsWith: "Shower Gel + Perfume Oil",
    notes: {
      top: ["Pineapple", "Bergamot", "Blackcurrant"],
      heart: ["Birch", "Rose"],
      base: ["Oakmoss", "Amber", "Musk"]
    },
    image: refined,
    bestseller: true,
    availableIn: ["perfume-oil", "shower-gel", "body-lotion"]
  },
  {
    id: "griselle",
    name: "Griselle",
    mood: "refined",
    noteSummary: "Rose • Patchouli • Woods",
    emotion: "Modern, considered.",
    feeling: "Griselle balances rose absolute against earthy patchouli and warm woods — quiet sophistication for him or her.",
    bestFor: "Cool evenings",
    intensity: "Medium",
    personality: "Refined & Modern",
    pairsWith: "Layer over Body Lotion",
    notes: {
      top: ["Bergamot", "Cardamom"],
      heart: ["Rose", "Iris"],
      base: ["Patchouli", "Cedar", "Vetiver"]
    },
    image: refined,
    availableIn: ["perfume-oil"]
  },
  {
    id: "verin",
    name: "Verin",
    mood: "refined",
    noteSummary: "Leather • Woods • Musk",
    emotion: "Tailored and warm.",
    feeling: "Verin is soft leather over cedar and a clean musk — the scent of a well-cut coat.",
    bestFor: "Daily wear",
    intensity: "Medium",
    personality: "Distinguished & Composed",
    pairsWith: "Shower Gel + Perfume Oil",
    notes: {
      top: ["Black Pepper", "Bergamot"],
      heart: ["Suede", "Iris"],
      base: ["Cedar", "Musk", "Amber"]
    },
    image: refined,
    availableIn: ["perfume-oil"]
  },
  {
    id: "opulent-odyssey",
    name: "Opulent Odyssey",
    mood: "refined",
    noteSummary: "Vanilla • Ginger • Woods",
    emotion: "Warmth with structure.",
    feeling: "Opulent Odyssey threads spicy ginger through warm vanilla and dry woods — masculine, refined, slowly unfolding.",
    bestFor: "Evenings",
    intensity: "Bold",
    personality: "Warm & Distinguished",
    pairsWith: "Body Lotion + Perfume Oil",
    notes: {
      top: ["Ginger", "Bergamot"],
      heart: ["Tonka", "Iris"],
      base: ["Vanilla", "Sandalwood", "Cedar"]
    },
    image: refined,
    availableIn: ["perfume-oil"]
  },
  // Distinguished
  {
    id: "tangier-twilight",
    name: "Tangier Twilight",
    mood: "distinguished",
    noteSummary: "Tobacco • Woods • Amber",
    emotion: "A worn-in evening.",
    feeling: "Tangier Twilight is sweet tobacco leaf, smoked woods and warm amber — the scent of a leather chair and a long conversation.",
    bestFor: "Cool evenings",
    intensity: "Bold",
    personality: "Smoky & Distinguished",
    pairsWith: "Shower Gel + Perfume Oil",
    notes: {
      top: ["Bergamot", "Cardamom"],
      heart: ["Tobacco", "Hay"],
      base: ["Amber", "Cedar", "Vanilla"]
    },
    image: refined,
    bestseller: true,
    availableIn: ["perfume-oil", "shower-gel", "body-lotion"]
  },
  {
    id: "majestic-oud",
    name: "Majestic Oud",
    mood: "distinguished",
    noteSummary: "Oud • Rose • Amber",
    emotion: "Ceremonial warmth.",
    feeling: "Majestic Oud layers smoky oud with rose absolute and a deep, resinous amber — for occasions worth marking.",
    bestFor: "Occasions & evenings",
    intensity: "Bold",
    personality: "Opulent & Ceremonial",
    pairsWith: "Layer over Body Lotion",
    notes: {
      top: ["Saffron", "Bergamot"],
      heart: ["Oud", "Rose Damascena"],
      base: ["Amber", "Sandalwood", "Musk"]
    },
    image: refined,
    availableIn: ["perfume-oil"]
  }
];
function oilToProduct(seed) {
  const moodMeta = moods.find((m) => m.key === seed.mood);
  return {
    id: seed.id,
    name: seed.name,
    inspiredBy: seed.inspiredBy,
    tagline: seed.feeling,
    price: 6800,
    image: seed.image,
    mood: seed.mood,
    moodLabel: moodMeta.title,
    noteSummary: seed.noteSummary,
    emotion: seed.emotion,
    character: seed.noteSummary,
    bestFor: seed.bestFor,
    intensity: seed.intensity,
    personality: seed.personality,
    pairsWith: seed.pairsWith,
    feeling: seed.feeling,
    notes: seed.notes,
    composition: "30ml roll-on perfume oil in amber glass, hand-poured in Nairobi.",
    ritual: "Apply at pulse points after the body oil — let the warmth carry it through the day.",
    story: seed.feeling,
    availableIn: seed.availableIn,
    bestseller: seed.bestseller,
    category: "oil"
  };
}
const oilProducts = oilSeeds.map(oilToProduct);
const discoverySets = [
  {
    id: "discovery-set",
    name: "Discovery Set",
    tagline: "Five signature scents, sampled in miniature.",
    price: 3500,
    image: perfumeOilImg,
    mood: "discovery",
    moodLabel: "Discovery",
    noteSummary: "Five Signature Scents",
    emotion: "The quietest way into the house.",
    character: "A library of moods, in miniature.",
    bestFor: "First-time exploration",
    intensity: "Soft",
    personality: "Curious & Open",
    pairsWith: "A free hour and slow morning light",
    feeling: "Five 3ml fragrance oils, presented in a linen-lined keepsake. Wear one each day for a week — notice which one your skin keeps remembering.",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Saffron"],
      heart: ["Rose", "Jasmine", "Orris"],
      base: ["Amber", "Oud", "Musk"]
    },
    composition: "Five 3ml fragrance oils — Nahla, Whispering Petals, Velvet Elegance, Cipher, Tangier Twilight.",
    ritual: "Wear one each day for a week.",
    story: "The same way most of our regulars first arrived.",
    availableIn: [],
    feature: true,
    badge: "Begin Here",
    category: "discovery"
  },
  {
    id: "womens-discovery-set",
    name: "Women's Discovery Set",
    tagline: "Five signature women's scents, in miniature.",
    price: 3500,
    image: perfumeOilImg,
    mood: "discovery",
    moodLabel: "Discovery",
    noteSummary: "For Her",
    emotion: "A quiet introduction.",
    character: "Warm, radiant, bold — composed for her.",
    bestFor: "Finding her signature",
    intensity: "Soft",
    personality: "Curious & Open",
    pairsWith: "Slow mornings",
    feeling: "Nahla, Alina, Whispering Petals, Velvet Elegance, Carmine Temptations — five women's signatures, in miniature.",
    notes: {
      top: ["Lychee", "Bergamot"],
      heart: ["Rose", "Jasmine"],
      base: ["Vanilla", "Amber", "Musk"]
    },
    composition: "Five 3ml fragrance oils for her.",
    ritual: "Wear one each day. The one you reach for twice is yours.",
    story: "A quiet way to find her signature.",
    availableIn: [],
    badge: "For Her",
    category: "discovery"
  },
  {
    id: "gentlemans-discovery-set",
    name: "Gentleman's Discovery Set",
    tagline: "Four signature gentleman's scents, in miniature.",
    price: 3200,
    image: perfumeOilImg,
    mood: "discovery",
    moodLabel: "Discovery",
    noteSummary: "For Him",
    emotion: "A quiet introduction.",
    character: "Composed, tailored, distinguished.",
    bestFor: "Finding his signature",
    intensity: "Medium",
    personality: "Composed & Considered",
    pairsWith: "Morning shower",
    feeling: "Cipher, Verin, Tangier Twilight and Majestic Oud — four gentleman's signatures, in miniature.",
    notes: {
      top: ["Pineapple", "Bergamot"],
      heart: ["Iris", "Tobacco"],
      base: ["Cedar", "Oud", "Amber"]
    },
    composition: "Four 3ml fragrance oils for him.",
    ritual: "Wear one each day. Choose the one your skin remembers.",
    story: "Composure, sampled.",
    availableIn: [],
    badge: "For Him",
    category: "discovery"
  }
];
const rituals = [
  {
    id: "nahla-ritual",
    name: "Nahla Ritual",
    scentId: "nahla",
    mood: "warm",
    moodLabel: "Warm & Indulgent",
    tagline: "Honeyed vanilla, in four soft layers.",
    story: "The complete Nahla ritual — cleansed, hydrated, sealed, scented. The most enveloping way to wear her.",
    image: bodyWashImg,
    price: 12800,
    bestseller: true,
    steps: [
      { format: "shower-gel", label: "Shower Gel" },
      { format: "body-butter", label: "Body Butter" },
      { format: "nourishing-body-oil", label: "Nourishing Body Oil" },
      { format: "perfume-oil", label: "Perfume Oil" }
    ]
  },
  {
    id: "alina-ritual",
    name: "Alina Ritual",
    scentId: "alina",
    mood: "warm",
    moodLabel: "Warm & Indulgent",
    tagline: "Soft lychee and rose, layered slowly.",
    story: "Alina's complete four-step ritual — graceful, daylight-soft, never loud.",
    image: bodyWashImg,
    price: 12800,
    steps: [
      { format: "shower-gel", label: "Shower Gel" },
      { format: "body-butter", label: "Body Butter" },
      { format: "nourishing-body-oil", label: "Nourishing Body Oil" },
      { format: "perfume-oil", label: "Perfume Oil" }
    ]
  },
  {
    id: "velvet-elegance-ritual",
    name: "Velvet Elegance Ritual",
    scentId: "velvet-elegance",
    mood: "bold",
    moodLabel: "Bold & Magnetic",
    tagline: "Hibiscus, rose and vanilla — for the evening.",
    story: "The Velvet Elegance ritual is built around our most magnetic perfume oil. A ritual for low light and high intention.",
    image: bodyOilImg,
    price: 13500,
    bestseller: true,
    steps: [
      { format: "shower-gel", label: "Shower Gel" },
      { format: "body-lotion", label: "Body Lotion" },
      { format: "dry-body-oil", label: "Dry Body Oil" },
      { format: "perfume-oil", label: "Perfume Oil" }
    ]
  },
  {
    id: "whispering-petals-ritual",
    name: "Whispering Petals Ritual",
    scentId: "whispering-petals",
    mood: "radiant",
    moodLabel: "Radiant & Feminine",
    tagline: "Luminous rose and lychee, layered for daylight.",
    story: "The Whispering Petals ritual — fresh, weightless, romantic. A bouquet you carry all day.",
    image: bodyLotionImg,
    price: 13200,
    steps: [
      { format: "shower-gel", label: "Shower Gel" },
      { format: "body-lotion", label: "Body Lotion" },
      { format: "dry-body-oil", label: "Dry Body Oil" },
      { format: "perfume-oil", label: "Perfume Oil" }
    ]
  },
  {
    id: "gentleman-collection",
    name: "The Gentleman Collection",
    scentId: "cipher",
    mood: "refined",
    moodLabel: "Refined & Commanding",
    tagline: "Three quiet steps. Composed for him.",
    story: "A three-step ritual built for him — cleanse, hydrate, scent. Available in Cipher or Tangier Twilight.",
    image: refined,
    price: 11800,
    forHim: true,
    variants: [
      { label: "Cipher", scentId: "cipher" },
      { label: "Tangier Twilight", scentId: "tangier-twilight" }
    ],
    steps: [
      { format: "shower-gel", label: "Shower Gel" },
      { format: "body-lotion", label: "Body Lotion" },
      { format: "perfume-oil", label: "Perfume Oil" }
    ]
  }
];
const ritualProducts = rituals.map((r) => {
  const scent = oilSeeds.find((o) => o.id === r.scentId);
  return {
    id: r.id,
    name: r.name,
    inspiredBy: scent.inspiredBy,
    tagline: r.tagline,
    price: r.price,
    image: r.image,
    mood: r.mood,
    moodLabel: r.moodLabel,
    noteSummary: scent.noteSummary,
    emotion: scent.emotion,
    character: scent.noteSummary,
    bestFor: scent.bestFor,
    intensity: scent.intensity,
    personality: scent.personality,
    pairsWith: r.steps.map((s) => FORMAT_LABEL[s.format]).join(" + "),
    feeling: r.story,
    notes: scent.notes,
    composition: r.steps.map((s) => s.label).join(", "),
    ritual: "Cleanse · Hydrate · Seal · Scent — the full layering, in one box.",
    story: r.story,
    availableIn: r.steps.map((s) => s.format),
    bestseller: r.bestseller,
    badge: r.bestseller ? "Bestseller" : void 0,
    feature: true,
    category: "ritual"
  };
});
const products = [
  ...discoverySets,
  ...ritualProducts,
  ...oilProducts
];
function getProduct(id) {
  return products.find((p) => p.id === id);
}
const perfumeOils = oilProducts;
function oilsByMood(mood) {
  return oilProducts.filter((p) => p.mood === mood);
}
function bestsellers() {
  const ids = ["velvet-elegance", "whispering-petals", "nahla", "cipher", "tangier-twilight"];
  return ids.map((id) => oilProducts.find((p) => p.id === id)).filter(Boolean);
}
const discoverySetProducts = discoverySets;
function oilsWithFormat(format) {
  return oilProducts.filter((p) => p.availableIn.includes(format));
}
const FEATURED_RITUAL_IDS = [
  "nahla-ritual",
  "alina-ritual",
  "velvet-elegance-ritual",
  "gentleman-collection"
];
function featuredRituals() {
  return FEATURED_RITUAL_IDS.map((id) => rituals.find((r) => r.id === id)).filter(
    Boolean
  );
}
const $$splitComponentImporter = () => import("./shop._productId-DLjFP-jL.js");
const $$splitNotFoundComponentImporter = () => import("./shop._productId-gocuRT8j.js");
const Route = createFileRoute("/shop/$productId")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: loaderData ? `${loaderData.product.name} — The Scented Space` : "Product"
    }, {
      name: "description",
      content: loaderData?.product.feeling ?? ""
    }, {
      property: "og:title",
      content: loaderData ? `${loaderData.product.name} — The Scented Space` : ""
    }, {
      property: "og:description",
      content: loaderData?.product.feeling ?? ""
    }, {
      property: "og:image",
      content: loaderData?.product.image ?? ""
    }, {
      name: "twitter:image",
      content: loaderData?.product.image ?? ""
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ShopRoute = Route$g.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$h
});
const RitualsRoute = Route$f.update({
  id: "/rituals",
  path: "/rituals",
  getParentRoute: () => Route$h
});
const RitualRoute = Route$e.update({
  id: "/ritual",
  path: "/ritual",
  getParentRoute: () => Route$h
});
const PerfumeOilsRoute = Route$d.update({
  id: "/perfume-oils",
  path: "/perfume-oils",
  getParentRoute: () => Route$h
});
const NourishingBodyOilRoute = Route$c.update({
  id: "/nourishing-body-oil",
  path: "/nourishing-body-oil",
  getParentRoute: () => Route$h
});
const MoistureRoute = Route$b.update({
  id: "/moisture",
  path: "/moisture",
  getParentRoute: () => Route$h
});
const DryBodyOilRoute = Route$a.update({
  id: "/dry-body-oil",
  path: "/dry-body-oil",
  getParentRoute: () => Route$h
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$h
});
const CheckoutRoute = Route$8.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$h
});
const BodyWashRoute = Route$7.update({
  id: "/body-wash",
  path: "/body-wash",
  getParentRoute: () => Route$h
});
const BodyOilRoute = Route$6.update({
  id: "/body-oil",
  path: "/body-oil",
  getParentRoute: () => Route$h
});
const BodyLotionRoute = Route$5.update({
  id: "/body-lotion",
  path: "/body-lotion",
  getParentRoute: () => Route$h
});
const BodyButterRoute = Route$4.update({
  id: "/body-butter",
  path: "/body-butter",
  getParentRoute: () => Route$h
});
const BodyRoute = Route$3.update({
  id: "/body",
  path: "/body",
  getParentRoute: () => Route$h
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$h
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$h
});
const ShopProductIdRoute = Route.update({
  id: "/$productId",
  path: "/$productId",
  getParentRoute: () => ShopRoute
});
const ShopRouteChildren = {
  ShopProductIdRoute
};
const ShopRouteWithChildren = ShopRoute._addFileChildren(ShopRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BodyRoute,
  BodyButterRoute,
  BodyLotionRoute,
  BodyOilRoute,
  BodyWashRoute,
  CheckoutRoute,
  ContactRoute,
  DryBodyOilRoute,
  MoistureRoute,
  NourishingBodyOilRoute,
  PerfumeOilsRoute,
  RitualRoute,
  RitualsRoute,
  ShopRoute: ShopRouteWithChildren
};
const routeTree = Route$h._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    history: createHashHistory(),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FORMAT_LABEL as F,
  Route as R,
  ritualImg as a,
  bodyWashImg as b,
  bodyOilImg as c,
  discoverySetProducts as d,
  oilsWithFormat as e,
  bodyLotionImg as f,
  bodyButterImg as g,
  founderImg as h,
  featuredRituals as i,
  refined as j,
  bold as k,
  perfumeOilImg as l,
  moods as m,
  bestsellers as n,
  oilsByMood as o,
  perfumeOils as p,
  products as q,
  rituals as r,
  router as s,
  useCart as u
};
