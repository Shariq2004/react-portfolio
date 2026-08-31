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
      className="relative overflow-hidden py-22 sm:py-24 text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Contact
          </div>

          <h2 className=" text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Have an idea?{" "}
            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Let's build it together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Whether you have a project in mind, a job opportunity, or simply
            want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-6  sm:p-7">
              <div className="relative">
                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    </span>

                    <span className="text-xs font-medium text-cyan-300">
                      Looking for New Challenges
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-slate-600">
                    01
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                    Currently available for
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {availableFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-cyan-400/20 hover:text-cyan-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="my-7 h-px bg-white/[0.07]" />

                {/* Contact Details */}
                <div className="space-y-4">
                  <a
                    href="mailto:shariqahmad303@gmail.com"
                    className="group flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/5">
                      <Mail size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-slate-600">
                        Email
                      </p>

                      <p className="mt-1 truncate text-xs text-slate-400 transition-colors duration-300 group-hover:text-cyan-300">
                        shariqahmad303@gmail.com
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="ml-auto shrink-0 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                    />
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-violet-400">
                      <MapPin size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-600">
                        Location
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Bijnor Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-7 h-px bg-white/[0.07]" />

                {/* Social */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    Find me online
                  </p>

                  <div className="mt-4 flex gap-2.5">
                    <a
                      href="https://github.com/Shariq2004"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-slate-500 transition-all duration-300 hover:border-white/15 hover:bg-white/6 hover:text-white"
                    >
                      <FaGithub size={17} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/shariq786/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/3 text-slate-500 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/6 hover:text-cyan-300"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>

                <div className="mt-4 lg:mt-11 flex items-center gap-2 px-1">
                  <Clock3 size={13} className="text-cyan-400" />

                  <p className="text-xs text-slate-600">
                    Usually respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/2.5 p-5 sm:p-7 lg:p-8">
            <div className="mb-7">
              <p className="text-lg font-semibold text-white">
                Send me a message
              </p>

              <p className="mt-1 text-sm text-slate-600">
                I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 font-[Arial]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium text-slate-500"
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
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-500"
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
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-slate-500"
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
                  className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-slate-500"
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
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-700 transition-all duration-300 focus:border-cyan-400/30 focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
