import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { sections } from "../data/navigation";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-300 text-slate-900 dark:border-white/[0.07] dark:text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_1fr_1fr]">
          <div className="max-w-sm">
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

            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-500">
              Web developer focused on building clean, responsive and meaningful
              digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 dark:border-cyan-400/10 dark:bg-cyan-400/3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/50 dark:bg-cyan-400/50" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
              </span>

              <span className="text-xs text-blue-600 dark:text-slate-500">
                Available for new opportunities
              </span>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={`/#${section.id}`}
                  className="group flex items-center gap-1.5 text-sm text-slate-600 transition-all duration-300 hover:text-blue-600 dark:text-slate-500 dark:hover:text-cyan-400"
                >
                  <span className="h-px w-0 shrink-0 bg-blue-500 transition-all duration-300 group-hover:w-3 dark:bg-cyan-400" />

                  <span className="transition-all duration-300 group-hover:translate-x-1">
                    {section.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
              Currently
            </p>

            <p className="max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-500">
              Exploring new ideas, building useful products, and continuously
              improving my skills as a developer.
            </p>

            <Link
              to="/#projects"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-indigo-600 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Explore my work
              <ArrowUpRight
                size={15}
                className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-5 text-center text-xs sm:flex-row sm:items-center sm:justify-between dark:border-white/[0.07]">
          <p className="text-slate-500 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Shariq. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-600">
            <span>Built with</span>

            <Heart
              size={12}
              className="fill-blue-500 text-blue-500 dark:fill-cyan-400 dark:text-cyan-400"
            />

            <span>using React</span>
          </div>

          <p className="text-slate-500 dark:text-slate-600">
            Where simplicity meets creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
