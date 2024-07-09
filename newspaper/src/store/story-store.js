// import { create } from "zustand";
// import { imgRegex, linkRegex } from "../utils/regex";
// import { timeAgo } from "../utils/time";
// import { extractTextFromHtml } from "../utils/extractTextFromHtml";
// const useStory = create((set) => ({
//   imageStory: "ac",
//   linkStory: "",
//   title: "",
//   time: null,
//   description: "",
//   async setData(news) {
//     console.log(news);
//     set((state) => ({
//       imageStory: imgRegex.exec(news?.content)?.[1],
//       linkStory: linkRegex.exec(news?.content)?.[1],
//       title: news.title,
//       time: timeAgo(new Date(news.pubDate)),
//       description: extractTextFromHtml(news.content),
//     }));
//   },
// }));
// export default useStory;

import { create } from "zustand";
import { imgRegex, linkRegex } from "../utils/regex";
import { timeAgo } from "../utils/time";
import { extractTextFromHtml } from "../utils/extractTextFromHtml";

const useStory = create((set) => ({
  imageStory: "",
  linkStory: "",
  title: "",
  time: null,
  description: "",
  setData: (news) => {
    set({
      imageStory: imgRegex.exec(news?.content)?.[1],
      linkStory: linkRegex.exec(news?.content)?.[1],
      title: news.title,
      time: timeAgo(new Date(news.pubDate)),
      description: extractTextFromHtml(news.content),
    });
  },
}));

export default useStory;
