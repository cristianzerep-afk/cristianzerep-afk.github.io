# Developer Portfolio

A lightweight, responsive portfolio built with HTML, CSS, and vanilla JavaScript. It is designed for static hosting and currently remains compatible with GitHub Pages.

## Run locally

Open `index.html` in a browser, or start a local static server from this folder:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Customize

- Edit `assets/js/portfolio-data.js` for the editable profile and project facts. Keep unconfirmed information blank until verified.
- Update the public page content in `index.html` when those facts change.
- Add an actual resume under `assets/` before adding a download link.
- Only add project screenshots, source links, or demos when they are authorized and genuinely available. The POS internship project is company-owned.

## Deploy

This static site can be deployed from the repository root with GitHub Pages: repository **Settings → Pages → Deploy from a branch → main → /(root)**. The repository is already connected to GitHub. After pushing changes to `main`, Pages publishes the update.

For Vercel, import the repository and use the **Other** framework preset with no build command; set the output directory to `.`. No environment variables or backend are required. Deployment itself must be completed in the hosting dashboard.

## Project structure

```text
index.html
assets/
  css/style.css
  js/main.js
  js/portfolio-data.js
  favicon.svg
```

## Accuracy notes

Personal email, LinkedIn, resume, internship dates, project repositories and demos are not published because the brief did not supply or authorize them. VaccSync technologies shown on the page are described as explored; verify the implementation stack before presenting them as confirmed project technologies. The internship project is presented as collaborative and company-owned.
