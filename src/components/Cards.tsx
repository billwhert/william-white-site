
import React from 'react'

function getLinkMeta(href: string) {
  try {
    // Support both absolute and relative URLs
    const url = new URL(href, window.location.href);
    const hostname = url.hostname;
    const isAbsolute = /^https?:/i.test(url.protocol);
    const favicon = isAbsolute
      ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`
      : 'assets/favicon.svg'; // fallback for relative paths
    return { hostname, favicon };
  } catch {
    // If URL parsing somehow fails, fall back gracefully
    return { hostname: '', favicon: 'assets/favicon.svg' };
  }
}

export function LinkCard({ title, href, note, imageUrl }: { title: string; href: string; note?: string; imageUrl?: string }) {
  const meta = getLinkMeta(href);
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl bg-white/90 border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition">
      <img src={imageUrl || meta.favicon} alt="" className="w-10 h-10 rounded" />
      <div>
        <div className="font-medium text-slate-900 group-hover:underline">{title}</div>
        <div className="text-xs text-slate-500">
          {meta.hostname || 'local'}{note ? ' • ' + note : ''}
        </div>
      </div>
    </a>
  )
}

export function BadgeCard({ title, href, issuer, note }: { title: string; href: string; issuer: string; note?: string }) {
  const meta = getLinkMeta(href);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-0.5 transition block">
      <div className="flex items-center gap-3">
        <img src={meta.favicon} alt="" className="w-8 h-8 rounded" />
        <div className="font-medium text-slate-900 group-hover:underline">{title}</div>
      </div>
      <div className="mt-1 text-xs text-slate-600">{issuer}{note ? ' • ' + note : ''}</div>
    </a>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold text-slate-900">{children}</h2>
}
