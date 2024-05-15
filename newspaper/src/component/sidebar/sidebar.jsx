import SidebarItem from "./sidebarItem";
import './sidebar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
function SideBar() {
    const sidebar = [
      {
        path :'/',
        icon : <FontAwesomeIcon icon={faHome}/>
      },
        {
            path: "/giao-duc",
            name: 'Giáo dục',
            children : [
              {
                path: "/chinh-sach",
                name: 'Chính sách',
              },
              {
                path: "/dia-phuong",
                name: 'Địa phương',
              },
              {
                path: "/tuyen-sinh-du-hoc",
                name: 'Đào tạo - Tuyển sinh',
              },
              {
                path: "/bon-phuong",
                name: 'Bốn phương',
              },
              {
                path: "/chuyen-dong",
                name: 'Chuyển động',
              },
            ]
          },
          {
            path: "/thoi-su",
            name: 'Thời sự',
          },
          {
            path: "/giao-duc-phap-luat",
            name: 'Giáo dục pháp luật',
          },
          {
            path: "/ket-noi",
            name: 'Kết nối',
          },
          {
            path: "/trao-doi",
            name: 'Trao đổi',
          },
          {
            path: "/hoc-duong",
            name: 'Học đường',
          },
          {
            path: "/nhan-ai",
            name: 'Nhân ái',
          },
          {
            path: "/the-gioi",
            name: 'Thế giới',
          },
          {
            path: "/suc-khoe",
            name: 'Sức khỏe',
          },
          {
            path: "video-media",
            name: 'Media',
          },
          {
            path: "/van-hoa",
            name: 'Văn hóa',
          },
          {
            path: "/the-thao",
            name: 'Thể thao',
          },
          
    ]
    return ( 
        <div id='sidebar' className="w-full">
            <div className="sidebar-inner flex gap-3">
              {
                sidebar.map((item, index)=>{
                  return <SidebarItem sidebar={item} className={'px-2 py-3 font-medium hover:text-amber-400'}/>
                })
              }
            </div>
        </div>
     );
}

export default SideBar;