’Õ‹’ﬁ‹o∑∏iÕ˜k÷ùÒÕıÈ÷ùﬂùπÛè7u˜˙Îmı}ø\˜øwù˘}Áx’«π”gª·ŒùkßösŒ¸import type { Metadata } from "next";
import { sitePath } from "../lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dkhaz.github.io/dhiraj-hazra-cosmology/"),
  title: {
    default: "Dhiraj Kumar Hazra ‚Äî Cosmology",
    template: "%s ‚Äî Dhiraj Kumar Hazra",
  },
  description:
    "Research in cosmology by Dhiraj Kumar Hazra: the early Universe, cosmological inference, reionization and large-scale structure.",
  authors: [{ name: "Dhiraj Kumar Hazra", url: "https://dkhaz.github.io/dhiraj-hazra-cosmology/" }],
  creator: "Dhiraj Kumar Hazra",
  verification: { google: "TNpvUCT70AVo2GYJcApFC2bB2hyfadmu9V2X_JXWtNc" },
  keywords: ["Dhiraj Kumar Hazra", "cosmology", "IMSc", "early Universe", "CMB", "primordial features", "reionization", "large-scale structure"],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Dhiraj Kumar Hazra ‚Äî Cosmology",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/dhiraj-hazra-cosmology/portrait/dhiraj-hazra.jpg", alt: "Dhiraj Kumar Hazra" }],
  },
  icons: { icon: sitePath("/favicon.svg"), shortcut: sitePath("/favicon.svg") },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://dkhaz.github.io/dhiraj-hazra-cosmology/",
  mainEntity: {
    "@type": "Person",
    "@id": "https://dkhaz.github.io/dhiraj-hazra-cosmology/#person",
    name: "Dhiraj Kumar Hazra",
    url: "https://dkhaz.github.io/dhiraj-hazra-cosmology/",
    image: "https://dkhaz.github.io/dhiraj-hazra-cosmology/portrait/dhiraj-hazra.jpg",
    jobTitle: "Faculty in Physics",
    affiliation: [
      { "@type": "Organization", name: "The Institute of Mathematical Sciences", url: "https://www.imsc.res.in/" },
      { "@type": "Organization", name: "INAF‚ÄìOAS Bologna", url: "https://www.oas.inaf.it/" },
    ],
    sameAs: [
      "https://www.imsc.res.in/dhiraj_kumar_hazra",
      "https://scholar.google.com/citations?user=80w2a-YAAAAJ",
      "https://inspirehep.net/authors/1117380",
      "https://github.com/dkhaz",
      "https://sites.google.com/site/codecosmo",
    ],
    knowsAbout: ["Cosmology", "Early Universe", "Cosmic microwave background", "Primordial features", "Reionization", "Large-scale structure"],
  },
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
          <span className="identity__field">Cosmology ¬∑ IMSc Chennai</span>
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
          <a href={sitePath("/about#contact")}>Contact coordinates ‚Üí</a>
        </div>
      </div>
      <div className="shell footer-base">
        <span>¬© {new Date().getFullYear()} Dhiraj Kumar Hazra</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
