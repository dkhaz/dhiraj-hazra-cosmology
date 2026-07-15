import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group & collaborators",
  description: "Current and former group members, visitors and scientific collaborators.",
};

const current = [
  ["Ajoy Dawn", "PhD student", "Gravitational lensing and clustering"],
  ["Anik Ghosh", "PhD student", "Cosmic reionization"],
  ["Sanhitaa Guha", "PhD student", "Large-scale structure"],
  ["Debabrata Chandra", "Postdoctoral fellow", "Inflationary cosmology"],
];

const formerPostdocs = [
  ["Samuel Sánchez López", "Postdoctoral fellow, 2024–2025", "Inflation and dark-energy problems; now at IAP, Paris."],
  ["Debabrata Adak", "Postdoctoral fellow", "Ionization histories; now at Instituto de Astrofísica de Canarias, Tenerife."],
];

const formerDoctoralStudents = [
  ["Akhil Antony", "Integrated PhD, defended July 2023", "Thesis: “A Primordial Solution to the Tensions in Cosmology”; subsequently a postdoctoral fellow at APCTP, Pohang."],
];

const formerMastersStudents = [
  ["Aditi Krishak", "Master’s researcher", "Gaussian-process reconstruction of reionization; now at the University of Southern California."],
  ["Shweta Jain", "Master’s researcher, NIT Trichy", "Inflationary potentials and damped oscillations; subsequently at the University of Kentucky."],
  ["Kushal Lodha", "BS–MS researcher, IIT Kharagpur", "The Hubble tension; now at KASI, Daejeon."],
  ["Sharvari Naik", "Master’s researcher, St. Xavier’s College", "Inflationary models."],
  ["Shashank Gandhi", "Master’s researcher, IIT Madras", "Models of reionization."],
];

const formerGroups = [
  ["Postdoctoral fellows", formerPostdocs],
  ["Doctoral students", formerDoctoralStudents],
  ["Master’s students", formerMastersStudents],
] as const;

const visitors = [
  ["2020", "COVID-19 happened."],
  ["2021", "COVID-19 prevailed."],
  ["2022", "Matteo Braglia (IFT Madrid); Fabio Finelli (INAF–OAS Bologna); Sourav Mitra (Surendranath College)."],
  ["2023", "Tarun Souradeep (RRI); Matteo Braglia (NYU); Vincent Vennin (LPENS Paris); Satyanarayan Mukhopadhyay (IACS); Spyros Sypsas (Chulalongkorn University)."],
  ["2024", "Fabio Finelli (INAF–OAS Bologna); Matteo Braglia (NYU); Supratik Pal (ISI Kolkata); Satadru Bag (TUM)."],
  ["2025", "Tirthankar Roy Choudhury (NCRA–TIFR); Sushan Konar (Ashoka University)."],
];

const collaborators = [
  "Arman Shafieloo",
  "George F. Smoot",
  "Fabio Finelli",
  "Alexei A. Starobinsky",
  "Lakshmanan Sriramkumar",
  "Daniela Paoletti",
  "Matteo Braglia",
  "Tarun Souradeep",
  "Xingang Chen",
  "Akhil Antony",
  "Jérôme Martin",
  "Tapomoy Guha Sarkar",
  "Moumita Aich",
  "Ivan Debono",
  "Rodrigo Calderon",
  "Aditi Krishak",
  "Wuhyun Sohn",
  "Jinn-Ouk Gong",
  "Supratik Pal",
  "Subhabrata Majumdar",
  "Rajeev Kumar Jain",
  "Stephen A. Appleby",
  "Spyros Sypsas",
  "Sourav Mitra",
  "Vijayakumar Sreenath",
  "Mario Ballardini",
  "Benjamin L'Huillier",
  "Alexandros Karam",
  "Lucas Pinol",
  "Samuel Sánchez López",
  "Ryan E. Keeley",
  "Debabrata Adak",
  "Théo Simon",
  "Catherine Petretti",
  "Alipriyo Hoory",
  "Anjan Ananda Sen",
  "Varun Sahni",
  "Sudhakar Panda",
  "Sonia Paban",
];

export default function GroupPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">People &amp; exchange</p>
        <h1>The group<br />at IMSc.</h1>
        <p>
          Researchers working across inflation, reionization, gravitational lensing
          and the formation of large-scale structure.
        </p>
      </header>

      <section className="people-section shell">
        <div className="section-heading section-heading--rule group-section-heading"><h2>Present members</h2></div>
        <div className="people-grid">
          {current.map(([name, role, topic], index) => (
            <article className="person-entry" key={name}>
              <span className="person-entry__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{name}</h3><p className="person-entry__role">{role}</p><p>{topic}</p>
            </article>
          ))}
        </div>
        <aside className="availability-note">
          <span>Project notice</span>
          <p>I am presently not offering short-term projects or supervising master’s theses.</p>
        </aside>
      </section>

      <section className="former-section shell">
        <div className="section-heading section-heading--rule group-section-heading"><h2>Previous members</h2></div>
        <div className="former-groups">
          {formerGroups.map(([heading, members]) => (
            <section className="former-group" key={heading}>
              <h3>{heading}</h3>
              {members.map(([name, role, note]) => (
                <article key={name}>
                  <h4>{name}</h4><p className="former-group__role">{role}</p><p>{note}</p>
                  {name === "Akhil Antony" && <a href="https://www.imsc.res.in/xmlui/handle/123456789/620">HBNI thesis ↗</a>}
                </article>
              ))}
            </section>
          ))}
        </div>
      </section>

      <section className="visitor-section shell">
        <div className="section-heading section-heading--rule group-section-heading"><h2>Visitors</h2></div>
        <div className="visitor-timeline">
          {visitors.map(([year, names]) => <article key={year}><time>{year}</time><p>{names}</p></article>)}
        </div>
      </section>

      <section className="collaborator-section shell" id="collaborators">
        <div className="section-heading section-heading--rule group-section-heading"><h2>Collaborators</h2></div>
        <div className="collaborator-grid">
          {collaborators.map((name) => (
            <article key={name}><h3>{name}</h3></article>
          ))}
        </div>
      </section>
    </main>
  );
}
