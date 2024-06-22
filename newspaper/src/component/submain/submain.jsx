import axios from "axios";
import { useEffect, useState } from "react";
import ContentItem from "../content/contentItem";

function SubMain({route, type='default'}) {
    const [main,setMain] = useState(null);
    const [sub, setSub] = useState([]);
    console.log(route.rss);
    useEffect(()=>{
        const loadData = async()=>{
            const {data} = await axios.get(route.rss)
            setMain(data.items.shift())
            const subItems = [];
            for(let i=0; i<4;i++){
                subItems.push(data.items[i])
            }
            setSub(subItems)
        }
        loadData()
    },[])
    return ( 
        <div className="grid grid-cols-12 submain">
            <div className="col-span-6">
                <ContentItem item={main}/>
            </div>
            <div className="col-span-6">
                {
                    sub.map((item, i)=>{
                        return <ContentItem key={i} item={item}/>
                    })
                }
            </div>
        </div>
     );
}

export default SubMain;