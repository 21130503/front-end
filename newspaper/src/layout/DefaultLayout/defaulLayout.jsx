import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import SideBar from "../../component/sidebar/sidebar";

function DefaultLayout({children})  {
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