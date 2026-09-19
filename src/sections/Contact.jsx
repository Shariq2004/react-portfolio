import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  Clock3,
  LoaderCircle,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import sendContactEmail from "../services/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const availableFor = [
    "Frontend Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await sendContactEmail(formData);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 text-slate-900 dark:text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600 dark:border-cyan-400/10 dark:bg-cyan-400/4 dark:text-cyan-300">
            Contact Me
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Have an idea?
            <span className="block bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
              Let's build it together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            Whether you have a project in mind, a job opportunity, or simply
            want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}
          <div className="flex flex-col">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 sm:p-7 dark:border-white/10 dark:bg-white/2.5 dark:shadow-none dark:hover:border-cyan-400/20 dark:hover:shadow-none">
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/8 blur-3xl dark:bg-cyan-400/5" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-30 dark:bg-cyan-400 dark:opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
                    </span>

                    <span className="text-xs font-medium text-blue-600 dark:text-cyan-300">
                      Looking for New Challenges
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                    01
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
                    Currently available for
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {availableFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/8 dark:bg-white/3 dark:text-slate-400 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="my-7 h-px bg-slate-200 dark:bg-white/[0.07]" />

                {/* Contact Details */}
                <div className="space-y-4">
                  <a
                    href="mailto:shariqahmad303@gmail.com"
                    className="group flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:border-blue-300 group-hover:bg-blue-100 dark:border-white/[0.07] dark:bg-white/3 dark:text-cyan-400 dark:group-hover:border-cyan-400/20 dark:group-hover:bg-cyan-400/5">
                      <Mail size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Email
                      </p>

                      <p className="mt-1 truncate text-xs text-slate-600 transition-all duration-300 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-cyan-300">
                        shariqahmad303@gmail.com
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="ml-auto shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500 dark:text-slate-700 dark:group-hover:text-cyan-400"
                    />
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600 dark:border-white/[0.07] dark:bg-white/3 dark:text-violet-400">
                      <MapPin size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-600">
                        Location
                      </p>

                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        Bijnor, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-7 h-px bg-slate-200 dark:bg-white/[0.07]" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">
                    Find me online
                  </p>

                  <div className="mt-4 flex gap-2.5">
                    <a
                      href="https://github.com/Shariq2004"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-white/[0.07] dark:bg-white/3 dark:text-slate-500 dark:hover:border-white/15 dark:hover:bg-white/6 dark:hover:text-white"
                    >
                      <FaGithub size={17} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/shariq786/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-100 dark:border-white/[0.07] dark:bg-white/3 dark:text-slate-500 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/6 dark:hover:text-cyan-300"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 px-1 lg:mt-11">
                  <Clock3
                    size={13}
                    className="text-blue-500 dark:text-cyan-400"
                  />

                  <p className="text-xs text-slate-500 dark:text-slate-600">
                    Usually respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5 sm:p-7 lg:p-8 dark:border-white/10 dark:bg-white/2.5 dark:shadow-none dark:hover:border-cyan-400/20 dark:hover:shadow-none">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-indigo-400/6 blur-3xl dark:bg-violet-500/5" />

            <div className="relative">
              <div className="mb-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    Send me a message
                  </p>

                  <span className="hidden rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-600 sm:inline-flex dark:border-cyan-400/10 dark:bg-cyan-400/5 dark:text-cyan-400">
                    Let's connect
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-600">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-[Arial]">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-500"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Alish Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-blue-300 focus:bg-white focus:ring-1 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-700 dark:focus:border-cyan-400/30 dark:focus:bg-slate-950/80 dark:focus:ring-cyan-400/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="alish@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-blue-300 focus:bg-white focus:ring-1 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-700 dark:focus:border-cyan-400/30 dark:focus:bg-slate-950/80 dark:focus:ring-cyan-400/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-500"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Let's work together"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-blue-300 focus:bg-white focus:ring-1 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-700 dark:focus:border-cyan-400/30 dark:focus:bg-slate-950/80 dark:focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-blue-300 focus:bg-white focus:ring-1 focus:ring-blue-500/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-700 dark:focus:border-cyan-400/30 dark:focus:bg-slate-950/80 dark:focus:ring-cyan-400/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-70 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-600 dark:text-slate-950"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <span className="relative flex items-center gap-2">
                    {isSending ? (
                      <>
                        <LoaderCircle size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
