import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

function Navigation() {
  const location = useLocation();
  const showTitle = location.pathname !== "/";

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showTitle && (
            <Link
              to="/"
              className="font-semibold text-slate-900 text-lg tracking-tight"
            >
              William White
            </Link>
          )}
        </div>
        <nav className="flex gap-6 text-sm">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "text-slate-900 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            About
          </Link>
          <Link
            to="/experience"
            className={
              location.pathname === "/experience"
                ? "text-slate-900 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Experience
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Layout() {
  return (
    <div className="min-h-screen text-slate-800">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <footer className="mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs text-slate-600">
          © {new Date().getFullYear()} William White.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
