import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "../data/sample-data";

export default function PortfolioDetail() {
  const { id } = useParams({ from: "/portfolio/$id" });
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        className="pt-32 pb-24 text-center container mx-auto px-6"
        data-ocid="portfolio_detail.not_found"
      >
        <h1 className="font-display text-3xl font-bold mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article
      className="pt-24 pb-24 bg-background"
      data-ocid="portfolio_detail.page"
    >
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/60 to-accent/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[12rem] font-black text-foreground/5">
            {project.title[0]}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/30">
              {project.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-black mt-3 mb-2">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-10 group"
          data-ocid="portfolio_detail.back_link"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Results</h2>
              <div className="flex flex-col gap-3">
                {project.results.map((r) => (
                  <div
                    key={r}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm font-medium">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-4">
                Deliverables
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Client
              </p>
              <p className="font-display font-bold text-lg">
                {project.clientName}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-border text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/"
              onClick={() =>
                setTimeout(
                  () =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  300,
                )
              }
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold hover:bg-accent/90 transition-smooth"
              data-ocid="portfolio_detail.start_project_button"
            >
              Start a Similar Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
