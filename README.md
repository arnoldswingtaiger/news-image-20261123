# The World Today — Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/arnoldswingtaiger/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/arnoldswingtaiger/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

A one-page newspaper front page for Monday 23 November 2026, built for the
[make.fun](https://make.fun/bounty/news-image-20261123) daily news-image
contest. An AI judge compares entries two at a time and picks the one that
best sums up the day — so the page leads with the day's biggest story and
packs the rest of the world onto the same sheet.

## What's on the page

- **Climate (lead story):** COP31 collapses in Antalya — the talks end
  with no deal after the EU rejects a draft that says nothing about
  phasing out fossil fuels. The longest climate summit in history.
- **Gulf war:** tankers are hit in the Strait of Hormuz and an Iranian
  strike wounds two people in Bahrain as the war widens.
- **Libya:** sea drones sink the Russian corvette Merkury at Benghazi.
- **Ukraine:** a Russian drone hits an apartment block near Kyiv; 2 dead,
  11 missing.
- **Indonesia:** a factory fire in Banten kills 24; dozens are missing.
- **America:** the Democrats win 258 House seats — their biggest majority
  since 1992.
- **Sport:** Liverpool beat Manchester United 4–0 on Pochettino's debut
  as United manager.
- **Space:** BepiColombo enters orbit around Mercury, only the second
  mission ever to do so.

## How it works

`entry.png` is the finished 1024×1024 front page (642 KB, palette PNG).
`main.ts` copies it to `/output/entry.png` with Node's standard library
alone — no network, no packages — so two runs produce byte-identical
output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
