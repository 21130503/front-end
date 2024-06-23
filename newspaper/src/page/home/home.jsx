import { useEffect, useState } from "react";
import HotEvent from "../../component/hot-event/hot-event";
import { useFetch } from "../../hook/fetch";
import axios from "axios";
import Story from "../../component/story/story";
import ContentItem from "../../component/content/contentItem";
import { images } from "../../img";
import arrayNewsHot from "../../store/newshot";
import SubMain from "../../component/submain/submain";
import { route } from "../../route";
import useWeekly from "../../store/weekly-news";
 function Home({rss}) {
   const data = useFetch(rss)
   const {array} = arrayNewsHot()
   const {arrayWeekly} = useWeekly()
   const [blog, setBlog] = useState([])
   // const fistItem = data?.items?.shift(
   return ( 
      <div className="wrapper w-1200 mx-auto">
       <div className="hot-event w-full">
           <HotEvent className={'w-1200 mx-auto'}/>
       </div>
        <div className="grid grid-cols-12 gap-4 h-max mt-6">
            
            <div className="col-span-10 h-max">
                <Story defaultPage="home"/>

            </div>
            <div className="col-span-2 h-max">

            <img src={images.post2} alt="" />
            <img className="mt-8" src={images.post1} alt="" />
            </div>
        </div>
        <div className="blog-list flex mt-9 gap-4">
        {
            array.map((item, index)=>{
                return <ContentItem display={index === array.length-1 ? "none": "block"} 
                                    showTime={false} 
                                    item={item} 
                                    key={index}
                                    showDescription={false}
                                    ml_content="0"
                                    w="270px"
                                    h="180px"
                                    mt_content="mt-4"

                                    
                />
            })
        }
        </div>
        <div>
            <SubMain route={route[3]}  />
            <SubMain route={route[4]} type="other"  array={array}  title={"Tin tiêu điểm"}/>
            <SubMain route={route[4]} type="other"  array={arrayWeekly}  title={"Tin điểm tuần"}/>


        </div>
      </div>
    );
}

export default Home;