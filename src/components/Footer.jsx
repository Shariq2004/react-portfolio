import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { sections } from "../data/navigation";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/#home" className="group inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-cyan-400/50 shadow-[0_0_14px_rgba(34,211,238,0.25)] transition-all duration-300 group-hover:border-cyan-300" />

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950">
                  <span className="text-lg font-black italic text-cyan-400">
                    S
                  </span>
                </div>
              </div>

              <span className="text-xl font-bold tracking-tight">Shariq</span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Web developer focused on building clean, responsive and meaningful
              digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/3 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

              <span className="text-xs text-slate-500">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={`/#${section.id}`}
                  className="group flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-400"
                >
                  <span className="h-px w-0 shrink-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {section.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Note */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Currently
            </p>

            <p className="max-w-xs text-sm leading-6 text-slate-500">
              Exploring new ideas, building useful products, and continuously
              improving my skills as a developer.
            </p>

            <Link
              to="/#projects"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
            >
              Explore my work
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t text-center border-white/[0.07] py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">
            &copy; {new Date().getFullYear()} Shariq. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-1.5 text-slate-600">
            Built with
            <Heart size={12} className="fill-cyan-400 text-cyan-400" />
            using React
          </div>

          <p className="text-slate-600">Where Simplicity meets creativity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
