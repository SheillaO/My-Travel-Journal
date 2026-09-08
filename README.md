# My Travel Journal 🌍

**A data-driven React application built on a simple premise: Africa has some of the most extraordinary places on earth, and most travel content about it is written by people who flew in for a week.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge)](https://mytraveljournalbyolga.netlify.app)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?style=for-the-badge)](https://vite.dev)

---

## 📸 Preview

<!-- Add a 740px-wide screenshot after your next deploy -->
<img width="740" alt="Travel Journal homepage" src="./screenshots/preview.png">

---

## The Concept

National Geographic built one of the most recognisable visual identities in publishing on a single constraint: the best photography in the world, framed by the most restrained design possible. Black masthead. One yellow rectangle. White space. The image does the work.

This project borrows that principle and applies it to a corner of the world NatGeo has historically underrepresented: Sub-Saharan Africa and the East African coast. Karura Forest. Stone Town. Lagos Island. Victoria Falls. Places with genuine stories, described by someone who lives on the continent rather than visits it.

The yellow accent in the design is intentional. The editorial tone of the entry copy is intentional. The decision to lead with Africa and end at Victoria Falls rather than the other way around is intentional.

---

## What This Project Demonstrates

### The Core React Concept: Data-Driven Rendering

The central learning in this project is the difference between writing out six identical component instances by hand and letting an array do it:

```jsx
// Without data-driven thinking — six hardcoded components:
<Entry title="Karura Forest" country="Kenya 🇰🇪" ... />
<Entry title="Table Mountain" country="South Africa 🇿🇦" ... />
<Entry title="Lagos Island" country="Nigeria 🇳🇬" ... />
// ...and so on

// With data-driven React — one line handles all of them:
const entryElements = data.map(entry => (
  <Entry key={entry.id} {...entry} />
))
```

Add a seventh destination to `data.js`. A seventh card appears. Delete one. It disappears. The UI is a direct function of the data — not a manually maintained list of markup.

### Props and the Spread Operator

The `{...entry}` spread passes every key in the data object as a separate prop to the `Entry` component:

```jsx
// This:
<Entry key={entry.id} {...entry} />

// Is equivalent to this:
<Entry
  key={entry.id}
  id={entry.id}
  img={entry.img}
  title={entry.title}
  country={entry.country}
  googleMapsLink={entry.googleMapsLink}
  dates={entry.dates}
  text={entry.text}
/>
```

The Entry component receives them and renders each one. The contract between the data shape and the component interface is explicit and traceable.

### Component Composition

```
App
├── Header          — site identity, sticky navigation
└── Entry × 6      — one card per data entry, all identical in structure
```

Each component has a single responsibility. Header knows nothing about entries. Entry knows nothing about how many other entries exist. App knows the data and composes the two.

---

## What Broke and Why

Three bugs in this project were informative enough to document:

**JavaScript's Automatic Semicolon Insertion (ASI)**

```jsx
// Broken — JS inserts a semicolon after return:
return
<header>...</header>

// Fixed — parentheses prevent the insertion:
return (
  <header>...</header>
)
```

This is one of the most common silent failures in React. The component renders nothing, there is no error in the console, and the cause is a blank line. Learning to read "component renders nothing" as a signal to check the return statement is a real debugging skill.

**Structural nesting in JSX**

Wrapping a div around only the marker image while leaving the text content outside it meant the CSS could not find the elements it was targeting. The fix was structural, not stylistic — moving all child elements inside the container they belonged to.

**Vite public folder paths**

Assets in the `public/` folder must be referenced with a leading slash (`/images/marker.png`, not `images/marker.png`). Without it, Vite resolves the path relative to the current component's location rather than the project root.

---

## Data Structure

```javascript
{
  id: 1,
  img: {
    src: "...",
    alt: "descriptive alt text"
  },
  title: "Karura Forest",
  country: "Kenya 🇰🇪",
  googleMapsLink: "https://...",
  dates: "14 Mar, 2023 - 16 Mar, 2023",
  text: "..."
}
```

The nested `img` object (`img.src`, `img.alt`) is a deliberate choice from the Scrimba curriculum — it demonstrates that props can carry objects, not just primitive values, and that those objects are accessed with dot notation in JSX (`props.img.src`).

---

## Design

The NatGeo editorial aesthetic applied to African travel writing:

- **Masthead:** Black with a vertical yellow rectangle — the single most recognisable element of NatGeo's visual identity
- **Accent:** `#FFCC00` used on dates, hover states, and the card top border — nowhere else
- **Image:** 180px wide on the card, full height, subtle zoom on hover — photography leads, text follows
- **Typography:** Inter, tight tracking on labels, normal weight on body copy — the text serves the image
- **Layout:** Horizontal card on desktop (image left, text right), stacked on mobile

---

## Tech Stack

- **React 18** — component model, JSX, props
- **Vite** — build tool, development server
- **JavaScript ES Modules** — `import`/`export`, array `.map()`
- **CSS3** — flexbox layout, `object-fit: cover`, `-webkit-line-clamp`
- **Google Fonts** — Inter
- **Netlify** — static deployment, continuous deployment from GitHub

---

## Run Locally

```bash
git clone https://github.com/SheillaO/travel-journal.git
cd travel-journal
npm install
npm run dev
# → http://localhost:5173
```

---

## Key Learnings

| Concept | Where It Appears |
|---|---|
| `.map()` over data arrays | `App.jsx` — entryElements |
| Spread operator for props | `<Entry key={entry.id} {...entry} />` |
| Nested object props | `props.img.src`, `props.img.alt` |
| JSX return parentheses | `Header.jsx` — ASI gotcha |
| Vite public folder paths | `/images/marker.png` |
| Component single responsibility | Header vs Entry separation |
| `key` prop in lists | Required by React for reconciliation |

---

## Roadmap

| Feature | Technical Requirement |
|---|---|
| **Expand / collapse entries** | `useState` to toggle a boolean per card |
| **Filter by country** | `useState` + `.filter()` on the data array |
| **Add new entry form** | Controlled inputs + `useState` for form data |
| **Real photography** | Replace picsum seeds with Unsplash CDN URLs per destination |
| **Interactive map** | React Leaflet library, coordinates added to data objects |

---

## About

**Sheilla O.**
Technical Product Marketing Manager | Nairobi, Kenya 🇰🇪

Building technical credibility through shipped projects. This is the third React component built from scratch, the first with data-driven rendering, and the one that came with the most useful bugs.

💼 [LinkedIn](https://www.linkedin.com/in/sheillaolga/) · 🐙 [GitHub](https://github.com/SheillaO) · 🌍 [Live Demo](https://mytraveljournalbyolga.netlify.app)

---

*Six places. One continent at the centre. Built in React.*