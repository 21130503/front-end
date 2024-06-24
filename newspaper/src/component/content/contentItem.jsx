import { Link } from "react-router-dom";
import { useData } from "../../hook/useDestructuring";
import { imgRegex, linkRegex } from "../../utils/regex";
import { useEffect } from "react";
import { useState } from "react";
import { timeAgo } from "../../utils/time";
import { useNews } from "../../store/news";
 
function ContentItem({ item, 
            display = 'flex', 
            showTitle= true, 
            w='220px', 
            h='140px',
            ml_content = 'ml-5', 
            showTime= true, 
            showDescription = true,
            dependence = false,
            mt_content = 'ml-0'

}) {
    // const img = imgRegex.exec(item?.content)?.[1]
    const link = linkRegex.exec(item?.content)?.[1]
    const title = item?.title
    const time = timeAgo(new Date(item?.pubDate))
    const [textContent, setTextContent] = useState("");
    const {setNews} = useNews()
    const [img, setImg] = useState('')
    useEffect(() => {
        const extractTextFromHtml = (html) => {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            var firstParagraph = tempDiv.childNodes[2].textContent.trim();
            return firstParagraph;
        };

        if (item?.content) {
            const text = extractTextFromHtml(item.content);
            setTextContent(text);
        }
    }, [item]);
    useEffect(() => {
        const loadImg =async ()=>{
            await setImg(imgRegex.exec(item?.content)?.[1])
        }
        loadImg()
    }, [item]);
    const handleClick = ()=>{
        localStorage.setItem("news", JSON.stringify(item))
    }
    console.log("Image " + img);
    return ( 
        <div onClick={handleClick} className="content-item  gap-2 w-full mt-4  mb-4" style={{display: display}}>
            <Link to={"/chi-tiet"} className="left  object-cover"  style={{display: display}}>
                <img src={imgRegex.exec(item?.content)?.[1]} style={{width : w , height: h}} alt="" />
    
                <div className= {`${ml_content} ${mt_content}  right flex-1`}>
                    {showTitle && <h1 style={dependence ? {width: w}: {width: "100%"}} className="title text-base font-semibold flex-1 w-full">{title}</h1>}
                    {showTime && <span className="time">{time}</span>}
                    { showDescription && <div className="text-content mt-2 text-base">
                        {textContent}
                    </div>}
                </div>
            </Link>
        </div>
     );
}

export default ContentItem;