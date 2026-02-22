import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

type MenuType = "shloks" | "sanskrit" | "stories" | null;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close if click outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Smooth open
  const handleMouseEnter = (menu: MenuType) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(menu);
  };

  // Smooth delayed close
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 180);
  };

  const linkStyle =
    "text-base font-medium text-gray-700 hover:text-[#F39237] transition-colors duration-200";

  // Chapters 1–18 split into 3 columns
  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);
  const chapterCols = [
    chapters.slice(0, 6),
    chapters.slice(6, 12),
    chapters.slice(12, 18),
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-[#FBF8F3]/95 backdrop-blur border-b border-gray-200"
      ref={navRef}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-semibold text-[#1B2654]"
        >
          <img src="/logo.png" alt="Gitaarth" className="w-10 h-10 object-contain" />
          Gitaarth
        </Link>

        <div className="flex items-center gap-6 md:gap-10">

          {/* ================= SHLOKS ================= */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("shloks")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${linkStyle} hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]`}
            >
              Shloks
            </button>

            {/* Mega Menu */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-3
              w-[400px] max-w-5xl
              rounded-2xl bg-[#FBF8F3]
              border border-[#E8E1D8]
              shadow-2xl p-8
              transition-all duration-200
              ${openMenu === "shloks"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="grid grid-cols-3 gap-x-6 gap-y-3">

                {chapterCols.map((col, ci) => (
                  <ul key={ci} className="space-y-3">
                    {col.map((num) => (
                      <li key={num}>
                        <NavLink
                          to={`/gita/chapter/${num}`}
                          onClick={() => setOpenMenu(null)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-[#1B2654]
                          hover:text-[#F39237]
                          hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                          transition duration-200"
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

          {/* ================= SANSKRIT ================= */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sanskrit")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${linkStyle} hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]`}
            >
              Sanskrit
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-52 rounded-xl
              bg-[#FBF8F3] border border-[#E8E1D8]
              shadow-xl p-3 transition-all duration-200
              ${openMenu === "sanskrit"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <NavLink
                to="/sanskrit/beginner"
                className="block px-4 py-2 text-sm rounded-md text-[#1B2654]
                hover:text-[#F39237]
                hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                transition duration-200"
              >
                Beginner
              </NavLink>

              <NavLink
                to="/sanskrit/intermediate"
                className="block px-4 py-2 text-sm rounded-md text-[#1B2654]
                hover:text-[#F39237]
                hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                transition duration-200"
              >
                Intermediate
              </NavLink>
            </div>
          </div>

          {/* ================= STORIES ================= */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("stories")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${linkStyle} hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]`}
            >
              Stories
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-56 rounded-xl
              bg-[#FBF8F3] border border-[#E8E1D8]
              shadow-xl p-3 transition-all duration-200
              ${openMenu === "stories"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <NavLink
                to="/stories/krishna"
                className="block px-4 py-2 text-sm rounded-md text-[#1B2654]
                hover:text-[#F39237]
                hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                transition duration-200"
              >
                Krishna Stories
              </NavLink>

              <NavLink
                to="/stories/rama"
                className="block px-4 py-2 text-sm rounded-md text-[#1B2654]
                hover:text-[#F39237]
                hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                transition duration-200"
              >
                Ramayana Tales
              </NavLink>

              <NavLink
                to="/stories/hanuman"
                className="block px-4 py-2 text-sm rounded-md text-[#1B2654]
                hover:text-[#F39237]
                hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]
                transition duration-200"
              >
                Hanuman Legends
              </NavLink>
            </div>
          </div>

          {/* Blog */}
          <NavLink
            to="/blog"
            className={`${linkStyle} hover:drop-shadow-[0_0_6px_rgba(243,146,55,0.35)]`}
          >
            Blog
          </NavLink>

          {/* Donate */}
          <NavLink
            to="/donate"
            className="px-4 py-2 rounded-lg bg-[#F39237] text-white text-sm font-medium
            hover:opacity-95 hover:shadow-[0_0_12px_rgba(243,146,55,0.4)]
            transition duration-200"
          >
            Donate
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
