import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { sections } from "../data/navigation";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const sectionActive = useActiveSection(sections);

  const activeSection =
    location.pathname === "/projects" ? "projects" : sectionActive;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-2 flex w-[calc(100%-1rem)] max-w-7xl flex-wrap items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-2.5 shadow-black/10 backdrop-blur-xl sm:mt-4 sm:w-[calc(100%-3rem)] sm:px-6 sm:py-3 lg:px-4">

        {/* Logo */}
        <Link
          to="/#home"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <div className="relative flex h-10 w-10 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-400/50 shadow-[0_0_14px_rgba(34,211,238,0.25)] transition-all duration-300 group-hover:border-cyan-300" />

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950">
              <span className="text-lg font-black text-cyan-400">
                S
              </span>
            </div>
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Shariq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/#${section.id}`}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-300 ${
                activeSection === section.id
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>

        <Link
          to="/#contact"
          className="group hidden items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/10 sm:inline-flex"
        >
          Let's Talk

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`w-full overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-1">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={`/#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition duration-300 ${
                    activeSection === section.id
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.label}
                </Link>
              ))}

              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="group mt-2 mb-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:from-cyan-300 hover:to-blue-400"
              >
                Let's Talk

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;