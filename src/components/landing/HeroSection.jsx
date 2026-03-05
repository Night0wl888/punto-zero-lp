import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Retry on user interaction
        const retry = () => { video.play(); document.removeEventListener("touchstart", retry); };
        document.addEventListener("touchstart", retry, { once: true });
      });
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
          webkit-playsinline="true"
          x5-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{}}>

          <source src="https://res.cloudinary.com/dfre8n8qn/video/upload/v1772685780/copy_9C5CF663-5038-43F6-A641-CCFFE2F1CF30_1_bchbad.mov" type="video/mp4" />
        </video>
        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat"
          }} />


      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8">

          





        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-6">
          <h1
            className="text-[#f0e6d3] leading-tight"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              letterSpacing: "-0.02em",
              fontWeight: 700,
              textShadow: "0 2px 40px rgba(0,0,0,0.6)"
            }}>
            Punto Zero
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-px w-12 bg-[#c8a96e]/60" />
            <span
              className="text-[#c8a96e]"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                letterSpacing: "0.12em",
                fontStyle: "italic",
                fontWeight: 400,
              }}>
              Donde la Tradición Encuentra su Origen
            </span>
            <div className="h-px w-12 bg-[#c8a96e]/60" />
          </div>
        </motion.div>















        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-[#f0e6d3]/70 mb-10"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
            letterSpacing: "0.06em",
            fontWeight: 300,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}>
          Un reencuentro curado para el círculo social más selecto de Quito.
        </motion.p>










        {/* Body text */}
        











        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}>

          






        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

        <span className="text-[#c8a96e]/40 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#c8a96e]/40 to-transparent" />

      </motion.div>
    </section>);

}