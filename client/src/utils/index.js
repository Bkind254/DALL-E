import { surpriseMePrompts } from "../constants";

export function getRandomprompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomprompts(prompt);

  return randomPrompt;
}
