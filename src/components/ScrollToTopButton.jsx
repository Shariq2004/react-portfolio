import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`group fixed bottom-6 right-5 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-300  hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/10 sm:bottom-7 sm:right-7 sm:h-11 sm:w-11 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-400 dark:shadow-xl dark:shadow-black/10 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400 ${
        showButton
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <ArrowUp
        size={17}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default ScrollToTopButton;
