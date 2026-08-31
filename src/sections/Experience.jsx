import { BriefcaseBusiness, MapPin, CalendarDays, Check } from "lucide-react";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-22 sm:py-24 text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Experience
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Where I've{" "}
            <span className=" bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              built and grown.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A snapshot of my professional journey, the work I've contributed to,
            and the skills I've developed along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-3.75 top-8 hidden h-[calc(100%-64px)] w-px bg-linear-to-b from-cyan-400/60 via-white/20 to-transparent md:block" />

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
                        ? "border-cyan-400/40 bg-cyan-400/10"
                        : "border-white/10 bg-slate-950"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === 0
                          ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                          : "bg-slate-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <article
                  className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 sm:p-6 ${
                    index === 0
                      ? "border-cyan-400/20 bg-linear-to-br from-cyan-400/6 via-slate-900/70 to-violet-500/4 hover:border-cyan-400/30"
                      : "border-white/[0.07] bg-white/2 hover:border-white/12 hover:bg-white/[0.035]"
                  }`}
                >
                  {index === 0 && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/12" />
                  )}

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
                        <CalendarDays size={14} />
                        {experience.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-700" />

                      <span
                        className={`text-[10px] font-semibold tracking-[0.18em] ${
                          index === 0 ? "text-cyan-400" : "text-slate-500"
                        }`}
                      >
                        {experience.type}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {experience.role}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                      <span className="flex items-center gap-2 font-medium text-slate-300">
                        <BriefcaseBusiness
                          size={15}
                          className={
                            index === 0 ? "text-cyan-400" : "text-slate-500"
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

                  <p className="relative mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
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
                          className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span
                            className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              index === 0
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "bg-white/4 text-slate-500"
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
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                          index === 0
                            ? "border-cyan-400/10 bg-cyan-400/4 text-cyan-300"
                            : "border-white/[0.07] bg-white/2 text-slate-500"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      index === 0
                        ? "bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500"
                        : "bg-white/20"
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
