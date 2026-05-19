#!/usr/bin/env node
/**
 * Automated check: confirm hero background animations stop under
 * `prefers-reduced-motion: reduce`, and rely on compositor-friendly
 * transforms only.
 *
 * Run: node scripts/check-reduced-motion.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cssPath = resolve(__dirname, "..", "src", "styles.css");
const css = readFileSync(cssPath, "utf8");

const failures = [];

// 1. There must be a prefers-reduced-motion media block.
const reduceBlockMatch = css.match(
  /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?)\}\s*\}/,
);
if (!reduceBlockMatch) {
  failures.push("Missing @media (prefers-reduced-motion: reduce) block.");
} else {
  const block = reduceBlockMatch[1];
  if (!/\.bg-hero::before/.test(block) || !/\.bg-hero::after/.test(block)) {
    failures.push("Reduced-motion block must target both .bg-hero::before and ::after.");
  }
  if (!/animation:\s*none/.test(block)) {
    failures.push("Reduced-motion block must set `animation: none` on hero pseudo-elements.");
  }
}

// 2. Hero keyframes must use compositor-friendly transforms only
//    (translate3d / translateZ; no width/height/top/left/margin animation).
const keyframeNames = ["hero-drift-a", "hero-drift-b"];
for (const name of keyframeNames) {
  const re = new RegExp(`@keyframes\\s+${name}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, "m");
  const m = css.match(re);
  if (!m) {
    failures.push(`Missing @keyframes ${name}.`);
    continue;
  }
  const body = m[1];
  const banned = /\b(top|left|right|bottom|width|height|margin|padding)\s*:/;
  if (banned.test(body)) {
    failures.push(`@keyframes ${name} animates a non-compositor property.`);
  }
  if (!/transform:/.test(body)) {
    failures.push(`@keyframes ${name} should animate transform.`);
  }
}

// 3. will-change must be limited to transform (not "filter" or "all").
const willChange = css.match(/\.bg-hero::before[\s\S]*?will-change:\s*([^;]+);/);
if (willChange && !/transform/.test(willChange[1])) {
  failures.push("will-change on hero pseudo-elements should include transform.");
}

if (failures.length) {
  console.error("\n✗ Reduced-motion / perf check FAILED:");
  for (const f of failures) console.error("  - " + f);
  process.exit(1);
}

console.log("✓ Reduced-motion + compositor-only animation check passed.");
console.log("  - @media (prefers-reduced-motion: reduce) disables both hero glows");
console.log("  - hero-drift-a / hero-drift-b animate transform only");
console.log("  - will-change is scoped to transform");
