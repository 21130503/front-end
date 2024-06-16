import { create } from "zustand";

const useLoadMoreData = create((set) => ({
  data: [],
  dataShow: [],
  async setDataInLoadMore(newData) {
    set((state) => ({
      data: newData,
      ...state,
    }));
  },
  async setDataShow() {
    set((state) => {
      console.log(state.data);
      const show = [];
      for (
        let index = 0;
        index < state.data.length && show.length < 5;
        index++
      ) {
        console.log(state.data[index]);
        show.push(state.data[index]);
      }
      return {
        ...state,
        dataShow: show,
      };
    });
  },
  // loadMore() {
  //   let index = dataShow.length;
  //   for (index; index < index + 5; index++) {
  //     const element = data?.items[index];
  //     dataShow.push(element);
  //   }
  // },
}));
export default useLoadMoreData;
