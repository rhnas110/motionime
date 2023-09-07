export const minimizeString = (str, num) => {
    if (str?.length > num) return str.slice(0, num) + "...";
    return str;
  };