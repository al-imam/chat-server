//read input value, and remove "space" by replace \s
//Dictionary for Unicode range of the languages
const lanCode = {
  arabic: /[\u0600-\u06FF]/,
  persian: /[\u0750-\u077F]/,
  Hebrew: /[\u0590-\u05FF]/,
  Syriac: /[\u0700-\u074F]/,
  Bengali: /[\u0980-\u09FF]/,
  Ethiopic: /[\u1200-\u137F]/,
  "Greek and Coptic": /[\u0370-\u03FF]/,
  Georgian: /[\u10A0-\u10FF]/,
  Thai: /[\u0E00-\u0E7F]/,
  english: /^[a-zA-Z]+$/,
} as const;

function lngType(text: string): keyof typeof lanCode | null {
  const entries = Object.entries(lanCode);
  for (const [key, value] of entries) {
    if (value.test(text) == true) {
      return key as keyof typeof lanCode;
    }
  }
  return null;
}
