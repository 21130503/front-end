import { Link } from "react-router-dom";
import { useData } from "../../hook/useDestructuring";
import { imgRegex, linkRegex } from "../../utils/regex";
import { useEffect } from "react";
import { useState } from "react";
import { timeAgo } from "../../utils/time";

function ContentItem({ item, display = 'flex', showTitle= true, w='220px', h='140px',ml_content = 'ml-5', showTime= true}) {
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
        <div className="content-item  gap-2 w-full mt-4  mb-4" style={{display: display}}>
            <Link to={link} className="left  w-full object-cover"  style={{display: display}}>
                <img src={img} style={{width : w , height: h}} alt="" />
    
                <div className= {`${ml_content} right flex-1`}>
                    {showTitle && <h1 className="title text-base font-semibold flex-1 w-full">{title}</h1>}
                    {showTime && <span className="time">{time}</span>}
                    <div className="text-content mt-2 text-base">
                        {textContent}
                    </div>
                </div>
            </Link>
        </div>
     );
}

export default ContentItem;