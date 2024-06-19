import { useEffect } from "react";
import ContentItem from "../../component/content/contentItem";
import HotEvent from "../../component/hot-event/hot-event";
import NewsHot from "../../component/newshot/newshot";
import Story from "../../component/story/story";
import { useFetch } from "../../hook/fetch";
import useLoadMoreData from "../../store/useLoadMoreData";

function Chinhsach({rss}) {
    const data = useFetch(rss)
    const { dataShow} = useLoadMoreData()
    console.log(dataShow);
    useEffect(()=>{
        localStorage.setItem("rss",JSON.stringify(rss))
    },[])
    return ( 
       <div className="wrapper w-1200 mx-auto">
        <div className="hot-event w-full">
            <HotEvent className={'w-1200 mx-auto'}/>
        </div>
            <div className="grid grid-cols-12 gap-4 h-screen mt-6">
                
                <div className="col-span-6">
                    <Story/>
                   <div className="content-list">
                        {
                            data?.items?.map((item, index)=>{
                                return (
                                    <ContentItem  key={index} item={item}/>
                                )
                            })
                        }
                   </div>
                </div>
                <div className="col-span-2">
                    <NewsHot />
                </div>
                {/* <div className="col-span-3">Item 2</div> */}
            </div>
       </div>
     );
}

export default Chinhsach;