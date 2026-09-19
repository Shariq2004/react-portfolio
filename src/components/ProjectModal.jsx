import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  Check,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ selectedProject, setSelectedProject }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  const images = selectedProject.images || [];

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/20 p-2 backdrop-blur-sm dark:bg-slate-950/10"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="relative flex max-h-[97vh] sm:max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950 dark:shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="group absolute right-4 top-5 z-30 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white/85 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:h-8 sm:w-8 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-400 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-slate-950/90 dark:hover:text-white"
        >
          <X
            size={18}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        </button>

        <div className="relative h-56 shrink-0 overflow-hidden bg-slate-100 sm:h-72 dark:bg-slate-900">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeImage * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative h-full w-full shrink-0">
                <img
                  src={image}
                  alt={`${selectedProject.title} screenshot ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="group absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-slate-950/55 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-slate-950/85 hover:text-white"
            >
              <ChevronLeft
                size={19}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>
          )}

          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="group absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-slate-950/55 text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-slate-950/85 hover:text-white"
            >
              <ChevronRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          )}

          {/* Project Info on Image */}
          <div className="absolute bottom-8 left-5 z-20 sm:left-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              {selectedProject.category}
            </p>

            <h3 className="mt-1 hidden text-3xl font-bold text-white sm:flex">
              {selectedProject.title}
            </h3>
          </div>

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-5 bg-cyan-400"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          <div className="mb-6 flex items-center justify-between sm:hidden">
            <h1 className="text-3xl font-bold text-slate-700 dark:text-white">
              {selectedProject.title}
            </h1>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-400">
              About the Project
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px] dark:text-slate-400">
              {selectedProject.description}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="font-semibold text-blue-600 dark:text-cyan-400">
              Duration:
            </span>

            <span className="text-slate-600 dark:text-slate-400">
              {selectedProject.duration}
            </span>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              Key Features
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {selectedProject.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-400">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:px-3 sm:py-1.5 dark:border-white/8 dark:bg-white/[0.035] dark:text-slate-400 dark:hover:border-violet-400/30 dark:hover:bg-violet-400/10 dark:hover:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 border-t border-slate-200 pt-6 dark:border-white/8">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 sm:py-3.5 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/[0.07] dark:hover:text-white"
              >
                <FaGithub size={17} />
                View Source
              </a>

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/20 sm:py-3.5 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-600 dark:text-slate-950"
              >
                Live Demo
                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
