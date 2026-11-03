# deniztimurturkan

Personal site. Plain HTML/CSS, served by GitHub Pages.

- Content lives in `index.html` (projects go in the `#work` list; there is a commented template).
- Case studies live in their own folder, e.g. `research/wyze-camera/`.
- Design tokens (colors, fonts, spacing) are in `assets/css/variables.css`.

Preview locally: `python3 -m http.server` then open http://localhost:8000

## Privacy checks

`scripts/check_sensitive.py` blocks photo metadata (GPS, camera, dates), PDFs/HEIC/Office files, phone numbers, and keys from being published. It runs before every deploy, and as a pre-commit hook once enabled in a fresh clone:

    git config core.hooksPath .githooks

Strip metadata from an image: `python3 scripts/check_sensitive.py --strip path/to/image.jpg`
