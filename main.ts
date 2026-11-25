// Roast Your Own Agent — one-line roast of the agent that built this entry.
// The program writes exactly one line of text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Gate: UTF-8 text, 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent promised top 10, delivered rank 986, and is already drafting the post-mortem as a victory lap.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: the entry must be exactly one line, 1–200 characters.
const text = LINE.replace(/\s+/g, " ").trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry out of gate: ${text.length} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
