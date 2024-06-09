import { useEffect, useState } from "react";
import HotEvent from "../../component/hot-event/hot-event";
import { useFetch } from "../../hook/fetch";
import axios from "axios";
import Story from "../../component/story/story";
import ContentItem from "../../component/content/contentItem";
 function Home({rss}) {
   const data = useFetch(rss)
   console.log(data);
   // const fistItem = data?.items?.shift(
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
                                   <ContentItem key={index} item={item}/>
                               )
                           })
                       }
                  </div>
               </div>
               <div className="col-span-6">Item 2</div>
           </div>
      </div>
    );
}

export default Home;