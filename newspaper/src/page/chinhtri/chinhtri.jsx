
import {useEffect, useState } from "react";
import { useFetch } from "../../hook/fetch";
import HotEvent from "../../component/hot-event/hot-event";
import Story from "../../component/story/story";
import ContentItem from "../../component/content/contentItem";
import {useDispatch} from 'react-redux'
import { setData } from "../../redux/storyStore";
import { imgRegex, linkRegex } from "../../utils/regex";
import useStory from "../../store/story-store";
function ChinhTri({rss}) {
    const data = useFetch(rss)
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
                                    <ContentItem key={index}/>
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

export default ChinhTri;