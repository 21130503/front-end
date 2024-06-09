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
    const [textContent, setTextContent] = useState("");
    useEffect(() => {
        const extractTextFromHtml = (html) => {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            // var textContent = tempDiv.textContent || tempDiv.innerText || '';
            // textContent = textContent.replace(/\n\s*\n/g, '\n').trim();
            // return textContent;
            var firstParagraph = tempDiv.childNodes[2].textContent.trim();
            return firstParagraph;
        };

        if (item?.content) {
            const text = extractTextFromHtml(item.content);
            setTextContent(text);
        }
    }, [item]);

    return ( 
        <div className="content-item flex gap-2 w-full mt-14  mb-4">
            <Link to={link} className="left block w-64 object-cover h-40" >
                <img src={img} className="w-full h-full" alt="" />
            </Link>
            <div className="right ml-5 flex-1">
                <Link to={link}>
                <h1 className="title text-base font-semibold flex-1 w-full">{title}</h1>
                <span className="time">{time}</span>
                <div className="text-content mt-2 text-base">
                    {textContent}
                </div>
                </Link>
            </div>
        </div>
     );
}

export default ContentItem;