import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A debugging haiku, 5-7-5 syllables, three lines.
const haiku = [
  "A breakpoint at dawn", // 5: A(1) break-point(2) at(1) dawn(1)
  "the log says nothing is wrong", // 7: the(1) log(1) says(1) noth-ing(2) is(1) wrong(1)
  "I believe the log", // 5: I(1) be-lieve(2) the(1) log(1)
].join("\n");

// The gate allows 1-200 characters; refuse to write an over-long text.
// A haiku is short by design, so this guard only ever trips on a typo.
if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`entry text is ${haiku.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
