import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { i as featuredRituals, j as refined, a as ritualImg, g as bodyButterImg, f as bodyLotionImg, k as bold, m as moods, l as perfumeOilImg, h as founderImg, b as bodyWashImg, c as bodyOilImg } from "./router-Dx3ENEbb.js";
import { B as Bestsellers } from "./Bestsellers-jxYpIZXD.js";
import "@tanstack/react-query";
import "@tanstack/history";
import "react";
const heroImg = "/assets/hero-CUrUQ1In.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-[100svh] w-full overflow-hidden bg-brown", children: [
    /* @__PURE__ */ jsx(
      motion.img,
      {
        src: heroImg,
        alt: "A woman in warm natural light, anointing her skin with fragrance oil",
        width: 1280,
        height: 1600,
        initial: { scale: 1.08 },
        animate: { scale: 1 },
        transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
        className: "absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-[70%_center]"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/40 to-brown/30 md:bg-gradient-to-r md:from-brown/80 md:via-brown/30 md:to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-5 md:px-10 min-h-[100svh] flex flex-col justify-end md:justify-center pb-16 md:pb-0 pt-28", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.3, ease: "easeOut" },
        className: "max-w-xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-ivory/80 mb-6 md:mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "hairline" }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-ivory/80", children: "Est. 2023 — Nairobi" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "display-xl text-ivory", children: [
            "Beautifully",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "Scented Skin." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 md:mt-8 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed", children: "Luxury perfume oils and body rituals designed to scent the skin beautifully." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/rituals",
                className: "inline-flex justify-center items-center bg-ivory text-brown px-8 py-4 eyebrow hover:bg-gold hover:text-brown transition-colors",
                children: "Shop The Rituals"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/perfume-oils",
                className: "inline-flex justify-center items-center border border-ivory/40 text-ivory px-8 py-4 eyebrow hover:bg-ivory/10 transition-colors",
                children: "Shop Perfume Oils"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.4, duration: 1 },
        className: "absolute bottom-6 right-5 md:right-10 hidden md:flex items-center gap-3 text-ivory/60",
        children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-ivory/60 text-[0.625rem]", children: "Scroll" }),
          /* @__PURE__ */ jsx("span", { className: "hairline", style: { background: "rgba(248,243,234,0.4)" } })
        ]
      }
    )
  ] });
}
function RitualCard({ r, large, index }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.8, delay: index * 0.06, ease: "easeOut" },
      className: "group",
      children: /* @__PURE__ */ jsxs(Link, { to: "/shop/$productId", params: { productId: r.id }, className: "block", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative overflow-hidden bg-cream mb-5 ${large ? "aspect-[16/10] md:aspect-[21/10]" : "aspect-[4/5]"}`,
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: r.image,
                  alt: r.name,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/40 via-brown/10 to-transparent" }),
              /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5", children: r.moodLabel }),
              large && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 md:p-12 text-ivory", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-4xl md:text-6xl leading-[1.05]",
                    style: { fontFamily: "var(--font-display)" },
                    children: r.name
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-ivory/85 serif-italic", children: r.tagline }),
                /* @__PURE__ */ jsx("span", { className: "mt-5 inline-block eyebrow text-ivory border-b border-ivory/50 pb-1", children: "Discover the Ritual →" })
              ] })
            ]
          }
        ),
        !large && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-brown text-2xl", style: { fontFamily: "var(--font-display)" }, children: r.name }),
          /* @__PURE__ */ jsx("p", { className: "text-brown/65 text-sm mt-2 leading-relaxed serif-italic", children: r.tagline }),
          /* @__PURE__ */ jsx("span", { className: "mt-3 inline-block eyebrow text-terracotta border-b border-terracotta/30 pb-1 group-hover:border-terracotta transition-colors", children: "Discover →" })
        ] })
      ] })
    }
  );
}
function FeaturedRituals() {
  const items = featuredRituals();
  const [hero, ...rest] = items;
  return /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Featured Rituals" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
          "Four complete ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "rituals." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-4 md:col-start-9 text-brown/70 leading-relaxed", children: "Cleanse, hydrate, seal, scent — composed in our most beloved signatures." })
    ] }),
    hero && /* @__PURE__ */ jsx("div", { className: "mb-12 md:mb-16", children: /* @__PURE__ */ jsx(RitualCard, { r: hero, large: true, index: 0 }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10", children: rest.map((r, i) => /* @__PURE__ */ jsx(RitualCard, { r, index: i + 1 }, r.id)) })
  ] }) });
}
function Manifesto() {
  return /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-5 md:px-10 py-28 md:py-40 text-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-120px" },
      transition: { duration: 1.4, ease: "easeOut" },
      children: [
        /* @__PURE__ */ jsx("span", { className: "hairline mx-auto block mb-8" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/60", children: "A House Note" }),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "mt-10 text-brown leading-[1.2] tracking-[-0.015em]",
            style: {
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 4.4vw, 3.25rem)"
            },
            children: [
              "Fragrance is not what you wear.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "serif-italic text-terracotta", children: "It is the room you carry with you." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "hairline mx-auto block mt-12" })
      ]
    }
  ) }) });
}
const steps = [
  {
    n: "01",
    title: "Cleanse",
    sub: "Shower Gel",
    body: "A cleanse that readies the skin — never strips it. The first quiet trace of the scent begins here.",
    image: ritualImg
  },
  {
    n: "02",
    title: "Hydrate",
    sub: "Body Lotion or Body Butter",
    body: "Deep, soft hydration. The cushion that lets fragrance settle and stay.",
    image: bodyButterImg
  },
  {
    n: "03",
    title: "Seal",
    sub: "Body Oil",
    body: "A finishing oil that holds moisture in and warms the fragrance to come.",
    image: bodyLotionImg
  },
  {
    n: "04",
    title: "Scent",
    sub: "Perfume Oil",
    body: "The signature — drawn close to the skin. Quiet, lasting, unmistakably yours.",
    image: bold
  }
];
function Ritual() {
  return /* @__PURE__ */ jsxs("section", { id: "ritual", className: "bg-cream", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 md:gap-16 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "The Ritual — Four Steps" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
          "Beautiful scent begins with",
          " ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "beautiful skin." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-4 md:col-start-9 text-brown/75 leading-relaxed text-base md:text-lg", children: "Fragrance is not a finishing touch. It is built layer by layer — cleansed, hydrated, sealed, and then, only then, scented." })
    ] }) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1.4, ease: "easeOut" },
        className: "relative h-[70vh] md:h-[85vh] overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: refined,
              alt: "Warm afternoon light across the skin",
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/30 via-transparent to-brown/15" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 md:bottom-16 left-5 md:left-16 right-5 md:right-16", children: /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-ivory max-w-xl serif-italic",
              style: { fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15 },
              children: '"She does not perfume herself. She prepares the skin to receive it."'
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-36", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-28 md:space-y-44", children: steps.map((s, i) => {
        const reverse = i % 2 === 1;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "grid md:grid-cols-12 gap-10 md:gap-16 items-center",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: reverse ? 40 : -40 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: "-100px" },
                  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                  className: `relative overflow-hidden aspect-[4/5] md:aspect-[5/6] md:col-span-7 ${reverse ? "md:col-start-6" : ""}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: s.image,
                        alt: s.title,
                        loading: "lazy",
                        className: "absolute inset-0 w-full h-full object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "absolute top-5 left-5 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5", children: [
                      "Step ",
                      s.n
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-80px" },
                  transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
                  className: `md:col-span-4 ${reverse ? "md:col-start-2 md:row-start-1" : "md:col-start-9"}`,
                  children: [
                    /* @__PURE__ */ jsxs(
                      "span",
                      {
                        className: "text-gold tracking-[0.3em] text-sm",
                        style: { fontFamily: "var(--font-sans)" },
                        children: [
                          s.n,
                          " — ",
                          s.sub
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-brown mt-4",
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                          lineHeight: 1.05
                        },
                        children: s.title
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "mt-6 text-brown/75 leading-relaxed md:text-lg max-w-md", children: s.body })
                  ]
                }
              )
            ]
          },
          s.n
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-28 md:mt-36 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "hairline mx-auto block mb-8" }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/ritual",
            className: "inline-flex items-center gap-3 bg-brown text-ivory px-10 py-4 eyebrow hover:bg-terracotta transition-colors",
            children: [
              "Discover The Ritual ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Mood() {
  const [hero, ...rest] = moods;
  return /* @__PURE__ */ jsx("section", { id: "shop", className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-36", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-16 md:mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Shop by Feeling" })
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
          "Begin with a ",
          /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "feeling." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-4 md:col-start-9 text-brown/75 leading-relaxed md:text-lg", children: "Notes can be studied. A mood, you simply recognise. Choose where you are today — the right fragrance follows." })
    ] }),
    hero && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        className: "mb-20 md:mb-28",
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/perfume-oils",
            hash: hero.key,
            className: "group grid md:grid-cols-12 gap-8 md:gap-12 items-end",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 relative overflow-hidden aspect-[16/11] md:aspect-[16/9] bg-brown/10", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: hero.image,
                    alt: hero.title,
                    loading: "lazy",
                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/55 via-brown/15 to-transparent" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 flex flex-wrap gap-x-3 gap-y-1.5", children: hero.keywords.map((k) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "eyebrow text-[0.625rem] text-ivory/95 bg-brown/40 backdrop-blur px-2.5 py-1",
                    children: k
                  },
                  k
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-ivory", children: [
                  /* @__PURE__ */ jsxs("span", { className: "eyebrow text-gold", children: [
                    hero.eyebrow,
                    " — Featured"
                  ] }),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "mt-3",
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                        lineHeight: 1
                      },
                      children: hero.title
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "serif-italic text-brown leading-snug",
                    style: { fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.4vw, 2rem)" },
                    children: hero.emotion
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-6 text-brown/75 leading-relaxed", children: hero.forWhom }),
                /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-brown/55 serif-italic", children: hero.scents.join(" · ") }),
                /* @__PURE__ */ jsxs("span", { className: "mt-8 inline-block eyebrow text-terracotta border-b border-terracotta/40 pb-1 group-hover:border-terracotta transition-colors", children: [
                  "Explore ",
                  hero.title,
                  " →"
                ] })
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14", children: rest.map((m, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, delay: i % 4 * 0.06, ease: "easeOut" },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/perfume-oils",
            hash: m.key,
            className: "group block",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[3/4] mb-5 bg-brown/10", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: m.image,
                    alt: m.title,
                    loading: "lazy",
                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/10 to-transparent" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold text-[0.625rem]", children: m.eyebrow }),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "text-ivory mt-2",
                      style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.35rem, 2vw, 1.65rem)",
                        lineHeight: 1.1
                      },
                      children: m.title
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "serif-italic text-brown/85 leading-snug", children: m.emotion }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-brown/60 leading-relaxed line-clamp-2", children: m.forWhom }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-x-2.5 gap-y-1", children: m.keywords.map((k) => /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "eyebrow text-[0.625rem] text-brown/55",
                  children: [
                    "· ",
                    k
                  ]
                },
                k
              )) })
            ]
          }
        )
      },
      m.title
    )) })
  ] }) });
}
function DiscoveryFeature() {
  return /* @__PURE__ */ jsx("section", { className: "bg-brown text-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.03 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        className: "md:col-span-6 relative aspect-[5/6] overflow-hidden bg-brown/40",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: perfumeOilImg,
            alt: "The Discovery Set",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
        className: "md:col-span-5 md:col-start-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "hairline", style: { background: "rgba(232,193,108,0.5)" } }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: "Discovery Set" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "display-lg text-ivory", children: [
            "Not sure where to begin?",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "serif-italic text-gold", children: "Discover five signature scents." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-ivory/75 leading-relaxed md:text-lg max-w-lg", children: "Five 3ml fragrance oils, presented in a linen-lined keepsake — the quietest, most considered way to meet the house." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/shop/$productId",
                params: { productId: "discovery-set" },
                className: "inline-flex justify-center items-center bg-ivory text-brown px-8 py-4 eyebrow hover:bg-gold transition-colors",
                children: "Shop Discovery Set"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/shop",
                className: "inline-flex justify-center items-center border border-ivory/40 text-ivory px-8 py-4 eyebrow hover:bg-ivory/10 transition-colors",
                children: "Explore All"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function Founder() {
  return /* @__PURE__ */ jsx("section", { id: "founder", className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-14 md:gap-24 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        className: "md:col-span-5 relative aspect-[4/5] overflow-hidden order-1 md:order-none",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: founderImg,
              alt: "Founder of The Scented Space",
              loading: "lazy",
              width: 1024,
              height: 1280,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute top-5 left-5 eyebrow text-[0.625rem] bg-ivory/90 text-brown px-3 py-1.5", children: "The Founder" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1, delay: 0.15, ease: "easeOut" },
        className: "md:col-span-6 md:col-start-7",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "hairline" }),
            /* @__PURE__ */ jsx("span", { className: "eyebrow text-brown/70", children: "A Letter — Nairobi" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "display-lg text-brown", children: [
            "Fragrance is where the story",
            " ",
            /* @__PURE__ */ jsx("span", { className: "serif-italic text-terracotta", children: "began." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-6 text-brown/80 leading-[1.8] max-w-xl", children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "serif-italic text-brown/90",
                style: { fontFamily: "var(--font-display)", fontSize: "1.35rem", lineHeight: 1.5 },
                children: "I started The Scented Space because I wanted to bring more beauty, presence and intention into the everyday — and scent was the most honest place to begin."
              }
            ),
            /* @__PURE__ */ jsx("p", { children: "What you find here is not a fragrance line. It is a ritual house — composed slowly, in small batches, for the woman who already knows what quality feels like and is simply choosing what earns a place in her life." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "hairline" }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "serif-italic text-terracotta",
                style: { fontFamily: "var(--font-display)", fontSize: "1.5rem" },
                children: "— The Founder"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
const tiles = [bodyButterImg, bodyLotionImg, bold, refined, bodyWashImg, bodyOilImg];
function InstagramGrid() {
  return /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsx("span", { className: "hairline" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "From the Studio" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "display-lg text-brown", children: /* @__PURE__ */ jsx("span", { className: "serif-italic", children: "@thescentedspace" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://instagram.com",
          target: "_blank",
          rel: "noreferrer",
          className: "eyebrow text-terracotta border-b border-terracotta/40 pb-1 hover:border-terracotta transition-colors self-start md:self-end",
          children: "Follow on Instagram →"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3", children: tiles.map((src, i) => /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "https://instagram.com",
        target: "_blank",
        rel: "noreferrer",
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
        className: "relative aspect-square overflow-hidden bg-cream group",
        "aria-label": "View on Instagram",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: "",
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brown/0 group-hover:bg-brown/15 transition-colors" })
        ]
      },
      i
    )) })
  ] }) });
}
const cards = [
  {
    title: "Body Wash",
    subtitle: "Cleanse",
    image: bodyWashImg,
    to: "/body-wash"
  },
  {
    title: "Body Butter",
    subtitle: "Rich hydration",
    image: bodyButterImg,
    to: "/moisture"
  },
  {
    title: "Body Lotion",
    subtitle: "Light hydration",
    image: bodyLotionImg,
    to: "/moisture"
  },
  {
    title: "Body Oil",
    subtitle: "Seal and soften",
    image: bodyOilImg,
    to: "/body-oil"
  },
  {
    title: "Perfume Oil",
    subtitle: "The finishing touch",
    image: perfumeOilImg,
    to: "/perfume-oils"
  }
];
function ShopByProduct() {
  return /* @__PURE__ */ jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsx("span", { className: "hairline" }),
      /* @__PURE__ */ jsx("span", { className: "eyebrow text-gold", children: "Shop By Product" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6", children: cards.map((card, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.6, delay: i * 0.06, ease: "easeOut" },
        children: /* @__PURE__ */ jsx(
          Link,
          {
            to: card.to,
            className: "group block",
            children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-cream aspect-[4/5] mb-4", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: card.image,
                  alt: card.title,
                  loading: "lazy",
                  className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-ivory text-lg md:text-xl",
                    style: { fontFamily: "var(--font-display)" },
                    children: card.title
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-ivory/75 text-xs mt-1 serif-italic", children: card.subtitle })
              ] })
            ] })
          }
        )
      },
      card.title
    )) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ShopByProduct, {}),
    /* @__PURE__ */ jsx(FeaturedRituals, {}),
    /* @__PURE__ */ jsx(Manifesto, {}),
    /* @__PURE__ */ jsx(Ritual, {}),
    /* @__PURE__ */ jsx(Mood, {}),
    /* @__PURE__ */ jsx(Bestsellers, {}),
    /* @__PURE__ */ jsx(DiscoveryFeature, {}),
    /* @__PURE__ */ jsx(Founder, {}),
    /* @__PURE__ */ jsx(InstagramGrid, {})
  ] });
}
export {
  Home as component
};
