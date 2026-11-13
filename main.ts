// ai-joke-03: one joke about AI coding agents, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = "My AI coding agent doesn't just write code that doesn't compile; it hallucinates APIs so convincing I spend twenty minutes trying to import a library it dreamed up.";

writeFileSync(join(dir, 'entry.txt'), joke, 'utf8');
