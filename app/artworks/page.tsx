import type { Metadata } from "next";
import { sitePath } from "../../lib/paths";

export const metadata: Metadata = {
  title: "Artworks",
  description: "Oil paintings, charcoal studies and the Between Walls and Water series by Dhiraj Kumar Hazra.",
};

const works = [
  { number: "01", title: "Study after Vincent van Gogh: The Starry Night", medium: "2024 · Oil on canvas · 30 × 36 in", text: "A master study exploring bold brushwork, swirling skies and the expressive rhythm of colour and movement across the landscape.", credit: "Study after Vincent van Gogh.", image: "/artworks/starry-night-study.jpg", alt: "Oil study after Vincent van Gogh's The Starry Night" },
  { number: "02", title: "Study after Leonardo da Vinci: La Belle Ferronnière", medium: "2024 · Oil on canvas · 18 × 24 in", text: "A study of the portrait’s calm expression, soft transitions of light and shadow, and the rich textures of clothing and jewellery.", credit: "Study after Leonardo da Vinci.", image: "/artworks/la-belle-ferronniere-study.jpg", alt: "Oil portrait study after Leonardo da Vinci's La Belle Ferronnière" },
  { number: "03", title: "Aahana Watches the Paragliders", medium: "2024 · Oil on canvas · 24 × 30 in", text: "Aahana watches paragliders with wide-eyed amazement—a memory of wonder, sky and childhood curiosity, recreated as a Christmas gift.", credit: "From an original photograph by Monalisa.", image: "/artworks/aahana-paragliders.jpg", alt: "Oil painting of Aahana watching paragliders" },
  { number: "04", title: "Satyajit Ray", medium: "Charcoal, pencil and pen on paper", text: "A sketch tribute to the filmmaker, rendered with strong contrasts and a cinematic mood that emphasizes form, light and quiet intensity.", credit: "Original charcoal study.", image: "/artworks/satyajit-ray-study.jpg", alt: "Charcoal, pencil and pen portrait study of Satyajit Ray" },
];

const series = [
  { title: "Out-of-Focus Dreams", text: "Reflections drift, soften and double back. Some forms almost arrive; others fade mid-thought—an afterimage of a dream that will not hold its shape.", image: "/artworks/out-of-focus-dreams.jpg", alt: "Abstract oil painting Out-of-Focus Dreams" },
  { title: "Efforts Behind the Wall", text: "A compressed space of planes and partitions, like a city seen from within. Shapes press forward and meet resistance; persistence becomes the rhythm of the surface.", image: "/artworks/efforts-behind-the-wall.jpg", alt: "Abstract oil painting Efforts Behind the Wall" },
  { title: "Submerged City", text: "A city seems to sink below the surface, quieter but not extinguished. Yellow lights remain as signals of life behind the weight of water and shadow.", image: "/artworks/submerged-city.jpg", alt: "Abstract oil painting Submerged City" },
];

export default function ArtworksPage() {
  return (
    <main id="main">
      <header className="page-intro page-intro--compact shell">
        <p className="kicker">Away from equations</p><h1>Oil, charcoal<br />&amp; afterimages.</h1>
        <p>Family portraits, landscapes, master studies and a small abstract series.</p>
      </header>
      <section className="art-ledger shell">
        {works.map((work) => (
          <article key={work.number}>
            <span className="chapter-number">{work.number}</span>
            <figure className="artwork-image"><img src={sitePath(work.image)} alt={work.alt} /></figure>
            <div><h2>{work.title}</h2><p className="art-medium">{work.medium}</p></div>
            <div><p>{work.text}</p><cite>{work.credit}</cite></div>
          </article>
        ))}
      </section>
      <section className="art-series shell" id="between-walls-and-water">
        <header><p className="kicker">Series · 2025</p><h2>Between Walls<br />and Water</h2><p>Oil on artist’s oil paper · palette knife only · A4</p></header>
        <div className="art-series__statement"><p>Between Walls and Water moves through constriction, endurance and drift. Layered structures, submerged city-light and softened reflections appear and dissolve as if the mind were mapping escape routes through a changing urban world. Yellow light recurs as a signal: hope persisting when the way out is blocked, flooded or blurred.</p></div>
        <div className="art-series__works">
          {series.map((work, index) => (
            <article key={work.title}>
              <figure className="art-series__image"><img src={sitePath(work.image)} alt={work.alt} /></figure>
              <span>0{index + 1}</span><h3>{work.title}</h3><p>{work.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
