import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&q=80",
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80",
  "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=400&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
];

export default function MemoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 px-6 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#c8a96e]/30" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>
            Memoria colectiva
          </span>
          <h2
            className="text-[#f0e6d3] font-bold mb-8"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Quito siempre ha tenido<br />
            <span className="text-[#c8a96e]">sus momentos.</span>
          </h2>
          <div className="w-16 h-px bg-[#c8a96e]/40 mx-auto mb-8" />
          <p
            className="text-[#f0e6d3]/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            Durante décadas, la ciudad ha sido escenario de encuentros que reunieron
            familias, amigos y generaciones. Momentos que marcaron épocas.
            Momentos que todavía viven en la memoria de muchos.
          </p>
          <p
            className="text-[#c8a96e]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 italic"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Pero las ciudades evolucionan. Y nuevas tradiciones comienzan.
          </p>
        </motion.div>

        {/* Photo grid — vintage film style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  filter: "sepia(70%) brightness(0.6) contrast(1.1) saturate(0.8)",
                }}
              />
              {/* Grain overlay per photo */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Border */}
              <div className="absolute inset-0 border border-[#c8a96e]/10" />
            </motion.div>
          ))}
        </div>

        {/* Year stamps — decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-8 mt-12"
        >
          {["196X", "197X", "198X", "199X", "200X"].map((year) => (
            <span
              key={year}
              className="text-[#c8a96e]/20 text-xs tracking-[0.3em]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {year}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}