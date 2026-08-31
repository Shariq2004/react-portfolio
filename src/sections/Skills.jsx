import { Layers3, ArrowUpRight } from "lucide-react";
import { skillGroups, mernStack } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="relative py-22 sm:py-24 text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Technical Skills
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The skills behind {" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              my work.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Technologies and tools I use to design interfaces, build
            applications, work with data, and ship full-stack products.
          </p>
        </div>

        {/* Main Skills Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
          {/* Left layout */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-7  sm:p-8">
            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/6 text-cyan-400">
                <Layers3 size={25} strokeWidth={1.7} />
              </div>

              <div className="mt-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-600">
                  My Stack
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Full-Stack
                  <span className="block text-slate-400">Development</span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                  I work across the frontend and backend to build complete,
                  responsive and scalable web applications.
                </p>
              </div>

              <div className="mt-auto pt-10">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Primary Stack
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-slate-600 transition-colors group-hover:text-cyan-400"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {mernStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right layout */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className={`group relative p-6 transition-all duration-500 hover:bg-white/[0.035] sm:p-7 ${
                    index !== skillGroups.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="hidden w-8 shrink-0 pt-1 font-mono text-[11px] text-slate-600 sm:block">
                      {group.number}
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/6 group-hover:text-cyan-400">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-semibold text-white sm:text-base">
                          {group.title}
                        </h3>

                        <span className="text-[11px] text-slate-600">
                          {group.skills.length} technologies
                        </span>
                      </div>

                      <p className="mt-1.5 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
                        {group.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-white/8 bg-slate-900/50 px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-cyan-400/60 to-transparent transition-all duration-500 group-hover:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/1.5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-xs text-slate-500 sm:text-sm">
            Always learning, experimenting and improving my development stack.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Developer Mindset
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
