import { useEffect, useState } from "react";
import { useNews } from "../../store/news";
import HotEvent from "../../component/hot-event/hot-event";
import './detail.scss'
import axios from "axios";
import { imgRegex } from "../../utils/regex";

function NewsDetail() {
    const [news, setNews] = useState(null)
    const [newsContent, setNewsContent] = useState('')
    const [image, setImage] = useState('')

    // useEffect(() => {
        
    //     // const mainTextMatch = news?.content.match(/<a href=.*?>.*?<\/a>(.*?)<div>/s);
    //     // const mainText = mainTextMatch ? mainTextMatch[1].trim() : "";
    //     // setNewsContent(news?.content.replace(/<a href=".*?">(.*?)<\/a>/g, '<p>$1</p>'))
    // }, []);
    useEffect(() => {
        const loadNews = async () => {
            const storedNews = JSON.parse(localStorage.getItem('news'));
            setNews(storedNews);
        };

        loadNews();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (news && news.link) {
                try {
                    const { data } = await axios.post(
                        "http://localhost:5000/get_article",
                        JSON.stringify({ url: news.link }),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    console.log(data);
                    setNewsContent(data.content);
                } catch (error) {
                    console.error('Error fetching article:', error);
                }
            }
        };

        fetchData();
        setImage(imgRegex.exec(news?.content)?.[1])
    }, [news]);
    return ( 
        <div className="wrapper w-1200 mx-auto">
        <div className="hot-event w-full">
            <HotEvent className={'w-1200 mx-auto'}/>
        </div>
        <div className="categories my-4 py-1 px-2">
            <h2 className="font-bold text-xl">{news?.categories}</h2>
        </div>
        <div className="content-detail">
            <div className="news-title py-2">
                <h1 className="text-3xl font-semibold text-slate-700">{news?.title}</h1>
            </div>
            <div className="news-author py-2 my-2">
                <p className="font-semibold">{news?.author ? news?.author :"Không xác định"}</p>
                <p className="text-slate-600">{news?.pubDate}</p>
            </div>
            <div className="news-speak">
                
            </div>
            <div className="image-news my-4">
                <img src={image} alt="" />
            </div>
            <div className="news-main text-xl" dangerouslySetInnerHTML={{__html: newsContent}}>
                
            </div>
        </div>
        </div>
     );
}

export default NewsDetail;