import axios from "axios";
import { useEffect, useState } from "react";
import useStory from "../store/story-store";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const { setData } = useStory();
  const loadData = async () => {
    const { data } = await axios.get(rss);
    await setJson(data);
    await setData(data?.items.shift());
  };
  useEffect(() => {
    loadData();
  }, []);

  return json;
}
