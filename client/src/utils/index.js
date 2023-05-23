import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomePrompt = surpriseMePrompts[randomIndex];

    if(randomePrompt === prompt) return getRandomPrompt(prompt);
    return randomePrompt;
}