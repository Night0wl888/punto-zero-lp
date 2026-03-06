import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

      {/* Dropdown menu - top right, always visible */}
      <div className="fixed top-4 right-4 z-[100]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="h-9 w-9 rounded-full border border-[#c8a96e]/40 bg-[#0a0a0a]/80 backdrop-blur-sm text-[#c8a96e] hover:bg-[#c8a96e]/10 transition-all duration-300 flex items-center justify-center text-lg font-bold tracking-widest"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              ···
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-44 bg-[#0f0d0a]/95 backdrop-blur-sm border border-[#c8a96e]/20 text-[#f0e6d3] rounded-none"
          >
            <DropdownMenuItem asChild>
              <Link
                to={createPageUrl("Home")}
                className="px-4 py-3 text-xs tracking-[0.25em] uppercase text-[#f0e6d3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/10 cursor-pointer transition-colors duration-200 block"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Home
              </Link>
            </DropdownMenuItem>
            <div className="h-px bg-[#c8a96e]/10 mx-3" />
            <DropdownMenuItem asChild>
              <Link
                to={createPageUrl("Evento1")}
                className="px-4 py-3 text-xs tracking-[0.25em] uppercase text-[#f0e6d3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/10 cursor-pointer transition-colors duration-200 block"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Evento 1
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {children}
    </div>
  );
}