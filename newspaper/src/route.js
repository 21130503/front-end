import Giaoduc from "./page/giaoduc/giaoduc";
import Giaoducphapluat from "./page/giaoducphapluat/giaoducphapluat";
import Hocduong from "./page/hocduong/hocduong";
import Ketnoi from "./page/ketnoi/ketnoi";
import Media from "./page/media/media";
import Nhanai from "./page/nhanai/nhanai";
import Suckhoe from "./page/suckhoe/suckhoe";
import Thegioi from "./page/thegioi/thegioi";
import Thethao from "./page/thethao/thethao";
import Thoisu from "./page/thoisu/thoisu";
import Traodoi from "./page/traodoi/traodoi";
import Vanhoa from "./page/vanhoa/vanhoa";

export const route = [
  {
    path: "/giao-duc",
    Component: Giaoduc,
  },
  {
    path: "/thoi-su",
    Component: Thoisu,
  },
  {
    path: "/giao-duc-phap-luat",
    Component: Giaoducphapluat,
  },
  {
    path: "/ket-noi",
    Component: Ketnoi,
  },
  {
    path: "/trao-doi",
    Component: Traodoi,
  },
  {
    path: "/hoc-duong",
    Component: Hocduong,
  },
  {
    path: "/nhan-ai",
    Component: Nhanai,
  },
  {
    path: "/the-gioi",
    Component: Thegioi,
  },
  {
    path: "/suc-khoe",
    Component: Suckhoe,
  },
  {
    path: "video-media",
    Component: Media,
  },
  {
    path: "/van-hoa",
    Component: Vanhoa,
  },
  {
    path: "/the-thao",
    Component: Thethao,
  },
];
