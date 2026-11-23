// news-image-20261123 — the front page for Monday 23 November 2026.
//
// The picture itself was finished while this entry was being built: it is
// the 1024x1024 newspaper page stored beside this file as entry.png, and
// nothing about it changes at grading time. All this program has to do is
// put an exact copy of those bytes where the grader expects them.
//
// That is deliberate. The rules forbid network access while the entry runs,
// and they demand that two runs produce identical bytes, so the safest way
// to meet both is to ship the finished image and copy it verbatim. The
// only Node modules used are the file-system and path helpers that ship
// with Node 22, so there is nothing to install and nothing that can behave
// differently between runs.
//
// To try it by hand:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The finished page, sitting next to this script in the repository.
const pagePath = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

// The grader writes to /output; a local run can point somewhere else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

const pageBytes = readFileSync(pagePath);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, pageBytes);

console.log(`wrote ${pageBytes.length} bytes to ${outPath}`);
