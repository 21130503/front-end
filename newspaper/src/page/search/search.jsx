import { useState , useEffect} from "react";
import Loader from "../../component/loader/loader";
import ContentItem from "../../component/content/contentItem";
import { useParams } from "react-router-dom";
import { arrRss } from "../../route";
import axios from "axios";

function SearchPage() {
    const {key } = useParams()
    console.log(`key: ${decodeURIComponent(key)}`);
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        const loadData = async()=>{
            try {
                const allResults = await Promise.all(
                  arrRss.map(async (item) => {
                    const { data } = await axios.get(item.rss);
                    return data.items.filter(rssItem => rssItem.title.includes(key));
                  })
                );
                const mergedResults = [].concat(...allResults); // Nối tất cả kết quả lại thành một mảng
                setData(mergedResults);
                if(data){
                    setIsLoading(false)
                }
              } catch (error) {
                console.error('Error fetching RSS data:', error);
              }
        }
        loadData()
    }, [key]);
    return ( 
        isLoading ? (
            <div className="h-500 flex items-center justify-center">
                <Loader/>
            </div>)
            :
            (
                data.map((item, index)=>{
                    return <ContentItem item={item} key={index}/>
                })
             )
     );
}

export default SearchPage;