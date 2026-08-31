import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Sparkles, X, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
  window.open(project.live, "_blank", "noopener,noreferrer");
};

  return (
    <section id="projects" className="relative py-22 sm:py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Selected Work
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Things I've{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              built with code.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of projects showcasing modern technologies, creative solutions,
            and practical problem-solving.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
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
                    <h3 className="truncate min-w-0 text-xl sm:text-2xl font-bold">
                      {project.title}
                    </h3>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
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

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/1.5 px-5 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-slate-500 sm:text-sm">
            For more projects and experiments, check out all projects.
          </p>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
          >
            All Projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </section>
  );
};

export default Projects;
