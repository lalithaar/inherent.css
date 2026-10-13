/*!
 * cm-colors v1.0.0 (JS/TS Port)
 * Accessible Color Science Library
 * Authored by Lalitha A R (https://isrl.in/)
 * Licensed under GPL-3.0
 */

(function (global) {
  'use strict';
/**
 * CM-Colors JS - Color Space Conversions
 * Mathematical conversions between sRGB, Linear RGB, XYZ, LAB, OKLab, OKLCH, and HSL.
 */

function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c) {
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1.0 / 2.4) - 0.055;
}

function hexToRgb(hex) {
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) {
    h = h.split("").map(c => c + c).join("");
  }
  if (h.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(h)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16)
  ];
}

function rgbToHex(rgb) {
  const [r, g, b] = rgb.map(x => Math.max(0, Math.min(255, Math.round(x))));
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function rgbToLinear(channel) {
  return srgbToLinear(channel / 255.0);
}

function calculateHueAngle(a, b) {
  if (a === 0 && b === 0) return 0;
  let hue = (Math.atan2(b, a) * 180) / Math.PI;
  return hue < 0 ? hue + 360 : hue;
}

function safeCbrt(x) {
  return x >= 0 ? Math.pow(x, 1 / 3) : -Math.pow(-x, 1 / 3);
}

function safeCube(x) {
  return x >= 0 ? x * x * x : -((-x) * (-x) * (-x));
}

function rgbToOklch(rgb) {
  const rLinear = srgbToLinear(rgb[0] / 255.0);
  const gLinear = srgbToLinear(rgb[1] / 255.0);
  const bLinear = srgbToLinear(rgb[2] / 255.0);

  // Linear RGB to LMS cone response
  const lCone = 0.4122214708 * rLinear + 0.5363325363 * gLinear + 0.0514459929 * bLinear;
  const mCone = 0.2119034982 * rLinear + 0.6806995451 * gLinear + 0.1073969566 * bLinear;
  const sCone = 0.0883024619 * rLinear + 0.2817188376 * gLinear + 0.6299787005 * bLinear;

  const lPrime = safeCbrt(lCone);
  const mPrime = safeCbrt(mCone);
  const sPrime = safeCbrt(sCone);

  const L = 0.2104542553 * lPrime + 0.7936177850 * mPrime - 0.0040720468 * sPrime;
  const a = 1.9779984951 * lPrime - 2.4285922050 * mPrime + 0.4505937099 * sPrime;
  const b = 0.0259040371 * lPrime + 0.7827717662 * mPrime - 0.8086757660 * sPrime;

  const C = Math.sqrt(a * a + b * b);
  const H = C < 1e-10 ? 0.0 : calculateHueAngle(a, b);

  return [Math.max(0.0, Math.min(1.0, L)), C, H];
}

function oklchToRgb(oklch) {
  const [L, C, H] = oklch;
  const hRad = (H * Math.PI) / 180.0;
  const aLab = C * Math.cos(hRad);
  const bLab = C * Math.sin(hRad);

  const lPrime = L + 0.3963377774 * aLab + 0.2158037573 * bLab;
  const mPrime = L - 0.1055613458 * aLab - 0.0638541728 * bLab;
  const sPrime = L - 0.0894841775 * aLab - 1.2914855480 * bLab;

  const lCone = safeCube(lPrime);
  const mCone = safeCube(mPrime);
  const sCone = safeCube(sPrime);

  let rLinear = 4.0767416621 * lCone - 3.3077115913 * mCone + 0.2309699292 * sCone;
  let gLinear = -1.2684380046 * lCone + 2.6097574011 * mCone - 0.3413193965 * sCone;
  let bLinear = -0.0041960863 * lCone - 0.7034186147 * mCone + 1.7076147010 * sCone;

  rLinear = Math.max(0.0, Math.min(1.0, rLinear));
  gLinear = Math.max(0.0, Math.min(1.0, gLinear));
  bLinear = Math.max(0.0, Math.min(1.0, bLinear));

  const r = Math.max(0, Math.min(255, Math.round(linearToSrgb(rLinear) * 255)));
  const g = Math.max(0, Math.min(255, Math.round(linearToSrgb(gLinear) * 255)));
  const b = Math.max(0, Math.min(255, Math.round(linearToSrgb(bLinear) * 255)));

  return [r, g, b];
}

function isValidRgb(rgb) {
  return Array.isArray(rgb) && rgb.length === 3 && rgb.every(x => x >= 0 && x <= 255);
}

function rgbToXyz(rgb) {
  const rLinear = srgbToLinear(rgb[0] / 255.0);
  const gLinear = srgbToLinear(rgb[1] / 255.0);
  const bLinear = srgbToLinear(rgb[2] / 255.0);

  const x = rLinear * 0.4124564 + gLinear * 0.3575761 + bLinear * 0.1804375;
  const y = rLinear * 0.2126729 + gLinear * 0.7151522 + bLinear * 0.0721750;
  const z = rLinear * 0.0193339 + gLinear * 0.1191920 + bLinear * 0.9503041;

  return [x * 100, y * 100, z * 100];
}

function xyzToLab(xyz) {
  const [x, y, z] = xyz;
  const xn = 95.047, yn = 100.0, zn = 108.883;

  function labTransform(t) {
    return t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
  }

  const fx = labTransform(x / xn);
  const fy = labTransform(y / yn);
  const fz = labTransform(z / zn);

  const L = Math.max(0, Math.min(100, 116 * fy - 16));
  const a = 500 * (fx - fy);
  const b = 200 * (fy - fz);

  return [L, a, b];
}

function rgbToLab(rgb) {
  return xyzToLab(rgbToXyz(rgb));
}

function parseColor(colorInput) {
  if (Array.isArray(colorInput) && colorInput.length >= 3) {
    return [Math.round(colorInput[0]), Math.round(colorInput[1]), Math.round(colorInput[2])];
  }
  if (typeof colorInput !== "string") {
    throw new Error(`Unsupported color format: ${colorInput}`);
  }
  const str = colorInput.trim().toLowerCase();

  // Hex
  if (str.startsWith("#")) {
    return hexToRgb(str);
  }

  // rgb(...) or rgba(...)
  const rgbMatch = str.match(/^rgba?\(\s*([0-9.%]+)\s*,\s*([0-9.%]+)\s*,\s*([0-9.%]+)(?:\s*,\s*([0-9.%]+))?\s*\)$/)
    || str.match(/^rgba?\(\s*([0-9.%]+)\s+([0-9.%]+)\s+([0-9.%]+)(?:\s*\/\s*([0-9.%]+))?\s*\)$/);
  if (rgbMatch) {
    const parseComp = v => v.endsWith("%") ? (parseFloat(v) * 2.55) : parseFloat(v);
    const r = Math.round(parseComp(rgbMatch[1]));
    const g = Math.round(parseComp(rgbMatch[2]));
    const b = Math.round(parseComp(rgbMatch[3]));
    return [Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b))];
  }

  // Named colors map (common basics)
  const named = {
    black: [0, 0, 0],
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [0, 128, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
    cyan: [0, 255, 255],
    magenta: [255, 0, 255],
    gray: [128, 128, 128],
    grey: [128, 128, 128]
  };
  if (named[str]) return named[str];

  // Try hex without hash if 6 hex chars
  if (/^[0-9a-f]{6}$/.test(str)) {
    return hexToRgb("#" + str);
  }

  throw new Error(`Unable to parse color string: ${colorInput}`);
}


/**
 * CM-Colors JS - WCAG Contrast Calculations
 */



function calculateRelativeLuminance(rgb) {
  const c = Array.isArray(rgb) ? rgb : parseColor(rgb);
  const [r, g, b] = c.map(x => x / 255.0);
  const rLinear = srgbToLinear(r);
  const gLinear = srgbToLinear(g);
  const bLinear = srgbToLinear(b);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

function calculateContrastRatio(textRgb, bgRgb) {
  const tRgb = Array.isArray(textRgb) ? textRgb : parseColor(textRgb);
  const bRgb = Array.isArray(bgRgb) ? bgRgb : parseColor(bgRgb);
  const textLuminance = calculateRelativeLuminance(tRgb);
  const bgLuminance = calculateRelativeLuminance(bRgb);

  const lighter = Math.max(textLuminance, bgLuminance);
  const darker = Math.min(textLuminance, bgLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

function getContrastLevel(contrastRatio, large = false) {
  if (large) {
    if (contrastRatio >= 4.5) return "AAA";
    if (contrastRatio >= 3.0) return "AA";
    return "FAIL";
  } else {
    if (contrastRatio >= 7.0) return "AAA";
    if (contrastRatio >= 4.5) return "AA";
    return "FAIL";
  }
}

function getWcagLevel(textRgb, bgRgb, large = false) {
  const ratio = calculateContrastRatio(textRgb, bgRgb);
  return getContrastLevel(ratio, large);
}


/**
 * CM-Colors JS - CIEDE2000 Color Difference Metric
 * Full mathematical rigor matching CIEDE2000 specification.
 */



function calculateDeltaE2000(rgb1, rgb2) {
  if (rgb1[0] === rgb2[0] && rgb1[1] === rgb2[1] && rgb1[2] === rgb2[2]) {
    return 0.0;
  }

  const [L1, a1, b1] = rgbToLab(rgb1);
  const [L2, a2, b2] = rgbToLab(rgb2);

  const deltaL = L2 - L1;
  const Lmean = (L1 + L2) / 2;

  const C1 = Math.sqrt(a1 * a1 + b1 * b1);
  const C2 = Math.sqrt(a2 * a2 + b2 * b2);
  const Cmean = (C1 + C2) / 2;

  const Cmean7 = Math.pow(Cmean, 7);
  const G = 0.5 * (1 - Math.sqrt(Cmean7 / (Cmean7 + Math.pow(25, 7))));
  const a1Prime = a1 * (1 + G);
  const a2Prime = a2 * (1 + G);

  const C1Prime = Math.sqrt(a1Prime * a1Prime + b1 * b1);
  const C2Prime = Math.sqrt(a2Prime * a2Prime + b2 * b2);
  const CmeanPrime = (C1Prime + C2Prime) / 2;

  const h1Prime = calculateHueAngle(a1Prime, b1);
  const h2Prime = calculateHueAngle(a2Prime, b2);

  let deltahPrime = 0;
  if (C1Prime === 0 || C2Prime === 0) {
    deltahPrime = 0;
  } else if (Math.abs(h2Prime - h1Prime) <= 180) {
    deltahPrime = h2Prime - h1Prime;
  } else if (h2Prime - h1Prime > 180) {
    deltahPrime = h2Prime - h1Prime - 360;
  } else {
    deltahPrime = h2Prime - h1Prime + 360;
  }

  const deltaHPrime = 2 * Math.sqrt(C1Prime * C2Prime) * Math.sin(((deltahPrime / 2) * Math.PI) / 180);
  const deltaCPrime = C2Prime - C1Prime;

  let HmeanPrime = 0;
  if (C1Prime === 0 || C2Prime === 0) {
    HmeanPrime = h1Prime + h2Prime;
  } else if (Math.abs(h1Prime - h2Prime) <= 180) {
    HmeanPrime = (h1Prime + h2Prime) / 2;
  } else if (Math.abs(h1Prime - h2Prime) > 180 && h1Prime + h2Prime < 360) {
    HmeanPrime = (h1Prime + h2Prime + 360) / 2;
  } else {
    HmeanPrime = (h1Prime + h2Prime - 360) / 2;
  }

  const rad = Math.PI / 180;
  const T = 1
    - 0.17 * Math.cos((HmeanPrime - 30) * rad)
    + 0.24 * Math.cos(2 * HmeanPrime * rad)
    + 0.32 * Math.cos((3 * HmeanPrime + 6) * rad)
    - 0.20 * Math.cos((4 * HmeanPrime - 63) * rad);

  const deltaTheta = 30 * Math.exp(-Math.pow((HmeanPrime - 275) / 25, 2));

  const CmeanPrime7 = Math.pow(CmeanPrime, 7);
  const RC = 2 * Math.sqrt(CmeanPrime7 / (CmeanPrime7 + Math.pow(25, 7)));

  const SL = 1 + (0.015 * Math.pow(Lmean - 50, 2)) / Math.sqrt(20 + Math.pow(Lmean - 50, 2));
  const SC = 1 + 0.045 * CmeanPrime;
  const SH = 1 + 0.015 * CmeanPrime * T;

  const RT = -Math.sin(2 * deltaTheta * rad) * RC;

  const kL = 1.0, kC = 1.0, kH = 1.0;

  const deltaE = Math.sqrt(
    Math.pow(deltaL / (kL * SL), 2) +
    Math.pow(deltaCPrime / (kC * SC), 2) +
    Math.pow(deltaHPrime / (kH * SH), 2) +
    RT * (deltaCPrime / (kC * SC)) * (deltaHPrime / (kH * SH))
  );

  return deltaE;
}


/**
 * CM-Colors JS - Optimization & Accessibility Tuning Engine
 * Port of cm_colors core optimization algorithms.
 */





function binarySearchLightness(textRgb, bgRgb, deltaEThreshold = 2.0, targetContrast = 7.0, largeText = false) {
  try {
    const [l, c, h] = rgbToOklch(textRgb);
    const [bgL] = rgbToOklch(bgRgb);
    const searchUp = bgL < 0.5; // Lighten text on dark bg, darken on light bg

    let low = searchUp ? l : 0.0;
    let high = searchUp ? 1.0 : l;

    let bestRgb = null;
    let bestDeltaE = Infinity;
    let bestContrast = 0.0;

    for (let i = 0; i < 20; i++) {
      const mid = (low + high) / 2.0;
      const candidateOklch = [mid, c, h];
      const candidateRgb = oklchToRgb(candidateOklch);

      if (!isValidRgb(candidateRgb)) {
        if (searchUp) high = mid;
        else low = mid;
        continue;
      }

      const deltaE = calculateDeltaE2000(textRgb, candidateRgb);
      const contrast = calculateContrastRatio(candidateRgb, bgRgb);

      if (deltaE > deltaEThreshold) {
        if (searchUp) high = mid;
        else low = mid;
        continue;
      }

      if (contrast >= targetContrast) {
        if (deltaE < bestDeltaE) {
          bestRgb = candidateRgb;
          bestDeltaE = deltaE;
          bestContrast = contrast;
        }
        if (searchUp) high = mid;
        else low = mid;
      } else {
        if (searchUp) low = mid;
        else high = mid;
        if (contrast > bestContrast) {
          bestContrast = contrast;
          bestRgb = candidateRgb;
          bestDeltaE = deltaE;
        }
      }
    }

    return bestRgb;
  } catch {
    return null;
  }
}

function gradientDescentOklch(textRgb, bgRgb, deltaEThreshold = 2.0, targetContrast = 7.0, largeText = false, maxIter = 50) {
  try {
    const [l, c, h] = rgbToOklch(textRgb);
    let learningRate = 0.02;
    let current = [l, c];

    function costFunction(params) {
      const newL = Math.max(0.0, Math.min(1.0, params[0]));
      const newC = Math.max(0.0, Math.min(0.5, params[1]));

      const candidateOklch = [newL, newC, h];
      const candidateRgb = oklchToRgb(candidateOklch);

      if (!isValidRgb(candidateRgb)) return 1e6;

      const deltaE = calculateDeltaE2000(textRgb, candidateRgb);
      const contrast = calculateContrastRatio(candidateRgb, bgRgb);

      const contrastPenalty = Math.max(0, targetContrast - contrast) * 1000;
      const deltaEPenalty = Math.max(0, deltaE - deltaEThreshold) * 10000;
      const distancePenalty = deltaE * 100;

      return contrastPenalty + deltaEPenalty + distancePenalty;
    }

    function computeGradient(params) {
      const gradient = [0.0, 0.0];
      const epsilon = 1e-4;

      for (let i = 0; i < 2; i++) {
        const paramsPlus = [...params];
        const paramsMinus = [...params];
        paramsPlus[i] += epsilon;
        paramsMinus[i] -= epsilon;

        gradient[i] = (costFunction(paramsPlus) - costFunction(paramsMinus)) / (2 * epsilon);
      }
      return gradient;
    }

    for (let iteration = 0; iteration < maxIter; iteration++) {
      const gradient = computeGradient(current);
      const adaptiveLr = learningRate * Math.pow(0.95, Math.floor(iteration / 10));

      const nextParams = [
        Math.max(0.0, Math.min(1.0, current[0] - adaptiveLr * gradient[0])),
        Math.max(0.0, Math.min(0.5, current[1] - adaptiveLr * gradient[1]))
      ];

      if (Math.abs(costFunction(current) - costFunction(nextParams)) < 1e-6) {
        break;
      }
      current = nextParams;
    }

    const finalRgb = oklchToRgb([current[0], current[1], h]);
    if (isValidRgb(finalRgb)) {
      const finalDeltaE = calculateDeltaE2000(textRgb, finalRgb);
      if (finalDeltaE <= deltaEThreshold) {
        return finalRgb;
      }
    }
    return null;
  } catch {
    return null;
  }
}

function generateAccessibleColor(
  textRgb,
  bgRgb,
  large = false,
  targetContrast = null,
  minContrast = null,
  deltaESequence = null
) {
  if (targetContrast === null) targetContrast = large ? 4.5 : 7.0;
  if (minContrast === null) minContrast = large ? 3.0 : 4.5;

  const currentContrast = calculateContrastRatio(textRgb, bgRgb);
  if (currentContrast >= targetContrast) {
    return textRgb;
  }

  if (deltaESequence === null) {
    deltaESequence = [
      0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 3.0, 3.5, 4.0, 5.0
    ];
  }

  let bestCandidate = null;
  let bestContrast = currentContrast;
  let bestDeltaE = Infinity;

  for (const maxDeltaE of deltaESequence) {
    // Phase 1: Binary search on lightness
    const binaryResult = binarySearchLightness(textRgb, bgRgb, maxDeltaE, targetContrast, large);
    if (binaryResult) {
      const resultContrast = calculateContrastRatio(binaryResult, bgRgb);
      const resultDeltaE = calculateDeltaE2000(textRgb, binaryResult);

      if (resultContrast >= targetContrast) {
        return binaryResult;
      }

      if (resultContrast > bestContrast) {
        bestContrast = resultContrast;
        bestCandidate = binaryResult;
        bestDeltaE = resultDeltaE;
      }
    }

    // Phase 2: Gradient descent
    const gradientResult = gradientDescentOklch(textRgb, bgRgb, maxDeltaE, targetContrast, large);
    if (gradientResult) {
      const resultContrast = calculateContrastRatio(gradientResult, bgRgb);
      const resultDeltaE = calculateDeltaE2000(textRgb, gradientResult);

      if (resultContrast >= targetContrast) {
        return gradientResult;
      }

      if (resultContrast > bestContrast || (resultContrast === bestContrast && resultDeltaE < bestDeltaE)) {
        bestContrast = resultContrast;
        bestCandidate = gradientResult;
        bestDeltaE = resultDeltaE;
      }
    }

    // Early termination with strict DeltaE
    if (
      bestCandidate &&
      bestContrast >= minContrast &&
      maxDeltaE <= 2.5 &&
      deltaESequence[deltaESequence.length - 1] <= 5.0
    ) {
      return bestCandidate;
    }
  }

  return bestCandidate ? bestCandidate : textRgb;
}

function strategyStrict(textRgb, bgRgb, large, targetContrast, minContrast) {
  const tunedRgb = generateAccessibleColor(textRgb, bgRgb, large, targetContrast, minContrast);
  const finalContrast = calculateContrastRatio(tunedRgb, bgRgb);
  return { tunedRgb, success: finalContrast >= minContrast };
}

function strategyRecursive(textRgb, bgRgb, large, targetContrast, minContrast) {
  let currentRgb = textRgb;
  const maxIterations = 10;
  const strictSequence = [0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.5, 2.8, 3.0];

  for (let i = 0; i < maxIterations; i++) {
    const currentContrast = calculateContrastRatio(currentRgb, bgRgb);
    if (currentContrast >= minContrast) {
      return { tunedRgb: currentRgb, success: true };
    }

    const nextRgb = generateAccessibleColor(
      currentRgb,
      bgRgb,
      large,
      targetContrast,
      minContrast,
      strictSequence
    );

    if (nextRgb[0] === currentRgb[0] && nextRgb[1] === currentRgb[1] && nextRgb[2] === currentRgb[2]) {
      if (calculateContrastRatio(nextRgb, bgRgb) >= minContrast) {
        return { tunedRgb: nextRgb, success: true };
      }
      return { tunedRgb: nextRgb, success: false };
    }

    currentRgb = nextRgb;
    if (calculateContrastRatio(currentRgb, bgRgb) >= minContrast) {
      return { tunedRgb: currentRgb, success: true };
    }
  }

  return { tunedRgb: currentRgb, success: false };
}

function strategyRelaxed(textRgb, bgRgb, large, targetContrast, minContrast) {
  const rec = strategyRecursive(textRgb, bgRgb, large, targetContrast, minContrast);
  if (rec.success) return rec;

  // Option A: Extended iterations
  let optARgb = textRgb;
  let optASuccess = false;
  const strictSequence = [0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.5, 2.8, 3.0];

  for (let i = 0; i < 15; i++) {
    if (calculateContrastRatio(optARgb, bgRgb) >= minContrast) {
      optASuccess = true;
      break;
    }
    const nextRgb = generateAccessibleColor(optARgb, bgRgb, large, targetContrast, minContrast, strictSequence);
    if (nextRgb[0] === optARgb[0] && nextRgb[1] === optARgb[1] && nextRgb[2] === optARgb[2]) {
      if (calculateContrastRatio(nextRgb, bgRgb) >= minContrast) optASuccess = true;
      break;
    }
    optARgb = nextRgb;
    if (calculateContrastRatio(optARgb, bgRgb) >= minContrast) {
      optASuccess = true;
      break;
    }
  }

  // Option B: Delta E relaxation up to 15.0
  const relaxedSequence = [
    0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.5, 3.0, 3.5, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 12.0, 15.0
  ];
  const optBRgb = generateAccessibleColor(textRgb, bgRgb, large, targetContrast, minContrast, relaxedSequence);
  const optBSuccess = calculateContrastRatio(optBRgb, bgRgb) >= minContrast;

  if (optASuccess && optBSuccess) {
    const deltaA = calculateDeltaE2000(textRgb, optARgb);
    const deltaB = calculateDeltaE2000(textRgb, optBRgb);
    return deltaA <= deltaB ? { tunedRgb: optARgb, success: true } : { tunedRgb: optBRgb, success: true };
  } else if (optASuccess) {
    return { tunedRgb: optARgb, success: true };
  } else if (optBSuccess) {
    return { tunedRgb: optBRgb, success: true };
  }
  return { tunedRgb: rec.tunedRgb, success: false };
}

function checkAndFixContrast(text, bg, options = {}) {
  const large = options.large || false;
  const mode = options.mode !== undefined ? options.mode : 1;
  const premium = options.premium || false;

  const textRgb = parseColor(text);
  const bgRgb = parseColor(bg);

  const currentContrast = calculateContrastRatio(textRgb, bgRgb);

  let minContrast, targetContrast;
  if (premium) {
    minContrast = large ? 4.5 : 7.0;
    targetContrast = minContrast;
  } else {
    minContrast = large ? 3.0 : 4.5;
    targetContrast = large ? 4.5 : 7.0;
  }

  if (currentContrast >= minContrast) {
    return {
      tunedColor: typeof text === "string" ? text : rgbToHex(textRgb),
      tunedRgb: textRgb,
      success: true,
      originalContrast: currentContrast,
      finalContrast: currentContrast,
      deltaE: 0.0,
      wcagLevel: getWcagLevel(textRgb, bgRgb, large)
    };
  }

  let result;
  if (mode === 0) {
    result = strategyStrict(textRgb, bgRgb, large, targetContrast, minContrast);
  } else if (mode === 2) {
    result = strategyRelaxed(textRgb, bgRgb, large, targetContrast, minContrast);
  } else {
    result = strategyRecursive(textRgb, bgRgb, large, targetContrast, minContrast);
  }

  const finalContrast = calculateContrastRatio(result.tunedRgb, bgRgb);
  const deltaE = calculateDeltaE2000(textRgb, result.tunedRgb);
  const wcagLevel = getWcagLevel(result.tunedRgb, bgRgb, large);

  return {
    tunedColor: rgbToHex(result.tunedRgb),
    tunedRgb: result.tunedRgb,
    success: result.success,
    originalContrast: currentContrast,
    finalContrast: finalContrast,
    deltaE: deltaE,
    wcagLevel: wcagLevel
  };
}


/**
 * CM-Colors JS
 * Accessible Color Science Library ported from the Python cm-colors toolkit.
 * Automatically fix colors to be readable with minimal visual change using OKLCH and CIEDE2000.
 *
 * Authored by Lalitha A R (https://isrl.in/)
 * Licensed under GPL-3.0
 */






class Color {
  constructor(input) {
    this.raw = input;
    try {
      this.rgb = parseColor(input);
      this.isValid = true;
      this.error = null;
    } catch (err) {
      this.rgb = null;
      this.isValid = false;
      this.error = err.message;
    }
  }

  get hex() {
    return this.isValid ? rgbToHex(this.rgb) : null;
  }

  get luminance() {
    return this.isValid ? calculateRelativeLuminance(this.rgb) : null;
  }

  get oklch() {
    return this.isValid ? rgbToOklch(this.rgb) : null;
  }

  get lab() {
    return this.isValid ? rgbToLab(this.rgb) : null;
  }
}

class ColorPair {
  constructor(text, bg, large = false) {
    this.text = new Color(text);
    this.bg = new Color(bg);
    this.large = large;
  }

  get isValid() {
    return this.text.isValid && this.bg.isValid;
  }

  get contrast() {
    if (!this.isValid) return null;
    return calculateContrastRatio(this.text.rgb, this.bg.rgb);
  }

  get wcagLevel() {
    if (!this.isValid) return "FAIL";
    return getWcagLevel(this.text.rgb, this.bg.rgb, this.large);
  }

  get isReadable() {
    const level = this.wcagLevel;
    if (level === "AAA") return "very readable";
    if (level === "AA") return "readable";
    return "not readable";
  }

  makeReadable(options = {}) {
    if (!this.isValid) {
      throw new Error(`Invalid color pair: text=${this.text.error}, bg=${this.bg.error}`);
    }
    const mode = options.mode !== undefined ? options.mode : 1;
    const veryReadable = options.veryReadable || false;
    const opt = {
      large: this.large,
      mode: mode,
      premium: veryReadable
    };
    const res = checkAndFixContrast(this.text.raw, this.bg.raw, opt);
    return [res.tunedColor, res.success];
  }

  make_readable(options = {}) {
    return this.makeReadable(options);
  }
}

const make_readable = makeReadable;

function makeReadable(textColor, bgColor, options = {}) {
  const pair = new ColorPair(textColor, bgColor, options.large || false);
  const result = checkAndFixContrast(textColor, bgColor, options);
  return {
    color: result.tunedColor,
    tunedRgb: result.tunedRgb,
    success: result.success,
    originalContrast: Number(result.originalContrast.toFixed(2)),
    finalContrast: Number(result.finalContrast.toFixed(2)),
    deltaE: Number(result.deltaE.toFixed(2)),
    wcagLevel: result.wcagLevel,
    isReadable: result.wcagLevel !== "FAIL"
  };
}

function getContrast(textColor, bgColor) {
  const textRgb = parseColor(textColor);
  const bgRgb = parseColor(bgColor);
  return Number(calculateContrastRatio(textRgb, bgRgb).toFixed(2));
}

function deltaE(color1, color2) {
  const rgb1 = parseColor(color1);
  const rgb2 = parseColor(color2);
  return Number(calculateDeltaE2000(rgb1, rgb2).toFixed(2));
}






  const CMColors = {
    Color,
    ColorPair,
    makeReadable,
    make_readable,
    getContrast,
    getWcagLevel,
    deltaE,
    calculateContrastRatio,
    calculateRelativeLuminance,
    calculateDeltaE2000,
    checkAndFixContrast,
    parseColor,
    hexToRgb,
    rgbToHex,
    rgbToOklch,
    oklchToRgb
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = CMColors;
  } else {
    global.CMColors = CMColors;
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this);
