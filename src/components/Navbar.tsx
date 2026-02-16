import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle =
    "text-base font-medium text-gray-700 hover:text-[#F39237] transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F3]/95 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">

        {/* ================= Logo ================= */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-semibold text-[#1B2654]"
        >
          <img src="/logo.png" alt="Gitaarth" className="w-10 h-10 object-contain" />
          Gitaarth
        </Link>

        {/* ================= Links ================= */}
        <div className="flex items-center gap-10">

          <NavLink to="/gita" className={linkStyle}>
            Shloks
          </NavLink>

          <NavLink to="/sanskrit" className={linkStyle}>
            Sanskrit
          </NavLink>

          <NavLink to="/stories" className={linkStyle}>
            Stories
          </NavLink>

          <NavLink to="/blog" className={linkStyle}>
            Blog
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/donate"
            className="
              px-4 py-2
              rounded-lg
              bg-[#F39237]
              text-white
              text-sm
              font-medium
              hover:opacity-90
              transition
            "
          >
            Donate
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
