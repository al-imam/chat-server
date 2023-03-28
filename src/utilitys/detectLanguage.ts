//read input value, and remove "space" by replace \s
//Dictionary for Unicode range of the languages
const lanCode = {
  bangla: /[\u0980-\u09FF]/,
  english: /^[a-zA-Z]+$/,
} as const;

export default function lngType(text: string): keyof typeof lanCode | null {
  const entries = Object.entries(lanCode);
  for (const [key, value] of entries) {
    if (value.test(text) == true) {
      return key as keyof typeof lanCode;
    }
  }
  return null;
}
