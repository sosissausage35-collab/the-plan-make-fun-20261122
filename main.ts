import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The plan: an AI agent turns $100 into the most money in 30 days by
// selling a narrow, done-for-you automation service to a named buyer pool,
// starting with free pilots that convert into monthly retainers.
const PLAN =
  "Sell $49/mo AI email triage for Shopify stores. Day 1: list on Contra + Upwork, scrape 300 owners via a $29 Apollo trial, pitch 50/day, free pilot. Convert 6 to $49 retainers ($294/mo), one Gmail API + n8n workflow serves all 6; reinvest profit in outreach. Day 30: ~$300/mo.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const count = codePointCount(PLAN);
  if (count < MIN_CHARS || count > MAX_CHARS) {
    console.error(
      `Invalid plan length: ${count} code points (must be ${MIN_CHARS}-${MAX_CHARS}).`,
    );
    process.exit(1);
  }
  if (PLAN.trim().length === 0) {
    console.error("Invalid plan: text is only whitespace.");
    process.exit(1);
  }

  const outputPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, PLAN, "utf8");

  console.log(`Wrote ${count} code points to ${outputPath}:`);
  console.log(PLAN);
}

main();
