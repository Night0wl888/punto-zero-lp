import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "sepia(60%) brightness(0.35) contrast(1.1)" }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 z-10 bg-[#c8813a]/10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span
            className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase font-light border border-[#c8a96e]/40 px-6 py-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Explicit Hospitality Group
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-[#f0e6d3] font-bold leading-none mb-6"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "-0.02em",
          }}
        >
          VOLVER AL<br />
          <span className="text-[#c8a96e]">PUNTO ZERO</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-[#c8a96e]/80 text-sm md:text-base tracking-[0.25em] uppercase mb-10"
          style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
        >
          Una nueva tradición de experiencias está por comenzar en Quito
        </motion.p>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[#f0e6d3]/60 text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
        >
          Hay momentos que definen una ciudad.<br />
          Momentos que se recuerdan por generaciones.<br />
          <span className="text-[#c8a96e]/80 italic">Muy pronto volverán a existir.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="#que-es"
            className="inline-block border border-[#c8a96e] text-[#c8a96e] text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#c8a96e] hover:text-black transition-all duration-500"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Descubrir más
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[#c8a96e]/40 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#c8a96e]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}