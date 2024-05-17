import { faBoltLightning, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import './hot-event.scss'
import { useEffect, useRef, useState } from "react";
const hotEvent = [
    {
        link :'/chu-de/phong-chong-bao-luc-hoc-duong',
        name : 'Phòng chống bạo lục học đường'
    },
    {
        link: '/chu-de/tuyen-dung-va-boi-duong-giao-vien.js',
        name : 'Tuyển dụng và bồi dưỡng giáo viên'
    },
    {
        link: '/chu-de/70-nam-chien-thang-dien-bien-phu',
        name : '70 năm chiên thắng điện biên phủ'
    },
    {
        link: '/chu-de/xay-dungluta-nha-giao',
        name : 'Xây dụng luật nhà giáo'
    },
    {
        link: '/chu-de/thoat-ly-van-mau',
        name : 'Thoát ly văn mẫu'
    },
    {
        link: '/chu-de/pv-gas',
        name : 'PV Gas'
    },
    {
        link: '/chu-de/hoi-dap-chinh-sach-voi-nha-giao',
        name : 'Hỏi đáp chính sách với nhà giáo'
    },
    
]
function HotEvent({className}) {
    const [items, setItems] = useState(hotEvent);
    const containerRef = useRef(null);
    const handleNext = () => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            const firstItem = newItems.shift();
            newItems.push(firstItem);
            return newItems;
        });
    };

    const handlePrev = () => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            const lastItem = newItems.pop();
            newItems.unshift(lastItem);
            return newItems;
        });
    };
    useEffect(() => {
        containerRef.current = setInterval(handleNext, 3000); 
        return () => clearInterval(containerRef.current);
    }, []);
    return ( 
        <div className= {`${className} hot-event flex mt-3 items-center` }>
            <div className="left">
                <h2>
                    <Link className="text-xl font-semibold">
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faBoltLightning}/>
                        </span>
                        <span>Sự kiện</span>
                    </Link>
                </h2>
            </div>
            <div className="inner-even flex-1 overflow-hidden transition-transform duration-300 " ref={containerRef}>
                <div className="flex items-center w-3500" >
                    {
                        items.map((item, index)=>{
                            return (
                            <div key={index} className="mx-2 ">
                              <Link className="text-slate-600" to={item.link}>{`#${item.name}`}</Link>  
                            </div>
                        )})
                    }
                </div>
            </div>
            <div className="right ml-2">
                <span className="back cursor-pointer" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </span>
                <span className="next cursor-pointer" onClick={handleNext}>
                    <FontAwesomeIcon icon={faCaretRight}/>
                </span>
            </div>
        </div>
     );
}

export default HotEvent;