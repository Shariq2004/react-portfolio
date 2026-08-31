import React from "react";
import {
  GraduationCap,
  CalendarDays,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="relative py-22 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Education
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                Academic{" "}
                <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                A quick overview of my academic background and educational
                foundation.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 sm:flex">
              <GraduationCap size={21} className="text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-linear-to-b from-cyan-400/60 via-slate-700 to-transparent" />

          <div className="space-y-7">
            {education.map((item, index) => (
              <div key={item.degree} className="group relative pl-9">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-6 z-10 flex h-3.75 w-3.75 items-center justify-center rounded-full border-2 ${
                    item.featured
                      ? "border-cyan-400 bg-slate-950"
                      : "border-slate-700 bg-slate-950"
                  }`}
                >
                  {item.featured && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                    item.featured
                      ? "border-cyan-400/20 bg-slate-900/60 hover:border-cyan-400/35"
                      : "border-white/[0.07] bg-slate-900/30 hover:border-white/15 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/4 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/8" />

                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <CalendarDays size={14} className="text-cyan-400/80" />
                        {item.year}
                      </div>

                      <div
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          item.featured
                            ? "border-cyan-400/10 bg-cyan-400/6 text-cyan-400"
                            : "border-white/10 bg-white/3 text-slate-500"
                        }`}
                      >
                        <CheckCircle2 size={12} />
                        Completed
                      </div>
                    </div>

                    <h3
                      className={`text-base font-semibold leading-6 sm:text-lg ${
                        item.featured ? "text-slate-100" : "text-slate-200"
                      }`}
                    >
                      {item.degree}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-slate-500">
                      <div className="flex min-w-0 items-center gap-2">
                        <Building2
                          size={15}
                          className="hidden shrink-0 text-slate-600 sm:flex"
                        />
                        <span>{item.institute}</span>
                      </div>

                      <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                        <span>{item.location}</span>
                        <span className="h-3 w-px bg-slate-700" />
                        <span>{item.board}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
