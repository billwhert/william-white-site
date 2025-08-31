import React from "react";

interface LinkCardProps {
  title: string;
  href: string;
  note?: string;
  imageUrl?: string;
}

export function LinkCard({ title, href, note }: LinkCardProps) {
  const isExternal = href.startsWith("http");
  const favicon = isExternal
    ? `https://www.google.com/s2/favicons?domain=${
        new URL(href).hostname
      }&sz=64`
    : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl bg-white/80 border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {favicon && <img src={favicon} alt="" className="w-10 h-10 rounded" />}
      <div className="flex-1">
        <div className="font-medium text-slate-900 group-hover:underline">
          {title}
        </div>
        {note && <div className="text-xs text-slate-500 mt-1">{note}</div>}
      </div>
    </a>
  );
}

interface BadgeCardProps {
  title: string;
  href: string;
  issuer: string;
  note?: string;
}

export function BadgeCard({ title, href, issuer, note }: BadgeCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl bg-white/80 border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block"
    >
      <div className="font-medium text-slate-900 group-hover:underline">
        {title}
      </div>
      <div className="mt-1 text-xs text-slate-600">
        {issuer}
        {note ? ` • ${note}` : ""}
      </div>
    </a>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-slate-900">{children}</h2>;
}
