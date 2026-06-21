import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function PageHeader({ eyebrow, title, intro, align = "left" }) {
  const center = align === "center";
  return /* @__PURE__ */ jsx("section", { className: "bg-brown text-ivory pt-32 md:pt-40 pb-20 md:pb-28", children: /* @__PURE__ */ jsx("div", { className: `mx-auto max-w-7xl px-5 md:px-10 ${center ? "text-center" : ""}`, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.9, ease: "easeOut" },
      className: `max-w-3xl ${center ? "mx-auto" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`, children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-ivory/75", children: eyebrow }),
          center && /* @__PURE__ */ jsx("span", { className: "hairline" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "display-xl text-ivory", children: title }),
        intro && /* @__PURE__ */ jsx("p", { className: `mt-8 text-ivory/75 leading-relaxed md:text-lg max-w-2xl ${center ? "mx-auto" : ""}`, children: intro })
      ]
    }
  ) }) });
}
export {
  PageHeader as P
};
