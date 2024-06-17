import { useEffect, useState } from "react";
import { useNews } from "../../store/news";
import HotEvent from "../../component/hot-event/hot-event";
import './detail.scss'

function NewsDetail() {
    const [news, setNews] = useState(null)
    useEffect(() => {
        setNews(JSON.parse(localStorage.getItem('news')))
    }, []);
    console.log(news);
    return ( 
        <div className="wrapper w-1200 mx-auto">
        <div className="hot-event w-full">
            <HotEvent className={'w-1200 mx-auto'}/>
        </div>
        <div className="categories my-4 py-1 px-2">
            <h2 className="font-bold text-xl">{news.categories}</h2>
        </div>
        <div className="content-detail"></div>
        </div>
     );
}

export default NewsDetail;