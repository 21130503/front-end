import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(rss) {
  const [json, setJson] = useState(null);
  const loadData = async () => {
    const { data } = await axios.get(rss);
    setJson(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return json;
}
