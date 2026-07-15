import type { Metadata } from "next";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "Publications",
  description: "Selected publications and research contributions by Dhiraj Kumar Hazra.",
};

const categories = [
  {
    number: "I",
    title: "Inflationary cosmology & primordial features",
    summary: "Models and observables that connect the dynamics of inflation with anomalies, black holes, gravitational waves and non-Gaussianity.",
    papers: [
      ["Inflation with Whip-Shaped Suppressed Scalar Power Spectra", "Phys. Rev. Lett. 113, 071301 (2014)", "Introduced an inflationary model with suppressed large-scale power to address CMB anomalies."],
      ["Wiggly Whipped Inflation", "JCAP 08 (2014) 048", "Combined smooth and sharp features in the inflaton potential."],
      ["Comparing multi-field primordial feature models with the Planck data", "JCAP 06 (2021) 005", "The first comparison of exact multi-field inflationary solutions with cosmological data."],
      ["Generating PBHs and small-scale GWs in two-field models of inflation", "JCAP 08 (2020) 001", "Primordial black holes and a stochastic gravitational-wave background from two-field dynamics."],
      ["BINGO: A code for the efficient computation of the scalar bi-spectrum", "JCAP 05 (2013) 026", "A public numerical operator for the inflationary bispectrum."],
      ["Primordial non-Gaussianity in the forest: 3D bi-spectrum of Ly-α flux spectra", "Phys. Rev. Lett. 109, 121301 (2012)", "Used the Lyman-α forest to probe primordial non-Gaussianity."],
    ],
  },
  {
    number: "II",
    title: "Primordial-spectrum reconstruction",
    summary: "Free-form and non-parametric inverse methods for reading primordial physics directly from cosmological data.",
    papers: [
      ["Primordial power spectrum from Planck", "JCAP 11 (2014) 011", "A free-form reconstruction using Planck temperature data."],
      ["Primordial power spectrum: a complete analysis with the WMAP nine-year data", "JCAP 07 (2013) 031", "A full WMAP9 analysis of the shape of the primordial spectrum."],
      ["Cosmological parameter estimation with free-form primordial power spectrum", "Phys. Rev. D 87, 123528 (2013)", "Joint inference of cosmological parameters and a flexible primordial spectrum."],
    ],
  },
  {
    number: "III",
    title: "Reionization history & UV luminosity",
    summary: "Combining CMB, high-redshift galaxies and neutral-hydrogen observations to recover the ionization history.",
    papers: [
      ["Joining bits and pieces of reionization history", "Phys. Rev. Lett. 125, 071301 (2020)", "A consistent history reconstructed from multiple observational sources."],
      ["Witnessing the reionization history using Planck CMB observations", "JCAP 11 (2017) 028", "Introduced the flexible Poly-Reion construction."],
      ["Gaussian Process Reconstruction of Reionization History", "Astrophys. J. 922 (2021) 95", "A non-parametric Gaussian-process reconstruction of the ionized fraction."],
    ],
  },
  {
    number: "IV",
    title: "Cosmological tensions & discordance",
    summary: "Testing whether departures from the simplest primordial spectrum can explain conflicts between datasets.",
    papers: [
      ["One spectrum to cure them all", "JCAP 08 (2022) 063", "A primordial signature that simultaneously addresses several cosmological anomalies and tensions."],
      ["Discordances in cosmology and the violation of slow-roll inflationary dynamics", "Phys. Rev. Lett. 130, 111001 (2023)", "Connected cosmological discordances with departures from slow-roll dynamics."],
      ["Parameter discordance in Planck CMB and low-redshift measurements", "JCAP 04 (2019) 036", "Quantified mismatches between CMB and low-redshift observations."],
      ["Exploring the discrepancy between Planck PR3 and ACT DR4", "JCAP 12 (2024) 038", "Compared cosmological inference from two major CMB datasets."],
    ],
  },
  {
    number: "V",
    title: "Epidemiology & statistical modelling",
    summary: "Methods adapted from cosmological inference to model COVID-19 transmission and reporting bias.",
    papers: [
      ["Modelling the first wave of COVID-19 in India", "PLOS Comput. Biol. 18 (10), e1010632 (2022)", "A multi-compartment computational model of the first wave in India."],
      ["Understanding the bias between confirmed cases and actual infections", "medRxiv (2021)", "A statistical analysis of under-reporting and evolving case bias."],
      ["ELiXSIR", "Public GitLab repository (2020)", "An extended, zone-linked compartmental SIR model with adaptive integration."],
    ],
  },
];

export default function PublicationsPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Selected record</p>
        <h1>Papers as<br />research traces.</h1>
        <p>
          A thematic selection of work in theoretical and observational cosmology,
          numerical methods and interdisciplinary modelling.
        </p>
        <div className="page-intro__actions">
          <a className="text-link" href="https://inspirehep.net/authors/1117380?ui-citation-summary=true">Complete record on INSPIRE ↗</a>
          <a className="quiet-link" href="https://arxiv.org/search/astro-ph?searchtype=author&query=Hazra%2C+D+K">arXiv author search ↗</a>
        </div>
      </header>

      <section className="paper-highlights shell" aria-labelledby="recent-figures">
        <div className="section-heading">
          <p className="kicker">Recent published figures</p>
          <h2 id="recent-figures">Three windows on primordial structure</h2>
        </div>
        <div className="paper-highlight-grid">
          <a className="paper-highlight" href="https://arxiv.org/abs/2504.06183">
            <span className="paper-highlight__year">2026 / JCAP 01 057</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/large-scale-structure.png")} alt="Feature spectra evolved with N-body simulations and effective field theory" /></div>
            <h3>Primordial Features in light of EFTofLSS</h3>
            <p>Nonlinear evolution of primordial-feature signals in large-scale structure.</p>
          </a>
          <a className="paper-highlight" href="https://arxiv.org/abs/2411.03459">
            <span className="paper-highlight__year">2025 / JCAP 06 035</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/early-universe.png")} alt="CMB signatures of primordial feature models" /></div>
            <h3>Origin of CMB large-scale features</h3>
            <p>Inflationary explanations for large-scale structures in the CMB.</p>
          </a>
          <a className="paper-highlight" href="https://arxiv.org/abs/2406.06296">
            <span className="paper-highlight__year">2024 / JCAP 12 038</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/cosmological-inference.png")} alt="Planck and ACT primordial power spectrum reconstruction" /></div>
            <h3>Planck PR3 and ACT DR4</h3>
            <p>A free-form look at their cosmological discrepancy.</p>
          </a>
        </div>
      </section>

      <section className="bibliography shell">
        <div className="section-heading section-heading--rule">
          <p className="kicker">Research summary</p>
          <h2>Selected contributions by theme</h2>
        </div>
        {categories.map((category) => (
          <article className="bibliography-section" key={category.number}>
            <div className="bibliography-section__intro">
              <span className="chapter-number">{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
            </div>
            <ol className="paper-list">
              {category.papers.map(([title, citation, note]) => (
                <li key={title}>
                  <div><h4>{title}</h4><p>{note}</p></div>
                  <cite>{citation}</cite>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>
    </main>
  );
}
