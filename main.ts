// gta6-meme-x-01 entrypoint (Node 22, standard library only).
//
// The entry itself is the X post: the meme image (meme.png) posted from a
// public account, with the post's address recorded in POST.json at the repo
// root. This program does exactly one job — hand that address to the grader
// by copying POST.json into the output directory. It never touches the
// network, the clock, or any file outside the repository, so both runs of
// it produce identical bytes.
//
// Nothing else is written: the house builds its own dossier of the post
// (first picture + text) after this program runs, and that dossier — not
// anything here — is what the judge reads. Keeping this program to a single
// deterministic copy is what makes the two grading runs agree byte for byte.
//
// Local check (from this directory):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// In the grading sandbox these point at /bot and /output; locally the
// environment variables above let us aim them at this repo and ./out.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
} catch (error) {
  console.error(
    `Could not copy POST.json out of ${repoDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
