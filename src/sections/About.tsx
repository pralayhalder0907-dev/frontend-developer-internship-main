import { CORE_TECH_SKILLS } from "../data";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <span className="section-eyebrow">About Me</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Turning designs into fast, reliable interfaces.
          </h2>
          <div className="mt-6 space-y-4 text-slate-400">
            <p>
              I&apos;m a Computer Science &amp; Technology student currently
              completing a 7-day Frontend Developer Internship, where I build
              production-ready interfaces from the ground up — from project
              configuration to deployment.
            </p>
            <p>
              I care about clean component architecture, accessible markup,
              and layouts that hold up on everything from a 360px phone to a
              widescreen monitor. My day-to-day toolkit is React, TypeScript,
              Tailwind CSS, and Vite.
            </p>
            <p>
              Outside of frontend work, I practice data structures and C
              programming, which keeps my problem-solving sharp when I&apos;m
              wiring up state, filters, and validation logic in the browser.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Component Design", "Responsive UI", "Form Validation", "Git/GitHub"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="card">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Core Skills
          </h3>
          <ul className="mt-6 space-y-5">
            {CORE_TECH_SKILLS.map((skill) => (
              <li key={skill.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="text-slate-500">{skill.level}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-purple-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
