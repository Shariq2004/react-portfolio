import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../assets/profile-img.jpeg";

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-22 pb-5 sm:px-6 sm:pt-25 lg:px-4 lg:pt-10">
        <div className="grid w-full items-center gap-18 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/5 px-4 py-2 text-xs text-emerald-700 backdrop-blur-sm sm:text-sm dark:border-emerald-400/20 dark:text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 sm:h-2.5 sm:w-2.5 dark:bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-lg font-medium text-slate-600 dark:text-slate-300">
              Hi, I'm{" "}
              <span className="text-cyan-700 dark:text-cyan-400">Shariq</span>
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Building
              <span className="block bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text pb-1.5 text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400">
                Digital Experiences
              </span>
              That Matter.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
              Developer focused on building thoughtful digital products,
              combining strong frontend experiences with reliable backend
              solutions to turn ideas into practical, scalable applications.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-cyan-800 hover:shadow-md hover:shadow-cyan-700/20 sm:w-auto sm:text-base dark:bg-none dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:hover:shadow-white/20"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:text-blue-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:text-base dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-white dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Shariq2004"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-blue-50 hover:text-slate-900 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:hover:shadow-lg dark:hover:shadow-white/5"
              >
                <FaGithub className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/in/shariq786/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-transform duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-blue-50 hover:text-slate-900 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:hover:shadow-lg dark:hover:shadow-white/5"
              >
                <FaLinkedinIn className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="mailto:shariqahmad303@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm  transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-blue-600 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300 dark:hover:shadow-lg dark:hover:shadow-cyan-500/5"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-57.5 sm:max-w-65 md:max-w-70 lg:max-w-75">
              <div className="absolute -right-3 -top-4 z-20 rounded-xl border border-slate-200 bg-white/95 px-2.5 py-2 shadow-lg backdrop-blur-xl sm:-right-3 sm:-top-5 sm:px-3 sm:py-2.5 lg:-right-4 lg:-top-6 lg:px-4 lg:py-3 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 sm:h-8 sm:w-8 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <Code2 size={15} className="sm:h-4.25 sm:w-4.25" />
                  </div>

                  <div>
                    <p className="text-[8px] text-slate-500 sm:text-[10px] dark:text-slate-500">
                      Current Role
                    </p>

                    <p className="text-[10px] font-semibold text-slate-900 sm:text-xs dark:text-white">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-2.5 dark:border-white/10 dark:bg-white/4 dark:shadow-2xl dark:shadow-cyan-500/10">
                <div className="relative h-70 overflow-hidden rounded-2xl bg-slate-100 sm:h-85 md:h-92.2 lg:h-100 dark:bg-slate-900">
                  <img
                    src={profileImage}
                    alt="Shariq-Image"
                    className="h-full w-full object-cover"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/55 via-transparent to-transparent dark:from-slate-950/90" />

                  <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-5">
                    <p className="text-[10px] text-white sm:text-sm dark:text-cyan-400">
                      {displayText}
                      <span className="ml-0.5 animate-pulse">|</span>
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-slate-400 dark:text-white sm:text-xl">
                      Creating with code.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 z-20 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-lg backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:p-3 lg:-left-7 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="font-mono text-[10px] sm:text-xs">
                    <span className="text-indigo-600 dark:text-violet-400">
                      &lt;
                    </span>
                    <span className="text-cyan-700 dark:text-cyan-400">
                      code
                    </span>
                    <span className="text-indigo-600 dark:text-violet-400">
                      &gt;
                    </span>
                  </div>

                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />

                  <span className="text-[9px] text-slate-500 sm:text-[10px] dark:text-slate-400">
                    Building...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="group absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-slate-600 transition-all duration-300 hover:text-black lg:flex dark:text-slate-500 dark:hover:text-white"
      >
        <span className="text-[12px] tracking-[0.25em]">Scroll</span>

        <span className="relative flex h-6 w-4 animate-bounce justify-center rounded-full border border-slate-500 transition-all duration-300 group-hover:border-blue-500 dark:border-slate-600/80 dark:group-hover:border-cyan-400/60">
          <span className="mt-1.5 h-1 w-0.5 rounded-full bg-slate-400 transition-colors duration-300 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-400" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
