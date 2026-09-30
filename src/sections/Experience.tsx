import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink-800/40 py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Experience</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Where I&apos;ve grown as a developer
          </h2>
        </div>

        <ol className="relative mt-16 space-y-10 border-l border-white/10 pl-8 sm:mx-auto sm:max-w-2xl">
          {EXPERIENCE.map((item) => (
            <li key={item.id} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-400 ring-4 ring-brand-400/20"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-sm font-medium text-slate-400">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
