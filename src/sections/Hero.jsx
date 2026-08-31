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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pt-22 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-4 lg:pt-24 lg:pb-20">
        <div className="grid w-full items-center gap-18 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs sm:text-sm text-emerald-300 backdrop-blur-sm">
              <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </div>

            <p className="mb-3 text-lg font-medium text-slate-300">
              Hi, I'm <span className="text-cyan-400">Shariq</span>
            </p>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Building
              <span className="block pb-1.5 bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              That Matter.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Developer focused on building thoughtful digital products,
              combining strong frontend experiences with reliable backend
              solutions to turn ideas into practical, scalable applications.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-white/20 sm:w-auto sm:text-base"
              >
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#"
                // download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:w-auto sm:text-base"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Shariq2004"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400  transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/5"
              >
                <FaGithub className="h-4.25 w-4.25 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/in/shariq786/"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400  transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/5"
              >
                <FaLinkedinIn className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="mailto:shariqahmad303@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-400  transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-57.5 sm:max-w-65 md:max-w-70 lg:max-w-75">
              {/* Top Floating Card */}
              <div className="absolute -right-3 -top-4 z-20 rounded-xl border border-white/10 bg-slate-900/80 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:-right-3 sm:-top-5 sm:px-3 sm:py-2.5 lg:-right-4 lg:-top-6 lg:px-4 lg:py-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 sm:h-8 sm:w-8">
                    <Code2 size={15} className="sm:h-4.25 sm:w-4.25" />
                  </div>

                  <div>
                    <p className="text-[8px] text-slate-500 sm:text-[10px]">
                      Current Role
                    </p>

                    <p className="text-[10px] font-semibold text-white sm:text-xs">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-2.5">
                <div className="relative h-70 overflow-hidden rounded-2xl bg-slate-900 sm:h-85 md:h-92.2 lg:h-100">
                  <img
                    src={profileImage}
                    alt="Shariq-Image"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-[10px] text-cyan-400 sm:text-sm">
                      {displayText}
                      <span className="ml-0.5 animate-pulse">|</span>
                    </p>

                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      Creating with code.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Card */}
              <div className="absolute -bottom-4 -left-3 z-20 rounded-xl border border-white/10 bg-slate-900/90 p-2.5 shadow-xl backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:p-3 lg:-left-7">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="font-mono text-[10px] sm:text-xs">
                    <span className="text-violet-400">&lt;</span>

                    <span className="text-cyan-400">code</span>

                    <span className="text-violet-400">&gt;</span>
                  </div>

                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[9px] text-slate-400 sm:text-[10px]">
                    Building...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="group z-20 absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-white lg:flex"
      >
        <span className="text-[12px] tracking-[0.25em]">Scroll</span>

        <span className="animate-bounce relative flex h-6 w-4 justify-center rounded-full border border-slate-600/80 transition-colors duration-300 group-hover:border-cyan-400/60">
          <span className="mt-1.5 h-1 w-0.5 rounded-full bg-slate-400 transition-colors duration-300 group-hover:bg-cyan-400" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
