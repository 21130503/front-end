import axios from "axios";
import { useEffect, useState } from "react";
import useStory from "../store/story-store";
import arrayNewsHot from "../store/newshot";
import useLoadMoreData from "../store/useLoadMoreData";
import useWeekly from "../store/weekly-news";
import { useLoading } from "../store/loading";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const { setData } = useStory();
  const { setArray } = arrayNewsHot();
  const { setArrayWeekly } = useWeekly();
  const { setDataInLoadMore, setDataShow } = useLoadMoreData();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(rss);
        setJson(data);
        setData(data?.items[0]);

        const newsHot = data?.items.slice(0, 5);
        const newsWeekly = data?.items.slice(5, 9);

        setArray(newsHot);
        setArrayWeekly(newsWeekly);
        setDataInLoadMore(data.items);
        setDataShow();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [
    rss,
    setArray,
    setArrayWeekly,
    setData,
    setDataInLoadMore,
    setDataShow,
    setIsLoading,
  ]);

  return json;
}
