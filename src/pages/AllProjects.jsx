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
    <div className="relative min-h-screen overflow-hidden py-24 text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-7 sm:mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              All Projects
            </h1>

            <Link
              to="/#projects"
              className="hidden sm:flex group items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400"
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
        <div className="mb-2 flex flex-wrap items-center gap-5 border-b border-white/10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative pb-3 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {filter}

              {activeFilter === filter && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        <p className="mb-8 text-xs sm:text-sm text-slate-400">
          I've total{" "}
          <span className="font-semibold text-white">
            {filteredProjects.length}
          </span>{" "}
          {activeFilter === "All" ? " " : activeFilter}{" "}
          {filteredProjects.length === 1 ? "Project" : "Projects"}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 transition-all duration-500  hover:border-cyan-400/20"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute right-5 top-5 font-mono text-xs text-white/50">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="truncate text-xl sm:text-2xl font-bold">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5 group-hover:text-white"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/3 px-2 sm:px-3 py-1 sm:py-1 text-[9px] sm:text-[11px] font-medium text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2.5">
                  <button
                    onClick={() => openProject(project)}
                    className="group/btn flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/5 hover:text-cyan-300 sm:gap-2 sm:text-sm"
                  >
                    <span className="truncate">Live Demo</span>

                    <ExternalLink 
                      strokeWidth={1.8}
                      className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 sm:h-3.75 sm:w-3.75"
                    />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group/btn flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/3 px-3 py-2.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/5 hover:text-violet-300 sm:gap-2 sm:text-sm"
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
          <div className="text-center py-40">
            <p className="text-white/40">No projects found in this category.</p>
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
