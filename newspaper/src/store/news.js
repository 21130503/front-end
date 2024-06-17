import { create } from "zustand";

export const useNews = create((set) => ({
  news: null,
  async setNews(news) {
    set((state) => ({
      ...state,
      news: news,
    }));
  },
}));
