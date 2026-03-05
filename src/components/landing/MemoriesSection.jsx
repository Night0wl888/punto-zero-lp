import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    year: "196X",
    title: "El arte de reunirse",
    body: "Texto que puedes editar. Describe el contexto de esta foto, la época, el lugar, la emoción que captura este momento en la historia de Quito.",
    align: "left", // photo left, text right
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    year: "197X",
    title: "La música que nos une",
    body: "Texto que puedes editar. Aquí va el contexto de esta segunda fotografía, la historia detrás del momento y lo que representa para la ciudad.",
    align: "right", // text left, photo right
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    year: "198X",
    title: "La mesa como ritual",
    body: "Texto que puedes editar. El contexto de esta tercera imagen, la cultura culinaria, los encuentros alrededor de la comida y la tradición.",
    align: "left",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    year: "199X",
    title: "Noches que perduran",
    body: "Texto que puedes editar. La última fotografía, el cierre de una era, el inicio de algo nuevo. Lo que estas noches dejaron en la memoria colectiva.",
    align: "right",
  },
];

function StickySlideshow() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        slides.length - 1,
        Math.floor(v * slides.length)
      );
      setActiveIndex(idx);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {slides.map((slide, i) => {
          const isActive = i === activeIndex;
          const isLeft = slide.align === "left";

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : i < activeIndex ? -40 : 40,
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24"
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <div className={`w-full flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 max-w-6xl mx-auto`}>

                {/* Photo */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{ filter: "sepia(70%) brightness(0.6) contrast(1.1) saturate(0.8)" }}
                    />
                    {/* Grain */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="absolute inset-0 border border-[#c8a96e]/15" />
                    {/* Year stamp */}
                    <div
                      className="absolute bottom-4 left-4 text-[#c8a96e]/50 text-xs tracking-[0.3em]"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {slide.year}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`w-full md:w-1/2 flex flex-col ${isLeft ? "md:items-start" : "md:items-end"} items-center text-center md:text-left`}>
                  <span
                    className="text-[#c8a96e]/50 text-xs tracking-[0.4em] uppercase block mb-4"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {slide.year}
                  </span>
                  <h3
                    className="text-[#f0e6d3] font-bold mb-6"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {slide.title}
                  </h3>
                  <div className={`w-12 h-px bg-[#c8a96e]/40 mb-6 ${isLeft ? "" : "md:self-end"}`} />
                  <p
                    className="text-[#f0e6d3]/50 text-sm md:text-base leading-relaxed mb-8 max-w-sm"
                    style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
                  >
                    {slide.body}
                  </p>
                  {/* Slide counter */}
                  <div className="flex items-center gap-3">
                    {slides.map((_, idx) => (
                      <div
                        key={idx}
                        className="transition-all duration-300"
                        style={{
                          width: idx === i ? "24px" : "6px",
                          height: "1px",
                          background: idx === i ? "#c8a96e" : "#c8a96e33",
                        }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function MemoriesSection() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#c8a96e]/30 z-10" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
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
      </div>

      {/* Sticky slideshow */}
      <StickySlideshow />
    </section>
  );
}