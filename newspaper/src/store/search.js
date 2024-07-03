import { create } from "zustand";

export const useSearch = create((set) => ({
  results: [],
  setResults(data) {
    set((state) => ({
      results: data,
      ...state,
    }));
  },
}));
