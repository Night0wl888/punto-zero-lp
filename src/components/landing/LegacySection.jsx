import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    image: "https://i.pinimg.com/1200x/8d/d3/45/8dd3458d9e1985ec14ef6422625fa754.jpg",
    title: "El origen de todo",
    description: "Cada tradición nació en un momento exacto. Un lugar, una reunión, una decisión que lo cambió todo. Aquí comenzamos a honrar esos instantes que nos dieron identidad.",
    layout: "image-left",
  },
  {
    image: "https://i.pinimg.com/736x/da/d2/a7/dad2a7f983498e2fe2299a3f4599fe8c.jpg",
    title: "Lo que nos une",
    description: "Más allá del tiempo, hay lazos que permanecen. Vínculos forjados en la mesa, en la música, en la complicidad de los que vivieron algo juntos y no lo olvidan.",
    layout: "image-right",
  },
  {
    image: "https://i.pinimg.com/1200x/63/1c/a0/631ca047fd88ca0d64e5436307341ce4.jpg",
    title: "La memoria como brújula",
    description: "No miramos atrás para quedarnos. Lo hacemos para entender hacia dónde vamos. El pasado es la tierra firme desde la que se lanza el futuro.",
    layout: "image-left",
  },
  {
    image: "https://i.pinimg.com/1200x/5d/3e/e1/5d3ee19fa907ccac45ebe59552390fb5.jpg",
    title: "Escribiendo lo que viene",
    description: "Con la misma intensidad con la que vivimos lo que fue, construimos lo que será. Punto Zero es el lugar donde la historia vuelve a empezar.",
    layout: "image-right",
  },
];

export default function LegacySection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setProgress(clamped);

      const index = Math.min(
        slides.length - 1,
        Math.floor(clamped * slides.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ height: `${slides.length * 60}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen bg-[#0a0a0a] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="text-center pt-16 pb-4 px-6 flex-shrink-0">
          <span
            className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-3"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Nuestra historia
          </span>
          <h2
            className="text-[#f0e6d3] font-bold"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1rem, 2vw, 1.6rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Honrando lo que fuimos,{" "}
            <span className="text-[#c8a96e]">y escribiendo a donde vamos.</span>
          </h2>
        </div>

        {/* Slides area */}
        <div className="flex-1 relative">
          {slides.map((slide, i) => {
            const isActive = i === activeIndex;
            const isImageLeft = slide.layout === "image-left";

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : (i < activeIndex ? -30 : 30),
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center px-6 md:px-16"
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl w-full ${
                    isImageLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative overflow-hidden flex-shrink-0"
                    style={{ aspectRatio: "4/5", maxHeight: "55vh" }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      style={{ filter: "sepia(0.3) brightness(0.85) contrast(1.1)" }}
                    />
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#c8a96e]/50" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#c8a96e]/50" />
                  </div>

                  {/* Text */}
                  <div className={`w-full md:w-1/2 ${isImageLeft ? "text-left" : "text-left md:text-right"}`}>
                    <span
                      className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-3"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                    <div className={`w-8 h-px bg-[#c8a96e]/40 mb-5 ${isImageLeft ? "" : "md:ml-auto"}`} />
                    <h3
                      className="text-[#f0e6d3] font-bold mb-4"
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                      }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className="text-[#f0e6d3]/50 text-sm leading-relaxed"
                      style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 pb-10 flex-shrink-0">
          {slides.map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-[#c8a96e] transition-all duration-300"
              style={{
                width: i === activeIndex ? "24px" : "6px",
                height: "6px",
                opacity: i === activeIndex ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}