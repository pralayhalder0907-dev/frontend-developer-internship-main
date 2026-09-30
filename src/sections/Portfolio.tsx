import { useMemo, useState, type MouseEvent } from "react";
import { PROJECTS, type ProjectCategory } from "../data";

type FilterValue = "All" | ProjectCategory;

const FILTERS: FilterValue[] = ["All", "Frontend", "Fullstack", "Mobile"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section-shell py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-eyebrow">Portfolio</span>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Selected projects
        </h2>
        <p className="mt-3 text-slate-400">
          A mix of frontend, fullstack, and mobile builds. Filter by category
          to explore.
        </p>
      </div>

      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-brand-400 bg-brand-500/20 text-white"
                  : "border-white/10 text-slate-400 hover:border-white/25 hover:text-slate-100"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group card flex flex-col overflow-hidden !p-0 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink-900/80 px-2.5 py-1 text-xs font-medium text-brand-300 backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-sm font-medium">
                <a
                  href={project.liveUrl}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    if (project.liveUrl === "#") event.preventDefault();
                  }}
                  className="text-brand-300 transition-colors hover:text-brand-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    if (project.repoUrl === "#") event.preventDefault();
                  }}
                  className="text-slate-400 transition-colors hover:text-slate-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </article>
        ))}

        {visibleProjects.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-slate-500">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
