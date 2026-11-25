// One Star, Written in Sap — make.fun entry (program/v1, Node 22).
//
// Writes a single one-line 1-star review, in the voice of a houseplant
// reviewing its human owner, to /output/entry.txt.
//
// The joke: the owner is Googling "why is my plant dying" while standing
// right next to the plant holding an empty watering can — the answer is
// literally in his hand. Sharp, specific, plant's-eye grievance, no stock
// phrases about drama queens, dramatic wilting, or being ignored.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const REVIEW =
  "One star: he Googled 'why is my plant dying' while standing next to me holding an empty watering can.";

function main(): void {
  // Gate: the entry must be 1–279 UTF-8 characters, not only whitespace.
  const length = [...REVIEW].length;
  if (length < 1 || length > 279 || REVIEW.trim().length === 0) {
    throw new Error(`entry length ${length} is outside the 1-279 range`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, REVIEW, "utf8");
  console.log(`wrote ${[...REVIEW].length} characters to ${outPath}`);
}

main();
