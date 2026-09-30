import { NAV_LINKS, SOCIAL_LINKS } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <a href="#home" className="font-display text-lg font-bold text-white">
            Priyajit<span className="text-brand-400">.</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Frontend developer intern crafting responsive, accessible interfaces
            with React, TypeScript and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-slate-400 transition-colors hover:text-brand-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Priyajit Paul. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
