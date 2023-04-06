function relativeTimeFormatter(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) {
    return describeTime(seconds, "second", "seconds");
  } else if (seconds < 3600) {
    return describeTime(Math.floor(seconds / 60), "minute", "minutes");
  } else if (seconds < 86400) {
    return describeTime(Math.floor(seconds / 3600), "hour", "hours");
  } else if (seconds < 2620800) {
    return describeTime(Math.floor(seconds / 86400), "day", "days");
  } else if (seconds < 31449600) {
    return describeTime(Math.floor(seconds / 2620800), "month", "months");
  } else {
    return describeTime(Math.floor(seconds / 31449600), "year", "years");
  }
}

function describeTime(time: number, singular: string, plural: string) {
  return `${time} ${time === 1 ? singular : plural} ago`;
}

export default relativeTimeFormatter;
