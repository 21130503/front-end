import { useEffect, useState } from "react";
import HotEvent from "../../component/hot-event/hot-event";
import { useFetch } from "../../hook/fetch";
import axios from "axios";
 function Home({rss}) {
   const [data, setData] = useState([]);
   const loadData = async ()=>{
      const {data} = await axios.get('/json/home.json')
      setData(data.rss.channel.item)
      console.log(data);
   }
   useEffect(()=>{
      loadData()
   }, [])
   console.log(data);
    return ( 
        <div>
           <div className="w-full">
              <HotEvent className={'w-1200 mx-auto'}/>
           </div>
           <div className="inner my-5">
               {
                  data?.map((item, index) =>{
                     return (
                        <div key={index}>
                           <div dangerouslySetInnerHTML={{ __html: item.description}}></div>
                           <div>{item.title}</div>
                        </div>
                     )
                  })
               }
              </div>
        </div>
     );
}

export default Home;