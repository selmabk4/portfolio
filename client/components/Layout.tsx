import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Portefølje", to: "/" },
  { label: "Om meg", to: "/om-meg" },
  { label: "Kontakt", to: "#kontakt" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-[1152px] items-center justify-between px-4 sm:h-20 sm:px-8">
          <Link
            to="/"
            className="font-serif text-lg font-light tracking-tight text-primary sm:text-2xl"
          >
            Selma
          </Link>
          <ul className="flex items-center gap-4 sm:gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.to === "#kontakt" ? (
                  <a
                    href="#kontakt"
                    className="border-b border-transparent pb-[1.5px] text-xs font-normal uppercase tracking-[1.2px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "border-b pb-[1.5px] text-xs font-normal uppercase tracking-[1.2px] transition-colors",
                        isActive
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-primary",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="pt-16 sm:pt-20">{children}</main>
    </div>
  );
}
