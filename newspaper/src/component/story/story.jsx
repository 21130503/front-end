import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
var imgRegex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/?>/g;
var linkRegex = /<a[^>]+href="?([^"\s]+)"?[^>]*>/;

function Story({news}) {
    const [src , setSrc] = useState('')
    const [link , setLink ] = useState('')
    useEffect(()=>{
        const match = imgRegex.exec(news?.content)
        setSrc(match[1])
        // setLink(linkRegex.exec(news?.content))
        // console.log(linkRegex.exec(news?.content));
    },[])
    return ( 
        <div className="story">
           <Link className="cursor-pointer">
                <div className="main-content">
                    <img src={src} alt="" />
                </div>
                <h1 className="text-2xl font-semibold my-3 hover:text-red-400 hover:transition-all">{news?.title}</h1>
           </Link>
        </div>
     );
}

export default Story;