import badWords from "./badWords";

function checkProfanity(text: string) {
  return badWords.every((word) => text.includes(word) === false);
}

export default checkProfanity;
