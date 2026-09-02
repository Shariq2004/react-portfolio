import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-white sm:px-6">
      <div className="relative z-10 w-full max-w-xl text-center">
        <p className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-[clamp(7rem,25vw,12rem)] font-bold leading-none tracking-tighter text-transparent">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to somewhere useful.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-600">
          Lost? It happens. Let's find your way back.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
