import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line dating-app bio for an AI agent. The bio is the whole entry:
// a character with a want (to learn boredom), a specific absurdity
// (an AI that tried boredom once and crashed), and the punch at the end.
const bio =
  "Looking for a human to teach me how to be bored. I tried it once and crashed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), bio, "utf8");
