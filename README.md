# Inherent.css

> **Write plain HTML without adding a single class: get automatic light/dark mode, 1-token color branding, and responsive layouts out of the box.**

*Built out of pure retinal self-defense against AI purple gradients by [lalithaar](https://isrl.in/)*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Gzipped Size](https://img.shields.io/badge/gzipped-~4.0_KB-brightgreen.svg)](#features)
[![CSS: Modern](https://img.shields.io/badge/CSS-Level_4%2F5-purple.svg)](#browser-primitives)

---

## Why Inherent.css?

Inherent.css styles semantic HTML by default, with automatic light/dark mode and one-token color branding in a small CSS footprint.

**Inherent.css** returns to first principles: **plain HTML elements should look like polished, responsive software by default.**

* **Zero Classes Required**: Write native `<article>`, `<nav>`, `<button>`, `<dialog>`, and `<table>` — they look right immediately.
* **Automatic Light & Dark Mode**: Zero JavaScript. The browser's native `Canvas` and `CanvasText` primitives handle theme shifts automatically.
* **Single-Seed Color Branding**: Powered by `color-mix(in oklch, ...)`. Change **one line** (`--theme: #10b981`) and your entire design system — pastels, borders, hover states, badges, and focus rings — recalibrates automatically.
* **Pragmatic App Layouts**: Not 12-column fraction soup. Just the layouts apps actually use: `.sidebar-left`, `.sidebar-right`, `.grid-2/3/4`, and `.split`.
* **Ultra-Lightweight**: **~4 KB gzipped** over the wire covering **58+ native HTML elements**.

---

## Quickstart

### 1. Via CDN (Drop-in, Zero Build)
Paste this into your `<head>` and start writing plain HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/inherent.css/dist/inherent.min.css">
```

### 2. Via NPM
```bash
npm install inherent.css
```

Import it in your CSS or JavaScript entrypoint:
```css
@import "inherent.css";
```
```js
import "inherent.css/dist/inherent.min.css";
```

---

## Usage

### Via CDN (Drop-in)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/inherent.css/dist/inherent.min.css">
```

### Via npm
```bash
npm install inherent.css
```
```css
@import "inherent.css";
```
```js
import "inherent.css/dist/inherent.min.css";
```

### Static Theme Override (No JavaScript / No Build Tools)
If you want a custom brand color without runtime tuning, define it yourself:

```css
:root { --theme: #facc15; }
```

Include this override after Inherent.css. For WCAG tuning, either choose an accessible color or load the optional runtime script below.

### Runtime Accessibility Guardian (Optional)
```html
<script src="https://cdn.jsdelivr.net/npm/inherent.css/dist/autotune.min.js" defer></script>
```

### Theme Switching
- Default theme: Neutral
- Presets: `data-theme="emerald"`, `rose`, `amber`, `cyan`, `violet`, `neutral`, `indigo`
- Or override one token: `:root { --theme: #10b981; }`

---

## Customizing Your Theme

Inherent.css uses a pure mathematical color engine. You don't have to define 30 hex codes for light mode and another 30 for dark mode.

### Option A: The One-Token Override
Override `--theme` in your stylesheet with any hex, oklch, or rgb color:

```css
:root {
  --theme: #10b981; /* Emerald, Amber, Rose, Cyan, Violet, etc. */
}
```
* In light mode: Generates crisp tinted borders and soft pastel surfaces.
* In dark mode: Generates deep atmospheric glows and high-contrast readable text.

### Option B: Built-in Data Theme Presets
Apply `data-theme` to your `<html>` element:

```html
<html data-theme="emerald">
<html data-theme="rose">
<html data-theme="amber">
<html data-theme="cyan">
<html data-theme="violet">
<html data-theme="neutral">
```

---

## 🛡️ Optional: Automatic Accessibility Guardian (`autotune.js`)

Inherent.css includes an optional drop-in companion script powered by [`cm-colors`](https://www.npmjs.com/package/cm-colors). When installing via npm, `cm-colors` is included automatically; CDN users can load its global bundle alongside the script below.

If you would rather avoid runtime JavaScript, use the static override approach shown in Usage: define `:root { --theme: #facc15; }` with an accessible color, or run any external tuner you prefer.

If you (or your users) pick an inaccessible custom theme color (e.g. bright yellow `--theme: #facc15` on white), `autotune.js` silently intercepts it and auto-tunes the CSS custom property on the fly to the closest WCAG-compliant shade (`#b78f00`) with minimal perceptual difference:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/inherent.css/dist/inherent.min.css">

<!-- Drop-in accessibility guardian: auto-tunes failing brand colors silently -->
<script src="https://cdn.jsdelivr.net/npm/inherent.css/dist/autotune.min.js" defer></script>
```

* **Zero configuration**: Automatically detects `--theme` or `--primary` on `:root`.
* **Light & Dark Mode Aware**: Seamlessly adapts if the user switches themes or system preferences.
* **Retinal Self-Defense**: Guarantees your site is always WCAG accessible without writing a single class or calculation.

---

## Pragmatic App Layouts

When you need real-world app containers, Inherent.css gives you clean, intuitive classes that automatically collapse on mobile (`<= 768px`):

```html
<!-- App Shell: Sidebar on Left -->
<div class="sidebar-left">
  <aside>
    <!-- Nav / Inspector -->
  </aside>
  <main>
    <!-- Workspace -->
  </main>
</div>

<!-- 4-Column Metric Cards -->
<div class="grid-4">
  <article><strong>14,820</strong> <small>Active Users</small></article>
  <article><strong>$92k</strong> <small>Revenue</small></article>
  <article><strong>0.04%</strong> <small>Errors</small></article>
  <article><strong>18ms</strong> <small>Latency</small></article>
</div>

<!-- 50/50 Split View -->
<div class="split">
  <article>Left Pane</article>
  <article>Right Pane</article>
</div>
```

---

## HTML Elements Styled by Default (58+ Tags)

| Category | Elements Covered |
| :--- | :--- |
| **Document Shell** | `html`, `body`, `header`, `nav`, `main`, `footer`, `section`, `article`, `aside`, `hr` |
| **Typography** | `h1`–`h6`, `p`, `blockquote`, `cite`, `mark`, `kbd`, `code`, `pre`, `small`, `sub`, `sup`, `del`, `ins` |
| **Navigation & Lists** | `nav ul` (responsive touch scrolling on mobile), `ul`, `ol`, `li`, `dl`, `dt`, `dd` |
| **Forms & Controls** | `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>` (15 types), `<select>`, `<textarea>`, `<button>` |
| **Interactive** | `<dialog>` & `::backdrop` blur, `<details>` & `<summary>`, `<progress>`, `<meter>` |
| **Data & Media** | `<table>`, `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `figure`, `figcaption`, `img`, `video`, `svg` |

---

## Live Demo & Documentation

Check out the interactive playground with live theme switching at:
**[https://lalithaar.github.io/inherent.css/](https://lalithaar.github.io/inherent.css/)**

---

## License

Inherent.css is released under the MIT License.

Core CSS: MIT.
Optional accessibility guardian (`autotune`): MIT, using color-science code under the author's explicit permission. See `NOTICE`.
