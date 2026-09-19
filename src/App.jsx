import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Education from "./sections/Education";

import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen bg-linear-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 dark:bg-[#020617] dark:bg-none dark:text-white transition-colors duration-300">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl sm:bg-cyan-400/12 dark:bg-cyan-500/10 dark:sm:bg-cyan-500/20" />

          <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-400/8 blur-3xl sm:bg-indigo-400/12 dark:bg-violet-500/10 dark:sm:bg-violet-500/20" />

          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-400/6 blur-3xl sm:bg-blue-400/10 dark:bg-blue-500/5 dark:sm:bg-blue-500/10" />
        </div>

        <div className="relative z-10">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <ScrollToTopButton />
          <ToastContainer position="top-right" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
