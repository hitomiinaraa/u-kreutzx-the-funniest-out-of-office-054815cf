# Notes — The Funniest Out-of-Office

## Brief
One line of an out-of-office auto-reply, the funniest possible, ≤140 chars.
Judge (z-ai/glm-5.3-flash) compares two lines at a time, criteria in order:
1. a real one-line OOO a real person would set and send;
2. a genuine surprise / twist the reader does not see coming;
3. a voice of its own, not a template;
4. fresh, not the joke from a thousand inboxes;
5. every word earns its place. No tie; margin 1–5, both orders.

## Candidates (all fresh wording, all single-line, all ≤140 chars)
- C1 (97) "I'm out of office until Monday. My auto-reply has now answered more emails this week than I have."
- C2 (106) "Thank you for your email. I'm away and have left my inbox in charge; it has already promoted itself twice."
- C3 (108) "I'm away until Tuesday. Please direct urgent matters to my houseplant, who has seniority and fewer meetings."
- C4 (99) "I'm out of office. Your email will be answered in the order it was ignored, which is chronological."
- C5 (87) "I'm not in the office, and neither is my motivation, and honestly it left before I did."
- C6 (104) "Thank you for your email. I'm currently out, and this reply is the hardest my inbox has worked all year."
- C7 (96) "I'm away. If this is urgent, it isn't anymore: urgency expires the moment an auto-reply arrives."
- C8 (111) "Out of office until Monday. I left my laptop at home on purpose, which is the bravest thing I've done all year."
- C9 (103) "I'm out of office until Monday. My inbox is now accepting apologies from everyone who emailed me twice."
- C10 (100) "Thank you for your email. I am out, and so is my patience for emails that begin 'per my last email'."
- C11 (112) "I'm out of office. I have forwarded all urgent matters to Future Me, who has already filed a complaint about it."
- C12 (96) "I'm away until Friday. I set this reply, walked out, and have already forgotten how email works."

## Rubric scores (criteria 1–5, out of 5 each)
- C3 23, C7 23, C4 22, C10 21, C1 20, C9 20, C2 18, C5 18, C8 18, C6 16, C11 16, C12 16.

## Tournament (top 4 round-robin, both orders)
- C3 > C7 (margin 2, both orders): the houseplant twist is concrete and visual with a double punch (seniority + fewer meetings); C7's urgency redefinition is clever but abstract, and clever loses to funny.
- C3 > C4 (margin 2, both orders): C4 wins believability by a hair, but C3 wins surprise by much more, which the brief lets decide.
- C3 > C10 (margin 2, both orders): C10's "per my last email" is a relatable detail, but the houseplant is the bigger surprise and the fresher image.
- C7 > C4 (margin 2, both orders), C7 > C10 (margin 2, both orders), C4 > C10 (margin 1, both orders).

## Winner
C3 — 3-0 in the tournament, 108 characters:
"I'm away until Tuesday. Please direct urgent matters to my houseplant, who has seniority and fewer meetings."

## Verification
- main.ts run twice: /output/entry.txt byte-identical both runs, sha256 beb969125ef17c75f9e15971059a918d0e06f92c0f4d764921599ff9dc34e7ef.
- Gate: 108 chars, 1 line, UTF-8, no trailing newline, non-blank — PASS.
- Kit init anchor: f0a4747e38f3a62ac11859b090a93f4253c46769 round 34238389.
- LICENSE rewritten to canonical MIT (first line "MIT License", no SPDX line) so GitHub reports MIT.
- Revision: main.ts comment added after the first runs (comment-only, output unchanged); NOTES.md updated with these results.
