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
import './home.scss'
import { useLoading } from "../../store/loading";
import Loader from "../../component/loader/loader";
import { useNavigate } from "react-router-dom";
 function Home({rss}) {
   const data = useFetch(rss)
   const {array} = arrayNewsHot()
   const {arrayWeekly} = useWeekly()
   const [blog, setBlog] = useState([])
   const {isLoading} = useLoading()
   const navigate = useNavigate()
   console.log(array);
   return ( 
     isLoading ? (
        <div className="h-500 flex items-center justify-center">
             <Loader/>
        </div>
     ):( <div className="wrapper w-1200 mx-auto">
        <div className="hot-event w-full">
            <HotEvent className={'w-1200 mx-auto'}/>
        </div>
        <div className="grid grid-cols-12 gap-4 h-max mt-6">
            
            <div className="col-span-10 h-max">
                <Story defaultPage="home"/>

            </div>
            <div className="col-span-2 h-max">

            <img src={images.post2} alt="" />
            <img onClick={()=>navigate('/epaper')} className="mt-8" src={images.post1} alt="" />
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
        <div className="home-submain">
            <SubMain route={route[0]} type="other"  array={array}  title={"Tin tiêu điểm"}/>
            <div className="banner">
                <img src={images.banner0} className="w-full" alt="" />
            </div>
            <SubMain route={route[1]}  />
            <SubMain route={route[2]} type="other"  array={arrayWeekly}  title={"Tin điểm tuần"}/>
            <div className="banner">
                <img src={images.banner1} className="w-full" alt="" />
            </div>
            <SubMain route={route[3]}  />
            <div className="banner">
                <img src={images.banner2} className="w-full" alt="" />
            </div>
            <SubMain route={route[4]}  />
            <div className="banner">
                <img src={images.banner3} className="w-full" alt="" />
            </div>
            <SubMain route={route[5]}  />
            <SubMain route={route[6]}  />
            <SubMain route={route[7]}  />
            <SubMain route={route[8]}  />
            <SubMain route={route[9]}  />
            <SubMain route={route[10]}  />
            <div className="banner">
                <img src={images.banner4} className="w-full" alt="" />
            </div>
        </div>
        <div className="category">
            <ul className="list flex items-center justify-between w-full">
                <li className="list-item flex justify-between flex-1">
                    <a href="/giao-duc"  className="link text-center text-white font-bold text-xl uppercase block py-5 hover:text-orange-500">giáo dục</a>
                </li>
                <li className="list-item flex justify-between flex-1">
                    <a href="/thoi-su" className="link text-center text-white font-bold text-xl uppercase block py-5 hover:text-orange-500">thời sự</a>
                </li>
                <li className="list-item flex justify-between flex-1">
                    <a href="/giao-duc-phap-luat" className="link text-center text-white font-bold text-xl uppercase block py-5 hover:text-orange-500">giáo dục pháp luật</a>
                </li>
                <li className="list-item flex justify-between flex-1">
                    <a href="/ket-noi" className="link text-center text-white font-bold text-xl uppercase block py-5 hover:text-orange-500">kết nối</a>
                </li>
                <li className="list-item flex justify-between flex-1">
                    <a href="/media" className="link text-center text-white font-bold text-xl uppercase block py-5 hover:text-orange-500">Media</a>
                </li>
            </ul>
        </div>
  </div>)
    );
}

export default Home;