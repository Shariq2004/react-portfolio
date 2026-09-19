import { useState, useEffect } from "react";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { sections } from "../data/navigation";
import useActiveSection from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const sectionActive = useActiveSection(sections);

  const { theme, toggleTheme } = useTheme();

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
      <nav className="mx-auto mt-2 flex w-[calc(100%-1rem)] max-w-7xl flex-wrap items-center justify-between rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/10 sm:mt-4 sm:w-100% sm:px-6 sm:py-3 lg:px-4">
        {/* Logo */}
        <Link
          to="/#home"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-400 to-indigo-500 transition-all duration-200 dark:bg-none dark:border dark:border-cyan-400/50 dark:shadow-[0_0_14px_rgba(34,211,238,0.25)] dark:group-hover:border-cyan-300">
            <span className="text-lg font-black text-white dark:text-cyan-400">
              S
            </span>
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Shariq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/#${section.id}`}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                activeSection === section.id
                  ? "bg-blue-900/5 text-blue-600 dark:bg-white/10 dark:text-white"
                  : "text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              }`}
            >
              {section.label}
            </Link>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className={`relative flex h-7 w-15 cursor-pointer items-center rounded-full p-1 ${
              theme === "dark"
                ? "border border-white/10 bg-slate-800"
                : "border border-blue-100 bg-blue-50/50"
            }`}
          >
            <span
              className={`absolute flex h-5 w-5 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                theme === "dark"
                  ? "translate-x-8 bg-slate-950"
                  : "translate-x-0 bg-white"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="h-3.5 w-3.5 text-cyan-400" />
              ) : (
                <Sun className="h-3.5 w-3.5 text-amber-500" />
              )}
            </span>

            <span
              className={`absolute text-[9px] font-medium ${
                theme === "dark"
                  ? "left-2.5 text-slate-300"
                  : "right-1.5 text-slate-700"
              }`}
            >
              {theme === "dark" ? "Day" : "Night"}
            </span>
          </button>

          <Link
            to="/#contact"
            className="group hidden items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 lg:inline-flex dark:border-cyan-400/20 dark:bg-none dark:bg-cyan-400/10 dark:text-cyan-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/15 dark:hover:shadow-none"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-100/50 text-slate-600 transition-all duration-200 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`w-full overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
            isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 border-t border-slate-200 pt-4 dark:border-white/10">
            <div className="flex flex-col gap-1">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <Link
                    key={section.id}
                    to={`/#${section.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                    {section.label}
                  </Link>
                );
              })}

              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="group mt-2 mb-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 dark:from-cyan-400 dark:to-blue-500 dark:text-slate-950 dark:hover:from-cyan-300 dark:hover:to-blue-400"
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
