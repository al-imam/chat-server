function relativeTimeFormatter(date: Date) {
  const seconds = (Date.now() - date.getTime()) * 1000;

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} minutes ago`;
  } else if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} hours ago`;
  } else if (seconds < 2620800) {
    return `${Math.floor(seconds / 86400)} days ago`;
  } else if (seconds < 31449600) {
    return `${Math.floor(seconds / 2620800)} months ago`;
  } else {
    return `${Math.floor(seconds / 31449600)} years ago`;
  }
}

export default relativeTimeFormatter;
