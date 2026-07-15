import type { Metadata } from "next";
import { sitePath } from "../lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dhiraj Kumar Hazra — Cosmology",
    template: "%s — Dhiraj Kumar Hazra",
  },
  description:
    "Research in cosmology by Dhiraj Kumar Hazra: the early Universe, cosmological inference, reionization and large-scale structure.",
  icons: { icon: sitePath("/favicon.svg"), shortcut: sitePath("/favicon.svg") },
};

const mainNav = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Codes", "/codes"],
  ["Group", "/group"],
  ["Talks", "/talks"],
  ["Conferences", "/conferences"],
  ["Artworks", "/artworks"],
  ["Grants", "/about#grants"],
  ["About", "/about"],
];

const archiveNav = [
  ["Grants", "/about#grants"],
  ["Thesis", "/about#thesis"],
  ["Collaborators", "/group#collaborators"],
  ["Artworks", "/artworks"],
  ["Useful links", "/archive#links"],
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="identity" href={sitePath("/")} aria-label="Dhiraj Kumar Hazra, home">
          <span className="identity__name">Dhiraj Kumar Hazra</span>
          <span className="identity__field">Cosmology · IMSc Chennai</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {mainNav.map(([label, href]) => (
            <a key={href} href={sitePath(href)}>{label}</a>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary>Index</summary>
          <nav aria-label="Mobile navigation">
            {mainNav.map(([label, href]) => (
              <a key={href} href={sitePath(href)}>{label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-heading">Dhiraj Kumar Hazra</p>
          <p className="footer-statement">
            Faculty in Physics<br />
            The Institute of Mathematical Sciences
          </p>
        </div>
        <div>
          <p className="footer-heading">Archive</p>
          <nav className="footer-links" aria-label="Archive navigation">
            {archiveNav.map(([label, href]) => (
              <a key={href} href={sitePath(href)}>{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">Institute</p>
          <address>
            The Institute of Mathematical Sciences<br />
            CIT Campus, Taramani<br />
            Chennai, India
          </address>
          <a href={sitePath("/about#contact")}>Contact coordinates →</a>
        </div>
      </div>
      <div className="shell footer-base">
        <span>© {new Date().getFullYear()} Dhiraj Kumar Hazra</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
