export default function FooterSection() {
  return (
    <footer className="bg-[#070707] border-t border-[#c8a96e]/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div
              className="text-[#f0e6d3] text-sm tracking-[0.3em] uppercase mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Punto Zero
            </div>
            <div
              className="text-[#c8a96e]/60 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              by Explicit Hospitality Group
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <p
              className="text-[#f0e6d3]/30 text-xs tracking-[0.2em]"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Experiencias que vuelven al origen
            </p>
            <p
              className="text-[#c8a96e]/30 text-xs tracking-[0.2em] mt-1"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Quito · Ecuador
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e6d3]/30 hover:text-[#c8a96e] transition-colors duration-300 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Instagram
            </a>
            <div className="w-px h-4 bg-[#c8a96e]/20" />
            <a
              href="https://wa.me/593000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e6d3]/30 hover:text-[#c8a96e] transition-colors duration-300 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-8 border-t border-[#c8a96e]/5 text-center">
          <span
            className="text-[#f0e6d3]/15 text-xs tracking-[0.2em]"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            © 2025 Explicit Hospitality Group · Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}