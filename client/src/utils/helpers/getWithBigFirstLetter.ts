export const getWithBigFirstLetter = (str: string) => {
  const firstLetter = str[0].toLocaleUpperCase();

  return `${firstLetter}${str.slice(1)}`;
};
