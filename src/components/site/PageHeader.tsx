import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export function PageHeader({ eyebrow, title, intro, align = "left" }: Props) {
  const center = align === "center";
  return (
    <section className="bg-brown text-ivory pt-32 md:pt-40 pb-20 md:pb-28">
      <div className={`mx-auto max-w-7xl px-5 md:px-10 ${center ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`max-w-3xl ${center ? "mx-auto" : ""}`}
        >
          <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
            <span className="hairline" />
            <span className="eyebrow text-ivory/75">{eyebrow}</span>
            {center && <span className="hairline" />}
          </div>
          <h1 className="display-xl text-ivory">{title}</h1>
          {intro && (
            <p className={`mt-8 text-ivory/75 leading-relaxed md:text-lg max-w-2xl ${center ? "mx-auto" : ""}`}>
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
