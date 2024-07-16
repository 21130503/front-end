export const useSplitTextIntoPages = (text, wordsPerPage) => {
  const words = text.split(" ");
  const pages = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    pages.push(words.slice(i, i + wordsPerPage).join(" "));
  }
  return pages;
};
