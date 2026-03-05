import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const cooldown = useRef(false);

  // Keep ref in sync with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const handleWheel = (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      // Section must be fully covering the viewport (sticky pinned)
      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isPinned) return;

      const current = activeIndexRef.current;

      // Allow scroll past if at boundaries
      if (e.deltaY > 0 && current === slides.length - 1) return;
      if (e.deltaY < 0 && current === 0) return;

      // Intercept scroll
      e.preventDefault();

      if (cooldown.current) return;
      cooldown.current = true;
      setTimeout(() => { cooldown.current = false; }, 700);

      if (e.deltaY > 0) {
        setActiveIndex((i) => Math.min(slides.length - 1, i + 1));
      } else {
        setActiveIndex((i) => Math.max(0, i - 1));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Touch support
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper || touchStartY.current === null) return;
      const rect = wrapper.getBoundingClientRect();
      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isPinned) return;

      const current = activeIndexRef.current;
      const delta = touchStartY.current - e.touches[0].clientY;

      if (delta > 0 && current === slides.length - 1) return;
      if (delta < 0 && current === 0) return;

      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper || touchStartY.current === null) return;
      const rect = wrapper.getBoundingClientRect();
      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isPinned) { touchStartY.current = null; return; }

      const delta = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;

      if (Math.abs(delta) < 40) return;
      if (cooldown.current) return;
      cooldown.current = true;
      setTimeout(() => { cooldown.current = false; }, 700);

      if (delta > 0) {
        setActiveIndex((i) => Math.min(slides.length - 1, i + 1));
      } else {
        setActiveIndex((i) => Math.max(0, i - 1));
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const slide = slides[activeIndex];
  const isImageLeft = slide.layout === "image-left";

  return (
    // Tall wrapper — scroll happens THROUGH this, sticky panel stays pinned
    <div
      ref={wrapperRef}
      style={{ height: `${(slides.length + 1) * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#0a0a0a",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div className="text-center pt-14 pb-2 px-6 flex-shrink-0">
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
        <div className="flex-1 flex items-center justify-center px-6 md:px-16 overflow-hidden">
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
                    onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                    disabled={activeIndex === 0}
                    className="w-10 h-10 border border-[#c8a96e]/30 flex items-center justify-center text-[#c8a96e] disabled:opacity-20 hover:border-[#c8a96e]/70 transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setActiveIndex((i) => Math.min(slides.length - 1, i + 1))}
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
        <div className="flex justify-center gap-2 pb-8 flex-shrink-0">
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
    </div>
  );
}