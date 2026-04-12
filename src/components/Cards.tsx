import React from "react";

interface LinkCardProps {
  title: string;
  href: string;
  note?: string;
  imageUrl?: string;
  github?: string;
}

export function LinkCard({ title, href, note, imageUrl, github }: LinkCardProps) {
  // decide which links open in a new tab: external or local static assets
  const isExternal = /^https?:\/\//i.test(href);
  const openInNewTab =
    isExternal ||
    href.startsWith("./projects") ||
    href.startsWith("/projects") ||
    href.startsWith("./writing-samples") ||
    href.startsWith("/writing-samples");

  // pick a favicon: custom imageUrl > site favicon (for external) > local fallback
  let domain = "";
  try {
    // support relative URLs by providing a base
    domain = new URL(href, window.location.origin).hostname;
  } catch {
    domain = "";
  }
  const favicon =
    imageUrl ||
    (isExternal && domain
      ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
      : "assets/favicon.svg");

  return (
    <div className="group flex flex-col rounded-2xl bg-white/90 border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition overflow-hidden">
      <a
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 flex-1"
      >
        <img src={favicon} alt="" className="w-10 h-10 rounded shrink-0" />
        <div>
          <div className="font-medium text-slate-900 group-hover:underline">
            {title}
          </div>
          <div className="text-xs text-slate-500">
            {openInNewTab ? "opens in new tab" : "opens here"}
            {note ? " • " + note : ""}
          </div>
        </div>
      </a>
      {github && (
        <div className="border-t border-slate-100 px-4 py-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-sky-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View code on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

export function BadgeCard({
  title,
  href,
  issuer,
  note,
}: {
  title: string;
  href: string;
  issuer: string;
  note?: string;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  let badgeDomain = "";
  try {
    badgeDomain = new URL(href).hostname;
  } catch {
    badgeDomain = "";
  }
  const favicon =
    isExternal && badgeDomain
      ? `https://www.google.com/s2/favicons?domain=${badgeDomain}&sz=64`
      : "assets/favicon.svg";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition block"
    >
      <div className="flex items-center gap-3">
        <img src={favicon} alt="" className="w-8 h-8 rounded" />
        <div className="font-medium text-slate-900 group-hover:underline">
          {title}
        </div>
      </div>
      <div className="mt-1 text-xs text-slate-600">
        {issuer}
        {note ? " • " + note : ""}
      </div>
    </a>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-slate-900">{children}</h2>;
}
