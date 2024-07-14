import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './search.scss'
import { arrRss, route } from "../../route";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../../store/search";
function Search({className}) {
    const [value, setValue] = useState("")
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const {setResults} = useSearch()
    const handleClickButtonSearch= async ()=>{
        // arrRss.forEach( async(item)=>{
        //     const {data} = await axios.get(item.rss)
        //     const res = [];
        //     data.items.forEach((item, idx)=>{
        //         if(item.title.includes(value)){
        //             res.push(data.items[idx])
        //         }

        //     })
        //     setData(res)
        // })
        navigate(`/search/${encodeURIComponent(value)}`)
       

    }
    const handleChange = (e)=>{
        if(e.target.value.startsWith(" ")){
            return;
        }
        setValue(e.target.value)
    }
    console.log(data);

    return ( 
        <div className={`${className ,'search'}` }>
            <input value={value} onChange={(e)=>handleChange(e)} type="text" className="search_ip" />
            <div onClick={handleClickButtonSearch} className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
     );

}

export default Search;
