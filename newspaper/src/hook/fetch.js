import axios from "axios";
import { useEffect, useState } from "react";
import useStory from "../store/story-store";
import arrayNewsHot from "../store/newshot";
import useLoadMoreData from "../store/useLoadMoreData";
import useWeekly from "../store/weekly-news";
import { useLoading } from "../store/loading";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const [flag, setFlag] = useState(false);
  const { setData } = useStory();
  const { setArray } = arrayNewsHot();
  const { setArrayWeekly } = useWeekly();
  const { setDataInLoadMore, setDataShow } = useLoadMoreData();
  const { setIsLoading } = useLoading();
  // console.log(typeof setDataInLoadMore);
  const newsHot = [];
  const newsWeekly = [];
  const loadData = async () => {
    const { data } = await axios.get(rss);
    await setJson(data);
    await setData(data?.items.shift());
    for (let index = 0; index < 5; index++) {
      const element = data?.items[index];
      newsHot.push(element);
    }
    for (let index = 5; index < 9; index++) {
      const element = data?.items[index];
      newsWeekly.push(element);
    }
    await setArray(newsHot);
    await setArrayWeekly(newsWeekly);
    await setDataInLoadMore(data.items);
    await setDataShow();
    // Loading
    setIsLoading(false);
  };
  window.onload = async () => {
    if (!flag) {
      await loadData();
      setFlag(true);
    }
  };
  // useEffect(() => {
  //   loadData();
  // }, []);

  return json;
}
