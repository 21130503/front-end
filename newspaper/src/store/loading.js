import { create } from "zustand";

export const useLoading = create((set) => ({
  isLoading: true,
  setIsLoading(newLoading) {
    set((state) => ({
      isLoading: newLoading,
    }));
  },
}));
