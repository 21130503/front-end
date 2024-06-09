import axios from "axios";
import { useEffect, useState } from "react";
import useStory from "../store/story-store";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const [flag, setFlag] = useState(false);
  const { setData } = useStory();
  const loadData = async () => {
    const { data } = await axios.get(rss);
    await setJson(data);
    await setData(data?.items.shift());
  };
  window.onload = () => {
    if (!flag) {
      loadData();
      setFlag(true);
    }
  };

  return json;
}
