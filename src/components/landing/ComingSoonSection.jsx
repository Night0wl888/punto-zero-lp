import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// ─────────────────────────────────────────────
// TICKETS CONFIG
// Set TICKETS_OPEN = true when ready to sell
// ─────────────────────────────────────────────
const TICKETS_OPEN = false;

export default function ComingSoonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section ref={ref} className="relative bg-[#0f0d0a] py-32 px-6 overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-[#c8a96e]/5"
          style={{ top: `${20 + i * 15}%` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} />

        )}
      </div>

      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8ff785be989ae9a64375e/4540abc4d_PUNTOZEROLOGO.png"
          alt=""
          className="w-[clamp(18rem,50vw,50rem)] opacity-[0.18]"
          style={{ filter: "sepia(1) saturate(0.5) brightness(1.2)" }} />

      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center">

          <span
            className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-8"
            style={{ fontFamily: "system-ui, sans-serif" }}>

            La ciudad lo sentirá
          </span>
          <h2
            className="text-[#f0e6d3] font-bold mb-8 leading-tight"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              letterSpacing: "-0.02em"
            }}>

            Algo está por<br />
            <span className="text-[#c8a96e]">comenzar.</span>
          </h2>
          <div className="w-16 h-px bg-[#c8a96e]/40 mx-auto mb-8" />
          <p
            className="text-[#f0e6d3]/50 text-base leading-relaxed max-w-xl mx-auto mb-6"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>

            Algo nuevo está tomando forma. Una experiencia que conecta
            el pasado con el futuro. Un encuentro que muchos esperaban
            sin saberlo.
          </p>
          




          {/* Artist Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mb-16 mx-auto max-w-sm">

            <div
              className="border border-[#c8a96e]/20 px-8 py-6 relative"
              style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.04), rgba(200,169,110,0.01))" }}>

              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#c8a96e]/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#c8a96e]/40" />
              <p
                className="text-[#c8a96e]/50 text-[9px] tracking-[0.5em] uppercase mb-3"
                style={{ fontFamily: "system-ui, sans-serif" }}>

                Artista Principal
              </p>
              <p
                className="text-[#f0e6d3]/80 leading-snug mb-3"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  fontStyle: "italic",
                  letterSpacing: "0.02em"
                }}>

                "Un ícono musical que une generaciones.<br />
                Una noche que no olvidarás."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-[#c8a96e]/20" />
                <span
                  className="text-[#c8a96e]/40 text-[9px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: "system-ui, sans-serif" }}>

                  Por anunciarse
                </span>
                <div className="h-px flex-1 bg-[#c8a96e]/20" />
              </div>
            </div>
          </motion.div>

          {/* ── TICKETS BUTTON ── */}
          {TICKETS_OPEN ?
          // ── When tickets are open: real CTA ──
          <motion.a
            href="#tickets"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#c8a96e] text-black text-xs tracking-[0.3em] uppercase px-12 py-5 font-medium hover:bg-[#f0e6d3] transition-all duration-300"
            style={{ fontFamily: "system-ui, sans-serif" }}>

              Obtener mis entradas
            </motion.a> :

          // ── Coming Soon state: teaser button ──
          <div className="flex flex-col items-center gap-4">
              <motion.button
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-4 border border-[#c8a96e]/50 text-[#c8a96e] text-xs tracking-[0.35em] uppercase px-12 py-5 overflow-hidden group cursor-default"
              style={{ fontFamily: "system-ui, sans-serif" }}>

                {/* Shimmer sweep */}
                <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c8a96e]/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />


                {/* Pulsing dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a96e] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a96e]"></span>
                </span>

                <span className="relative">
                  {hovered ? "Muy pronto..." : "Entradas · Coming Soon"}
                </span>
              </motion.button>

              





            </div>
          }
        </motion.div>
      </div>
    </section>);

}