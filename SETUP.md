# Portfolio — Setup & Deploy Guide

Two things were built for you:

1. **`portfolio/`** — your personal website (this folder).
2. **`github-profile/README.md`** — your GitHub profile page.

---

## 1. Add your resume

Drop your resume file into this `portfolio/` folder and name it exactly:

```
resume.pdf
```

Every "Resume" / "Download Resume" button already points to it. Done.

---

## 2. Preview the site locally

From inside the `portfolio/` folder:

```bash
python -m http.server 5500
```

Then open <http://localhost:5500> in your browser.

---

## 3. Deploy the website to GitHub Pages (free)

This gives you a public link like `https://darshandharu.github.io`.

```bash
# from inside the portfolio/ folder
git init
git add .
git commit -m "Initial portfolio site"

# create a repo on github.com named EXACTLY:  darshandharu.github.io
git branch -M main
git remote add origin https://github.com/darshandharu/darshandharu.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source = `main` branch / root → Save**.
Wait ~1 minute, and your site is live at **https://darshandharu.github.io**.

> Tip: if you'd rather use a repo with a different name (e.g. `portfolio`),
> Pages will publish it at `https://darshandharu.github.io/portfolio/` instead.

---

## 4. Publish your GitHub profile README

GitHub shows a special README on your profile if you create a repo named after
your username.

1. On github.com, create a **new public repo named exactly `darshandharu`**.
2. Check "Add a README file".
3. Replace its contents with everything from `github-profile/README.md`.
4. Commit. Visit <https://github.com/darshandharu> — it now shows your profile.

---

## 5. Things to update later

- **LinkedIn URL** — set to `https://www.linkedin.com/in/darshanbs-data-engineer/`
  in `index.html` and `github-profile/README.md`.
- **Add new projects** — copy an `<article class="project">` block in `index.html`,
  drop a screenshot in `assets/`, and update the text/links.
- **Custom domain** — GitHub Pages → Settings → Pages → Custom domain, if you buy one.
