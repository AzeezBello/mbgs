# MBGS Website

Official static website codebase for **Most Beauty Girl in Surulere (MBGS)**.

Live site: https://azeezbello.github.io/mbgs/

## Overview

This repository contains a multi-page, static HTML website with:

- Shared responsive layout across all pages.
- Single global stylesheet for structure and visual consistency.
- Lightweight JavaScript for content toggling and contact form submission.
- No build step required for local development.

## Technology Stack

- `HTML5`
- `CSS3` (custom, responsive-first)
- `Vanilla JavaScript` (no framework dependency)

## Pages

- `index.html`: Home page
- `About.html`: About MBGS and mission
- `Gallery.html`: Gallery placeholder/content page
- `News.html`: News and announcements page
- `Sponsorship.html`: Sponsorship information page
- `ContactUs.html`: Contact form page
- `FAQs.html`: Frequently asked questions

## Project Structure

```text
mbgs/
|-- index.html
|-- About.html
|-- Gallery.html
|-- News.html
|-- Sponsorship.html
|-- ContactUs.html
|-- FAQs.html
|-- Styles/
|   `-- style.css
|-- img/
|-- ajax.js
|-- hide.js
|-- .gitignore
`-- README.md
```

Legacy folders such as `css/`, `js/`, `less/`, `sass/`, `font-awesome/`, and `Templates/` are retained in the repository, but the current page templates rely primarily on `Styles/style.css`, `hide.js`, and `ajax.js`.

## Local Development

No installation is required to view or edit pages.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run a local HTTP server (recommended)

From project root:

```bash
python3 -m http.server 8080
```

Then open:

`http://localhost:8080`

## Responsive Design Notes

Responsive behavior is defined in `Styles/style.css`:

- Fluid container width with max layout cap.
- Flexible navigation that wraps on smaller screens.
- Multi-column desktop layout (`sidebar + content + aside`) that stacks on smaller viewports.
- Responsive form grid on the contact page.
- Scalable images with `max-width: 100%`.

Main breakpoints:

- `max-width: 960px`: content columns stack vertically.
- `max-width: 640px`: navigation switches to one item per row.
- `min-width: 768px`: contact form uses a 2-column grid.

## JavaScript Behavior

### `hide.js`

- On pages that include it, every paragraph immediately following an `h3` is initially collapsed.
- Clicking or pressing `Enter`/`Space` on the `h3` toggles visibility.
- Adds keyboard accessibility attributes (`role`, `tabindex`, `aria-expanded`).

### `ajax.js`

- Handles contact form submission from `ContactUs.html`.
- Validates `name`, `email`, and `message` on the client side.
- Sends a `POST` request to:

`assets/dist/scripts/ajax.php?send_msg`

- Expects an HTML response to display inside `#contact_resp`.
- Shows a fallback error message if the request fails.

## Contact Form Backend Contract

To fully enable the contact form in production, ensure:

- Endpoint exists at `assets/dist/scripts/ajax.php?send_msg`
- Method: `POST`
- Form fields:
  - `name`
  - `email`
  - `message`
- Response: HTML snippet/message returned to the frontend.

## Maintenance Guide

When updating content:

- Keep top navigation links consistent across all HTML pages.
- Use semantic headings (`h1`-`h4`) and paragraph structure to preserve accessibility.
- Keep image assets inside `img/` and use relative paths.
- Reuse classes in `Styles/style.css` rather than creating page-specific inline styles.

## Validation / QA Commands

Run from project root:

### Validate HTML syntax (quick check)

```bash
xmllint --html --noout index.html About.html ContactUs.html FAQs.html Gallery.html News.html Sponsorship.html
```

### Validate JavaScript syntax

```bash
node --check hide.js
node --check ajax.js
```

### Search for accidental fixed desktop styles

```bash
rg -n "width:\\s*[0-9]+px|height:\\s*[0-9]+px" Styles/style.css
```

## Git Hygiene

The repository includes a `.gitignore` with common exclusions:

- OS files (`.DS_Store`, `Thumbs.db`)
- Editor metadata (`.idea/`, `.vscode/`)
- Logs (`*.log`)
- Dependency directories (`node_modules/`)
- Environment files (`.env*`)
- Build/cache outputs (`dist/`, `build/`, `.cache/`)

## Known Limitations

- Contact form success depends on the backend endpoint being present and reachable.
- Some legacy folders are still present and may include unused assets.

## Suggested Next Improvements

- Add an automated HTML/CSS/JS lint workflow in CI.
- Optimize and compress image assets for faster mobile load times.
- Add real gallery content and pagination/lightbox behavior.
- Add active navigation state per page for improved UX.
