import axios from "axios";
import { useEffect, useState } from "react";
import ContentItem from "../content/contentItem";
import './submain.scss'
import { sidebar } from "../sidebar/sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import arrayNewsHot from "../../store/newshot";
function SubMain({route, type='default', title, array}) {
    const [main,setMain] = useState(null);
    const [sub, setSub] = useState([]);
    const [children , setChildren] = useState([])
    useEffect(()=>{
        setChildren(sidebar.find(item=> route.title === item.name))
    },[route])
    useEffect(()=>{
        const loadData = async()=>{
            const {data} = await axios.get(route.rss)
            setMain(data.items.shift())
            const subItems = [];
            for(let i=0; i<4;i++){
                subItems.push(data.items[i])
            }
            await setSub(subItems)
        }
        loadData()
    },[route.rss])
    const handleClick = (item)=>{
        localStorage.setItem("news", JSON.stringify(item))
    }
    console.log(sub);
    return ( 
        <div>
            {type === "default" ? (
                <div className="sub-main my-6 ">
                    <div className="top flex">
                        <h1 className="title left text-2xl font-bold mr-3 relative">{route?.title}</h1>
                        <div className="right flex flex-1 justify-end">
                            {
                                children?.children?.map((item, index)=>{
                                    return (
                                        <div key={index} className="flex">
                                            <Link className="px-1 mx-1 text-slate-900" to={item?.path}>{item?.name}</Link>
                                        </div>
                                    )
                                })
                            }
                    </div>

                </div>
                <div className="grid grid-cols-12 g my-4">
                    <div className="col-span-6">
                        <ContentItem item={main} display="block" mt_content="mt-4" w="560px" h="315px" ml_content="0"/>
                    </div>
                    <div className="col-span-6 flex gap-5 flex-wrap justify-end">
                        {
                            sub?.map((item, i)=>{
                                return (
                                    <div key={i}  style={{ flexBasis: '268px' }}>
                                        <ContentItem item={item} 
                                            showDescription={false}
                                            showTime={false}
                                            display="block"
                                            h="180px"
                                            w="268px"
                                            ml_content="0"
                                            mt_content="mt-4"
                                            />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            ) : (
                <div className="sub-main my-6">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-9">
                        <div className="top flex">
                            <h1 className="title left text-2xl font-bold mr-3 relative">{route.title}</h1>
                            <div className="right flex-1"></div>
                        </div>
                        <div className="grid grid-cols-12 g my-4">
                                <div className="col-span-7">
                                    <ContentItem item={main} display="block" mt_content="mt-4" w="560px" h="315px" ml_content="0"/>
                                </div>
                                <div className="col-span-5">
                                    {
                                        sub?.map((item, i)=>{
                                            return (
                                                <div key={i} className="ml-5">
                                                    <ContentItem item={item} 
                                                        showDescription={false}
                                                        h="52px"
                                                        w="82px"
                                                        ml_content="ml-2"
                                                        />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                               
                        </div>
                        </div>
                        <div className="col-span-3 ml-3">
                            <div>
                                <div className="title-news py-2 px-5   flex justify-center items-center text-white">
                                    <span>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </span>
                                    <p className="ml-4 uppercase text-xl font-semibold">
                                        {title}
                                    </p>
                    
                                </div>
                                <div className="body">
                                    {
                                        array.map((item, index)=>{
                                            return <Link onClick={()=> handleClick(array[index])} className="item block  mx-4 my-4 py-2 font-bold transition-all hover:text-red-800 " to={'/chi-tiet'}>{item?.title}</Link>         
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
     );
}

export default SubMain;