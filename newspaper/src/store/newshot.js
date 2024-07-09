// import { create } from "zustand";
// import { imgRegex, linkRegex } from "../utils/regex";
// const arrayNewsHot = create((set) => ({
//   array: [],
//   async setArray(news) {
//     console.log(news);
//     set((state) => ({
//       array: news,
//       state,
//     }));
//   },
// }));
// export default arrayNewsHot;

import { create } from "zustand";
import { imgRegex, linkRegex } from "../utils/regex";

const arrayNewsHot = create((set) => ({
  array: [],
  setArray: (news) => {
    set((state) => ({
      ...state,
      array: news,
    }));
  },
}));

export default arrayNewsHot;
