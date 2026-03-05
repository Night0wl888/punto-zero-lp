import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "250+", label: "Eventos realizados" },
  { value: "100K+", label: "Asistentes" },
  { value: "15+", label: "Ciudades" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 px-6">
      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#c8a96e]/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* About text */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span
              className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-6"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Sobre Punto Zero
            </span>
            <h2
              className="text-[#f0e6d3] font-bold mb-8 leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Explicit<br />
              <span className="text-[#c8a96e]">Hospitality Group</span>
            </h2>
            <div className="w-12 h-px bg-[#c8a96e]/40 mb-8" />
            <p
              className="text-[#f0e6d3]/50 text-base leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
            >
              Punto Zero by Explicit Hospitality Group es una plataforma de
              experiencias premium enfocada en el segmento latino de alto nivel.
              Nuestro enfoque combina hospitalidad, producción y curaduría para
              crear experiencias exclusivas donde la comunidad es protagonista.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            {[
              "Hospitalidad de alto nivel",
              "Producción de experiencias únicas",
              "Curaduría cultural y musical",
              "Comunidad como protagonista",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-px bg-[#c8a96e]/60 flex-shrink-0" />
                <span
                  className="text-[#f0e6d3]/60 text-sm tracking-wide"
                  style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#c8a96e]/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
              className="p-8 md:p-12 text-center border-r border-[#c8a96e]/10 last:border-r-0 border-b md:border-b-0 [&:nth-child(2)]:border-b-0 [&:nth-child(3)]:border-b-0"
            >
              <div
                className="text-[#c8a96e] font-bold mb-2 leading-none"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#f0e6d3]/40 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}