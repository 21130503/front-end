import { useEffect, useState } from "react";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import SideBar from "../../component/sidebar/sidebar";
import { useFetch } from "../../hook/fetch";
import HotEvent from "../../component/hot-event/hot-event";
import Story from "../../component/story/story";

function DefaultLayout({children, rss})  {

    return ( 
        <div id="default-layout">
            <Header/>
            <SideBar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;