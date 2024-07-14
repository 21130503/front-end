import ContentItem from "../../component/content/contentItem";
import HotEvent from "../../component/hot-event/hot-event";
import Story from "../../component/story/story";
import { useFetch } from "../../hook/fetch";
import Render from "../../render/render";

function DiaPhuong({rss}) {
    const data = useFetch(rss)
    console.log(data);
    // const fistItem = data?.items?.shift(
    return ( 
       <Render rss={rss}/>
     );
}

export default DiaPhuong;