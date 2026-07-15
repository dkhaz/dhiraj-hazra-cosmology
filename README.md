# Dhiraj Kumar Hazra — Cosmology

This repository contains the academic website of Dhiraj Kumar Hazra, Faculty in
Physics at the Institute of Mathematical Sciences, Chennai.

The website is a redesigned continuation of the earlier
[CodeCosmo Google Site](https://sites.google.com/site/codecosmo). Information
from the earlier site has been carried forward and reorganized into sections on
research, publications, codes, the research group, seminars, conferences,
artwork, grants and archival material.

## Changing text

The text displayed on each page is stored in the corresponding file below.

| Website section | File to edit |
| --- | --- |
| Home page | [`app/page.tsx`](app/page.tsx) |
| Research | [`app/research/page.tsx`](app/research/page.tsx) |
| Publications | [`app/publications/page.tsx`](app/publications/page.tsx) |
| Codes | [`app/codes/page.tsx`](app/codes/page.tsx) |
| BINGO | [`app/codes/bingo/page.tsx`](app/codes/bingo/page.tsx) |
| ELiXSIR | [`app/codes/elixsir/page.tsx`](app/codes/elixsir/page.tsx) |
| Group, collaborators and visitors | [`app/group/page.tsx`](app/group/page.tsx) |
| Seminars and talks | [`app/talks/page.tsx`](app/talks/page.tsx) |
| Conferences | [`app/conferences/page.tsx`](app/conferences/page.tsx) |
| Artwork | [`app/artworks/page.tsx`](app/artworks/page.tsx) |
| About, grants, thesis and contact | [`app/about/page.tsx`](app/about/page.tsx) |
| Archive, useful links and school | [`app/archive/page.tsx`](app/archive/page.tsx) |
| Header, navigation and footer | [`app/layout.tsx`](app/layout.tsx) |

For a small change directly on GitHub:

1. Open the appropriate file from the table.
2. Click the pencil icon labelled **Edit this file**.
3. Find the sentence and change only its wording, leaving the surrounding code
   and quotation marks in place.
4. Click **Commit changes** and commit to the `main` branch.

The GitHub Pages workflow will rebuild the website after a commit to `main`.
For larger changes, or whenever the code around the text is unclear, the update
can be made through ChatGPT instead.

## Changing images

Research figures are stored in [`public/figures`](public/figures), the portrait
is in [`public/portrait`](public/portrait), and paintings are in
[`public/artworks`](public/artworks). Replacing an image while keeping exactly
the same filename updates it without requiring a change to the page text.

## Publishing with GitHub Pages

When the repository is ready for publication, open **Settings → Pages**, choose
**GitHub Actions** as the source, and run the **Deploy static site to Pages**
workflow. The project-site address will be:

`https://dkhaz.github.io/dhiraj-hazra-cosmology/`
