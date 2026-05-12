export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-abstract.dim_1600x900.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8 animate-fade-in">
            Web Design & Development Agency
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-in">
            We Build{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Exceptional
            </span>
            <br />
            Digital Experiences
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            Reemania crafts high-impact websites and digital products for
            ambitious brands. Strategy, design, and code — unified under one
            roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold hover:bg-accent/90 transition-smooth flex items-center gap-2"
              data-ocid="hero.explore_work_button"
            >
              Explore Our Work
              <span className="text-lg">→</span>
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 rounded-lg border border-border text-foreground font-body font-semibold hover:border-primary/50 hover:bg-primary/5 transition-smooth"
              data-ocid="hero.contact_button"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                About Reemania
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Design that thinks,
                <br />
                <span className="text-primary">code that performs.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're a boutique digital agency obsessed with the intersection
                of strategy, aesthetics, and engineering. Every project starts
                with understanding your business — then we build the digital
                experience that moves it forward.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From early-stage startups to established enterprises, we've
                helped 50+ clients transform their digital presence and achieve
                measurable results.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { stat: "50+", label: "Projects Delivered" },
                  { stat: "98%", label: "Client Satisfaction" },
                  { stat: "5★", label: "Average Rating" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-4 rounded-lg bg-card border border-border"
                  >
                    <p className="font-display text-2xl font-black text-primary">
                      {item.stat}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="/assets/generated/hero-abstract.dim_1600x900.jpg"
                  alt="Reemania team at work"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted-foreground">Latest Award</p>
                <p className="font-display font-bold text-sm text-foreground mt-0.5">
                  Awwwards Site of the Day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Work / Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Monitor,
  PenTool,
  Star,
} from "lucide-react";
import React from "react";
import { projects, services, testimonials } from "../data/sample-data";
import type { Project, Service, Testimonial } from "../types";

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-6 h-6" />,
  "code-2": <Code2 className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  "pen-tool": <PenTool className="w-6 h-6" />,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-smooth"
      data-ocid={`service.card.${service.id}`}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-smooth">
        {iconMap[service.icon]}
      </div>
      <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Services built for
            <span className="text-primary"> growth</span>
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="services.grid"
        >
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to="/portfolio/$id"
      params={{ id: project.id }}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-smooth"
      data-ocid={`portfolio.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-52">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-black text-foreground/10">
            {project.title[0]}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-card/90 border border-border text-xs font-semibold text-foreground">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-base mb-1.5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {project.shortDesc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-secondary text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function PortfolioSection() {
  const categories = ["All", "Branding", "Development", "UI/UX", "Web Design"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Selected <span className="text-primary">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            A curated selection of work across branding, design, and
            engineering.
          </p>
        </div>
        {/* Category filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          data-ocid="portfolio.filter_bar"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
              data-ocid={`portfolio.filter.${cat.toLowerCase().replace("/", "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="portfolio.grid"
        >
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <div
              className="col-span-3 py-20 text-center text-muted-foreground"
              data-ocid="portfolio.empty_state"
            >
              <p className="font-display font-semibold text-lg mb-2">
                No projects in this category yet.
              </p>
              <p className="text-sm">
                Check back soon — we're always shipping.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <div
      className="p-6 rounded-xl bg-card border border-border flex flex-col gap-4"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }, (_, i) => (
          <Star
            key={`star-${t.id}-${i}`}
            className="w-4 h-4 fill-accent text-accent"
          />
        ))}
      </div>
      <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="font-display font-bold text-xs text-primary">
            {t.clientName[0]}
          </span>
        </div>
        <div>
          <p className="font-semibold text-sm">{t.clientName}</p>
          <p className="text-xs text-muted-foreground">{t.company}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Client Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            What our clients <span className="text-primary">say</span>
          </h2>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-ocid="testimonials.grid"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor, isFetching } = useActor(createActor);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitting, setSubmitting] = React.useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.projectType) e.projectType = "Please select a project type.";
    if (!form.budget) e.budget = "Please select a budget range.";
    if (!form.message.trim()) e.message = "Tell us about your project.";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    if (!actor || isFetching) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    setStatus("idle");
    try {
      const result = await actor.submitContactForm(
        form.name,
        form.email,
        form.projectType,
        form.budget,
        form.message,
      );
      if (result.__kind__ === "ok") {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ready to build
              <span className="text-primary"> something great?</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Tell us about your project. We'll get back within 24 hours.
            </p>
          </div>

          {status === "success" && (
            <div
              className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary"
              data-ocid="contact.success_state"
            >
              <span className="text-xl">✓</span>
              <div>
                <p className="font-semibold text-sm">
                  Message sent successfully.
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  We've received your inquiry and will reply within 24 hours.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div
              className="mb-6 flex items-center gap-3 px-5 py-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive"
              data-ocid="contact.error_state"
            >
              <span className="text-xl">✗</span>
              <p className="font-semibold text-sm">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
            data-ocid="contact.form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Johnson"
                  className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                    errors.name ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="contact.name_input"
                />
                {errors.name && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="contact.name_field_error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                    errors.email ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="contact.email_input"
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="contact.email_field_error"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="project-type" className="text-sm font-medium">
                  Project Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                    errors.projectType ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="contact.project_type_select"
                >
                  <option value="">Select a service…</option>
                  <option value="web-design">Web Design</option>
                  <option value="development">Development</option>
                  <option value="branding">Branding</option>
                  <option value="ui-ux">UI/UX Strategy</option>
                  <option value="full-project">Full Project</option>
                </select>
                {errors.projectType && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="contact.project_type_field_error"
                  >
                    {errors.projectType}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget Range <span className="text-destructive">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                    errors.budget ? "border-destructive" : "border-input"
                  }`}
                  data-ocid="contact.budget_select"
                >
                  <option value="">Select a range…</option>
                  <option value="5k-6k">रू ५,००० – रू ६,०००</option>
                  <option value="6k-7k">रू ६,००० – रू ७,०००</option>
                  <option value="7k-8k">रू ७,००० – रू ८,०००</option>
                  <option value="8k-9k">रू ८,००० – रू ९,०००</option>
                  <option value="9k-10k">रू ९,००० – रू १०,०००</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
                {errors.budget && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="contact.budget_field_error"
                  >
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Tell Us About Your Project{" "}
                <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Share your vision, goals, timeline, or any details that would help us understand your project…"
                className={`w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-smooth ${
                  errors.message ? "border-destructive" : "border-input"
                }`}
                data-ocid="contact.message_textarea"
              />
              {errors.message && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="contact.message_field_error"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting || isFetching}
              className="w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold hover:bg-accent/90 transition-smooth flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              data-ocid="contact.submit_button"
            >
              {submitting ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-accent-foreground/40 border-t-accent-foreground rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
