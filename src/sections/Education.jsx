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
    <section
      id="education"
      className="relative pt-20 sm:pt-24 text-slate-900 dark:text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/4 dark:text-cyan-300">
            My Education
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Academic{" "}
                <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
                  Journey
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                A quick overview of my academic background and educational
                foundation.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 shadow-sm sm:flex dark:border-cyan-400/10 dark:bg-cyan-400/5 dark:shadow-none">
              <GraduationCap
                size={21}
                className="text-blue-600 dark:text-cyan-400"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-2 left-1.75 top-2 w-px bg-linear-to-b from-blue-400/60 via-slate-300 to-transparent dark:from-cyan-400/60 dark:via-slate-700 dark:to-transparent" />

          <div className="space-y-7">
            {education.map((item) => (
              <div key={item.degree} className="group relative pl-9">
                <div
                  className={`absolute left-0 top-6 z-10 flex h-3.75 w-3.75 items-center justify-center rounded-full border-2 ${
                    item.featured
                      ? "border-blue-500 bg-white dark:border-cyan-400 dark:bg-slate-950"
                      : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950"
                  }`}
                >
                  {item.featured && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_7px_rgba(59,130,246,0.5)] dark:bg-cyan-400 dark:shadow-[0_0_7px_rgba(34,211,238,0.8)]" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 sm:p-6 ${
                    item.featured
                      ? "border-blue-200 bg-linear-to-br from-white via-white/90 to-indigo-50/40 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 dark:border-cyan-400/20 dark:bg-none dark:bg-slate-900/60 dark:shadow-none dark:hover:border-cyan-400/35"
                      : "border-slate-200 bg-white/80 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 dark:border-white/[0.07] dark:bg-white/2 dark:hover:border-white/15 dark:hover:bg-white/[0.035] dark:shadow-none"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/5 blur-3xl transition-all duration-500 group-hover:bg-blue-400/10 dark:bg-cyan-400/4 dark:group-hover:bg-cyan-400/8" />

                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <CalendarDays
                          size={14}
                          className="text-blue-500 dark:text-cyan-400/80"
                        />
                        {item.year}
                      </div>

                      <div
                        className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          item.featured
                            ? "border-blue-200 bg-blue-50 text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/6 dark:text-cyan-400"
                            : "border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/3 dark:text-slate-500"
                        }`}
                      >
                        <CheckCircle2 size={12} />
                        Completed
                      </div>
                    </div>

                    <h3
                      className={`text-base font-semibold leading-6 sm:text-lg ${
                        item.featured
                          ? "text-slate-900 dark:text-slate-100"
                          : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {item.degree}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-slate-500">
                      <div className="flex min-w-0 items-center gap-2">
                        <Building2
                          size={15}
                          className="hidden shrink-0 text-slate-400 sm:flex dark:text-slate-600"
                        />
                        <span>{item.institute}</span>
                      </div>

                      <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                        <span>{item.location}</span>

                        <span className="h-3 w-px bg-slate-300 dark:bg-slate-700" />

                        <span>{item.board}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-all duration-500 group-hover:scale-x-100 ${
                      item.featured
                        ? "bg-linear-to-r from-blue-500 via-indigo-500 to-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500"
                        : "bg-slate-300 dark:bg-white/20"
                    }`}
                  />
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
