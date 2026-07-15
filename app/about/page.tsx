import type { Metadata } from "next";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, academic history, grants, collaborations and contact information for Dhiraj Kumar Hazra.",
};

const history = [
  ["2020—present", "Faculty in Physics", "The Institute of Mathematical Sciences, Chennai, India"],
  ["2019—2020", "Marie Skłodowska-Curie Astrofit Fellow", "INAF–Osservatorio di Astrofisica e Scienza dello Spazio, Bologna, Italy"],
  ["2017—2019", "INFN Fellow", "Istituto Nazionale di Fisica Nucleare, Bologna · mentor: Fabio Finelli"],
  ["2015—2017", "PCCP Fellow", "Laboratoire APC, Université Paris Diderot · mentor: George F. Smoot"],
  ["2013—2015", "Postdoctoral Fellow", "Asia Pacific Center for Theoretical Physics, Pohang · mentor: Arman Shafieloo"],
  ["2006—2012", "Integrated MSc–PhD in Physics", "Harish-Chandra Research Institute / HBNI · supervisor: L. Sriramkumar"],
  ["2003—2006", "BSc in Physics", "Jadavpur University, Kolkata"],
  ["1993—2003", "School, grades III–XII", "Eastern Railway Boys’ Higher Secondary School, Asansol"],
];

const grants = [
  ["2026—2031", "ANRF MATRICS grant", "Principal Investigator", "EPOCH: Exploring Primordial Origins in Cosmic Hierarchies"],
  ["2022—2024", "IFCPAR / CEFIPRA", "Joint collaborator · PI L. Sriramkumar", "Testing flavors of the early Universe beyond vanilla models with cosmological observations"],
  ["2022—2024", "Indo–Italy Bilateral Grant", "Principal Investigator", "RELIC: Reconstructing Early and Late events In Cosmology"],
  ["2022—2023", "Fulbright–Nehru Academic and Professional Excellence Fellowship", "Principal Investigator", "Nine-month research stay at Harvard University, Cambridge, Massachusetts"],
  ["2022", "N. R. Sen Young Researcher Award", "Award", "Indian Association for General Relativity and Gravitation"],
];

export default function AboutPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact page-intro--portrait shell">
        <p className="kicker">Dhiraj Kumar Hazra</p>
        <h1>Academic<br />profile.</h1>
        <p>
          Faculty member in Physics at IMSc, Chennai, and associate of INAF–OAS Bologna.
          I work on the origin and evolution of cosmological perturbations.
        </p>
        <figure className="about-portrait">
          <div className="about-portrait__image">
            <img
              src={sitePath("/portrait/dhiraj-hazra.jpg")}
              alt="Dhiraj Kumar Hazra"
            />
          </div>
          <figcaption>Dhiraj Kumar Hazra · IMSc, Chennai</figcaption>
        </figure>
      </header>

      <section className="about-statement shell">
        <p className="kicker">In a nutshell</p>
        <div>
          <p className="about-statement__lead">
            Observational data, numerical solutions of theory, and the comparison
            between the two are the three coordinates of my work.
          </p>
          <p>My interests include inflation, CMB and large-scale-structure data analysis, numerical simulations and theory of structure formation, departures from ΛCDM, reionization, dark energy and cosmological degeneracies. I also develop statistical techniques that reconstruct theory from observations without first fixing a model.</p>
        </div>
      </section>

      <section className="history-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Trajectory</p><h2>Academic history</h2></div>
        <div className="history-ledger">
          {history.map(([year, role, place]) => <article key={`${year}-${role}`}><time>{year}</time><h3>{role}</h3><p>{place}</p></article>)}
        </div>
      </section>

      <section className="survey-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Collective observations</p><h2>Survey collaborations</h2></div>
        <div className="survey-grid">
          <article><span>01</span><h3>CMB Bharat</h3><p>I am a member of the CMB Bharat consortium and led the Cosmological Parameters working group for its first ISRO Announcement of Opportunity proposal, submitted 16 April 2018. The proposal describes a next-generation space mission for high-sensitivity CMB-polarization and spectral-distortion measurements.</p></article>
          <article><span>02</span><h3>Euclid Consortium</h3><p>I am a member of the Euclid Consortium’s Theoretical Working Group. Euclid, an ESA mission, maps the geometry of the Universe through the shapes and spectra of galaxies and clusters.</p></article>
        </div>
      </section>

      <section className="grant-section shell" id="grants">
        <div className="section-heading section-heading--rule"><p className="kicker">Support &amp; recognition</p><h2>Grants and awards</h2></div>
        <div className="grant-ledger">
          {grants.map(([year, name, role, proposal]) => <article key={name}><time>{year}</time><div><h3>{name}</h3><p>{role}</p></div><p>{proposal}</p></article>)}
        </div>
      </section>

      <section className="thesis-section shell" id="thesis">
        <p className="kicker">Doctoral archive</p>
        <div><h2>Primordial features<br />and non-Gaussianities</h2><p>Doctor of Philosophy, Homi Bhabha National Institute, 2012. Integrated MSc–PhD at Harish-Chandra Research Institute; supervised by Professor L. Sriramkumar.</p><a className="text-link" href="https://drive.google.com/open?id=1jJ3VwN17gn8ZJ8RY3b2B7MlUwiUnKIOe">Read the thesis ↗</a></div>
      </section>

      <section className="contact-section shell" id="contact">
        <div><p className="kicker">Contact coordinates</p><h2>IMSc · Chennai</h2></div>
        <address>
          <p><span>Post</span>The Institute of Mathematical Sciences<br />IV Cross Road, CIT Campus, Taramani<br />Chennai, India</p>
          <p><span>Phone</span>+91-44-2254-3310</p>
          <p><span>Email</span>dhiraj [at] imsc [dot] res [dot] in<br />dhirajhazra [at] gmail [dot] com</p>
        </address>
      </section>
    </main>
  );
}
