import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X, Check } from "lucide-react";
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
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/10 p-4 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="group absolute right-4 top-5 z-30 flex h-8 w-8 sm:h-8 sm:w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 text-slate-400 backdrop-blur-md transition-all duration-300 hover:text-white"
        >
          <X
            size={18}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        </button>

        <div className="relative h-56 shrink-0 overflow-hidden bg-slate-900 sm:h-72">
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

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="group absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:bg-slate-950/90 hover:text-white"
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
              className="group absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:bg-slate-950/90 hover:text-white"
            >
              <ChevronRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          )}

          <div className="absolute bottom-8 left-5 z-20 sm:left-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              {selectedProject.category}
            </p>

            <h3 className="hidden mt-1 text-3xl font-bold text-white sm:flex">
              {selectedProject.title}
            </h3>
          </div>

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

        {/* MODAL CONTENT */}

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
          {/* About */}
          <div className="flex mb-6 justify-between items-center sm:hidden">
            <h1 className="text-3xl font-bold text-white">
              {selectedProject.title}
            </h1>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
              About the Project
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-[15px]">
              {selectedProject.description}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="font-semibold text-cyan-400">Duration:</span>
            <span className="text-slate-400">{selectedProject.duration}</span>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Key Features
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {selectedProject.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/10 hover:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 border-t border-white/8 pt-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/1 bg-white/[0.035] px-5 py-2.5 sm:py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <FaGithub size={17} />
                View Source
              </a>

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-2.5 sm:py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20"
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
