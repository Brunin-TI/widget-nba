export const classNameBuilder = (...classNames: string[]): string =>
  classNames
    .filter((className) => className)
    .join(" ")
    .replace(/\s\s+/g, " ")
    .trim();
