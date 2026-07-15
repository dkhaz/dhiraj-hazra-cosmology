import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BINGO",
  description: "BINGO: an open Fortran 90 code for scalar bispectra and primordial non-Gaussianity.",
};

const references = [
  "J. Maldacena, Non-Gaussian features of primordial fluctuations in single-field inflation, JHEP 0305, 013 (2003).",
  "X. Chen, R. Easther & E. A. Lim, Large non-Gaussianities in single-field inflation, JCAP 0706, 023 (2007).",
  "X. Chen, R. Easther & E. A. Lim, Generation and characterization of large non-Gaussianities, JCAP 0804, 010 (2008).",
  "J. Martin & L. Sriramkumar, The scalar bispectrum in the Starobinsky model: equilateral case, JCAP 1201, 008 (2012).",
  "D. K. Hazra, J. Martin & L. Sriramkumar, Scalar bispectrum during preheating, Phys. Rev. D 86, 063523 (2012).",
  "D. K. Hazra, L. Sriramkumar & J. Martin, BINGO: efficient computation of the scalar bispectrum, JCAP 1305, 026 (2013).",
  "V. Sreenath, D. K. Hazra & L. Sriramkumar, The scalar consistency relation away from slow roll, arXiv:1410.0252.",
];

const faqs = [
  ["Does the code involve assumptions or approximations?", "BINGO numerically evaluates the scalar power spectrum and bispectrum without a slow-roll approximation for canonical single-field models. It can even follow punctuated inflation, where the first slow-roll parameter briefly exceeds unity before inflation resumes."],
  ["How do I add my own inflationary model?", "Create a folder under models; copy fnlparams.ini, parameters.f90, potential.f90 and theory_param.f90 from an existing model; replace V(φ), dV/dφ and d²V/dφ² and set the parameters and initial conditions; then point the Makefile’s model variable at the new folder, compile and run."],
  ["What if my model has more than four parameters?", "Define the extra parameter in theory_param.f90, assign it in fnlparams.ini, and map it in driver.f90—for example PARAM_5 from param5—before compiling."],
  ["Do I need GNUPLOT?", "No. All numerical results are written to the plots directory and may be drawn with any plotting software. The make figs command uses GNUPLOT; two included Python scripts produce 2D density and 3D contour plots."],
  ["Can I calculate individual bispectrum contributions?", "Yes. The Term setting in fnlparams.ini selects contributions 1, 2, 3, 47, 5 or 6. Set Term = 0 for the total fNL."],
  ["Can I evaluate a larger wavenumber range?", "Yes, with care. The supplied configuration covers roughly five decades. Features at k larger than kmax demand tighter accuracy and integration intervals that fully include every departure from slow roll."],
];

export default function BingoPage() {
  return (
    <main id="main">
      <header className="code-hero shell">
        <div><p className="kicker">Open scientific software · Fortran 90</p><h1>BINGO</h1><p className="code-hero__longname">BI-spectra and<br />Non-Gaussianity Operator</p></div>
        <div className="code-hero__summary"><p>Numerically evaluate the primordial scalar bispectrum and fNL in canonical single-field inflation—away from slow roll and for arbitrary triangular configurations.</p><dl><div><dt>Current release</dt><dd>2.0 · October 2014</dd></div><div><dt>Parallelism</dt><dd>MPI / mpif90</dd></div><div><dt>License mode</dt><dd>Open source</dd></div></dl><a className="text-link" href="https://github.com/dkhaz/bingo">Source on GitHub ↗</a></div>
      </header>

      <section className="code-scope shell">
        <p className="kicker">Scope</p>
        <div><p className="code-scope__lead">BINGO computes all contributions to the scalar bispectrum and fNL for any triangle of wavenumbers.</p><p>The code follows the Maldacena formalism and numerical procedures developed for departures from slow roll. Given an inflationary potential, it evolves the background on the attractor for roughly 60–70 e-folds. Perturbation modes begin well inside the Hubble radius with Bunch–Davies initial conditions and evolve until their super-Hubble amplitudes freeze.</p><p>Bispectrum integrals begin when the largest relevant mode is well inside the Hubble radius and end when the smallest is sufficiently outside. Since those perturbations are already evolved, BINGO also returns the scalar power spectrum.</p></div>
      </section>

      <section className="code-facts shell" id="download">
        <div className="section-heading section-heading--rule"><p className="kicker">Download &amp; use</p><h2>Run notes</h2></div>
        <div className="fact-grid">
          <article><span>01</span><h3>Requirements</h3><p>Fortran 90 with ifort or gfortran. GNUPLOT is the default figure renderer but is optional.</p></article>
          <article><span>02</span><h3>Sampling</h3><p>Set kmin, kmax and the number of power-spectrum and bispectrum points in fnlparams.ini. Values are evaluated directly; the release does not interpolate.</p></article>
          <article><span>03</span><h3>Performance</h3><p>Runtime depends on the k-grid, selected bispectrum terms, model features, machine and requested accuracy.</p></article>
          <article><span>04</span><h3>Citation</h3><p>If you use BINGO, please cite references 6 and 7 in the list below.</p></article>
        </div>
      </section>

      <section className="sample-section shell" id="samples">
        <div className="section-heading section-heading--rule"><p className="kicker">Sample case</p><h2>Quadratic potential with a step</h2></div>
        <div className="sample-body"><p>For model parameters that best fit the WMAP seven-year data, the supplied outputs trace the scalar field, slow-roll parameter and Hubble rate before returning the primordial spectrum and bispectrum.</p><ol><li><code>phi.eps</code> — evolution of φ</li><li><code>epsilon.eps</code> — slow-roll parameter ε</li><li><code>hubble.eps</code> — Hubble parameter H</li><li><code>powerspectra.eps</code> — primordial power spectrum</li><li><code>fnl-qp-stp.eps</code> — fNL</li><li>Python — 2D density and 3D contour plots</li></ol></div>
      </section>

      <section className="faq-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Working questions</p><h2>Frequently asked</h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="version-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Release history</p><h2>Versions</h2></div>
        <div className="version-grid"><article><span>2.0 / Oct 2014</span><h3>Arbitrary triangles</h3><ul><li>General triangular configurations and squeezed-limit consistency checks</li><li>2D density and 3D contour scripts</li><li>MPI execution across nodes</li><li>Term = 0 for total fNL</li></ul></article><article><span>1.0 / Feb 2013</span><h3>First public release</h3><ul><li>Equilateral scalar bispectrum</li><li>Scalar power spectrum</li></ul></article></div>
      </section>

      <section className="reference-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Formalism &amp; code paper</p><h2>References</h2></div>
        <ol>{references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
        <details className="archive-details"><summary>Third-party numerical routines</summary><p>BINGO uses Netlib integration routines d1mach.f, dqagse.f, dqelg.f, dqk21.f and dqpsrt.f; Antony Lewis’s inifile.f90; and Netlib’s rksuite.f90 ODE routines. These were not written by the BINGO authors.</p></details>
      </section>
    </main>
  );
}
