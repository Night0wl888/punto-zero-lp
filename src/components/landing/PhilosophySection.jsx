import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "I",
    title: "Familia",
    description:
      "Experiencias pensadas para compartir entre generaciones. Donde cada momento se convierte en un recuerdo que perdura.",
    icon: "◈",
  },
  {
    number: "II",
    title: "Comunidad",
    description:
      "Un círculo social que vuelve a encontrarse. Lazos que trascienden el tiempo y construyen algo más grande.",
    icon: "◉",
  },
  {
    number: "III",
    title: "Tradición",
    description:
      "Reviviendo encuentros que forman parte de nuestra historia. El pasado que da forma a lo que viene.",
    icon: "◎",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 px-6 overflow-hidden">
      {/* Large decorative logo */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8ff785be989ae9a64375e/4540abc4d_PUNTOZEROLOGO.png"
          alt=""
          className="w-[clamp(18rem,50vw,50rem)] opacity-[0.28]"
          style={{ filter: "sepia(1) saturate(0.5) brightness(1.2)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span
            className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-6"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Nuestra filosofía
          </span>
          <h2
            className="text-[#f0e6d3] font-bold"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Tres pilares.<br />
            <span className="text-[#c8a96e]">Una sola esencia.</span>
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-1">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group p-10 border border-[#c8a96e]/10 hover:border-[#c8a96e]/30 transition-all duration-500 bg-[#0f0d0a]/50"
            >
              {/* Number */}
              <div
                className="text-[#c8a96e]/20 text-6xl font-bold mb-6 leading-none"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {pillar.number}
              </div>

              {/* Icon */}
              <div
                className="text-[#c8a96e] text-2xl mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[#f0e6d3] text-2xl font-bold mb-4"
                style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.05em" }}
              >
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-[#c8a96e]/40 mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p
                className="text-[#f0e6d3]/50 text-sm leading-relaxed"
                style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
              >
                {pillar.description}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#c8a96e]/20 group-hover:border-[#c8a96e]/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}