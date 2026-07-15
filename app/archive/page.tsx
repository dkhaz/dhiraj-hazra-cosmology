import type { Metadata } from "next";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "Archive & useful links",
  description: "Legacy page index and useful cosmology resources.",
};

const resources = [
  ["CosmoMC", "Fortran 2003 Markov-chain Monte Carlo engine for exploring cosmological parameter space.", "https://github.com/cmbant/CosmoMC"],
  ["WMAP data", "CMB data, likelihood software and results from the Wilkinson Microwave Anisotropy Probe.", "https://lambda.gsfc.nasa.gov/product/wmap/current/"],
  ["Planck data", "CMB data, likelihood software and results from the Planck mission.", "https://www.cosmos.esa.int/web/planck"],
  ["Netlib", "A long-running repository of mathematical and numerical software.", "https://www.netlib.org/"],
  ["CosmoCoffee", "A forum for discussion and announcements in cosmology.", "https://cosmocoffee.info/"],
];

const map = [
  ["Home", "/"], ["Codes, models and algorithms", "/codes"], ["Thesis", "/about#thesis"],
  ["Conferences", "/conferences"], ["My group", "/group"], ["Grants", "/about#grants"],
  ["Publications", "/publications"], ["BINGO", "/codes/bingo"], ["BINGO registration", "/codes/bingo#download"],
  ["BINGO sample plots", "/codes/bingo#samples"], ["ELiXSIR", "/codes/elixsir"], ["Seminars", "/talks"],
  ["Contacts", "/about#contact"], ["Collaborators", "/group#collaborators"], ["My artworks", "/artworks"],
  ["Useful links", "/archive#links"],
];

export default function ArchivePage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Preserved material</p><h1>The old index,<br />recomposed.</h1>
        <p>Every information-bearing page from the previous Google Site has a home in this edition.</p>
      </header>
      <section className="archive-map shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Migration map</p><h2>Original page → new location</h2></div>
        <div className="archive-map__grid">{map.map(([label, href], index) => <a href={sitePath(href)} key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><b>→</b></a>)}</div>
      </section>
      <section className="resource-section shell" id="links">
        <div className="section-heading section-heading--rule"><p className="kicker">Useful links</p><h2>Working resources</h2></div>
        <div className="resource-list">{resources.map(([name, note, href]) => <a href={href} key={name}><h3>{name}</h3><p>{note}</p><span>External ↗</span></a>)}</div>
      </section>
      <section className="school-note shell" id="school">
        <p className="kicker">My school</p><div><h2>Archive marker</h2><p>The original “My School” page contains its title but no additional published material. Its place in the archive is preserved here.</p></div>
      </section>
    </main>
  );
}
