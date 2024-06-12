import { create } from "zustand";

const useLoadMoreData = create((set) => ({
  data: [],
  dataShow: [],
  async setDataInLoadMore(data) {
    set((state) => ({
      array: data,
      state,
    }));
  },
  setDataShow() {
    for (let index = 0; index < 5; index++) {
      const element = data?.items[index];
      dataShow.push(element);
    }
  },
  loadMore() {
    let index = dataShow.length;
    for (index; index < index + 5; index++) {
      const element = data?.items[index];
      dataShow.push(element);
    }
  },
}));
export default useLoadMoreData;
