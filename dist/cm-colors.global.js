/*!
 * cm-colors v1.1.0 (JS/TS Port)
 * Accessible Color Science Library
 * Authored by Lalitha A R (https://isrl.in/)
 * Licensed under GPL-3.0
 */

var CMColors = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var index_exports = {};
  __export(index_exports, {
    CSS_NAMED_COLORS: () => CSS_NAMED_COLORS,
    Color: () => Color,
    ColorPair: () => ColorPair,
    __version__: () => __version__,
    _get_level_badge: () => _get_level_badge,
    _strategy_recursive: () => _strategy_recursive,
    _strategy_relaxed: () => _strategy_relaxed,
    _strategy_strict: () => _strategy_strict,
    binarySearchLightness: () => binarySearchLightness,
    binary_search_lightness: () => binary_search_lightness,
    calculateContrastRatio: () => calculateContrastRatio,
    calculateDeltaE2000: () => calculateDeltaE2000,
    calculateHueAngle: () => calculateHueAngle,
    calculateRelativeLuminance: () => calculateRelativeLuminance,
    calculate_contrast_ratio: () => calculate_contrast_ratio,
    calculate_delta_e_2000: () => calculate_delta_e_2000,
    calculate_hue_angle: () => calculate_hue_angle,
    calculate_relative_luminance: () => calculate_relative_luminance,
    checkAndFixContrast: () => checkAndFixContrast,
    check_and_fix_contrast: () => check_and_fix_contrast,
    default: () => index_default,
    deltaE: () => deltaE,
    detectColorFormat: () => detectColorFormat,
    detect_color_format: () => detect_color_format,
    formatColor: () => formatColor,
    format_color: () => format_color,
    generateAccessibleColor: () => generateAccessibleColor,
    generate_accessible_color: () => generate_accessible_color,
    getContrast: () => getContrast,
    getContrastLevel: () => getContrastLevel,
    getContrastRatio: () => getContrastRatio,
    getWcagLevel: () => getWcagLevel,
    get_contrast_level: () => get_contrast_level,
    get_wcag_level: () => get_wcag_level,
    gradientDescentOklch: () => gradientDescentOklch,
    gradient_descent_oklch: () => gradient_descent_oklch,
    hexToRgb: () => hexToRgb,
    hex_to_rgb: () => hex_to_rgb,
    hslToRgb: () => hslToRgb,
    hsl_to_rgb: () => hsl_to_rgb,
    hslaToRgb: () => hslaToRgb,
    hsla_to_rgb: () => hsla_to_rgb,
    isValidOklch: () => isValidOklch,
    isValidRgb: () => isValidRgb,
    is_valid_oklch: () => is_valid_oklch,
    is_valid_rgb: () => is_valid_rgb,
    linearToSrgb: () => linearToSrgb,
    linear_to_srgb: () => linear_to_srgb,
    makeReadable: () => makeReadable,
    makeReadableBulk: () => makeReadableBulk,
    make_readable: () => make_readable,
    make_readable_bulk: () => make_readable_bulk,
    oklchToRgb: () => oklchToRgb,
    oklchToRgbSafe: () => oklchToRgbSafe,
    oklch_to_rgb: () => oklch_to_rgb,
    oklch_to_rgb_safe: () => oklch_to_rgb_safe,
    parseColorToRgb: () => parseColorToRgb,
    parse_color_to_rgb: () => parse_color_to_rgb,
    rgbToHex: () => rgbToHex,
    rgbToHsl: () => rgbToHsl,
    rgbToHsla: () => rgbToHsla,
    rgbToLab: () => rgbToLab,
    rgbToLinear: () => rgbToLinear,
    rgbToOklch: () => rgbToOklch,
    rgbToOklchSafe: () => rgbToOklchSafe,
    rgbToXyz: () => rgbToXyz,
    rgb_to_hex: () => rgb_to_hex,
    rgb_to_hsl: () => rgb_to_hsl,
    rgb_to_hsla: () => rgb_to_hsla,
    rgb_to_lab: () => rgb_to_lab,
    rgb_to_linear: () => rgb_to_linear,
    rgb_to_oklch: () => rgb_to_oklch,
    rgb_to_oklch_safe: () => rgb_to_oklch_safe,
    rgb_to_xyz: () => rgb_to_xyz,
    rgbaToRgb: () => rgbaToRgb,
    rgba_to_rgb: () => rgba_to_rgb,
    rgbintToString: () => rgbintToString,
    rgbint_to_string: () => rgbint_to_string,
    srgbToLinear: () => srgbToLinear,
    srgb_to_linear: () => srgb_to_linear,
    toConsole: () => toConsole,
    toHtml: () => toHtml,
    toHtmlBulk: () => toHtmlBulk,
    to_console: () => to_console,
    to_html: () => to_html,
    to_html_bulk: () => to_html_bulk,
    version: () => version,
    xyzToLab: () => xyzToLab,
    xyz_to_lab: () => xyz_to_lab
  });

  // src/namedColors.js
  var CSS_NAMED_COLORS = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
  };

  // src/conversions.js
  function srgbToLinear(channel) {
    if (channel <= 0.04045) {
      return channel / 12.92;
    } else {
      return Math.pow((channel + 0.055) / 1.055, 2.4);
    }
  }
  function linearToSrgb(channel) {
    if (channel <= 31308e-7) {
      return 12.92 * channel;
    } else {
      return 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
    }
  }
  function rgbToLinear(channel) {
    return srgbToLinear(channel / 255);
  }
  function hexToRgb(hexStr, string = false) {
    if (typeof hexStr !== "string") {
      throw new Error(`Invalid hex color: ${hexStr}`);
    }
    let h = hexStr.trim().replace(/^#/, "");
    if (h.length === 3) {
      h = h.split("").map((c) => c + c).join("");
    }
    if (h.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(h)) {
      throw new Error(`Invalid hex color: ${hexStr}`);
    }
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    if (string) {
      return `rgb(${r}, ${g}, ${b})`;
    }
    return [r, g, b];
  }
  function rgbToHex(rgb) {
    let r, g, b;
    if (typeof rgb === "string") {
      const match = rgb.trim().match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
      if (!match) {
        throw new Error(`Invalid CSS rgb() string: ${rgb}`);
      }
      r = parseInt(match[1], 10);
      g = parseInt(match[2], 10);
      b = parseInt(match[3], 10);
    } else if (Array.isArray(rgb) && rgb.length === 3) {
      [r, g, b] = rgb;
    } else {
      throw new Error(`Invalid RGB input: ${rgb}`);
    }
    for (const x of [r, g, b]) {
      if (typeof x !== "number" || isNaN(x) || x < 0 || x > 255) {
        throw new Error(`RGB values must be integers in 0-255: ${rgb}`);
      }
    }
    const hexR = Math.round(r).toString(16).padStart(2, "0");
    const hexG = Math.round(g).toString(16).padStart(2, "0");
    const hexB = Math.round(b).toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}`;
  }
  function calculateHueAngle(a, b) {
    if (a === 0 && b === 0) return 0;
    let hue = Math.atan2(b, a) * 180 / Math.PI;
    return hue < 0 ? hue + 360 : hue;
  }
  function safeCbrt(x) {
    return x >= 0 ? Math.pow(x, 1 / 3) : -Math.pow(-x, 1 / 3);
  }
  function safeCube(x) {
    return x >= 0 ? x * x * x : -(-x * -x * -x);
  }
  function rgbToOklch(rgb) {
    const [r, g, b] = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
    const rLinear = srgbToLinear(r);
    const gLinear = srgbToLinear(g);
    const bLinear = srgbToLinear(b);
    const lCone = 0.4122214708 * rLinear + 0.5363325363 * gLinear + 0.0514459929 * bLinear;
    const mCone = 0.2119034982 * rLinear + 0.6806995451 * gLinear + 0.1073969566 * bLinear;
    const sCone = 0.0883024619 * rLinear + 0.2817188376 * gLinear + 0.6299787005 * bLinear;
    const lPrime = safeCbrt(lCone);
    const mPrime = safeCbrt(mCone);
    const sPrime = safeCbrt(sCone);
    let L = 0.2104542553 * lPrime + 0.793617785 * mPrime - 0.0040720468 * sPrime;
    const a = 1.9779984951 * lPrime - 2.428592205 * mPrime + 0.4505937099 * sPrime;
    const bLab = 0.0259040371 * lPrime + 0.7827717662 * mPrime - 0.808675766 * sPrime;
    const C = Math.sqrt(a * a + bLab * bLab);
    const H = C < 1e-10 ? 0 : calculateHueAngle(a, bLab);
    L = Math.max(0, Math.min(1, L));
    return [L, C, H];
  }
  function oklchToRgb(oklch) {
    const [L, C, H] = oklch;
    const hRad = H * Math.PI / 180;
    const a = C * Math.cos(hRad);
    const b = C * Math.sin(hRad);
    const lPrime = L + 0.3963377774 * a + 0.2158037573 * b;
    const mPrime = L - 0.1055613458 * a - 0.0638541728 * b;
    const sPrime = L - 0.0894841775 * a - 1.291485548 * b;
    const lCone = safeCube(lPrime);
    const mCone = safeCube(mPrime);
    const sCone = safeCube(sPrime);
    let rLinear = 4.0767416621 * lCone - 3.3077115913 * mCone + 0.2309699292 * sCone;
    let gLinear = -1.2684380046 * lCone + 2.6097574011 * mCone - 0.3413193965 * sCone;
    let bLinear = -0.0041960863 * lCone - 0.7034186147 * mCone + 1.707614701 * sCone;
    rLinear = Math.max(0, Math.min(1, rLinear));
    gLinear = Math.max(0, Math.min(1, gLinear));
    bLinear = Math.max(0, Math.min(1, bLinear));
    const rSrgb = linearToSrgb(rLinear);
    const gSrgb = linearToSrgb(gLinear);
    const bSrgb = linearToSrgb(bLinear);
    const r8bit = Math.max(0, Math.min(255, Math.round(rSrgb * 255)));
    const g8bit = Math.max(0, Math.min(255, Math.round(gSrgb * 255)));
    const b8bit = Math.max(0, Math.min(255, Math.round(bSrgb * 255)));
    return [r8bit, g8bit, b8bit];
  }
  function isValidRgb(rgb) {
    if (!Array.isArray(rgb) || rgb.length !== 3) return false;
    return rgb.every((v) => typeof v === "number" && !isNaN(v) && v >= 0 && v <= 255);
  }
  function isValidOklch(oklch) {
    if (!Array.isArray(oklch) || oklch.length !== 3) return false;
    const [L, C, H] = oklch;
    if (typeof L !== "number" || L < 0 || L > 1) return false;
    if (typeof C !== "number" || C < 0) return false;
    if (typeof H !== "number" || H < 0 || H > 360) return false;
    return true;
  }
  function rgbToOklchSafe(rgb) {
    try {
      if (!isValidRgb(rgb)) throw new Error(`Invalid RGB values: ${rgb}`);
      const oklch = rgbToOklch(rgb);
      if (!isValidOklch(oklch)) throw new Error(`Invalid OKLCH: ${oklch}`);
      return oklch;
    } catch {
      const [r, g, b] = rgb || [0, 0, 0];
      const gray = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return [gray, 0, 0];
    }
  }
  function oklchToRgbSafe(oklch) {
    try {
      if (!isValidOklch(oklch)) throw new Error(`Invalid OKLCH values: ${oklch}`);
      const rgb = oklchToRgb(oklch);
      if (!isValidRgb(rgb)) throw new Error(`Invalid RGB conversion result: ${rgb}`);
      return rgb;
    } catch {
      const L = oklch ? oklch[0] : 0;
      const gray = Math.max(0, Math.min(255, Math.round(L * 255)));
      return [gray, gray, gray];
    }
  }
  function rgbToXyz(rgb) {
    const rLinear = srgbToLinear(rgb[0] / 255);
    const gLinear = srgbToLinear(rgb[1] / 255);
    const bLinear = srgbToLinear(rgb[2] / 255);
    const x = rLinear * 0.4124564 + gLinear * 0.3575761 + bLinear * 0.1804375;
    const y = rLinear * 0.2126729 + gLinear * 0.7151522 + bLinear * 0.072175;
    const z = rLinear * 0.0193339 + gLinear * 0.119192 + bLinear * 0.9503041;
    return [x * 100, y * 100, z * 100];
  }
  function xyzToLab(xyz) {
    const [x, y, z] = xyz;
    const xn = 95.047, yn = 100, zn = 108.883;
    function labTransform(t) {
      return t > 8856e-6 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
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
  function rgbaToRgb(rgba, background = [255, 255, 255]) {
    if (!Array.isArray(rgba) || rgba.length !== 4) {
      throw new Error("RGBA must be an array of 4 values.");
    }
    const [r, g, b, a] = rgba;
    for (const v of [r, g, b]) {
      if (typeof v !== "number" || v < 0 || v > 255) {
        throw new Error("RGBA r, g, b must be integers in 0\u2013255.");
      }
    }
    if (typeof a !== "number" || a < 0 || a > 1) {
      throw new Error("RGBA a must be a float in 0\u20131.");
    }
    if (!Array.isArray(background) || background.length !== 3) {
      throw new Error("background must be an array of 3 values.");
    }
    for (const v of background) {
      if (typeof v !== "number" || v < 0 || v > 255) {
        throw new Error("background r, g, b must be integers in 0\u2013255.");
      }
    }
    const [bgR, bgG, bgB] = background;
    const rOut = Math.round(r * a + bgR * (1 - a));
    const gOut = Math.round(g * a + bgG * (1 - a));
    const bOut = Math.round(b * a + bgB * (1 - a));
    return [rOut, gOut, bOut];
  }
  function rgbintToString(rgb) {
    if (!isValidRgb(rgb)) {
      throw new Error(`Invalid RGB values: ${rgb}`);
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
  function _parseRgbComponent(v) {
    const str = String(v).trim();
    if (str.endsWith("%")) {
      return parseFloat(str.slice(0, -1)) * 2.55;
    }
    return parseFloat(str);
  }
  function _parseHslPercentageOrDecimal(v) {
    const str = String(v).trim();
    if (str.endsWith("%")) {
      return parseFloat(str.slice(0, -1)) / 100;
    }
    const x = parseFloat(str);
    if (x >= 0 && x <= 1) return x;
    throw new Error(`S/L must be either percentage or decimal 0\u20131: ${v}`);
  }
  function _parseHue(v) {
    let hue = parseFloat(String(v).trim()) % 360;
    return hue < 0 ? hue + 360 : hue;
  }
  function rgbToHsl(rgbColor) {
    let r, g, b;
    if (typeof rgbColor === "string") {
      let text = rgbColor.trim().toLowerCase();
      if (!text.startsWith("rgb(") && !text.startsWith("rgba(")) {
        throw new Error(`Invalid RGB/RGBA string: ${rgbColor}`);
      }
      let inside = text.slice(text.indexOf("(") + 1, text.lastIndexOf(")")).trim();
      inside = inside.replace(/,/g, " ");
      if (inside.includes("/")) {
        inside = inside.split("/")[0].trim();
      }
      const parts = inside.split(/\s+/).filter(Boolean);
      if (parts.length < 3) {
        throw new Error(`Invalid RGB (missing components): ${rgbColor}`);
      }
      r = _parseRgbComponent(parts[0]);
      g = _parseRgbComponent(parts[1]);
      b = _parseRgbComponent(parts[2]);
    } else if (Array.isArray(rgbColor)) {
      if (rgbColor.length < 3) {
        throw new Error("RGB tuple must have \u2265 3 components");
      }
      [r, g, b] = rgbColor.slice(0, 3);
    } else {
      throw new Error("Unsupported RGB format");
    }
    for (const c of [r, g, b]) {
      if (c < 0 || c > 255) throw new Error(`RGB component out of range: ${c}`);
    }
    r /= 255;
    g /= 255;
    b /= 255;
    const mx = Math.max(r, g, b);
    const mn = Math.min(r, g, b);
    const diff = mx - mn;
    const l = (mx + mn) / 2;
    let h = 0;
    let s = 0;
    if (diff !== 0) {
      s = diff / (1 - Math.abs(2 * l - 1));
      if (mx === r) {
        h = (g - b) / diff % 6;
      } else if (mx === g) {
        h = (b - r) / diff + 2;
      } else {
        h = (r - g) / diff + 4;
      }
      h *= 60;
      if (h < 0) h += 360;
    }
    const roundH = Math.round(h * 10) / 10;
    const roundS = Math.round(s * 100 * 10) / 10;
    const roundL = Math.round(l * 100 * 10) / 10;
    return `hsl(${roundH}, ${roundS}%, ${roundL}%)`;
  }
  function hslToRgb(hslColor) {
    let h, s, l;
    if (typeof hslColor === "string") {
      const text = hslColor.trim().toLowerCase();
      if (!text.startsWith("hsl(") || !text.endsWith(")")) {
        throw new Error(`Invalid HSL string: ${hslColor}`);
      }
      let inside = text.slice(4, -1).trim();
      inside = inside.replace(/,/g, " ").replace(/%/g, "% ");
      const parts = inside.split(/\s+/).filter(Boolean);
      if (parts.length < 3) {
        throw new Error(`Invalid HSL string components: ${hslColor}`);
      }
      h = _parseHue(parts[0]);
      s = _parseHslPercentageOrDecimal(parts[1]);
      l = _parseHslPercentageOrDecimal(parts[2]);
    } else if (Array.isArray(hslColor)) {
      if (hslColor.length !== 3) {
        throw new Error("HSL tuple must be length 3");
      }
      const [rawH, rawS, rawL] = hslColor;
      h = _parseHue(rawH);
      s = _parseHslPercentageOrDecimal(rawS);
      l = _parseHslPercentageOrDecimal(rawL);
    } else {
      throw new Error("Unsupported HSL format");
    }
    if (s < 0 || s > 1 || l < 0 || l > 1) {
      throw new Error("S and L must be in [0, 1] after parsing");
    }
    if (s === 0) {
      const val = Math.round(l * 255);
      return [val, val, val];
    }
    function f(p2, q2, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2) return q2;
      if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hNorm = h / 360;
    const r = f(p, q, hNorm + 1 / 3);
    const g = f(p, q, hNorm);
    const b = f(p, q, hNorm - 1 / 3);
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  function hslaToRgb(hslaColor, background = null) {
    let h, s, l, a;
    if (typeof hslaColor === "string") {
      let text = hslaColor.trim().toLowerCase();
      if (text.startsWith("hsla(") && text.endsWith(")")) {
        let content = text.slice(5, -1).trim().replace(/\//g, ",");
        const parts = content.split(",").map((p) => p.trim().replace(/%/g, ""));
        if (parts.length === 4) {
          h = parseFloat(parts[0]) % 360;
          if (h < 0) h += 360;
          s = parts[1] ? parseFloat(parts[1]) / 100 : 0;
          l = parts[2] ? parseFloat(parts[2]) / 100 : 0;
          const rawA = parseFloat(parts[3]);
          a = rawA <= 1 ? rawA : rawA / 100;
        } else {
          throw new Error("Invalid HSLA CSS string format");
        }
      } else {
        throw new Error("Invalid HSLA string format - must start with 'hsla('");
      }
    } else if (Array.isArray(hslaColor)) {
      if (hslaColor.length === 4) {
        [h, s, l, a] = hslaColor;
        h = parseFloat(h) % 360;
        if (h < 0) h += 360;
        s = parseFloat(s);
        l = parseFloat(l);
        a = parseFloat(a);
      } else {
        throw new Error("Invalid HSLA tuple/list - must have 4 components");
      }
    } else {
      throw new Error("HSLA color must be string, tuple, or list");
    }
    if (s < 0 || s > 1 || l < 0 || l > 1 || a < 0 || a > 1) {
      throw new Error("HSLA values out of range: s, l, a must be in [0, 1]");
    }
    const rgb = hslToRgb([h, s, l]);
    if (a >= 1) return rgb;
    const bgRgb = background ? background : [255, 255, 255];
    return rgbaToRgb([rgb[0], rgb[1], rgb[2], a], bgRgb);
  }
  function rgbToHsla(rgbTuple, alpha = 1) {
    if (!Array.isArray(rgbTuple) || rgbTuple.length !== 3) {
      throw new Error("RGB must be an array of 3 values");
    }
    for (const val of rgbTuple) {
      if (val < 0 || val > 255) throw new Error("RGB values must be in range [0, 255]");
    }
    if (alpha < 0 || alpha > 1) {
      throw new Error("Alpha must be in range [0, 1]");
    }
    const hslStr = rgbToHsl(rgbTuple);
    const content = hslStr.slice(4, -1);
    const [hPart, sPart, lPart] = content.split(", ");
    return `hsla(${hPart}, ${sPart}, ${lPart}, ${alpha})`;
  }
  var srgb_to_linear = srgbToLinear;
  var linear_to_srgb = linearToSrgb;
  var rgb_to_linear = rgbToLinear;
  var hex_to_rgb = hexToRgb;
  var rgb_to_hex = rgbToHex;
  var rgb_to_oklch = rgbToOklch;
  var oklch_to_rgb = oklchToRgb;
  var calculate_hue_angle = calculateHueAngle;
  var is_valid_rgb = isValidRgb;
  var is_valid_oklch = isValidOklch;
  var rgb_to_oklch_safe = rgbToOklchSafe;
  var oklch_to_rgb_safe = oklchToRgbSafe;
  var rgb_to_xyz = rgbToXyz;
  var xyz_to_lab = xyzToLab;
  var rgb_to_lab = rgbToLab;
  var rgba_to_rgb = rgbaToRgb;
  var rgbint_to_string = rgbintToString;
  var rgb_to_hsl = rgbToHsl;
  var hsl_to_rgb = hslToRgb;
  var hsla_to_rgb = hslaToRgb;
  var rgb_to_hsla = rgbToHsla;

  // src/colorParser.js
  var NUM_RE = /[-+]?\d*\.?\d+%?/g;
  function _extractNumberTokens(s) {
    const matches = s.match(NUM_RE);
    return matches ? matches.filter(Boolean) : [];
  }
  function _parseNumberToken(tok, component = true) {
    const str = String(tok).trim();
    if (str.endsWith("%")) {
      const v2 = parseFloat(str.slice(0, -1));
      if (isNaN(v2)) throw new Error(`Invalid percentage value: '${tok}'`);
      if (component) {
        return Math.max(0, Math.min(255, v2 * 255 / 100));
      } else {
        return Math.max(0, Math.min(1, v2 / 100));
      }
    }
    const v = parseFloat(str);
    if (isNaN(v)) throw new Error(`Invalid numeric value: '${tok}'`);
    if (component) {
      if (v >= 0 && v <= 255) {
        return v;
      }
      throw new Error(`RGB component out of range: ${v}`);
    } else {
      if (v >= 0 && v <= 1) {
        return v;
      }
      if (v > 1 && v <= 100) {
        return Math.max(0, Math.min(1, v / 100));
      }
      throw new Error(`Alpha value out of range: ${v}`);
    }
  }
  function parseColorToRgb(color, background = null) {
    if (color === null || color === void 0) {
      throw new Error("Color cannot be null or undefined");
    }
    if (Array.isArray(color)) {
      const ln = color.length;
      if (ln === 3) {
        try {
          const comps = [];
          for (const c of color) {
            if (typeof c === "number") {
              if (Number.isInteger(c) && c >= 0 && c <= 255) {
                comps.push(c);
              } else if (c >= 0 && c <= 1 && !Number.isInteger(c)) {
                comps.push(Math.round(c * 255));
              } else if (c >= 0 && c <= 255) {
                comps.push(Math.round(c));
              } else {
                throw new Error(`RGB component out of range or invalid: ${c}`);
              }
            } else if (typeof c === "string") {
              comps.push(Math.round(_parseNumberToken(c, true)));
            } else {
              throw new Error(`Unsupported RGB component type: ${typeof c}`);
            }
          }
          const rgb = [comps[0], comps[1], comps[2]];
          if (!isValidRgb(rgb)) {
            throw new Error(`RGB component out of range or invalid: ${rgb}`);
          }
          return rgb;
        } catch (e) {
          if (e.message && e.message.includes("out of range")) {
            throw e;
          }
          try {
            return hslToRgb(color);
          } catch {
            throw new Error("Invalid color tuple. If you intended HSL, use hsl(...) syntax.");
          }
        }
      } else if (ln === 4) {
        const [rRaw, gRaw, bRaw, aRaw] = color;
        const looksLikeRgb = Number.isInteger(rRaw) && rRaw > 1 || Number.isInteger(gRaw) && gRaw > 1 || Number.isInteger(bRaw) && bRaw > 1 || typeof rRaw === "number" && rRaw > 1 || typeof gRaw === "number" && gRaw > 1 || typeof bRaw === "number" && bRaw > 1;
        if (looksLikeRgb) {
          const r = Math.round(_parseNumberToken(String(rRaw), true));
          const g = Math.round(_parseNumberToken(String(gRaw), true));
          const b = Math.round(_parseNumberToken(String(bRaw), true));
          const a = _parseNumberToken(String(aRaw), false);
          const bgRgb = background === null ? [255, 255, 255] : parseColorToRgb(background);
          return rgbaToRgb([r, g, b, a], bgRgb);
        } else {
          let bgRgb = null;
          if (background !== null) {
            if (Array.isArray(background) && background.length === 3) {
              bgRgb = background;
            } else {
              bgRgb = parseColorToRgb(background);
            }
          }
          return hslaToRgb(color, bgRgb);
        }
      } else {
        throw new Error(`Tuple/list color must have length 3 (RGB/HSL) or 4 (RGBA/HSLA). Got length ${ln}`);
      }
    }
    if (typeof color === "string") {
      const s = color.trim();
      const sLower = s.toLowerCase();
      if (CSS_NAMED_COLORS[sLower]) {
        return hexToRgb(CSS_NAMED_COLORS[sLower]);
      }
      if (sLower.startsWith("#") || /^[0-9a-f]{3}$/i.test(sLower) || /^[0-9a-f]{6}$/i.test(sLower)) {
        const hex = sLower.startsWith("#") ? s : "#" + s;
        return hexToRgb(hex);
      }
      if (sLower.startsWith("hsl(") || sLower.startsWith("hsla(")) {
        if (sLower.startsWith("hsla(")) {
          let bgRgb = null;
          if (background !== null) {
            if (Array.isArray(background) && background.length === 3) {
              bgRgb = background;
            } else {
              bgRgb = parseColorToRgb(background);
            }
          }
          return hslaToRgb(s, bgRgb);
        } else {
          return hslToRgb(s);
        }
      }
      if (sLower.startsWith("rgb(") || sLower.startsWith("rgba(") || sLower.startsWith("rgb ") || sLower.startsWith("(") || s.includes(",") || s.includes(" ")) {
        const tokens = _extractNumberTokens(sLower);
        if (!tokens || tokens.length === 0) {
          throw new Error(`Could not parse numeric components from '${s}'`);
        }
        if (tokens.length >= 4) {
          const r = Math.round(_parseNumberToken(tokens[0], true));
          const g = Math.round(_parseNumberToken(tokens[1], true));
          const b = Math.round(_parseNumberToken(tokens[2], true));
          const a = _parseNumberToken(tokens[3], false);
          const bgRgb = background === null ? [255, 255, 255] : parseColorToRgb(background);
          return rgbaToRgb([r, g, b, a], bgRgb);
        } else if (tokens.length === 3) {
          const r = Math.round(_parseNumberToken(tokens[0], true));
          const g = Math.round(_parseNumberToken(tokens[1], true));
          const b = Math.round(_parseNumberToken(tokens[2], true));
          const rgb = [
            Math.max(0, Math.min(255, r)),
            Math.max(0, Math.min(255, g)),
            Math.max(0, Math.min(255, b))
          ];
          if (!isValidRgb(rgb)) {
            throw new Error(`Invalid RGB values parsed from '${s}': ${rgb}`);
          }
          return rgb;
        } else {
          throw new Error(`Unrecognized color format: '${s}'`);
        }
      }
      throw new Error(`Unrecognized color string format: '${s}'`);
    }
    throw new Error(`Unsupported color input type: ${typeof color}. Expected string or array.`);
  }
  function detectColorFormat(color) {
    if (typeof color === "string") {
      const s = color.trim().toLowerCase();
      if (CSS_NAMED_COLORS[s]) return "named";
      if (s.startsWith("#")) return "hex";
      if (s.startsWith("rgb(")) return "rgb";
      if (s.startsWith("rgba(")) return "rgba";
      if (s.startsWith("hsl(")) return "hsl";
      if (s.startsWith("hsla(")) return "hsla";
      if (/^[0-9a-f]{3}$/i.test(s) || /^[0-9a-f]{6}$/i.test(s)) return "hex";
      if (s.includes(",") || s.includes(" ")) return "rgb";
    } else if (Array.isArray(color)) {
      if (color.length === 3) return "rgb_tuple";
      if (color.length === 4) return "rgba_tuple";
    }
    return "unknown";
  }
  function formatColor(rgb, formatType) {
    if (formatType === "hex") {
      return rgbToHex(rgb);
    }
    if (formatType === "rgb") {
      return rgbintToString(rgb);
    }
    if (formatType === "hsl") {
      return rgbToHsl(rgb);
    }
    if (formatType === "rgb_tuple") {
      return rgb;
    }
    return rgbToHex(rgb);
  }
  var parse_color_to_rgb = parseColorToRgb;
  var detect_color_format = detectColorFormat;
  var format_color = formatColor;

  // src/contrast.js
  function calculateRelativeLuminance(rgb) {
    const c = Array.isArray(rgb) ? rgb : parseColorToRgb(rgb);
    const [r, g, b] = [c[0] / 255, c[1] / 255, c[2] / 255];
    const rLinear = srgbToLinear(r);
    const gLinear = srgbToLinear(g);
    const bLinear = srgbToLinear(b);
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  }
  function calculateContrastRatio(textRgb, bgRgb) {
    const tRgb = Array.isArray(textRgb) ? textRgb : parseColorToRgb(textRgb);
    const bRgb = Array.isArray(bgRgb) ? bgRgb : parseColorToRgb(bgRgb);
    const textLuminance = calculateRelativeLuminance(tRgb);
    const bgLuminance = calculateRelativeLuminance(bRgb);
    const lighter = Math.max(textLuminance, bgLuminance);
    const darker = Math.min(textLuminance, bgLuminance);
    return (lighter + 0.05) / (darker + 0.05);
  }
  function getContrastLevel(contrastRatio, large = false) {
    if (large) {
      if (contrastRatio >= 4.5) return "AAA";
      if (contrastRatio >= 3) return "AA";
      return "FAIL";
    } else {
      if (contrastRatio >= 7) return "AAA";
      if (contrastRatio >= 4.5) return "AA";
      return "FAIL";
    }
  }
  function getWcagLevel(textRgb, bgRgb, large = false) {
    const ratio = calculateContrastRatio(textRgb, bgRgb);
    return getContrastLevel(ratio, large);
  }
  var calculate_relative_luminance = calculateRelativeLuminance;
  var calculate_contrast_ratio = calculateContrastRatio;
  var get_contrast_level = getContrastLevel;
  var get_wcag_level = getWcagLevel;

  // src/colorMetrics.js
  function calculateDeltaE2000(rgb1, rgb2) {
    if (rgb1[0] === rgb2[0] && rgb1[1] === rgb2[1] && rgb1[2] === rgb2[2]) {
      return 0;
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
    const deltaHPrime = 2 * Math.sqrt(C1Prime * C2Prime) * Math.sin(deltahPrime / 2 * Math.PI / 180);
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
    const T = 1 - 0.17 * Math.cos((HmeanPrime - 30) * rad) + 0.24 * Math.cos(2 * HmeanPrime * rad) + 0.32 * Math.cos((3 * HmeanPrime + 6) * rad) - 0.2 * Math.cos((4 * HmeanPrime - 63) * rad);
    const deltaTheta = 30 * Math.exp(-Math.pow((HmeanPrime - 275) / 25, 2));
    const CmeanPrime7 = Math.pow(CmeanPrime, 7);
    const RC = 2 * Math.sqrt(CmeanPrime7 / (CmeanPrime7 + Math.pow(25, 7)));
    const SL = 1 + 0.015 * Math.pow(Lmean - 50, 2) / Math.sqrt(20 + Math.pow(Lmean - 50, 2));
    const SC = 1 + 0.045 * CmeanPrime;
    const SH = 1 + 0.015 * CmeanPrime * T;
    const RT = -Math.sin(2 * deltaTheta * rad) * RC;
    const kL = 1, kC = 1, kH = 1;
    const deltaE2 = Math.sqrt(
      Math.pow(deltaL / (kL * SL), 2) + Math.pow(deltaCPrime / (kC * SC), 2) + Math.pow(deltaHPrime / (kH * SH), 2) + RT * (deltaCPrime / (kC * SC)) * (deltaHPrime / (kH * SH))
    );
    return deltaE2;
  }
  var calculate_delta_e_2000 = calculateDeltaE2000;
  var deltaE = calculateDeltaE2000;

  // src/optimisation.js
  function binarySearchLightness(textRgb, bgRgb, deltaEThreshold = 2, targetContrast = 7, largeText = false) {
    try {
      const [l, c, h] = rgbToOklchSafe(textRgb);
      const [bgL] = rgbToOklchSafe(bgRgb);
      const searchUp = bgL < 0.5;
      let low = searchUp ? l : 0;
      let high = searchUp ? 1 : l;
      let bestRgb = null;
      let bestDeltaE = Infinity;
      let bestContrast = 0;
      for (let i = 0; i < 20; i++) {
        const mid = (low + high) / 2;
        const candidateOklch = [mid, c, h];
        const candidateRgb = oklchToRgbSafe(candidateOklch);
        if (!isValidRgb(candidateRgb)) {
          if (searchUp) high = mid;
          else low = mid;
          continue;
        }
        const deltaE2 = calculateDeltaE2000(textRgb, candidateRgb);
        const contrast = calculateContrastRatio(candidateRgb, bgRgb);
        if (deltaE2 > deltaEThreshold) {
          if (searchUp) high = mid;
          else low = mid;
          continue;
        }
        if (contrast >= targetContrast) {
          if (deltaE2 < bestDeltaE) {
            bestRgb = candidateRgb;
            bestDeltaE = deltaE2;
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
            bestDeltaE = deltaE2;
          }
        }
      }
      return bestRgb;
    } catch {
      return null;
    }
  }
  function gradientDescentOklch(textRgb, bgRgb, deltaEThreshold = 2, targetContrast = 7, largeText = false, maxIter = 50) {
    try {
      let costFunction = function(params) {
        let [newL, newC] = params;
        newL = Math.max(0, Math.min(1, newL));
        newC = Math.max(0, Math.min(0.5, newC));
        const candidateOklch = [newL, newC, h];
        const candidateRgb = oklchToRgbSafe(candidateOklch);
        if (!isValidRgb(candidateRgb)) return 1e6;
        const deltaE2 = calculateDeltaE2000(textRgb, candidateRgb);
        const contrast = calculateContrastRatio(candidateRgb, bgRgb);
        const contrastPenalty = Math.max(0, targetContrast - contrast) * 1e3;
        const deltaEPenalty = Math.max(0, deltaE2 - deltaEThreshold) * 1e4;
        const distancePenalty = deltaE2 * 100;
        return contrastPenalty + deltaEPenalty + distancePenalty;
      }, computeGradient = function(params) {
        const gradient = [0, 0];
        const epsilon = 1e-4;
        for (let i = 0; i < 2; i++) {
          const paramsPlus = [...params];
          const paramsMinus = [...params];
          paramsPlus[i] += epsilon;
          paramsMinus[i] -= epsilon;
          gradient[i] = (costFunction(paramsPlus) - costFunction(paramsMinus)) / (2 * epsilon);
        }
        return gradient;
      };
      const [l, c, h] = rgbToOklchSafe(textRgb);
      const learningRate = 0.02;
      let current = [l, c];
      for (let iteration = 0; iteration < maxIter; iteration++) {
        const gradient = computeGradient(current);
        const adaptiveLr = learningRate * Math.pow(0.95, Math.floor(iteration / 10));
        const nextParams = [
          Math.max(0, Math.min(1, current[0] - adaptiveLr * gradient[0])),
          Math.max(0, Math.min(0.5, current[1] - adaptiveLr * gradient[1]))
        ];
        if (Math.abs(costFunction(current) - costFunction(nextParams)) < 1e-6) {
          break;
        }
        current = nextParams;
      }
      const finalOklch = [current[0], current[1], h];
      const finalRgb = oklchToRgbSafe(finalOklch);
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
  function generateAccessibleColor(textRgb, bgRgb, large = false, targetContrast = null, minContrast = null, deltaESequence = null) {
    if (targetContrast === null) targetContrast = large ? 4.5 : 7;
    if (minContrast === null) minContrast = large ? 3 : 4.5;
    const currentContrast = calculateContrastRatio(textRgb, bgRgb);
    if (currentContrast >= targetContrast) {
      return textRgb;
    }
    if (deltaESequence === null) {
      deltaESequence = [
        0.8,
        1,
        1.2,
        1.4,
        1.6,
        1.8,
        2,
        2.1,
        2.2,
        2.3,
        2.4,
        2.5,
        2.7,
        3,
        3.5,
        4,
        5
      ];
    }
    let bestCandidate = null;
    let bestContrast = currentContrast;
    let bestDeltaE = Infinity;
    for (const maxDeltaE of deltaESequence) {
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
      const gradientResult = gradientDescentOklch(textRgb, bgRgb, maxDeltaE, targetContrast, large);
      if (gradientResult) {
        const resultContrast = calculateContrastRatio(gradientResult, bgRgb);
        const resultDeltaE = calculateDeltaE2000(textRgb, gradientResult);
        if (resultContrast >= targetContrast) {
          return gradientResult;
        }
        if (resultContrast > bestContrast || resultContrast === bestContrast && resultDeltaE < bestDeltaE) {
          bestContrast = resultContrast;
          bestCandidate = gradientResult;
          bestDeltaE = resultDeltaE;
        }
      }
      if (bestCandidate && bestContrast >= minContrast && maxDeltaE <= 2.5 && deltaESequence[deltaESequence.length - 1] <= 5) {
        return bestCandidate;
      }
    }
    return bestCandidate ? bestCandidate : textRgb;
  }
  function _strategy_strict(textRgb, bgRgb, large, targetContrast, minContrast) {
    const tunedRgb = generateAccessibleColor(textRgb, bgRgb, large, targetContrast, minContrast);
    const finalContrast = calculateContrastRatio(tunedRgb, bgRgb);
    const success = finalContrast >= minContrast;
    return [tunedRgb, success];
  }
  function _strategy_recursive(textRgb, bgRgb, large, targetContrast, minContrast) {
    let currentRgb = textRgb;
    const maxIterations = 10;
    const strictSequence = [0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3];
    for (let i = 0; i < maxIterations; i++) {
      const currentContrast = calculateContrastRatio(currentRgb, bgRgb);
      if (currentContrast >= minContrast) {
        return [currentRgb, true];
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
          return [nextRgb, true];
        } else {
          return [nextRgb, false];
        }
      }
      currentRgb = nextRgb;
      if (calculateContrastRatio(currentRgb, bgRgb) >= minContrast) {
        return [currentRgb, true];
      }
    }
    return [currentRgb, false];
  }
  function _strategy_relaxed(textRgb, bgRgb, large, targetContrast, minContrast) {
    const [recRgb, recSuccess] = _strategy_recursive(textRgb, bgRgb, large, targetContrast, minContrast);
    if (recSuccess) return [recRgb, true];
    let optARgb = textRgb;
    let optASuccess = false;
    const maxIterationsExtended = 15;
    const strictSequence = [0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.5, 2.8, 3];
    for (let i = 0; i < maxIterationsExtended; i++) {
      if (calculateContrastRatio(optARgb, bgRgb) >= minContrast) {
        optASuccess = true;
        break;
      }
      const nextRgb = generateAccessibleColor(
        optARgb,
        bgRgb,
        large,
        targetContrast,
        minContrast,
        strictSequence
      );
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
    const relaxedSequence = [
      0.8,
      1,
      1.2,
      1.4,
      1.6,
      1.8,
      2,
      2.5,
      3,
      3.5,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      12,
      15
    ];
    const optBRgb = generateAccessibleColor(
      textRgb,
      bgRgb,
      large,
      targetContrast,
      minContrast,
      relaxedSequence
    );
    const optBSuccess = calculateContrastRatio(optBRgb, bgRgb) >= minContrast;
    if (optASuccess && optBSuccess) {
      const deltaA = calculateDeltaE2000(textRgb, optARgb);
      const deltaB = calculateDeltaE2000(textRgb, optBRgb);
      return deltaA <= deltaB ? [optARgb, true] : [optBRgb, true];
    } else if (optASuccess) {
      return [optARgb, true];
    } else if (optBSuccess) {
      return [optBRgb, true];
    } else {
      return [recRgb, false];
    }
  }
  function checkAndFixContrast(text, bg, large = false, mode = 1, premium = false) {
    if (typeof large === "object" && large !== null) {
      const opts = large;
      large = opts.large || false;
      mode = opts.mode !== void 0 ? opts.mode : 1;
      premium = opts.premium || opts.veryReadable || opts.very_readable || false;
    }
    const textRgb = parseColorToRgb(text);
    const bgRgb = parseColorToRgb(bg);
    const currentContrast = calculateContrastRatio(textRgb, bgRgb);
    let minContrast, targetContrast;
    if (premium) {
      if (large) {
        minContrast = 4.5;
        targetContrast = 4.5;
      } else {
        minContrast = 7;
        targetContrast = 7;
      }
    } else {
      if (large) {
        minContrast = 3;
        targetContrast = 4.5;
      } else {
        minContrast = 4.5;
        targetContrast = 7;
      }
    }
    if (currentContrast >= minContrast) {
      return [rgbintToString(textRgb), true];
    }
    let tunedRgb, success;
    if (mode === 0) {
      [tunedRgb, success] = _strategy_strict(textRgb, bgRgb, large, targetContrast, minContrast);
    } else if (mode === 2) {
      [tunedRgb, success] = _strategy_relaxed(textRgb, bgRgb, large, targetContrast, minContrast);
    } else {
      [tunedRgb, success] = _strategy_recursive(textRgb, bgRgb, large, targetContrast, minContrast);
    }
    const accessibleTextStr = rgbintToString(tunedRgb);
    return [accessibleTextStr, success];
  }
  var binary_search_lightness = binarySearchLightness;
  var gradient_descent_oklch = gradientDescentOklch;
  var generate_accessible_color = generateAccessibleColor;
  var check_and_fix_contrast = checkAndFixContrast;

  // src/visualiser.js
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function _get_level_badge(level) {
    if (level === "FAIL") {
      return ["Not Readable", "badge-fail"];
    } else if (level === "AA" || level === "AA Large") {
      return ["Readable", "badge-pass"];
    } else if (level === "AAA" || level === "AAA Large") {
      return ["Very Readable", "badge-pass"];
    }
    return [level || "FAIL", "badge-pass"];
  }
  function toConsole(fg, bg, tunedFg, originalLevel = null, newLevel = null) {
    const [origLabel] = _get_level_badge(originalLevel);
    const [newLabel] = _get_level_badge(newLevel);
    console.log("-----------------------------------------");
    console.log(`Original: ${fg} on ${bg} -> [${origLabel}]`);
    console.log(`Tuned:    ${tunedFg} on ${bg} -> [${newLabel}]`);
    console.log("-----------------------------------------");
  }
  function toHtml(fg, bg, tunedFg, originalLevel = "FAIL", newLevel = "AA", selector = "Color Pair", filePath = "Manual Check") {
    const [origLabel, origClass] = _get_level_badge(originalLevel);
    const [newLabel, newClass] = _get_level_badge(newLevel);
    const safeFg = escapeHtml(fg);
    const safeBg = escapeHtml(bg);
    const safeTunedFg = escapeHtml(tunedFg);
    const safeSelector = escapeHtml(selector);
    const safeFilePath = escapeHtml(filePath);
    const bgStyle = `background-color: ${safeBg};`;
    const origTextStyle = `color: ${safeFg};`;
    const tunedTextStyle = `color: ${safeTunedFg};`;
    return `
    <div class="card">
        <div class="card-header">
            <div>
                <div class="selector">${safeSelector}</div>
                <div class="file-info">${safeFilePath}</div>
            </div>
        </div>
        
        <div class="comparison">
            <div class="color-box" style="${bgStyle} ${origTextStyle}">
                <span class="label">Before</span>
                <div class="sample-text">Sample Text</div>
                <div class="color-code">${safeFg}</div>
                <div class="badge ${origClass}">${origLabel}</div>
            </div>
            
            <div class="arrow">\u2192</div>
            
            <div class="color-box" style="${bgStyle} ${tunedTextStyle}">
                <span class="label">After</span>
                <div class="sample-text">Sample Text</div>
                <div class="color-code">${safeTunedFg}</div>
                <div class="badge ${newClass}">${newLabel}</div>
            </div>
        </div>
    </div>
  `;
  }
  function toHtmlBulk(pairs, outputPath = "cm_colors_report.html") {
    let cardsHtml = "";
    if (!pairs || pairs.length === 0) {
      cardsHtml = `
      <div class="card" style="text-align: center; padding: 50px;">
          <h3>No changes were needed!</h3>
          <p>All color pairs found were already accessible.</p>
      </div>
    `;
    } else {
      for (const pair of pairs) {
        cardsHtml += toHtml(
          pair.fg,
          pair.bg,
          pair.tuned_fg || pair.tunedFg,
          pair.original_level || pair.originalLevel || "FAIL",
          pair.new_level || pair.newLevel || "AA",
          pair.selector || "Color Pair",
          pair.file || pair.filePath || "Manual Check"
        );
      }
    }
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CM-Colors Report</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Yeseva+One&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #f9f9f9;
            --text-color: #333;
            --card-bg: #ffffff;
            --accent: #2c3e50;
        }
        
        body {
            font-family: 'Atkinson Hyperlegible', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 40px;
            line-height: 1.6;
        }
        
        h1, h2, h3 {
            font-family: 'Yeseva One', serif;
            font-weight: 400;
            margin-top: 0;
        }
        
        header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        h1 {
            font-size: 3rem;
            color: var(--accent);
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.7;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        
        .card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            transition: transform 0.2s ease;
        }
        
        .card:hover {
            transform: translateY(-2px);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }
        
        .file-info {
            font-size: 0.9rem;
            color: #666;
        }
        
        .selector {
            font-family: 'Atkinson Hyperlegible', monospace;
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--accent);
        }
        
        .comparison {
            display: flex;
            gap: 20px;
            align-items: stretch;
        }
        
        .color-box {
            flex: 1;
            border-radius: 8px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 120px;
            position: relative;
            border: 1px solid rgba(0,0,0,0.1);
        }
        
        .label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            opacity: 0.7;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        
        .sample-text {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .color-code {
            font-family: monospace;
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-top: 10px;
        }
        
        .badge-fail {
            background-color: #ffebee;
            color: #c62828;
        }
        
        .badge-pass {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        
        .arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #ccc;
        }
        
        footer {
            text-align: center;
            margin-top: 60px;
            font-size: 0.9rem;
            color: #555555;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>CM-Colors Report</h1>
            <div class="subtitle">Readability Fixes</div>
        </header>
        
        <main>
            ${cardsHtml}
        </main>
        
        <footer>
            Generated by CM-Colors
        </footer>
    </div>
</body>
</html>`;
    if (typeof process !== "undefined" && process.versions && process.versions.node) {
      try {
        import("fs").then((fs) => {
          fs.writeFileSync(outputPath, htmlContent, "utf-8");
        });
      } catch {
      }
    }
    return htmlContent;
  }
  var to_console = toConsole;
  var to_html = toHtml;
  var to_html_bulk = toHtmlBulk;

  // src/colors.js
  var Color = class {
    constructor(colorInput, backgroundContext = null) {
      this.original = colorInput;
      this.background_context = backgroundContext;
      this.backgroundContext = backgroundContext;
      this._rgb = null;
      this._error = null;
      this._parsed = false;
      this._format = "unknown";
      this._parse();
    }
    _parse() {
      if (this._parsed) return;
      try {
        this._format = detectColorFormat(this.original);
        let bgRgb = null;
        if (this.background_context && this.background_context.isValid) {
          bgRgb = this.background_context.rgb;
        }
        this._rgb = parseColorToRgb(this.original, bgRgb);
        this._parsed = true;
      } catch (e) {
        this._error = e.message;
        this._parsed = true;
      }
    }
    get is_valid() {
      return this._rgb !== null;
    }
    get isValid() {
      return this.is_valid;
    }
    get rgb() {
      return this._rgb;
    }
    get error() {
      return this._error;
    }
    get format() {
      return this._format;
    }
    to_hex() {
      if (!this.isValid) return null;
      const [r, g, b] = this._rgb;
      const hexR = r.toString(16).padStart(2, "0");
      const hexG = g.toString(16).padStart(2, "0");
      const hexB = b.toString(16).padStart(2, "0");
      return `#${hexR}${hexG}${hexB}`;
    }
    toHex() {
      return this.to_hex();
    }
    toString() {
      return this.toHex() || String(this.original);
    }
  };
  var ColorPair = class {
    constructor(textColor, bgColor, largeText = false) {
      this.bg = new Color(bgColor);
      this.text = new Color(textColor, this.bg);
      this.large = Boolean(largeText);
    }
    get is_valid() {
      return this.text.isValid && this.bg.isValid;
    }
    get isValid() {
      return this.is_valid;
    }
    get errors() {
      const errs = [];
      if (!this.text.isValid) errs.push(`Text: ${this.text.error}`);
      if (!this.bg.isValid) errs.push(`Background: ${this.bg.error}`);
      return errs;
    }
    get is_readable() {
      if (!this.isValid) return "Not Readable";
      const level = getWcagLevel(this.text.rgb, this.bg.rgb, this.large);
      if (level === "AAA") {
        return "Very Readable";
      } else if (level === "AA" || level === "AA Large") {
        return "Readable";
      } else {
        return "Not Readable";
      }
    }
    get isReadable() {
      return this.is_readable;
    }
    make_readable(mode = 1, very_readable = false, show = false, save_report = false) {
      if (typeof mode === "object" && mode !== null) {
        const opts = mode;
        mode = opts.mode !== void 0 ? opts.mode : 1;
        very_readable = opts.very_readable !== void 0 ? opts.very_readable : Boolean(opts.veryReadable);
        show = Boolean(opts.show);
        save_report = opts.save_report !== void 0 ? opts.save_report : Boolean(opts.saveReport);
      }
      if (!this.isValid) {
        return [null, false];
      }
      const premium = Boolean(very_readable);
      const [tunedRgbStr, success] = checkAndFixContrast(
        this.text._rgb,
        this.bg._rgb,
        this.large,
        mode,
        premium
      );
      let result = [tunedRgbStr, success];
      if (tunedRgbStr) {
        try {
          const c = new Color(tunedRgbStr);
          if (c.isValid) {
            const formattedColor = formatColor(c.rgb, this.text._format);
            result = [formattedColor, success];
          }
        } catch {
        }
      }
      const [tunedColor] = result;
      if (show || save_report) {
        const originalLevel = getWcagLevel(this.text.rgb, this.bg.rgb, this.large);
        let newLevel = "FAIL";
        if (tunedColor) {
          try {
            const cTuned = new Color(String(tunedColor));
            if (cTuned.isValid) {
              newLevel = getWcagLevel(cTuned.rgb, this.bg.rgb, this.large);
            }
          } catch {
          }
        }
        if (show) {
          const fgHex = this.text.toHex();
          const bgHex = this.bg.toHex();
          let tunedHex = tunedColor;
          if (Array.isArray(tunedColor) && tunedColor.length === 3) {
            const [r, g, b] = tunedColor;
            tunedHex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
          } else {
            try {
              const c = new Color(String(tunedColor));
              if (c.isValid) tunedHex = c.toHex();
            } catch {
            }
          }
          if (typeof fgHex === "string" && typeof tunedHex === "string" && fgHex.toLowerCase() === tunedHex.toLowerCase()) {
            console.log("Colors are already accessible. No changes needed.");
          } else {
            toConsole(fgHex, bgHex, tunedHex, originalLevel, newLevel);
          }
        }
        if (save_report) {
          const pairData = {
            fg: this.text.isValid ? rgbintToString(this.text.rgb) : "Invalid",
            bg: this.bg.isValid ? rgbintToString(this.bg.rgb) : "Invalid",
            tuned_fg: String(tunedColor),
            original_level: originalLevel,
            new_level: newLevel,
            selector: "Manual Check",
            file: "JS API"
          };
          const reportPath = toHtmlBulk([pairData], "cm_colors_quick_report.html");
          console.log(`Report generated: ${reportPath}`);
        }
      }
      return result;
    }
    makeReadable(mode = 1, veryReadable = false, show = false, saveReport = false) {
      return this.make_readable(mode, veryReadable, show, saveReport);
    }
  };

  // src/cmColors.js
  function makeReadableBulk(pairs, mode = 1, veryReadable = false, saveReport = false) {
    if (typeof mode === "object" && mode !== null) {
      const opts = mode;
      mode = opts.mode !== void 0 ? opts.mode : 1;
      veryReadable = opts.veryReadable !== void 0 ? opts.veryReadable : Boolean(opts.very_readable);
      saveReport = opts.saveReport !== void 0 ? opts.saveReport : Boolean(opts.save_report);
    }
    const results = [];
    const reportData = [];
    for (let i = 0; i < pairs.length; i++) {
      const item = pairs[i];
      let text, bg, large = false;
      if (Array.isArray(item)) {
        if (item.length === 3) {
          [text, bg, large] = item;
        } else {
          [text, bg] = item;
        }
      } else if (item && typeof item === "object") {
        text = item.text || item.text_color || item.fg;
        bg = item.bg || item.bg_color;
        large = Boolean(item.large || item.large_text);
      }
      const pair = new ColorPair(text, bg, large);
      if (!pair.isValid) {
        results.push([text, "invalid color"]);
        continue;
      }
      const [tunedColor] = pair.makeReadable(mode, veryReadable);
      const originalLevel = getWcagLevel(pair.text.rgb, pair.bg.rgb, large);
      let newLevel = "FAIL";
      if (tunedColor) {
        const newPair = new ColorPair(tunedColor, bg, large);
        const currentReadability = newPair.isReadable.toLowerCase();
        try {
          const cTuned = new Color(String(tunedColor));
          if (cTuned.isValid) {
            newLevel = getWcagLevel(cTuned.rgb, pair.bg.rgb, large);
          }
        } catch {
        }
        results.push([tunedColor, currentReadability]);
      } else {
        const currentReadability = pair.isReadable.toLowerCase();
        newLevel = originalLevel;
        results.push([text, currentReadability]);
      }
      if (saveReport) {
        let fgStr = String(text);
        let bgStr = String(bg);
        if (Array.isArray(text) && pair.text.isValid) {
          fgStr = rgbintToString(pair.text.rgb);
        }
        if (Array.isArray(bg) && pair.bg.isValid) {
          bgStr = rgbintToString(pair.bg.rgb);
        }
        let tunedFgStr = fgStr;
        if (tunedColor) {
          if (Array.isArray(tunedColor)) {
            tunedFgStr = rgbintToString(tunedColor);
          } else {
            tunedFgStr = String(tunedColor);
          }
        }
        reportData.push({
          fg: fgStr,
          bg: bgStr,
          tuned_fg: tunedFgStr,
          original_level: originalLevel,
          new_level: newLevel,
          selector: `Pair ${i + 1}`,
          file: "Bulk API"
        });
      }
    }
    if (saveReport && reportData.length > 0) {
      const reportPath = toHtmlBulk(reportData, "cm_colors_bulk_report.html");
      console.log(`Report generated: ${reportPath}`);
    }
    return results;
  }
  var make_readable_bulk = makeReadableBulk;

  // src/index.js
  var version = "1.1.0";
  var __version__ = "1.1.0";
  function makeReadable(textColor, bgColor, options = {}) {
    const large = options.large || false;
    const pair = new ColorPair(textColor, bgColor, large);
    const [fixedColor, success] = pair.makeReadable(options);
    return {
      fixedColor,
      success,
      isReadable: pair.isReadable,
      pair
    };
  }
  var make_readable = makeReadable;
  var getContrast = calculateContrastRatio;
  var getContrastRatio = calculateContrastRatio;
  var index_default = {
    version,
    __version__,
    Color,
    ColorPair,
    makeReadableBulk,
    make_readable_bulk,
    makeReadable,
    make_readable,
    CSS_NAMED_COLORS,
    hexToRgb,
    rgbToHex,
    rgbToOklch,
    oklchToRgb,
    rgbToXyz,
    xyzToLab,
    rgbToLab,
    rgbToHsl,
    hslToRgb,
    hslaToRgb,
    rgbToHsla,
    rgbaToRgb,
    rgbintToString,
    parseColorToRgb,
    detectColorFormat,
    formatColor,
    calculateRelativeLuminance,
    calculateContrastRatio,
    getContrastLevel,
    getWcagLevel,
    calculateDeltaE2000,
    deltaE,
    binarySearchLightness,
    gradientDescentOklch,
    generateAccessibleColor,
    checkAndFixContrast,
    toConsole,
    toHtml,
    toHtmlBulk
  };
  return __toCommonJS(index_exports);
})();
/**
 * CM-Colors JS (v1.1.0)
 * Accessible Color Science Library ported from Python cm-colors.
 * Automatically fix colors to be WCAG readable with minimal visual change.
 * 100% full parity with PyPI cm-colors 1.1.0.
 *
 * @license GPL-3.0
 * @author Lalitha A R <https://isrl.in/>
 */
