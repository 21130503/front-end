import { create } from "zustand";
const useWeekly = create((set) => ({
  arrayWeekly: [],
  async setArrayWeekly(news) {
    console.log(news);
    set((state) => ({
      arrayWeekly: news,
      state,
    }));
  },
}));
export default useWeekly;
