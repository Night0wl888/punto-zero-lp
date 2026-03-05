import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LazyImage from "@/components/landing/LazyImage";

export default function WhatIsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="que-es" ref={ref} className="relative bg-[#0f0d0a] py-32 px-6">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80"
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "sepia(60%) brightness(0.5) contrast(1.2)" }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-[#c8a96e]/50" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-[#c8a96e]/50" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 bg-[#c8a96e] px-6 py-3">
              <span
                className="text-black text-xs tracking-[0.3em] uppercase font-medium"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Quito, 2025
              </span>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span
              className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-6"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Qué es
            </span>
            <h2
              className="text-[#f0e6d3] font-bold mb-8 leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Volver al<br />
              <span className="text-[#c8a96e]">origen.</span>
            </h2>
            <div className="w-12 h-px bg-[#c8a96e]/40 mb-8" />
            <p
              className="text-[#f0e6d3]/60 text-base leading-relaxed mb-6"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
            >
              Punto Zero es una plataforma de experiencias creada para reunir
              nuevamente a un círculo social que comparte historia, tradición
              y comunidad.
            </p>
            <p
              className="text-[#f0e6d3]/60 text-base leading-relaxed mb-6"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
            >
              No creamos eventos masivos.
            </p>
            <p
              className="text-[#c8a96e]/80 text-base leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Creamos encuentros cuidadosamente curados donde la música,
              la hospitalidad y la comunidad se unen para crear experiencias
              memorables.
            </p>
            <p
              className="text-[#f0e6d3]/80 text-base leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 400 }}
            >
              Es volver al punto donde todo empieza.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}