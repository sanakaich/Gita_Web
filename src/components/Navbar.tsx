import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Helper to create numbered menus (Chapter 1, Course 1, ...)
const makeNumberedItems = (basePath: string, label: string, count: number) =>
  Array.from({ length: count }, (_, i) => ({
    label: `${label} ${i + 1}`,
    to: `${basePath}/${i + 1}`,
  }));

const NAV_ITEMS = {
  gita: makeNumberedItems("/gita", "Chapter", 18),
  sanskrit: makeNumberedItems("/sanskrit", "Course", 7),
  stories: [
    { label: "Narasimha", to: "/stories/narasimha" },
    { label: "Varaha", to: "/stories/varaha" },
    { label: "Krishna", to: "/stories/krishna" },
  ],
  blog: null,
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  function Dropdown({ id, items }: { id: string; items: { label: string; to: string }[] | null }) {
    if (!items) return null;
    const visible = openMenu === id;

    return (
      // Wrapper div for positioning (doesn't animate)
      <div
        className="absolute top-full left-0 mt-2 w-56 z-50"
        onMouseEnter={() => setOpenMenu(id)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {/* The "Manuscript" Container 
           - animates max-height
           - uses the custom 'ease-manuscript' defined in tailwind.config.ts
           - overflow-y-auto when visible allows scrolling for long lists
        */}
        <div
          className={`
            rounded-md border border-border bg-card shadow-soft
            transition-all duration-700 ease-manuscript
            ${visible ? "max-h-96 opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"}
          `}
        >
          {/* Inner container with padding ensures content doesn't jump during animation */}
          <div className="py-2">
            {items.map((it, idx) => (
              <Link
                key={idx}
                to={it.to}
                className="block px-4 py-2 text-sm font-heading text-black hover:bg-primary/10 transition-colors"
                onClick={() => setOpenMenu(null)}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav ref={navRef} className="w-full bg-black/30   shadow-soft top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-11 h-11 object-contain" />
          <Link to="/" className="text-3xl font-heading font-bold text-primary hover:text-accent transition-smooth">Gitaarth</Link>
        </div>

        <div className="flex items-center gap-6">

          {/* Gita */}
          <div className="relative h-full flex items-center"
            onMouseEnter={() => setOpenMenu("gita")}
            onMouseLeave={() => setOpenMenu(null)}>
            <button className="text-2xl font-heading text-white hover:text-primary transition-smooth px-2 py-1 rounded-md">Gita</button>
            <Dropdown id="gita" items={NAV_ITEMS.gita} />
          </div>

          {/* Sanskrit */}
          <div className="relative h-full flex items-center"
            onMouseEnter={() => setOpenMenu("sanskrit")}
            onMouseLeave={() => setOpenMenu(null)}>
            <button className="text-2xl font-heading text-white hover:text-primary transition-smooth px-2 py-1 rounded-md">Sanskrit</button>
            <Dropdown id="sanskrit" items={NAV_ITEMS.sanskrit} />
          </div>

          {/* Stories */}
          <div className="relative h-full flex items-center"
            onMouseEnter={() => setOpenMenu("stories")}
            onMouseLeave={() => setOpenMenu(null)}>
            <button className="text-2xl font-heading text-white hover:text-primary transition-smooth px-2 py-1 rounded-md">Stories</button>
            <Dropdown id="stories" items={NAV_ITEMS.stories} />
          </div>

          {/* Blog — simple link */}
          <Link to="/blog" className="text-2xl font-heading text-white hover:text-primary transition-smooth px-2 py-1 rounded-md">Blog</Link>

        </div>
      </div>
    </nav>
  );
}