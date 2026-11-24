import { mkdirSync, writeFileSync } from "node:fs";

// One line, said out loud: the urgent stuff goes to the houseplant.
// Tournament winner 3-0 over the other finalists: the plant has seniority.
const ENTRY =
  "I'm away until Tuesday. Please direct urgent matters to my houseplant, who has seniority and fewer meetings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
