import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { n as bestsellers } from "./router-hF0FH8D9.js";
function Bestsellers() {
  const items = bestsellers();
  return /* @__PURE__ */ jsx("section", { className: "bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Bestsellers" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
          "Most ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "reached for." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/perfume-oils",
          className: "eyebrow text-terracotta border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors self-start md:self-end",
          children: "View all perfume oils →"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10", children: items.map((p, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.6, delay: i * 0.06, ease: "easeOut" },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/shop/$productId",
            params: { productId: p.id },
            className: "group block",
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden bg-ivory aspect-[4/5] mb-4", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: p.image,
                  alt: p.name,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                }
              ) }),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-brown text-lg md:text-xl",
                  style: { fontFamily: "var(--font-display)" },
                  children: p.name
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-brown/55 text-xs mt-1.5 serif-italic", children: p.noteSummary }),
              /* @__PURE__ */ jsxs("p", { className: "text-brown/75 text-sm mt-2 tracking-wider", children: [
                "KSh ",
                p.price.toLocaleString()
              ] })
            ]
          }
        )
      },
      p.id
    )) })
  ] }) });
}
export {
  Bestsellers as B
};
