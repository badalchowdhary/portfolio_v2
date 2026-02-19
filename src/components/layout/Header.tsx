import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "https://drive.google.com/file/d/1E4Kkm1VexwwvaCYfLgGE8bf2aXLAhrLh/view?usp=sharing", label: "Resume", external: true },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (!isHome) return; // Will navigate via Link
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-mono text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          {"<badal />"}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary link-underline cursor-pointer"
                >
                  {item.label}
                </a>
              );
            }

            return isHome ? (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary link-underline cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={`/${item.href}`}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary link-underline"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              <div className="font-mono text-sm text-primary mb-4">
                {"// Navigation"}
              </div>
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-lg text-muted-foreground transition-colors hover:text-primary py-2 cursor-pointer"
                    >
                      <span className="text-primary mr-2">→</span>
                      {item.label}
                    </a>
                  ) : isHome ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        handleNavClick(item.href);
                      }}
                      className="font-mono text-lg text-muted-foreground transition-colors hover:text-primary py-2 cursor-pointer"
                    >
                      <span className="text-primary mr-2">→</span>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={`/${item.href}`}
                      className="font-mono text-lg text-muted-foreground transition-colors hover:text-primary py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-primary mr-2">→</span>
                      {item.label}
                    </Link>
                  )}
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
