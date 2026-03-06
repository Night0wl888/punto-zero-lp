export default function Evento1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f0e6d3] px-6">
      <p className="text-[#c8a96e]/60 text-xs tracking-[0.4em] uppercase mb-6" style={{ fontFamily: "system-ui, sans-serif" }}>
        Próximamente
      </p>
      <h1
        className="text-[#f0e6d3] font-bold mb-6 leading-tight text-center"
        style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "-0.02em" }}
      >
        Evento <span className="text-[#c8a96e]">1</span>
      </h1>
      <div className="w-16 h-px bg-[#c8a96e]/40 mb-6" />
      <p className="text-[#f0e6d3]/40 text-sm text-center max-w-md" style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>
        Los detalles de este evento estarán disponibles muy pronto.
      </p>
    </div>
  );
}