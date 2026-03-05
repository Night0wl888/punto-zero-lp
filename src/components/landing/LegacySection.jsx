import { useRef } from "react";
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

function Slide({ slide, progress, index, total }) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [
    Math.max(0, start - 0.05),
    start + 0.05,
    end - 0.05,
    Math.min(1, end + 0.05),
  ], [0, 1, 1, 0]);

  const y = useTransform(progress, [start, end], [40, -40]);

  const isImageLeft = slide.layout === "image-left";

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl w-full ${isImageLeft ? "" : "md:flex-row-reverse"}`}>
        {/* Image */}
        <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden flex-shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ filter: "sepia(0.3) brightness(0.85) contrast(1.1)" }}
          />
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#c8a96e]/50" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#c8a96e]/50" />
          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />
        </div>

        {/* Text */}
        <div className={`w-full md:w-1/2 text-${isImageLeft ? "left" : "right md:text-right"}`}>
          <span
            className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className={`w-8 h-px bg-[#c8a96e]/40 mb-6 ${isImageLeft ? "" : "ml-auto"}`} />
          <h3
            className="text-[#f0e6d3] font-bold mb-5"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
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
}

export default function LegacySection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} style={{ height: `${slides.length * 100}vh` }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen bg-[#0a0a0a] overflow-hidden">
        {/* Header */}
        <div className="absolute top-16 left-0 right-0 text-center z-10 px-6">
          <span
            className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Nuestra historia
          </span>
          <h2
            className="text-[#f0e6d3] font-bold"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
              letterSpacing: "-0.01em",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Honrando lo que fuimos,{" "}
            <span className="text-[#c8a96e]">y escribiendo a donde vamos.</span>
          </h2>
        </div>

        {/* Slides */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingTop: "120px" }}>
          <div className="relative w-full h-full">
            {slides.map((slide, i) => (
              <Slide
                key={i}
                slide={slide}
                progress={scrollYProgress}
                index={i}
                total={slides.length}
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => {
            const start = i / slides.length;
            const end = (i + 1) / slides.length;
            return (
              <motion.div
                key={i}
                style={{
                  opacity: useTransform(scrollYProgress, [start, (start + end) / 2, end], [0.3, 1, 0.3]),
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}