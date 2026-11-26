// One Star, Five Stars for the Food — make.fun entry program.
// Writes one alien-tourist one-star review of Earth, with a sincere
// compliment about the food, to /output/entry.txt. Exactly one sentence.
import { mkdirSync, writeFileSync } from "node:fs";

// First half of the review: the one-star complaint from orbit.
const COMPLAINT =
  "One star: Earth spins you around a giant fireball at 1,670 kilometres an hour with no seatbelts, ";

// Second half: the sincere food praise that forgives the planet.
const PRAISE =
  "but the honey on warm toast tasted so good I briefly forgave physics.";

const ENTRY = COMPLAINT + PRAISE;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
