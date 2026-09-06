# Ukwishaka — Portfolio

A personal developer portfolio built with React + Vite.

## Edit your content

All the text on the site lives in one place: `src/content.js`.
Open it and edit your name, project descriptions, links, and skills directly —
you don't need to touch any component files for content changes.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Deploy it (free, via Vercel)

1. Push this project to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, select your repo, and click **Deploy**.
   Vercel auto-detects Vite — no config needed.
4. Your site goes live at a `your-project.vercel.app` URL. You can add a
   custom domain later from the Vercel dashboard if you want one.

Every time you push to the repo's main branch afterward, Vercel redeploys
automatically.

## Project structure

```
src/
  content.js          <- all editable text/links/data
  App.jsx             <- page layout
  index.css           <- all styling
  components/
    Sidebar.jsx        <- name, nav, status
    Hero.jsx           <- intro headline
    Featured.jsx        <- flagship project (EMS) case study
    Projects.jsx        <- secondary projects
    Skills.jsx
    Contact.jsx
```
