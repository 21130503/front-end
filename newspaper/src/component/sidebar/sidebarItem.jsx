import { NavLink } from "react-router-dom";

function SidebarItem({sidebar, className}) {
    return ( 
        <NavLink 
            to={sidebar.path} 
            className={`${className} text-white cursor-pointer`}
            style={({ isActive }) => {
                return {
                  color: isActive ? "rgb(251 191 36)" : "white",
                  
                };
              }}
            >
                {sidebar.name || sidebar.icon}
            </NavLink>
     );
}

export default SidebarItem;