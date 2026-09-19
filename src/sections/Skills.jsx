import { Layers3, ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { skillGroups, mernStack } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pt-20 sm:pt-24 text-slate-900 dark:text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/4 dark:text-cyan-300">
            Technical Skills
          </div>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The skills behind{" "}
            <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
              my work.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Technologies and tools I use to design interfaces, build
            applications, work with data, and ship full-stack products.
          </p>
        </div>

        {/* Main Skills Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
          {/* Left Layout */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 sm:p-8 dark:border-white/10 dark:bg-white/3 dark:shadow-none dark:hover:border-cyan-400/20 dark:hover:shadow-none">
            <div className="relative flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/6 dark:text-cyan-400">
                <Layers3 size={25} strokeWidth={1.7} />
              </div>

              <div className="mt-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-600">
                  My Stack
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                  Full-Stack
                  <span className="block text-slate-500 dark:text-slate-400">
                    Development
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
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
                    className="text-slate-400 transition-all duration-300 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-cyan-400"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {mernStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Layout */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/2 dark:shadow-none">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className={`group relative p-6 transition-all duration-300 hover:bg-blue-50/50 sm:p-7 dark:hover:bg-white/[0.035] ${
                    index !== skillGroups.length - 1
                      ? "border-b border-slate-200 dark:border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="hidden w-8 shrink-0 pt-1 font-mono text-[11px] text-slate-400 sm:block dark:text-slate-600">
                      {group.number}
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400 dark:group-hover:border-cyan-400/20 dark:group-hover:bg-cyan-400/6 dark:group-hover:text-cyan-400">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                          {group.title}
                        </h3>

                        <span className="text-[11px] text-slate-400 dark:text-slate-600">
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
                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/8 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-blue-500/60 to-transparent transition-all duration-300 group-hover:w-1/2 dark:from-cyan-400/60" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-white/[0.07] dark:bg-white/2 dark:shadow-none dark:hover:border-cyan-400/15 dark:hover:shadow-none">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/5 dark:text-cyan-400">
              <Sparkles size={16} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Always building. Always learning.
              </p>

              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
                Exploring new technologies and improving with every project.
              </p>
            </div>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/5 dark:text-cyan-400">
            <span>Code</span>
            <ArrowRight size={13} strokeWidth={2} />
            <span>Create</span>
            <ArrowRight size={13} strokeWidth={2} />
            <span>Improve</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
