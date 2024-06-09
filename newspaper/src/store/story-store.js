import { create } from "zustand";
import { imgRegex, linkRegex } from "../utils/regex";
const useStory = create((set) => ({
  imageStory: "ac",
  linkStory: "",
  title: "",
  setData(news) {
    console.log(news);
    set((state) => ({
      imageStory: imgRegex.exec(news?.content)?.[1],
      linkStory: linkRegex.exec(news?.content)?.[1],
      title: news.title,
    }));
  },
}));
export default useStory;
