import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { Logo } from "@/components/site/Logo";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/perfume-oils", label: "Perfume Oils" },
  { to: "/rituals", label: "Rituals" },
  { to: "/body", label: "Body" },
  { to: "/ritual", label: "The Ritual" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-brown/95 backdrop-blur-md border-b border-gold/20 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-20 md:h-24 flex items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="The Scented Space — home"
          className="flex items-center h-full py-2 transition-transform duration-500 hover:scale-[1.04]"
        >
          <Logo className="h-full w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-ivory/80 hover:text-gold transition-colors"
              activeProps={{ className: "eyebrow text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-5">
          <button
            onClick={() => setOpen(true)}
            className="eyebrow text-ivory hover:text-gold transition-colors py-2 px-1"
            aria-label="Open cart"
          >
            Cart {count > 0 && <span className="text-gold">({count})</span>}
          </button>
          <button
            onClick={() => setMenu((v) => !v)}
            className="lg:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-ivory transition-transform ${menu ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-ivory transition-transform ${menu ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden border-t border-gold/20 bg-brown"
          >
            <nav className="px-5 py-8 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenu(false)}
                  className="text-ivory hover:text-gold transition-colors text-2xl"
                  activeProps={{ className: "text-gold text-2xl" }}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
