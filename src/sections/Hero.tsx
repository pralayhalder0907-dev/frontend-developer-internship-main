export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell grid items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-0">
        <div className="animate-fadeUp">
          <span className="section-eyebrow">Frontend Developer Intern</span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build fast, accessible
            <span className="block bg-gradient-to-r from-brand-300 via-brand-400 to-purple-400 bg-clip-text text-transparent">
              web interfaces.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Hi, I&apos;m Priyajit Paul — a Computer Science & Technology student
            and frontend developer intern. I design and ship
            production-ready React interfaces with clean architecture,
            strict TypeScript, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#portfolio" className="btn-primary">
              View My Work
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="sr-only">Completed tasks</dt>
              <dd className="font-display text-2xl font-bold text-white">7/7</dd>
              <p className="text-xs text-slate-500">Milestones shipped</p>
            </div>
            <div>
              <dt className="sr-only">Core stack</dt>
              <dd className="font-display text-2xl font-bold text-white">TS</dd>
              <p className="text-xs text-slate-500">Strict TypeScript</p>
            </div>
            <div>
              <dt className="sr-only">Responsiveness</dt>
              <dd className="font-display text-2xl font-bold text-white">100%</dd>
              <p className="text-xs text-slate-500">Responsive layout</p>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm animate-floaty md:block">
          <div className="card relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-rose-400/80" />
              <div className="h-3 w-3 rounded-full bg-amber-400/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <pre className="mt-4 overflow-x-auto text-xs leading-relaxed text-slate-300">
{`const dev = {
  name: "Priyajit Paul",
  role: "Frontend Developer",
  stack: ["React", "TypeScript",
          "Tailwind CSS"],
  status: "open to internships",
};`}
            </pre>
          </div>
          <div className="card absolute -bottom-8 -left-8 w-48 !p-4">
            <p className="text-xs text-slate-400">Currently building</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Interactive Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
