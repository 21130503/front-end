import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "../../hook/fetch";

function ChinhTri({rss}) {
    const data = useFetch(rss)
    console.log(data);
    return ( 
        <div>
            {
                data.map((item, index)=>{
                    return (
                        <div key={index}>
                            {/* <div con></div> */}
                        </div>
                    )
                })
            }
        </div>
     );
}

export default ChinhTri;