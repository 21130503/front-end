import { useEffect, useState } from "react";
import ContentItem from "../content/contentItem";

function Weekly({data}) {
    const [fistItem, setFistItem] = useState(null)
    useEffect(()=>{
        const fist = data.shift()
        setFistItem(fist)
    },[])
    return ( 
        <div>
            <h1 className="title left text-2xl font-bold mr-3 relative">Tin nổi bật</h1>
                    <div>
                        {
                           data.map((item, index)=>{
                                return (
                                    <div key={index} className="flex">
                                        <ContentItem item={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
        </div>
     );
}

export default Weekly;