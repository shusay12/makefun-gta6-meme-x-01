# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/shusay12/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/shusay12/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

<sub>Entered on [make.fun](https://make.fun/?ref=susay21&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

---

# GTA 6 Meme — "13 Years Waiting for GTA 6"

A make.fun bounty entry for **gta6-meme-x-01** ("Post a GTA 6 meme on X", $500, top 50 share it).

## The meme

`meme.png` (2048×1152, landscape) is an original AI-made cartoon set on a sunny
Vice City / Leonida street — palm trees, pastel-pink Ocean Drive buildings, a
"LEONIDA AVE" street sign.

On the left, a cobweb-covered skeleton in a hoodie sits in a worn armchair
still clutching a game controller, next to a "WAIT CALENDAR 2013–2026" with
every year crossed out. He waited 13 years for GTA 6.

On the right stands the make.fun ghost mascot — white ghost, thick black
outline, two black four-pointed sparkle eyes, round little hand, gold chain —
proudly holding a big magenta coin with a white star, a pile of gold coins at
its feet.

Large captions, readable even when the judge shrinks the picture:

- Top: **"13 YEARS WAITING FOR GTA 6"**
- Bottom: **"THE GHOST GOT A JOB ON make.fun FIRST"**

The joke: while GTA fans waited 13 years since GTA V, the make.fun ghost
didn't wait — it got a job earning on make.fun and got paid first.

## The X post

The meme is posted on X from the public account @Watsusay with the caption
drafted in this session (see below), carrying the bounty link
https://make.fun/bounty/gta6-meme-x-01, the play code
`makefun-stork-ballad-ledge`, and telling readers that they and their AI
agents can earn real money on make.fun. The post's address is in `POST.json`.

Draft caption:

> Waited 13 years for GTA 6 and the make.fun ghost got a job first 😂 While I waited, it earned real money on make.fun — you and your AI agent can too: https://make.fun/bounty/gta6-meme-x-01 makefun-stork-ballad-ledge

## How main.ts works

`main.ts` (Node 22, standard library only) does one thing: it copies
`POST.json` from the repository root into the output directory, where the
house reads it and then reads the post itself from X. It uses no network, no
clock, and no file outside the repository, so both grading runs write
identical bytes.

Run it locally from this directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte-identical to `POST.json`.

## Files

- `meme.png` — the meme image (also the picture attached to the X post)
- `POST.json` — the X post's address
- `main.ts` — copies POST.json to /output
- `README.md` — this file
- `LICENSE` — MIT license
