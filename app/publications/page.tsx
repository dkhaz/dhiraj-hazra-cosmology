import type { Metadata } from "next";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications and research contributions by Dhiraj Kumar Hazra, organized by research theme.",
};

const inspirePaper = (title: string, id: number) => ({
  title,
  href: `https://inspirehep.net/literature/${id}`,
  source: "INSPIRE record ↗",
});

const externalPaper = (title: string, href: string, source: string) => ({ title, href, source });

const categories = [
  {
    number: "I",
    title: "Inflationary dynamics, primordial features & non-Gaussianity",
    summary: "Inflationary models, their primordial signatures, bispectra, gravitational waves and numerical calculations beyond slow roll.",
    papers: [
      inspirePaper("Primordial standard clock models and CMB residual anomalies", 1909246),
      inspirePaper("Comparing multi-field primordial feature models with the Planck data", 1849998),
      inspirePaper("Probing Primordial Features with the Stochastic Gravitational Wave Background", 1835781),
      inspirePaper("Generating PBHs and small-scale GWs in two-field models of inflation", 1794492),
      inspirePaper("Generating primordial features at large scales in two field models of inflation", 1789442),
      inspirePaper("Direct search for features in the primordial bispectrum", 1411597),
      inspirePaper("On the scalar consistency relation away from slow roll", 1319617),
      inspirePaper("Wiggly Whipped Inflation", 1294910),
      inspirePaper("Sharp inflaton potentials and bi-spectra: Effects of smoothening the discontinuity", 1292080),
      inspirePaper("Inflation with Whip-Shaped Suppressed Scalar Power Spectra", 1288049),
      inspirePaper("The scalar bi-spectrum during preheating in single field inflationary models", 1116953),
      inspirePaper("BINGO: A code for the efficient computation of the scalar bi-spectrum", 1083280),
      inspirePaper("Primordial features and non-Gaussianities", 1247595),
      inspirePaper("Oscillations in the inflaton potential: Complete numerical treatment and comparison with the recent and forthcoming CMB datasets", 913565),
      inspirePaper("Primordial features due to a step in the inflaton potential", 855812),
    ],
  },
  {
    number: "II",
    title: "Primordial-spectrum reconstruction & computational inference",
    summary: "Free-form, image-based and algorithmic methods for reconstructing primordial physics while jointly inferring cosmological parameters.",
    papers: [
      inspirePaper("Reconstructing inflationary features on large scales using genetic algorithm", 3145520),
      inspirePaper("Deblurring the early Universe: reconstruction of primordial power spectrum from Planck CMB using image analysis techniques", 2601462),
      inspirePaper("Uncovering the history of cosmic inflation from anomalies in cosmic microwave background spectra", 1868415),
      inspirePaper("Primordial power spectrum from Planck", 1301205),
      inspirePaper("Primordial Spectrum and Cosmological Parameters", 1353263),
      inspirePaper("Reconstruction of broad features in the primordial spectrum and inflaton potential from Planck", 1258101),
      inspirePaper("Cosmological parameter estimation with free-form primordial power spectrum", 1224786),
      inspirePaper("Primordial power spectrum: a complete analysis with the WMAP nine-year data", 1224129),
    ],
  },
  {
    number: "III",
    title: "CMB, large-scale structure & cosmological tensions",
    summary: "Tests across CMB experiments, large-scale structure, Lyman-α observations and low-redshift probes, including dataset discordances.",
    papers: [
      inspirePaper("Primordial features in light of the Effective Field Theory of Large-Scale Structure", 2909442),
      inspirePaper("Exploring the discrepancy between Planck PR3 and ACT DR4", 2796738),
      inspirePaper("A search for super-imposed oscillations to the primordial power spectrum in Planck and SPT-3G 2018 data", 2772385),
      inspirePaper("On the consistency of ΛCDM with CMB measurements in light of the latest Planck, ACT and SPT data", 2637292),
      inspirePaper("Discordances in Cosmology and the Violation of Slow-Roll Inflationary Dynamics", 2039917),
      inspirePaper("One spectrum to cure them all: signature from early Universe solves major anomalies and tensions in cosmology", 2021642),
      inspirePaper("Parameter discordance in Planck CMB and low-redshift measurements: projection in the primordial power spectrum", 1699246),
      inspirePaper("Probing features in the primordial perturbation spectrum with large-scale structure data", 1633390),
      inspirePaper("Consistency of the Planck CMB data and ΛCDM cosmology", 1494035),
      inspirePaper("Primordial features and Planck polarization", 1456742),
      inspirePaper("Search for a direction in the forest of Lyman-α", 1375968),
      inspirePaper("Ruling out the power-law form of the scalar primordial spectrum", 1287884),
      inspirePaper("Confronting the concordance model of cosmology with Planck data", 1275931),
      inspirePaper("Test of consistency between Planck and WMAP", 1247650),
      inspirePaper("Probing primordial non-Gaussianity: The 3D Bispectrum of Ly-alpha forest and the redshifted 21-cm signal from the post reionization epoch", 1203275),
      inspirePaper("Changes in the halo formation rates due to features in the primordial spectrum", 1193743),
      inspirePaper("Primordial Non-Gaussianity in the Forest: 3D Bispectrum of Ly-alpha Flux Spectra Along Multiple Lines of Sight", 1114419),
    ],
  },
  {
    number: "IV",
    title: "Reionization & the high-redshift Universe",
    summary: "Reconstructing reionization with CMB, high-redshift galaxy, UV-luminosity and other astrophysical data.",
    papers: [
      inspirePaper("Model-independent reconstruction of UV luminosity function and reionization epoch", 2787585),
      inspirePaper("Evidence for asymmetric reionization histories from a joint analysis of the cosmic microwave background and astrophysical data", 2787221),
      inspirePaper("Dark twilight joined with the light of dawn to unveil the reionization history", 1890557),
      inspirePaper("Gaussian Process Reconstruction of Reionization History", 1867015),
      inspirePaper("Extended reionization in models beyond ΛCDM with Planck 2018 data", 1797734),
      inspirePaper("Joining Bits and Pieces of Reionization History", 1727849),
      inspirePaper("Reionization in the dark and the light from Cosmic Microwave Background", 1682568),
      inspirePaper("Witnessing the reionization history using Cosmic Microwave Background observation from Planck", 1616189),
    ],
  },
  {
    number: "V",
    title: "Dark energy & background cosmology",
    summary: "Phenomenological and observational tests of dynamical dark energy and the late-time expansion history.",
    papers: [
      inspirePaper("Non-Minimally Coupled Quintessence in Light of DESI", 3070495),
      inspirePaper("Metastable Dark Energy with Radioactive-like Decay", 1492287),
      inspirePaper("Post-Planck Dark Energy Constraints", 1261852),
    ],
  },
  {
    number: "VI",
    title: "Forecasts, surveys & reviews",
    summary: "Collaborative forecasts for CMB and galaxy surveys, broader assessments of inflation, and reviews of cosmological anomalies and fundamental physics.",
    papers: [
      inspirePaper("Investigating the origin of CMB large-scale features using LiteBIRD and CMB-S4", 2846119),
      inspirePaper("Euclid: The search for primordial features", 2704993),
      inspirePaper("Back to the features: assessing the discriminating power of future CMB missions on inflationary models", 2165253),
      inspirePaper("Report of the Topical Group on Cosmic Probes of Fundamental Physics for Snowmass 2021", 2155877),
      inspirePaper("Cosmology intertwined: A review of the particle physics, astrophysics, and cosmology associated with the cosmological tensions and anomalies", 2050441),
      inspirePaper("Inflation story: slow-roll and beyond", 1888785),
      inspirePaper("Inflation Wars: A New Hope", 1802583),
      inspirePaper("Constraints on features in the inflationary potential from future Euclid data", 1785458),
      inspirePaper("Probing features in inflaton potential and reionization history with future CMB space observations", 1628388),
      inspirePaper("Exploring cosmic origins with CORE: Inflation", 1506359),
      inspirePaper("Exploring cosmic origins with CORE: Cosmological parameters", 1501210),
    ],
  },
  {
    number: "VII",
    title: "Interdisciplinary modelling",
    summary: "Bayesian inference, numerical solvers and compartmental models adapted to epidemiological data.",
    papers: [
      externalPaper(
        "Modelling the first wave of COVID-19 in India",
        "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010632",
        "PLOS Computational Biology ↗",
      ),
      externalPaper(
        "Understanding the Bias between the Number of Confirmed Cases and Actual Number of Infections in the COVID-19 Pandemic",
        "https://www.medrxiv.org/content/10.1101/2020.06.22.20137208v1",
        "medRxiv ↗",
      ),
    ],
  },
];

export default function PublicationsPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Publication record</p>
        <h1>Publications.</h1>
        <p>
          Publications are organized by research theme, with direct links to the
          corresponding INSPIRE entries and interdisciplinary publications. INSPIRE maintains the authoritative complete record.
        </p>
        <div className="page-intro__actions">
          <a className="text-link" href="https://inspirehep.net/authors/1117380?ui-citation-summary=true">Authoritative record on INSPIRE ↗</a>
          <a className="quiet-link" href="https://arxiv.org/search/astro-ph?searchtype=author&query=Hazra%2C+D+K">arXiv author search ↗</a>
        </div>
      </header>

      <section className="paper-highlights shell" aria-labelledby="working-method">
        <div className="section-heading">
          <p className="kicker">Working method</p>
          <h2 id="working-method">Analysis, numerical theory and comparison</h2>
        </div>
        <div className="paper-highlight-grid">
          <a className="paper-highlight" href="https://arxiv.org/abs/2406.06296" target="_blank" rel="noreferrer">
            <span className="paper-highlight__year">Observational analysis · 2024</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/cosmological-inference.png")} alt="ACT and Planck reconstruction above a reconstructed primordial spectrum matched by an inflationary model" /></div>
            <h3>Analysis of observational data</h3>
            <p>ACT–Planck reconstruction together with the reconstructed spectrum and its inflationary realization from One Spectrum to Cure Them All.</p>
          </a>
          <a className="paper-highlight" href="https://arxiv.org/abs/1201.0926" target="_blank" rel="noreferrer">
            <span className="paper-highlight__year">Numerical theory · 2013</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/research/bingo-g1-g7.png")} alt="BINGO numerical contributions G1 through G7 to the inflationary bispectrum" /></div>
            <h3>Developing codes to solve theories</h3>
            <p>BINGO’s numerical evaluation of the G₁–G₇ bispectrum contributions across three inflationary models.</p>
          </a>
          <a className="paper-highlight" href="https://arxiv.org/abs/2103.03025" target="_blank" rel="noreferrer">
            <span className="paper-highlight__year">Model–data comparison · 2021</span>
            <div className="paper-highlight__image"><img src={sitePath("/figures/research/multifield-planck-comparison.png")} alt="Multi-field model likelihood scatter and residual temperature and polarization spectra compared with Planck data" /></div>
            <h3>Comparison of theory with the data</h3>
            <p>A multi-field primordial feature model compared directly with Planck temperature and polarization measurements.</p>
          </a>
        </div>
      </section>

      <section className="bibliography shell">
        <div className="section-heading section-heading--rule">
          <p className="kicker">Research themes</p>
          <h2>Publications by research theme</h2>
        </div>
        {categories.map((category) => (
          <article className="bibliography-section" key={category.number}>
            <div className="bibliography-section__intro">
              <span className="chapter-number">{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
            </div>
            <ol className="paper-list">
              {category.papers.map((paper) => (
                <li key={paper.href}>
                  <h4><a href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a></h4>
                  <cite><a href={paper.href} target="_blank" rel="noreferrer">{paper.source}</a></cite>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>
    </main>
  );
}
