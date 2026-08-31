import { Sparkles } from "lucide-react";

const About = () => {
  const developmentFocus = [
    "Responsive Design",
    "Reusable Components",
    "Scalable Structure",
    "Component Architecture",
    "Performance",
    "Continuous Learning",
  ];

  return (
    <section id="about" className="relative py-22 sm:py-24 text-white">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            About Me
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            More than just{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              writing code.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I enjoy understanding how things work, solving problems and building
            products that are thoughtfully designed from the ground up.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Left */}
          <div className="rounded-3xl border border-white/10 p-5 bg-white/3 sm:p-8">
            <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
              <p>
                I'm <span className="font-semibold text-white">Shariq</span>, a
                web developer who enjoys turning ideas into clean, responsive
                and interactive web experiences. I work with{" "}
                <span className="text-cyan-400">
                  React, JavaScript, HTML, CSS
                </span>{" "}
                and Tailwind CSS to create interfaces that are functional,
                polished and easy to use.
              </p>

              <p>
                I enjoy taking a project from an idea to a working product,
                whether that means building a responsive interface, creating
                reusable components or connecting the frontend with backend
                services. I focus on writing code that is easy to understand and
                maintain as the project grows.
              </p>

              <p>
                Alongside frontend development, I have hands-on experience with{" "}
                <span className="text-white">Node.js, Express and MongoDB</span>{" "}
                and have built full-stack applications using the MERN stack.
                Working across both sides of an application has helped me
                understand how the different pieces come together to build a
                complete product.
              </p>

              <p>
                I'm always looking for opportunities to work on meaningful
                projects, solve real problems and grow as a{" "}
                <span className="text-cyan-400">
                  frontend or full-stack developer
                </span>
                .
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-2xl font-bold text-white">React</p>

                <p className="mt-1 text-xs text-slate-500">
                  Modern UI Development
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                <p className="text-2xl font-bold text-white">JavaScript</p>

                <p className="mt-1 text-xs text-slate-500">
                  Interactive Applications
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20">
                <p className="text-2xl font-bold text-white">MERN</p>

                <p className="mt-1 text-xs text-slate-500">
                  Full Stack Development
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5  lg:flex lg:h-full lg:flex-col">
            <div className="lg:flex-[1.15]  rounded-3xl border border-white/10 bg-white/3 p-5  transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Sparkles size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Current Direction</p>

                  <h3 className="font-semibold text-white">
                    Building Better Web Products
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Focused on building practical web applications, strengthening my
                development skills and turning ideas into products that are
                simple, useful and reliable.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {developmentFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:flex-[0.85]  rounded-3xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 sm:p-6">
              <p className="mb-5 text-xs uppercase tracking-widest text-violet-400">
                What I Care About
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="mt-1 shrink-0 text-cyan-400">01</span>

                  <div>
                    <h4 className="font-semibold text-white">Clean Code</h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Keeping code structured, readable and maintainable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-1 shrink-0 text-cyan-400">02</span>

                  <div>
                    <h4 className="font-semibold text-white">
                      Problem Solving
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Breaking complex problems into practical solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="mt-1 shrink-0 text-cyan-400">03</span>

                  <div>
                    <h4 className="font-semibold text-white">
                      User Experience
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Creating interfaces that feel clear, responsive and
                      intuitive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
