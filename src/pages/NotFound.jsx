import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-slate-900 sm:px-6 dark:text-white">
      <div className="relative z-10 w-full max-w-xl text-center">
        <p className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-[clamp(7rem,25vw,12rem)] font-bold leading-none tracking-tighter text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-violet-500">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to somewhere useful.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/3 dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-400/20 dark:hover:bg-white/6 dark:hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-400 dark:text-slate-600">
          Lost? It happens. Let's find your way back.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
