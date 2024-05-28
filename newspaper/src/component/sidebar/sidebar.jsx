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
            children : [
              {
                path: "/giao-duc-do-thi",
                name: 'Giáo dục đô thị',
              },
              {
                path: "/xa-hoi",
                name: 'Xã hội',
              },
              {
                path: "/chinh-tri",
                name: 'Chính trị',
              },
              {
                path: "/kinh-te",
                name: 'Kinh tế',
              },
            ]
          },
          {
            path: "/giao-duc-phap-luat",
            name: 'Giáo dục pháp luật',
            children : [
              {
                path: "/an-ninh",
                name: 'An ninh',
              },
              {
                path: "/phap-dinh",
                name: 'Pháp đình',
              },
              {
                path: "/goc-nhin",
                name: 'Bạn đọc- Điều tra',
              },
             
            ]
          },
          {
            path: "/ket-noi",
            name: 'Kết nối',
            children : [
              {
                path: "/cong-doan",
                name: 'Công đoàn',
              },
              {
                path: "/dong-hanh",
                name: 'Đồng hành',
              },
              {
                path: "/khoa-học",
                name: 'Khoa học - Công nghệ',
              },
             
            ]
          },
          {
            path: "/trao-doi",
            name: 'Trao đổi',
            children : [
              {
                path: "/phuong-phap",
                name: 'Phương pháp',
              },
              {
                path: "/goc-chuyen-gia",
                name: 'Góc chuyên gia',
              },
              
             
            ]
          },
          {
            path: "/hoc-duong",
            name: 'Học đường',
            children : [
              {
                path: "/ki-nang",
                name: 'Kĩ năng',
              },
              {
                path: "/du-hoc",
                name: 'Du học',
              },
              {
                path: "/guong-mat",
                name: 'Gương mặt',
              },
              {
                path: "/the-chat",
                name: 'Thể chất',
              },
             
            ]
          },
          {
            path: "/nhan-ai",
            name: 'Nhân ái',
          },
          {
            path: "/the-gioi",
            name: 'Thế giới',
            children : [
              {
                path: "/giao-duc-quoc-phong",
                name: 'Giáo dục quốc phònn',
              },
              {
                path: "/the-gioi-do-day",
                name: 'Thế giới đó đây',
              },
              {
                path: "/chuyen-la",
                name: 'Chuyện lạ',
              },
             
            ]
          },
          {
            path: "/suc-khoe",
            name: 'Sức khỏe',
            children : [
              {
                path: "/khoe-dep",
                name: 'Khỏe đẹp',
              },
              {
                path: "/gia-dinh",
                name: 'Gia đình',
              },
              {
                path: "/day-lui-covid",
                name: 'Đẩy lùi Covid',
              },
             
            ]
          },
          {
            path: "video-media",
            name: 'Media',
            children : [
              {
                path: "/infographic-media",
                name: 'Infographic',
              },
              {
                path: "/video-media",
                name: 'Media',
              },
              {
                path: "/247-nong",
                name: 'Nóng 257',
              },
              {
                path: "/tieu-diem",
                name: 'Tiêu điểm',
              },
             
            ]
          },
          {
            path: "/van-hoa",
            name: 'Văn hóa',
            children : [
              {
                path: "/sang-tac",
                name: 'Sáng tác',
              },
              {
                path: "/doi-song-van-hoa",
                name: 'Đời sống văn hóa',
              },
              {
                path: "/sao",
                name: 'Sao',
              },
             
            ]
          },
          {
            path: "/the-thao",
            name: 'Thể thao',
            children : [
              {
                path: "/the-thao-hoc-duong",
                name: 'Thể thao học đường',
              },
              
             
            ]
          },
          
    ]
    return ( 
        <div id='sidebar' className="w-full">
            <div className="sidebar-inner flex justify-between w-1200 mx-auto">
              {
                sidebar.map((item, index)=>{
                  return <SidebarItem key={index} sidebar={item} className={'px-2 py-3 font-medium hover:text-amber-400'}/>
                })
              }
            </div>
        </div>
     );
}

export default SideBar;