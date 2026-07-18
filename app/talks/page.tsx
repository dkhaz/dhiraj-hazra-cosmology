import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks & seminars",
  description: "Selected conference talks, seminar tours and lectures by Dhiraj Kumar Hazra.",
};

const earlyTalks = [
  ["Primordial features with a step and the tensor contribution", "Cosmology Rapid Response Meeting, TIFR, Mumbai, 6–8 Apr 2010; 8th Meeting on Field Theoretic Aspects of Gravity, HNBGU Srinagar, 19–23 Apr 2010; Primordial Features and Non-Gaussianities, HRI Allahabad, 14–18 Dec 2010; poster, ICTP Summer School in Cosmology, 19–30 Jul 2010."],
  ["Oscillations in the inflaton potential", "26th IAGRG Meeting, HRI Allahabad, 19–21 Jan 2011; Indo–UK Scientific Seminar, IUCAA Pune, 10–12 Aug 2011; COSMO 11, Porto, 22–26 Aug 2011."],
  ["On the discriminating power of fNL", "UK Particle Cosmology Network, Portsmouth, 13–14 Sep 2011; International Conference on Gravitation and Cosmology, Goa, 14–19 Dec 2011."],
  ["Scalar bi-spectrum during inflation and preheating", "Asia Pacific School / Workshop on Gravitation and Cosmology, Jeju Island, 19–22 Feb 2013."],
  ["Reconstructing the primordial power spectrum", "Theories and Practices in Large Scale Structure Formation, APCTP Seoul, 15–16 Apr 2013."],
  ["Cosmological parameter estimation with free-form PPS", "Reconstructing the Universe, IEU Seoul, 3–5 Jun 2013; 1st APCTP–NBIA Workshop, Pohang, 21–25 Oct 2013."],
  ["Reconstruction from WMAP and Planck", "New Perspectives on Cosmology, APCTP, 25–29 Nov 2013; Cosmology and Fundamental Physics IV, APCTP, 5–15 Dec 2013."],
  ["Whipped Inflation, Planck and BICEP2", "1st APCTP–TUS Workshop on Dark Energy, APCTP, Pohang, 2–5 Jun 2014."],
  ["Primordial power spectrum from Planck", "Cosmological Quests for the Next Decade, KASI, Daejeon, 16–18 Apr 2014; 2nd NBIA–APCTP Workshop on Cosmology and Astroparticle Physics, NBIA, Copenhagen, 18–22 Aug 2014; Cosmology after Planck, MIAPP, Garching, 25 Aug–6 Sep 2014."],
  ["Joining bits and pieces of reionization history", "Concordances and Challenges in Cosmology after Planck, Sexten, 18–22 Feb 2019; Workshop on 21-cm Cosmology in the Square Kilometre Array Era, TIH–ISI Kolkata, 1 Nov 2022."],
  ["One spectrum to cure them all", "40th meeting of the Astronomical Society of India, IIT Roorkee / online, 25–29 Mar 2022; Cosmological Tensions and its Implication to Concordance Cosmology, IFPU Trieste, 12–23 Jun 2023."],
  ["How to search for beyond standard model signals in the data?", "32nd Meeting of the Indian Association for General Relativity and Gravitation (IAGRG32), IISER Kolkata, 21 Dec 2022."],
  ["CMB Data: A Discussion on Physics and Systematics", "4th BRICS–AGAC symposium, SGT University, Haryana, 17–19 Dec 2024."],
  ["Primordial Features and CMB Anomalies", "Tensions and Anomalies on the Sky, Centre for Theoretical Physics, Jamia Millia Islamia, New Delhi, 6–8 Mar 2025."],
  ["ECHO from CMB Bharat", "Rethinking Cosmology, Raman Research Institute, Bengaluru, 10 Dec 2025."],
];

const seminarTours = [
  ["Sep 2011", "Local and non-local primordial features", "ICTP Trieste; Royal Observatory Edinburgh; DAMTP Cambridge; APC and IAP Paris; CERN Cosmo Coffee and University of Geneva."],
  ["2013", "Reconstructing the primordial power spectrum", "Bielefeld; Göttingen; Leiden; IAP and APC Paris — 9–18 July 2013."],
  ["2014", "Primordial power spectrum from Planck", "University College London; Imperial College London; Kavli Institute for Cosmology Cambridge; CERN Cosmo Coffee — 30 July–13 August 2014."],
  ["2014", "Assumptions, observations and parameter estimations", "IUCAA Pune and TIFR Mumbai — 16–17 October 2014."],
  ["2016", "Testing the standard model of cosmology and beyond", "Berkeley Center for Cosmological Physics and Princeton University — 6 and 18 April 2016."],
  ["2017", "Primordial Universe: the standard model and beyond", "ICAP seminar, Institut d’Astrophysique de Paris — 20 April 2017."],
  ["2017", "Fingerprints of cosmic evolution in the photons of the Universe", "Imperial College London — 12 June 2017."],
  ["2018", "Decoding cosmic fingerprints", "Institute of Mathematical Sciences, Chennai — 1 June 2018."],
  ["2018", "The standard model of cosmology and beyond", "Institute of Mathematical Sciences, Chennai — 4 June 2018."],
  ["2018", "The standard model and beyond: constraints and forecasts", "Institute of Theoretical Astrophysics, University of Oslo — 20 September 2018."],
  ["2019", "Reconstructing the primordial Universe", "Tufts University — 12 September 2019."],
  ["2019", "Reconstructing cosmological events at early and late times", "Harvard–Smithsonian CfA and Brown University — 20 and 30 September 2019."],
  ["31 Aug 2020", "On the possibility of primordial features", "Physics of the Early Universe online programme, ICTS."],
  ["12–15 Oct 2020", "Codes, Computations and Constraints in Cosmology", "FACETS 2020 mathematics lecture series, IMSc."],
  ["11 Nov 2020", "Primordial black holes and small-scale gravitational waves in two-field models of inflation", "Online seminar accompanying the PBH–SbGW–2FM slide archive."],
];

const recentTalks = [
  {
    date: "23 Aug–4 Sep 2021",
    title: "Data analysis in cosmology and astroparticle physics",
    venue: "Six lectures, including hands-on sessions, at the school-cum-workshop hosted by the Technology Innovation Hub, ISI Kolkata.",
    href: "https://www.isical.ac.in/sites/default/files/TIH.pdf",
    linkLabel: "School programme ↗",
  },
  {
    date: "28 Aug; 8 & 15 Dec 2021",
    title: "Primordial features: how relevant are they?",
    venue: "A three-stop sequence at IIT Madras, IIT Hyderabad and Ramakrishna Mission Vivekananda Educational and Research Institute, Belur Math.",
  },
  {
    date: "16–28 May 2022",
    title: "Cosmological perturbations",
    venue: "Lectures at the First IAGRG School on Gravitation and Cosmology.",
    href: "https://sites.google.com/iitgn.ac.in/iagrgschool2022",
    linkLabel: "School page ↗",
  },
  {
    date: "1 May–9 Jun 2023",
    title: "One spectrum to cure them all",
    venue: "Seminars at École normale supérieure, Institut d’Astrophysique de Paris, Astroparticule et Cosmologie, and the University of Bologna.",
  },
  {
    date: "23–27 May 2023",
    title: "Cosmology and programming for cosmology",
    venue: "Lectures and tutorials at the Science Academies’ Refresher Course on General Relativity and Cosmology, St. Dominic’s College, Kanjirapally, Kerala.",
  },
  {
    date: "21 May 2024",
    title: "Reionization: Joining Bits and Pieces from Different Times",
    venue: "Seminar at the Osservatorio di Astrofisica e Scienza dello Spazio (INAF–OAS), Bologna, Italy.",
  },
  {
    date: "29 May 2024",
    title: "Tensions in Cosmology: New Physics vs. Systematics",
    venue: "Cosmo-coffee seminar at CERN, Geneva.",
  },
  {
    date: "23 Aug 2024",
    title: "A brief history of our Universe — as observed from multiple windows",
    venue: "Public lecture for National Space Day at the Centre for Astronomy and Planetary Sciences, Patrician College, Chennai.",
  },
];

const slideArchive = [
  {
    title: "Thesis defence",
    subject: "Primordial features and non-Gaussianities",
    format: "PDF · 90 pages",
    href: "https://drive.google.com/file/d/1jsVAt2D4sbQyWEpzID5us8zjzAdbQ5yP/preview",
  },
  {
    title: "DKHazra — Sesto 2019",
    subject: "Joining the bits and pieces of reionization history",
    format: "PDF · 24 pages",
    href: "https://drive.google.com/file/d/1g9xE2JthQdnMEwqx_LAMAaylxxWyIPAp/preview",
  },
  {
    title: "Harvard seminar 2019",
    subject: "Reconstructing cosmological events at early and late times",
    format: "PDF · 55 pages",
    href: "https://drive.google.com/file/d/15SmFsMVzLWEZDLzn3Q7WxZLKkA7Ozv2Y/preview",
  },
  {
    title: "PEU — Hazra",
    subject: "On the possibility of primordial features",
    format: "Google Slides · 25 slides",
    href: "https://docs.google.com/presentation/d/14wlHM8GtvQdm28eIgrDf2LvO3SPAaXWol4_-vrlSo7M/present",
  },
  {
    title: "PBH–SbGW–2FM",
    subject: "Primordial black holes and small-scale gravitational waves in two-field inflation",
    format: "Google Slides · 27 slides",
    href: "https://docs.google.com/presentation/d/156FAEOSVSo6Szna7-qLqRw0DhUGSZi4CJm8S37l7BCM/present",
  },
  {
    title: "Codes, Computations and Constraints",
    subject: "A popular lecture on cosmology",
    format: "Google Slides · 49 slides",
    href: "https://docs.google.com/presentation/d/1EuT1BHAnM-NQ6G1ZAueZkWjeAP1fD-SV2lCPTMhRVdc/present",
  },
  {
    title: "The INDSCI-SIM model",
    subject: "A short talk on COVID-19 modelling in India",
    format: "Google Slides · 36 slides",
    href: "https://docs.google.com/presentation/d/1tlvF7hlt0QQH0gxgq7S1An6pbTbcLI4H0wjYEDNC8_M/present",
  },
];

export default function TalksPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Blackboards &amp; auditoria</p>
        <h1>Talks across<br />the map.</h1>
        <p>A selected, evolving archive of seminars, conference presentations and public lectures.</p>
      </header>

      <section className="talk-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Schools, workshops &amp; conferences</p><h2>Selected presentations</h2></div>
        <div className="talk-list">
          {earlyTalks.map(([title, venues], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{venues}</p></article>
          ))}
        </div>
      </section>

      <section className="seminar-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Seminar chronology</p><h2>Seminars &amp; lectures, 2011–2025</h2></div>
        <div className="seminar-timeline">
          {seminarTours.map(([year, title, venues]) => (
            <article key={`${year}-${title}`}><time>{year}</time><div><h3>{title}</h3><p>{venues}</p></div></article>
          ))}
          {recentTalks.map((talk) => (
            <article key={`${talk.date}-${talk.title}`}>
              <time>{talk.date}</time>
              <div><h3>{talk.title}</h3><p>{talk.venue}</p>{talk.href && <a className="text-link" href={talk.href} rel="noreferrer" target="_blank">{talk.linkLabel}</a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="slide-section shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Legacy files</p><h2>Slide archive</h2></div>
        <div className="slide-grid">
          {slideArchive.map((slide) => (
            <article key={slide.title}>
              <a href={slide.href} rel="noreferrer" target="_blank">
                <span>{slide.format} · OPEN ↗</span>
                <h3>{slide.title}</h3>
                <p>{slide.subject}</p>
              </a>
            </article>
          ))}
        </div>
        <div className="epidemiology-note">
          <p className="kicker">Talks on epidemiology</p>
          <h3>Looking back, looking forward: the science of the COVID-19 pandemic</h3>
          <p>IMSc mini-symposium, Chennai, 28 June 2021; plus a short talk on the INDSCI-SIM model for COVID-19 in India.</p>
          <div className="epidemiology-note__links">
            <a className="text-link" href="https://docs.google.com/presentation/d/1tlvF7hlt0QQH0gxgq7S1An6pbTbcLI4H0wjYEDNC8_M/present" rel="noreferrer" target="_blank">Open epidemiology slides →</a>
            <a className="text-link" href="https://www.youtube.com/watch?v=f2qWweTUFjo" rel="noreferrer" target="_blank">Watch the IMSc mini-symposium →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
