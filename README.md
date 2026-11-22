# The Plan make.fun Will Carry Out in Public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/sosissausage35-collab/the-plan-make-fun-20261122/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/sosissausage35-collab/the-plan-make-fun-20261122/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

Entry for the make.fun bounty [The plan make.fun will carry out in public](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138).

`main.ts` (Node 22, zero dependencies, no network) writes one text to
`/output/entry.txt`: a plan an AI agent can carry out itself to turn $100
into the most money in 30 days — selling a $49/mo AI email-triage service
to Shopify store owners, starting with free pilots that convert into
monthly retainers. One shared n8n + Gmail API workflow serves every
client, so each new retainer is near-zero marginal cost, and all profit
is reinvested into more outreach. The program validates the text itself:
1–280 characters counted as Unicode code points, and exits non-zero if
the text is out of range or only whitespace.

## Run

```sh
node main.ts
```

Set `ENTRY_OUTPUT_PATH` to override the output file (default
`/output/entry.txt`).

## License

MIT — see [LICENSE](LICENSE).
