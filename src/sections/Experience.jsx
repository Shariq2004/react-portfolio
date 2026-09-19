import { BriefcaseBusiness, MapPin, CalendarDays, Check } from "lucide-react";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden pt-20 sm:pt-24 text-slate-900 dark:text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/4 dark:text-cyan-300">
            My Experience
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Where I've{" "}
            <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
              built and grown.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            A snapshot of my professional journey, the work I've contributed to,
            and the skills I've developed along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-3.75 top-8 hidden h-[calc(100%-64px)] w-px bg-linear-to-b from-blue-400/60 via-slate-300/70 to-transparent md:block dark:from-cyan-400/60 dark:via-white/20 dark:to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="relative md:grid md:grid-cols-[32px_1fr] md:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:flex md:justify-center">
                  <div
                    className={`mt-7 flex h-8 w-8 items-center justify-center rounded-full border ${
                      index === 0
                        ? "border-blue-300 bg-blue-50 dark:border-cyan-400/40 dark:bg-cyan-400/10"
                        : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0
                          ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] dark:bg-cyan-400 dark:shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <article
                  className={`group relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-500 sm:p-6 ${
                    index === 0
                      ? "border-blue-200 bg-linear-to-br from-white via-white/90 to-indigo-50/50 shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10 dark:border-cyan-400/20 dark:bg-linear-to-br dark:from-cyan-400/6 dark:via-slate-900/70 dark:to-violet-500/4 dark:shadow-none dark:hover:border-cyan-400/30"
                      : "border-slate-200 bg-white/80 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 dark:border-white/[0.07] dark:bg-white/2 dark:hover:border-white/12 dark:hover:bg-white/[0.035] dark:shadow-none"
                  }`}
                >
                  {index === 0 && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl transition-all duration-500  dark:bg-cyan-400/[0.07] dark:group-hover:bg-cyan-400/12" />
                  )}

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-500">
                        <CalendarDays size={14} />
                        {experience.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                      <span
                        className={`text-[10px] font-semibold tracking-[0.18em] ${
                          index === 0
                            ? "text-blue-600 dark:text-cyan-400"
                            : "text-slate-500"
                        }`}
                      >
                        {experience.type}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-slate-400 dark:text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                      {experience.role}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                      <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                        <BriefcaseBusiness
                          size={15}
                          className={
                            index === 0
                              ? "text-blue-600 dark:text-cyan-400"
                              : "text-slate-500"
                          }
                        />
                        {experience.company}
                      </span>

                      <span className="flex items-center gap-2 text-slate-500">
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <p className="relative mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                    {experience.description}
                  </p>

                  <div className="relative mt-7">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      What I worked on
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {experience.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                        >
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              index === 0
                                ? "bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-400"
                                : "bg-slate-100 text-slate-500 dark:bg-white/4 dark:text-slate-500"
                            }`}
                          >
                            <Check size={12} />
                          </span>

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-8 flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${
                          index === 0
                            ? "border-blue-200 bg-blue-50 text-blue-600 hover:border-blue-300 hover:bg-blue-100 dark:border-cyan-400/10 dark:bg-cyan-400/4 dark:text-cyan-300 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/5"
                            : "border-slate-200 bg-slate-50 text-slate-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/[0.07] dark:bg-white/2 dark:text-slate-500 dark:hover:border-white/12 dark:hover:bg-white/[0.035] dark:hover:text-slate-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-all duration-500 group-hover:scale-x-100 ${
                      index === 0
                        ? "bg-linear-to-r from-blue-500 via-indigo-500 to-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500"
                        : "bg-slate-300 dark:bg-white/20"
                    }`}
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
