import { sitePath } from "../lib/paths";

const themes = [
  {
    number: "01",
    title: "The early Universe",
    text: "Inflation, primordial features and non-Gaussianity.",
    href: "/research#early-universe",
  },
  {
    number: "02",
    title: "Cosmological inference",
    text: "Reconstructing theory from CMB and large-scale-structure data.",
    href: "/research#inference",
  },
  {
    number: "03",
    title: "Cosmic dawn",
    text: "Reionization histories, source populations and neutral hydrogen.",
    href: "/research#reionization",
  },
  {
    number: "04",
    title: "Structure formation",
    text: "From primordial spectra to galaxies, halos and cosmic surveys.",
    href: "/research#structure",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell">
        <div className="hero__copy">
          <p className="kicker">Observation · theory · computation</p>
          <h1>Reading the<br />Universe<br />from its traces.</h1>
          <p className="hero__lede">
            I study the origin and evolution of cosmological perturbations—from the
            first moments of inflation to the large-scale structure we observe today.
          </p>
          <div className="hero__actions">
            <a className="text-link" href={sitePath("/research")}>Explore research →</a>
            <a className="quiet-link" href={sitePath("/publications")}>Selected papers</a>
          </div>
          <dl className="hero__coordinates">
            <div><dt>Position</dt><dd>Faculty in Physics</dd></div>
            <div><dt>Institute</dt><dd>IMSc, Chennai</dd></div>
            <div><dt>Associate</dt><dd>INAF–OAS Bologna</dd></div>
          </dl>
        </div>

        <figure className="hero-figure figure-plate">
          <div className="figure-plate__meta">
            <span>PLANCK PR3 · ACT DR4</span>
            <span>ΔP(k) reconstruction</span>
          </div>
          <div className="hero-figure__image">
            <img
              src={sitePath("/figures/cosmological-inference-home.png")}
              alt="Reconstructed primordial power spectrum from Planck and ACT data"
            />
          </div>
          <figcaption>
            Reconstructed primordial power spectrum from Planck PR3 and ACT DR4.
            The data do not merely test a theory; they leave clues for building one.
            <a href="https://arxiv.org/abs/2406.06296"> View paper ↗</a>
          </figcaption>
        </figure>
      </section>

      <section className="research-index" aria-labelledby="research-index-heading">
        <div className="shell">
          <div className="section-rule">
            <p className="kicker">Research index</p>
            <h2 id="research-index-heading">Four scales, one history</h2>
          </div>
          <div className="index-grid">
            {themes.map((theme) => (
              <a className="index-entry" href={sitePath(theme.href)} key={theme.number}>
                <span className="index-entry__number">{theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
                <span className="index-entry__arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="method-band shell">
        <p className="kicker">Working method</p>
        <p className="method-statement">
          Analysis of observational data — developing codes to solve theories —
          comparison of theory with the data: these three summarize what I do.
        </p>
        <a className="text-link" href={sitePath("/codes")}>Browse codes, models and algorithms →</a>
      </section>
    </main>
  );
}
