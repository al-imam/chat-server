import badWords from "./badWords";

function checkProfanity(text: string) {
  return badWords.some((word) => text.includes(word));
}

export default checkProfanity;
