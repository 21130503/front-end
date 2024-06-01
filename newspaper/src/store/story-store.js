import { create } from "zustand";
import { imgRegex, linkRegex } from "../utils/regex";
const useStory = create((set) => ({
  imageStory: "ac",
  linkStory: "",
  title: "",
  setData(news) {
    console.log(news);
    set((state) => ({
      imageStory:
        imgRegex.exec(news?.content)?.[1] ||
        "https://images.giaoducthoidai.vn/650x365/Uploaded/2024/obflukc/2024_05_31/co-che-dac-thu-2676.jpeg",
      linkStory: linkRegex.exec(news?.content)?.[1],
      title: news.title,
    }));
  },
}));
export default useStory;
