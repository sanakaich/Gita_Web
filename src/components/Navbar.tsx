import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

type MenuType = "shloks" | "sanskrit" | "stories" | null;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleMouseEnter = (menu: MenuType) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const linkBase =
    "relative text-[15px] font-medium text-[#1B2654] transition duration-300";

  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#F39237] after:transition-all after:duration-300 hover:after:w-full";

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
  const chapterCols = [
    chapters.slice(0, 6),
    chapters.slice(6, 12),
    chapters.slice(12, 18),
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#FBF8F3]/80 border-b border-[#E8E1D8]"
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-2xl font-semibold text-[#1B2654]"
        >
          <img src="/logo.png" alt="Gitaarth" className="w-10 h-10" />
          <span className="tracking-tight">Gitaarth</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {/* Shloks */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("shloks")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${linkBase} ${underline}`}>
              Shloks
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-5
              w-[520px] rounded-2xl bg-white/90 backdrop-blur-xl
              border border-[#E8E1D8] shadow-2xl p-8
              transition-all duration-300
              ${openMenu === "shloks"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <div className="grid grid-cols-3 gap-6">
                {chapterCols.map((col, ci) => (
                  <ul key={ci} className="space-y-3">
                    {col.map((num) => (
                      <li key={num}>
                        <NavLink
                          to={`/gita/chapter/${num}`}
                          onClick={() => setOpenMenu(null)}
                          className="text-sm text-[#1B2654] hover:text-[#F39237] transition"
                        >
                          Chapter {num}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Sanskrit */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sanskrit")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${linkBase} ${underline}`}>
              Sanskrit
            </button>

            <div
              className={`absolute left-0 top-full mt-5 w-56 rounded-xl
              bg-white/90 backdrop-blur-xl border border-[#E8E1D8]
              shadow-xl p-4 transition-all duration-300
              ${openMenu === "sanskrit"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <NavLink to="/sanskrit/beginner" className="block py-2 text-sm hover:text-[#F39237]">
                Beginner
              </NavLink>
              <NavLink to="/sanskrit/intermediate" className="block py-2 text-sm hover:text-[#F39237]">
                Intermediate
              </NavLink>
            </div>
          </div>

          {/* Stories */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("stories")}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${linkBase} ${underline}`}>
              Stories
            </button>

            <div
              className={`absolute left-0 top-full mt-5 w-60 rounded-xl
              bg-white/90 backdrop-blur-xl border border-[#E8E1D8]
              shadow-xl p-4 transition-all duration-300
              ${openMenu === "stories"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
              <NavLink to="/stories/krishna" className="block py-2 text-sm hover:text-[#F39237]">
                Krishna Stories
              </NavLink>
              <NavLink to="/stories/rama" className="block py-2 text-sm hover:text-[#F39237]">
                Ramayana Tales
              </NavLink>
              <NavLink to="/stories/hanuman" className="block py-2 text-sm hover:text-[#F39237]">
                Hanuman Legends
              </NavLink>
            </div>
          </div>

          <NavLink to="/blog" className={`${linkBase} ${underline}`}>
            Blog
          </NavLink>

          {/* Donate Button */}
          <NavLink
            to="/"
            state={{ openDonate: true }}
            className="px-6 py-2.5 rounded-full bg-[#F39237] text-white text-sm font-semibold
            shadow-lg shadow-[#F39237]/30
            hover:shadow-xl hover:shadow-[#F39237]/50
            hover:-translate-y-0.5 transition-all duration-300"
          >
            Donate
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1B2654]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg">
          <NavLink to="/gita" className="block">Shloks</NavLink>
          <NavLink to="/sanskrit" className="block">Sanskrit</NavLink>
          <NavLink to="/stories" className="block">Stories</NavLink>
          <NavLink to="/blog" className="block">Blog</NavLink>
          <NavLink
            to="/"
            state={{ openDonate: true }}
            className="block text-center bg-[#F39237] text-white py-3 rounded-lg"
          >
            Donate
          </NavLink>
        </div>
      )}
    </header>
  );
}