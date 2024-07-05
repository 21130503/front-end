import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function SidebarItem({sidebar, className}) {
    const [ show, setShow] = useState(false)
    return ( 
        <a 
            href={sidebar.path} 
            className={`${className} text-white cursor-pointer relative`}
            // style={({ isActive }) => {
            //     return {
            //       color: isActive ? "rgb(251 191 36)" : "white",
                  
            //     };
            //   }}
              onMouseEnter={()=>{
                if(sidebar.children){
                   setShow(true)
                }
              }}
              onMouseLeave={()=> setShow(false)}
            >
                {sidebar.name || sidebar.icon}

                {
                    sidebar.children && show &&
                     <div className="sub-menu absolute bg-white bottom px-5">
                        {
                            sidebar.children.map((item, index)=>{
                                return (
                                    <a key={index} className="block text-black py-1 my-1 hover:text-red-500" href={item.path}>
                                        {
                                            item.name
                                        }
                                    </a>
                                )
                            })
                        }
                    </div>
                }
            </a>
     );
}

export default SidebarItem;