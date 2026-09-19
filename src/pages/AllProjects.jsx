import { useState } from "react";
import { Link } from "react-router-dom";

import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const filters = ["All", "MERN", "React", "JavaScript"];

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProject = (project) => {
    window.open(project.live, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen overflow-hidden  py-24 text-slate-900 dark:bg-[#020617] dark:bg-none dark:text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-7 sm:mb-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                All{" "}
                <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
                  Projects
                </span>
              </h1>
            </div>

            <Link
              to="/#projects"
              className="group hidden items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:-translate-x-0.5 hover:text-blue-600 sm:flex dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-2 flex flex-wrap items-center gap-5 border-b border-slate-200 dark:border-white/10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative cursor-pointer pb-3 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "text-blue-600 dark:text-cyan-400"
                  : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {filter}

              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500" />
              )}
            </button>
          ))}
        </div>

        <p className="mb-8 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
          I've total{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {filteredProjects.length}
          </span>{" "}
          {activeFilter === "All" ? "" : activeFilter}{" "}
          {filteredProjects.length === 1 ? "Project" : "Projects"}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/25 dark:shadow-none dark:hover:border-cyan-400/20 dark:hover:shadow-none"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100 sm:h-44 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-600/30 via-transparent to-transparent dark:from-slate-950/75 dark:via-slate-950/15" />

                <span className="absolute left-5 top-5 rounded-full border border-slate-200/80 bg-white/85 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-300 dark:shadow-none">
                  {project.category}
                </span>

                <span className="absolute right-5 top-5 font-mono text-xs text-white/70 dark:text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="min-w-0 truncate text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-white/3 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-500">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:px-3 sm:text-[11px] dark:border-white/10 dark:bg-white/3 dark:text-slate-500 dark:hover:border-cyan-400/15 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2.5">
                  <button
                    onClick={() => openProject(project)}
                    className="group/btn flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-slate-50 px-3 py-2.5 text-xs font-medium text-blue-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 sm:gap-2 sm:text-sm dark:border-white/10 dark:bg-white/3 dark:text-slate-300 dark:hover:border-cyan-400/25 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300"
                  >
                    <span className="truncate">Live Demo</span>

                    <ExternalLink
                      strokeWidth={1.8}
                      className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 sm:h-3.75 sm:w-3.75"
                    />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-violet-200 bg-slate-50 px-3 py-2.5 text-xs font-medium text-violet-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 sm:gap-2 sm:text-sm dark:border-white/10 dark:bg-white/3 dark:text-slate-300 dark:hover:border-violet-400/25 dark:hover:bg-violet-400/5 dark:hover:text-violet-300"
                  >
                    <span className="truncate">Details</span>

                    <Info
                      strokeWidth={1.8}
                      className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/btn:scale-110 sm:h-3.75 sm:w-3.75"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-sm text-slate-400 dark:text-white/40">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
};

export default AllProjects;
