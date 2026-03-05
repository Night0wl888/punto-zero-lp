import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "@/components/landing/LazyImage";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 8000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goNext = () => { setActiveIndex((i) => Math.min(slides.length - 1, i + 1)); resetInterval(); };
  const goPrev = () => { setActiveIndex((i) => Math.max(0, i - 1)); resetInterval(); };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) goNext();
    else goPrev();
  };

  const slide = slides[activeIndex];
  const isImageLeft = slide.layout === "image-left";

  return (
    <div
      style={{ background: "#0a0a0a", overflow: "hidden" }}
      className="py-14 px-6 md:px-16"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="text-center pb-10">
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
            fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Honrando lo que fuimos,{" "}
          <span className="text-[#c8a96e]">y escribiendo a donde vamos.</span>
        </h2>
      </div>

      {/* Slide content */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl w-full ${
              isImageLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div
              className="w-full md:w-1/2 relative overflow-hidden flex-shrink-0"
              style={{ aspectRatio: "4/5", maxHeight: "58vh" }}
            >
              <LazyImage
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
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className={`w-8 h-px bg-[#c8a96e]/40 mb-4 ${isImageLeft ? "" : "md:ml-auto"}`} />
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

              {/* Arrows */}
              <div className={`flex gap-3 mt-8 ${isImageLeft ? "" : "md:justify-end"}`}>
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className="w-10 h-10 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e] disabled:opacity-20 hover:border-[#c8a96e]/70 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={goNext}
                  disabled={activeIndex === slides.length - 1}
                  className="w-10 h-10 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e] disabled:opacity-20 hover:border-[#c8a96e]/70 transition-all"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 pt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
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
  );
}