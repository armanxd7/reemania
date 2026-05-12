import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouterState();
  const isHome = router.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.logo"
        >
          <img
            src="/assets/images/reemania-logo.png"
            alt="Reemania Logo"
            className="h-14 w-auto object-contain logo-transparent"
          />
          <span className="font-playfair-italic text-2xl font-semibold tracking-wide leading-none">
            <span style={{ color: "#FFD700" }}>Ree</span>
            <span className="text-white">mania Agency</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              data-ocid={`nav.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold gap-1.5"
            data-ocid="nav.cta_button"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.mobile_menu_toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="text-left text-base font-body text-muted-foreground hover:text-foreground transition-colors"
              data-ocid={`nav.mobile.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold w-full mt-2"
            data-ocid="nav.mobile.cta_button"
          >
            Start a Project <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/reemania-logo.png"
                alt="Reemania Logo"
                className="h-14 w-auto object-contain logo-transparent"
              />
              <span className="font-playfair-italic text-2xl font-semibold tracking-wide leading-none">
                <span style={{ color: "#FFD700" }}>Ree</span>
                <span className="text-white">mania Agency</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We build digital experiences that attract, convert, and retain.
              Let's make something exceptional together.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Quick Links
            </p>
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-accent transition-colors text-left w-fit"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Get In Touch
            </p>
            <a
              href="mailto:armanorig7@mail.com"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              armanorig7@mail.com
            </a>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="text-sm text-accent hover:text-accent/80 transition-colors text-left font-semibold flex items-center gap-1"
            >
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Reemania Agency. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed &amp; Developed by{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=9779844882786&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline hover:brightness-125 transition-all duration-200"
              style={{ color: "#FFD700" }}
              data-ocid="footer.developer_link"
            >
              Rihan Idrishi (Arman)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
