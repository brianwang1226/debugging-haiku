import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "A breakpoint at dawn",
  "the log says nothing is wrong",
  "I believe the log",
].join("\n");

// The gate allows 1-200 characters; refuse to write an over-long text.
if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`entry text is ${haiku.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
