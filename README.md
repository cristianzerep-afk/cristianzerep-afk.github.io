# Cristian Perez portfolio

A static, responsive portfolio built with HTML, CSS, and JavaScript. It needs no
dependencies, database, or build step.

## Files

```text
portfolio-starter/
├── index.html
├── README.md
└── assets/
    ├── favicon.svg
    ├── css/style.css
    └── js/main.js
```

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```powershell
python -m http.server 8000
```

Visit `http://localhost:8000/`. Press `Ctrl+C` to stop the server. Refresh the
browser after editing a file.

## Personalize before publishing

- **Identity:** Confirm the name, introduction, location, career interests, and
  availability in `index.html`.
- **Education:** Add your verified school, degree or program, and dates in the
  Resume section.
- **Skills:** Keep only tools you can demonstrate and discuss. The current
  technical list is limited to skills shown by this website. Review the remote
  work focus list against your actual experience and interests.
- **Projects:** Confirm VaccSync and ThreadLab's technologies, features, your
  role, and learning outcomes. Add screenshots, direct repository URLs, and
  demos only when you have verified them. Confirm AI Video Studio's status and
  details as it develops. POS & Inventory is mentioned as an additional project.
- **Certificates:** Add only certificates you actually hold. None are claimed
  in the current page.
- **Resume PDF:** Place your real PDF in `assets/resume/`, then add a download
  link with the `download` attribute in the Hero and Resume sections. There is
  currently no PDF or active download button.
- **Contact:** The email, GitHub, and LinkedIn links use the details you
  supplied. Update them if they change.
- **Social preview:** Add an Open Graph image and `og:image` metadata if you
  create a real preview image.

The comments in `index.html` mark spots for project screenshots and links.

## Publish with GitHub Pages

1. Put this folder's files in a GitHub repository. Keep `index.html` at the
   repository root with the `assets/` folder beside it.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your publishing branch and **/(root)**, then save.
5. Use the **Visit site** link in Pages settings after the deployment finishes.

These are the current [GitHub Pages publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
GitHub Pages serves this static site without PHP or a server-side runtime.

No files have been published by this project setup.
