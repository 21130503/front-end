import axios from "axios";
import { useEffect, useState } from "react";
import useStory from "../store/story-store";
import arrayNewsHot from "../store/newshot";
import useLoadMoreData from "../store/useLoadMoreData";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const [flag, setFlag] = useState(false);
  const { setData } = useStory();
  const { setArray } = arrayNewsHot();
  const { setDataInLoadMore, setDataShow } = useLoadMoreData();
  // console.log(typeof setDataInLoadMore);
  const newsHot = [];
  const loadData = async () => {
    const { data } = await axios.get(rss);
    await setJson(data);
    await setData(data?.items.shift());
    for (let index = 0; index < 5; index++) {
      const element = data?.items[index];
      newsHot.push(element);
    }
    console.log(newsHot);
    await setArray(newsHot);
    await setDataInLoadMore(data.items);
    await setDataShow();
  };
  window.onload = () => {
    if (!flag) {
      loadData();
      setFlag(true);
    }
  };

  return json;
}
