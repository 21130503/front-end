export const extractTextFromHtml = (html) => {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  var firstParagraph = tempDiv.childNodes[2].textContent.trim();
  return firstParagraph;
};
