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
               <div className="mt-6 w-1200 mx-auto">
                    <div className="count-res text-2xl"><strong>{data.length}</strong> kết quả phù hợp</div>
                   <div>
                       { data.map((item, index)=>{
                            return <ContentItem w="300px" h="202px" item={item} key={index}/>
                        })}
                   </div>
               </div>
             )
     );
}

export default SearchPage;