import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import PowerBI from "./pages/PowerBI";

export default function App() {
  // More robust check for the active page
  const activeHash =
    typeof window !== "undefined" ? window.location.hash : "#/";

  return (
    <div className="min-h-screen text-slate-800">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {activeHash !== "#/" && (
              <a
                href="#/"
                className="font-semibold text-slate-900 text-lg tracking-tight"
              >
                William White
              </a>
            )}
          </div>
          <nav className="flex gap-6 text-sm">
            <a
              href="#/"
              className={
                activeHash === "#/" ? "text-slate-900" : "hover:text-slate-900"
              }
            >
              About
            </a>
            <a
              href="#/experience"
              className={
                activeHash === "#/experience"
                  ? "text-slate-900"
                  : "hover:text-slate-900"
              }
            >
              Experience
            </a>
            {/* 👇 2. Add the new link to your navigation bar */}
            <a
              href="#/powerbi"
              className={
                activeHash === "#/powerbi"
                  ? "text-slate-900"
                  : "hover:text-slate-900"
              }
            >
              Power BI Project
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        {/* 👇 3. Add the new Route for your component */}
        <Route path="/powerbi" element={<PowerBi />} />
        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <footer className="border-t border-slate-200 bg-white/70 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-slate-500">
          © {new Date().getFullYear()} William White.
        </div>
      </footer>
    </div>
  );
}
