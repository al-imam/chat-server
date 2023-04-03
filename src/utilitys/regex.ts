function startWith(ex: string) {
  return `^${ex}`;
}

function endWith(ex: string) {
  return `${ex}$`;
}

function letter({ lowerCase = true, upperCase = true, range = "{1,}" } = {}) {
  return `[${lowerCase ? "a-z" : ""}${upperCase ? "A-Z" : ""}]${range}`;
}

function word({ underscore = false, haveDot = false } = {}) {
  if (haveDot)
    return wordWithHaveDots({ underscore, acceptEndWithNumber: true });
  return `[a-zA-Z9-0${underscore ? "_" : ""}]`;
}

function wordWithHaveDots({
  underscore = false,
  acceptEndWithNumber = false,
  range = "{0,}",
} = {}) {
  return `(${escape(".")}[a-zA-Z0-9${underscore ? "_" : ""}]+)*${
    acceptEndWithNumber ? `[a-zA-Z0-9]${range}` : ""
  }`;
}

function mustHave(ex: string) {
  return ex;
}

function range({ min = 2, max = 5 } = {}) {
  return `{${min},${max}}`;
}

function escape(ex: string) {
  return `\\${ex}`;
}

const emailRegex = new RegExp(
  startWith(letter()) +
    word({ haveDot: true }) +
    mustHave("@") +
    letter({
      lowerCase: true,
      upperCase: false,
      range: range({ min: 2, max: 10 }),
    }) +
    mustHave(escape(".")) +
    endWith(
      letter({
        lowerCase: true,
        upperCase: false,
        range: range({ min: 2, max: 7 }),
      })
    )
);

export default emailRegex;
