import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "min-h-[60vh] flex items-center justify-center px-5", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "display-lg text-brown", children: "This piece is no longer here." }),
  /* @__PURE__ */ jsx(Link, { to: "/shop", className: "mt-6 inline-block eyebrow text-terracotta border-b border-terracotta/40 pb-1", children: "Return to the atelier" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
