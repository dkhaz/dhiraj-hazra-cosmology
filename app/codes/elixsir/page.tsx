import type { Metadata } from "next";
import { sitePath } from "../../../lib/paths";

export const metadata: Metadata = {
  title: "ELiXSIR",
  description: "ELiXSIR, an extended zone-linked nine-compartment epidemic model used in the published INDSCI-SIM study of the first COVID-19 wave in India.",
};

const pipeline = [
  ["01", "Initialize", "Set population, age groups, group fractions, compartment transitions and runtime constants."],
  ["02", "Schedule", "Use policy dates to switch contact matrices between lockdown and unlock regimes; model migration with a gravity or generic structure."],
  ["03", "Infer", "Supply priors, starting points, proposal widths and daily infection/death data; run CosmoChord samples through ELiXSIR over MPI."],
  ["04", "Compare", "Generate infections and deaths, evolve reporting bias, compare scaled infections and predicted deaths with reported series."],
  ["05", "Reconstruct", "Use GetDist for posterior distributions, then pass posterior samples back through ELiXSIR to obtain time-series bounds."],
];

const figureRoot = "https://gitlab.com/dhirajhazra/eSIR_INDIA/-/blob/master/Equations-and-Diagrams";

const sourceFigures = [
  {
    title: "Nine-compartment anatomy",
    src: "/figures/elixsir/compartment-diagram.png",
    alt: "ELiXSIR nine-compartment epidemic model and transition rates",
    text: "Disease states and transition rates used by the coupled differential-equation system.",
    href: `${figureRoot}/ELiXSIR_Diagram.png`,
    wide: true,
  },
  {
    title: "Migration coupling",
    src: "/figures/elixsir/migration-matrix.png",
    alt: "Migration gravity matrix connecting districts in Tamil Nadu",
    text: "A gravity-model coupling matrix linking regional populations through migration.",
    href: `${figureRoot}/Migration.png`,
  },
  {
    title: "Contacts · lockdown",
    src: "/figures/elixsir/contact-lockdown.png",
    alt: "Age-stratified Chennai contact matrix during lockdown",
    text: "The age-structured contact matrix applied during a lockdown phase.",
    href: `${figureRoot}/Contact-Lockdown.png`,
  },
  {
    title: "Contacts · unlock",
    src: "/figures/elixsir/contact-unlock.png",
    alt: "Age-stratified Chennai contact matrix during an unlocked phase",
    text: "The corresponding contact structure after policy restrictions are relaxed.",
    href: `${figureRoot}/Contact-Unlock.png`,
  },
];

export default function ElixsirPage() {
  return (
    <main id="main">
      <header className="code-hero code-hero--orange shell">
        <div><p className="kicker">Interdisciplinary model · INDSCI-SIM</p><h1>ELiXSIR</h1><p className="code-hero__longname">Extended, zone-Linked<br />nine-compartment SIR</p></div>
        <div className="code-hero__summary"><p>A COVID-19 simulation with nine disease compartments, age-stratified contacts, policy transitions, migration and Bayesian parameter estimation—used from district to national scales.</p><dl><div><dt>Domain</dt><dd>Epidemiology</dd></div><div><dt>Sampler</dt><dd>CosmoChord / MPI</dd></div><div><dt>Collaboration</dt><dd>INDSCI-SIM</dd></div></dl><a className="text-link" href="https://gitlab.com/dhirajhazra/eSIR_INDIA">Source on GitLab ↗</a></div>
      </header>

      <section className="code-scope shell">
        <p className="kicker">Model anatomy</p>
        <div><p>ELiXSIR solves an extended SEIR system with nine compartments, age-dependent contact patterns and migration between zones. The framework allows different intervention scenarios to be studied. Migration may be coupled through a gravity prescription or a more generic connection structure.</p><p>The code was developed within the INDSCI-SIM collaboration, which provided scientific inputs during the Indian COVID-19 response, and integrates directly with samplers for parameter estimation. Its published application covered Karnataka districts and state, five major cities, and India as a whole—not Delhi alone.</p><a className="text-link" href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010632" rel="noreferrer" target="_blank">Read the PLOS Computational Biology paper ↗</a></div>
      </section>

      <section className="elixsir-figure-section shell" id="source-figures">
        <div className="section-heading section-heading--rule">
          <p className="kicker">Figures from the source</p>
          <h2>Structure, movement and contact</h2>
        </div>
        <div className="elixsir-figure-grid">
          {sourceFigures.map((figure, index) => (
            <a
              className={figure.wide ? "elixsir-figure elixsir-figure--wide" : "elixsir-figure"}
              href={figure.href}
              key={figure.title}
              rel="noreferrer"
              target="_blank"
            >
              <figure>
                <div className="elixsir-figure__meta"><span>MODEL FIGURE / {String(index + 1).padStart(2, "0")}</span><span>GitLab source ↗</span></div>
                <div className="elixsir-figure__image"><img src={sitePath(figure.src)} alt={figure.alt} /></div>
                <figcaption><strong>{figure.title}</strong><span>{figure.text}</span></figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>

      <section className="pipeline-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Analysis pipeline</p><h2>From priors to time-series bounds</h2></div>
        <div className="pipeline-list">{pipeline.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="application-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Published application</p><h2>From districts to India</h2></div>
        <div className="application-grid">
          <div><span>01</span><h3>Karnataka districts</h3><p>Serosurvey-calibrated estimates of infection and death undercounting.</p></div>
          <div><span>02</span><h3>Karnataka state</h3><p>Joint fits to infections and deaths with uncertainty bands.</p></div>
          <div><span>03</span><h3>Five cities</h3><p>Bengaluru, Chennai, Delhi, Mumbai and Pune, each with distinct epidemic structure.</p></div>
          <div><span>04</span><h3>India aggregate</h3><p>A nationwide first-wave reconstruction with inferred infections and reporting bias.</p></div>
          <div><span>05</span><h3>Latent quantities</h3><p>Inferred total infections, infection fatality ratio and the evolving reproduction number R(t).</p></div>
        </div>
        <a
          className="application-figure"
          href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010632"
          rel="noreferrer"
          target="_blank"
        >
          <figure>
            <div className="application-figure__image">
              <img src={sitePath("/figures/research/elixsir-india.png")} alt="Published ELiXSIR analysis of Karnataka COVID-19 cases, deaths and inferred epidemic quantities" />
            </div>
            <figcaption>
              <span>Published result · PLOS Computational Biology · CC BY</span>
              <h3>One model, several observational layers</h3>
              <p>Reported cases and deaths are fitted jointly; posterior samples then recover inferred total infections, reporting bias, the infection fatality ratio and R(t).</p>
              <strong>Read the paper and figure source ↗</strong>
            </figcaption>
          </figure>
        </a>
      </section>
    </main>
  );
}
