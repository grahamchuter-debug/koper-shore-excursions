#!/usr/bin/env node
/**
 * Download Slovenia imagery from Wikimedia Commons (CC-licensed).
 * Run: node scripts/download-images.mjs
 */
import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import { join } from "path";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });
const UA = "slovenia-from-koper/1.0 (image fetch; contact webmaster)";

/** 1920px Commons thumbnails — verified via Wikimedia API, July 2026. */
const SLOVENIA_IMAGES = {
  "hero-home.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Beautiful_turquoise_Lake_Bled_%2848701529738%29.jpg/1920px-Beautiful_turquoise_Lake_Bled_%2848701529738%29.jpg",
  "og-default.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Praetor_Palace_in_Koper_at_sunrise.JPG/1920px-Praetor_Palace_in_Koper_at_sunrise.JPG",
  "cruise-port.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cruise_ship_approaching_Koper_at_dawn.JPG/1920px-Cruise_ship_approaching_Koper_at_dawn.JPG",
  "planner.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cruise_ship_approaching_Koper_at_dawn.JPG/1920px-Cruise_ship_approaching_Koper_at_dawn.JPG",
  "koper.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Koper_-_Pretorska_pala%C4%8Da_%2853634284886%29.jpg/1920px-Koper_-_Pretorska_pala%C4%8Da_%2853634284886%29.jpg",
  "old-town.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/View_towards_San_Maco_hill.jpg/1920px-View_towards_San_Maco_hill.jpg",
  "piran.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tartini_Square_in_Piran.jpg/1920px-Tartini_Square_in_Piran.jpg",
  "harbour.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Piran_Tartini_square_from_cathedral.jpg/1920px-Piran_Tartini_square_from_cathedral.jpg",
  "lake-bled.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Beautiful_turquoise_Lake_Bled_%2848701529738%29.jpg/1920px-Beautiful_turquoise_Lake_Bled_%2848701529738%29.jpg",
  "postojna.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/01_Grotte_de_Postojna_%2818%29_%2834197157582%29.jpg/1920px-01_Grotte_de_Postojna_%2818%29_%2834197157582%29.jpg",
  "predjama.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Predjama_Castle.jpg/1920px-Predjama_Castle.jpg",
  "istria.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/f/f7/Motovun_-_Istra_View_Apple_and_grape_-_panoramio.jpg",
  "relaxed.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Praetor_Palace_in_Koper_at_sunrise.JPG/1920px-Praetor_Palace_in_Koper_at_sunrise.JPG",
  "highlights.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bled_Castle%2C_Lake_Bled%2C_Slovenia_8-30-2022_%2829%29_%2852679543251%29.jpg/1920px-Bled_Castle%2C_Lake_Bled%2C_Slovenia_8-30-2022_%2829%29_%2852679543251%29.jpg",
  "comparison.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Piran_Tartini_square_from_cathedral.jpg/1920px-Piran_Tartini_square_from_cathedral.jpg",
  "port-day.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/2005_-_08_Koper_01.jpg/1920px-2005_-_08_Koper_01.jpg",
};

const ALLOWED = new Set([
  ...Object.keys(SLOVENIA_IMAGES),
  "logo-mark.svg",
  "favicon.ico",
]);

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error("file too small");
  return buf;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadWithRetry(url, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await download(url);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await sleep(3000 + i * 2000);
    }
  }
  throw new Error("unreachable");
}

async function main() {
  for (const name of readdirSync(OUT)) {
    if (!ALLOWED.has(name)) {
      unlinkSync(join(OUT, name));
      console.log(`removed orphan ${name}`);
    }
  }

  const cache = new Map();
  let failed = 0;

  for (const [file, url] of Object.entries(SLOVENIA_IMAGES)) {
    try {
      if (!cache.has(url)) {
        cache.set(url, await downloadWithRetry(url));
        await sleep(1500);
      }
      writeFileSync(join(OUT, file), cache.get(url));
      console.log(`✓ ${file}`);
    } catch (e) {
      console.error(`✗ ${file}: ${e.message}`);
      failed++;
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} image(s) failed`);
    process.exit(1);
  }
  console.log("\nAll Slovenia images downloaded.");
}

main();
