import { Link } from "react-router-dom";
import { useData } from "../../hook/useDestructuring";
import { imgRegex, linkRegex } from "../../utils/regex";
import { useEffect } from "react";
import { useState } from "react";
import { timeAgo } from "../../utils/time";

function ContentItem({item}) {
    const img = imgRegex.exec(item?.content)?.[1]
    const link = linkRegex.exec(item?.content)?.[1]
    const title = item?.title
    const time = timeAgo(new Date(item?.pubDate))

    return ( 
        <div className="content-item flex gap-2 w-full mt-14  mb-4">
            <Link to={link} className="left block w-60  h-36" >
                <img src={img} className="w-full h-full" alt="" />
            </Link>
            <div className="right ml-5 flex-1">
                <Link to={link}>
                <h1 className="title text-base font-semibold flex-1 w-full">{title}</h1>
                <span className="time">{time}</span>
                </Link>
            </div>
        </div>
     );
}

export default ContentItem;