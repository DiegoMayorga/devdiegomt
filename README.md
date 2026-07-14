# devdiegomt — Personal Portfolio

Source code for my portfolio: [devdiegomt.vercel.app](https://devdiegomt.vercel.app)

Built with **React 19**, **TypeScript**, **Vite** and **SCSS Modules**, following **Atomic Design** (atoms → molecules → organisms → pages) with unit and component tests in **Vitest + React Testing Library**.

## Tech stack

- **React 19 + TypeScript** — UI and static typing
- **Vite** — build tool and dev server (SWC plugin)
- **React Router DOM 7** — client-side routing
- **SCSS Modules** — scoped styling
- **Framer Motion** — animations
- **Formspree** — contact form backend
- **Vitest + React Testing Library** — test suite
- **Vercel** — hosting and analytics

## Project structure

```
src/
├── assets/          # Images, icons, CV
├── components/      # Atomic Design
│   ├── atoms/       # Input
│   ├── molecules/   # NavItem, Social, Quotes, Experience, Education, Certifications
│   └── organisms/   # MainNavigation, Profile, ProjectCard
├── config/          # Data separated from UI (projects, profile, navigation, socials)
├── hooks/           # useDailyQuote
├── pages/           # Home, Projects, CV, Contact, Error
├── App.tsx          # Router configuration
└── main.tsx         # Entry point
```

## Routes

| Route       | Description       |
| ----------- | ----------------- |
| `/`         | Home / profile    |
| `/projects` | Featured projects |
| `/cv`       | Downloadable CV   |
| `/contact`  | Contact form      |

## Getting started

```bash
git clone https://github.com/DiegoMayorga/devdiegomt.git
cd devdiegomt
npm install
npm run dev
```

Other scripts:

```bash
npm test         # run the test suite (Vitest)
npm run lint     # ESLint
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Environment variables

| Variable    | Purpose                    |
| ----------- | -------------------------- |
| `VITE_FORM` | Formspree form ID (contact page) |

Create a `.env` file at the project root (see `.gitignore` — it is never committed).

## Contact

Found a bug or have a suggestion? Reach me at [devdiegomt@gmail.com](mailto:devdiegomt@gmail.com)
