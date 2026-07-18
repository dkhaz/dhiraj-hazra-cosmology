import type { Metadata } from "next";
import { sitePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Conferences",
  description: "Cosmology meetings organized at the Institute of Mathematical Sciences, Chennai.",
};

const committee = ["Susmita Adhikari — IISER Pune", "Pravabati Chingangbam — IIA Bengaluru", "Dhiraj Kumar Hazra, Convener — IMSc Chennai", "Ranjan Laha — IISc Bengaluru", "Aseem Paranjape — IUCAA Pune", "Tirthankar Roy Choudhury — NCRA–TIFR Pune", "Tarun Souradeep — RRI Bengaluru", "L. Sriramkumar — IUCAA Pune"];

const akrSpeakers = ["Narayan Banerjee — IISER Kolkata", "Sumanta Chakraborty — IACS Kolkata", "Sudipta Das — Visva-Bharati", "Ghanashyam Date — IMSc & CMI", "Pankaj Joshi — Ahmedabad University", "Sayan Kar — IIT Kharagpur", "Parthasarathi Majumdar — IACS", "Palash Baran Pal — University of Calcutta", "Sreerup Raychaudhuri — TIFR", "Soumitra SenGupta — IACS", "L. Sriramkumar — IIT Madras", "Amitabh Virmani — CMI", "Spenta Wadia — ICTS"];

const cosmicConnectionsSpeakers = [
  "Jasjeet Singh Bagla — IISER Mohali", "Arunima Banerjee — IISER Tirupati", "Arka Banerjee — IISER Pune", "Dibya Chakraborty — IIT Madras", "Anirban Chakraborty — NCRA Pune", "Samir Choudhuri — IIT Madras", "Debika Chowdhury — IIA Bengaluru", "Subinoy Das — IIA Bengaluru", "Suratna Das — Ashoka University", "Anirban Das — SINP Kolkata", "Kanan Kumar Datta — Jadavpur University", "Bihag Dave — Ahmedabad University", "Saee Dhawalikar — IUCAA Pune", "Koushik Dutta — IISER Kolkata", "Kazuyuki Furuuchi — MCNS/MAHE Manipal", "Prakash Gaikwad — IIT Indore", "Raghuveer Garani — IIT Madras", "Raghunath Ghara — IISER Kolkata", "Tuhin Ghosh — NISER Bhubaneswar", "Diptimoy Ghosh — IISER Pune", "Gaurav Goswami — Ahmedabad University", "Rajeev Kumar Jain — IISc Bengaluru", "Rashi Jain — NCRA Pune", "Nishikanta Khandai — NISER Bhubaneswar", "Rishi Khatri — TIFR Mumbai", "Girish Kulkarni — TIFR Mumbai", "Samuel Sánchez López — IMSc Chennai", "Anshuman Maharana — HRI Prayagraj", "Debaprasad Maity — IIT Guwahati", "Suvashis Maity — IISER Pune", "Suman Majumdar — IIT Indore", "Subha Majumdar — TIFR Mumbai", "Suvodip Mukherjee — TIFR Mumbai", "Suvedha Suresh Naik — IIA Bengaluru", "Supratik Pal — ISI Kolkata", "Vikram Rentala — IIT Bombay", "P. Jishnu Sai — IISc Bengaluru", "Tapomoy Guha Sarkar — BITS Pilani", "Anjan Ananda Sen — CTP/JMI New Delhi", "Saurabh Singh — RRI Bengaluru", "R. Srianand — IUCAA Pune", "Yashi Tiwari — IISc Bengaluru", "Yogesh Wadadekar — NCRA–TIFR Pune",
];

export default function ConferencesPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Meetings at IMSc</p>
        <h1>Conversations<br />across cosmic time.</h1>
        <p>National meetings and scientific programmes convened in Chennai.</p>
      </header>

      <article className="event-feature shell">
        <header className="event-feature__header">
          <div><p className="kicker">Upcoming · second edition</p><h2>Cosmic Connections 2026</h2><p className="event-subtitle">AI/ML across cosmic scales</p></div>
          <dl><div><dt>Dates</dt><dd>7–11 September 2026</dd></div><div><dt>Venue</dt><dd>IMSc, Chennai</dd></div><div><dt>Format</dt><dd>In person</dd></div></dl>
        </header>
        <div className="event-feature__body">
          <div className="event-copy">
            <p>The second national Cosmic Connections meeting brings researchers in cosmology from across India together around the growing role of artificial intelligence and machine learning, while retaining a broad view of the early, intermediate and late Universe.</p>
            <h3>Programme structure</h3>
            <p><strong>Conference · 7–9 September.</strong> Inflation, primordial perturbations, CMB and gravitational waves; dark ages, cosmic dawn, reionization and JWST; dark energy, large-scale structure, surveys, Lyman-α, 21 cm cosmology and tensions.</p>
            <p><strong>Workshop · 10–11 September.</strong> Hands-on sessions in simulation-based inference, neural and convolutional networks, Bayesian tools, survey science and theoretical modelling.</p>
            <p>The meeting is intended for PhD students, postdoctoral researchers and faculty. Registration closes 25 July 2026.</p>
            <div className="event-actions"><a className="text-link" href="https://sites.google.com/imsc.res.in/cosmic-connections-2">Meeting website ↗</a><a className="quiet-link" href="https://forms.gle/ZUwugtauUbVzSVep8">Registration ↗</a></div>
          </div>
          <aside><p className="kicker">Organizing committee</p><ul>{committee.map((name) => <li key={name}>{name}</li>)}</ul></aside>
        </div>
        <a className="event-poster" href={sitePath("/conferences/cosmic-connections-2026-poster.jpg")} target="_blank" rel="noreferrer">
          <img src={sitePath("/conferences/cosmic-connections-2026-poster.jpg")} alt="Poster for Cosmic Connections 2026: AI/ML Across Cosmic Scales" />
        </a>
      </article>

      <section className="event-archive shell">
        <div className="section-heading section-heading--rule"><p className="kicker">Meeting archive</p><h2>Earlier programmes</h2></div>
        <article className="archived-event">
          <div className="archived-event__meta"><span>2025</span><p>28 July–1 August<br />Ramanujan Auditorium<br />IMSc, Chennai</p></div>
          <div className="archived-event__copy"><p className="kicker">First edition</p><h3>Cosmic Connections: Bridging the Early and Late Universe</h3><p>This national meeting connected inflation, the CMB and primordial gravitational waves with cosmic dawn, reionization, JWST, dark energy, galaxy surveys, 21 cm cosmology and current tensions. Its goals were to deepen collaboration, strengthen the Indian cosmology community and India’s role in global missions. Participation was in person with no registration fee; selection closed 15 May 2025.</p><p><strong>Public session:</strong> “India’s Cosmic Odyssey: From Earth to the Edge of the Universe,” 31 July 2025—covering LIGO-India, SKAO and the ECHO / CMB-BHARAT proposal, with the meeting streamed by IMSc.</p><div className="event-gallery"><a className="event-gallery__photo" href={sitePath("/conferences/cosmic-connections-2025-group.jpg")} target="_blank" rel="noreferrer"><img src={sitePath("/conferences/cosmic-connections-2025-group.jpg")} alt="Participants at Cosmic Connections 2025 at IMSc" /></a><a className="event-gallery__poster" href={sitePath("/conferences/cosmic-connections-2025-poster.jpg")} target="_blank" rel="noreferrer"><img src={sitePath("/conferences/cosmic-connections-2025-poster.jpg")} alt="Poster for Cosmic Connections 2025" /></a></div><details className="archive-details"><summary>Invited speakers</summary><ul>{cosmicConnectionsSpeakers.map((name) => <li key={name}>{name}</li>)}</ul></details><div className="event-actions"><a className="text-link" href="https://sites.google.com/imsc.res.in/cosmic-connections">Meeting website ↗</a></div></div>
        </article>
        <article className="archived-event">
          <div className="archived-event__meta"><span>2023</span><p>5–7 October<br />IMSc, Chennai</p></div>
          <div className="archived-event__copy"><p className="kicker">Centenary programme</p><h3>Remembering Amal Kumar Raychaudhuri</h3><p>A three-day mini-conference marking the birth centenary of Professor A. K. Raychaudhuri: his equation, his contributions to gravitation and cosmology, and memories of the scientist, teacher and visionary. Technical sessions on 5–6 October were followed by a student-outreach day on 7 October.</p><div className="event-gallery"><a className="event-gallery__photo" href={sitePath("/conferences/akr-2023-group.jpg")} target="_blank" rel="noreferrer"><img src={sitePath("/conferences/akr-2023-group.jpg")} alt="Participants at the 2023 Amal Kumar Raychaudhuri centenary programme" /></a><a className="event-gallery__poster" href={sitePath("/conferences/akr-2023-poster.jpg")} target="_blank" rel="noreferrer"><img src={sitePath("/conferences/akr-2023-poster.jpg")} alt="Poster for the 2023 Amal Kumar Raychaudhuri centenary programme" /></a></div><details className="archive-details"><summary>Distinguished speakers</summary><ul>{akrSpeakers.map((name) => <li key={name}>{name}</li>)}</ul></details><p>The programme fostered scientific exchange, paid tribute to a foundational figure in theoretical physics and introduced a new generation to his work.</p><div className="event-actions"><a className="text-link" href="https://sites.google.com/imsc.res.in/imsc-akr-centenary-program/home">Meeting website ↗</a></div></div>
        </article>
      </section>
    </main>
  );
}
