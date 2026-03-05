export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #c8a96e33; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #c8a96e66; }
        ::selection { background: #c8a96e33; color: #f0e6d3; }
      `}</style>
      {children}
    </div>
  );
}