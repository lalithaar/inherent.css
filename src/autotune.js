/**
 * Inherent.css - Automatic Accessibility Guardian (Autotune)
 * Powered by cm-colors (CIEDE2000 & OKLCH color science)
 *
 * Automatically inspects custom CSS brand variables (--theme, --primary)
 * against the active background (light/dark mode) and seamlessly auto-tunes
 * failing contrast to meet WCAG standards with minimal perceptual difference.
 *
 * @license MIT
 * @author Lalitha A R <https://isrl.in/>
 */

import { makeReadable, calculateContrastRatio } from "../../cm-colors/src/index.js";

function getActiveBackgroundColor() {
  const isDark =
    document.documentElement.dataset.theme === "dark" ||
    document.documentElement.classList.contains("dark") ||
    (!document.documentElement.dataset.theme &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return isDark ? "#0f172a" : "#ffffff";
}

let isTuning = false;

export function tune() {
  if (typeof window === "undefined" || !document.documentElement || isTuning) return;
  isTuning = true;

  try {
    const bg = getActiveBackgroundColor();
    const style = getComputedStyle(document.documentElement);
    const themeTokens = ["--theme", "--primary", "--color-primary", "--brand", "--accent"];

    let tunedCount = 0;

    for (const token of themeTokens) {
      const rawVal = style.getPropertyValue(token).trim();
      if (!rawVal) continue;

      try {
        const ratio = calculateContrastRatio(rawVal, bg);
        // Minimum 3.0:1 for large text/interactive theme tokens
        if (ratio < 3.0) {
          const result = makeReadable(rawVal, bg, { large: true });
          const tuned = result.color || result.fixedColor;

          if (tuned && tuned.toLowerCase() !== rawVal.toLowerCase()) {
            document.documentElement.style.setProperty(token, tuned);
            tunedCount++;
            console.info(
              `%c[Inherent.css Autotune]%c Auto-tuned ${token}: %c${rawVal}%c ➔ %c${tuned}%c (${ratio.toFixed(2)}:1 ➔ ${result.finalContrast}:1 WCAG compliant)`,
              "color: #6366f1; font-weight: bold;",
              "color: inherit;",
              "color: #ef4444; font-weight: bold;",
              "color: inherit;",
              "color: #10b981; font-weight: bold;",
              "color: inherit;"
            );
          }
        }
      } catch {}
    }

    return tunedCount;
  } finally {
    isTuning = false;
  }
}

// Auto-run when included in a webpage
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => tune());
  } else {
    tune();
  }

  // Observe system dark-mode preference toggle
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      tune();
    });
  }

  // Observe data-theme / class attribute changes on <html>
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.type === "attributes" && (m.attributeName === "data-theme" || m.attributeName === "class")) {
        tune();
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "class"]
  });

  window.InherentAutoTune = {
    tune,
    getActiveBackgroundColor
  };
}
