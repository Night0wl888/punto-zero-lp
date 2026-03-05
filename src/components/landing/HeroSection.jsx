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
        const retry = () => {video.play();document.removeEventListener("touchstart", retry);};
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

          <source src="https://res.cloudinary.com/dfre8n8qn/video/upload/v1772746868/copy_028F97FC-1079-4E4D-A791-22D5FD18FF3A_a6he8v.mov" type="video/mp4" />
        </video>
        {/* Grain overlay */}
        <div className="opacity-0 absolute inset-0 z-10"

        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }} />


      </div>

      {/* Content */}
      






















































































































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