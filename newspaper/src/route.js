import Anninh from "./page/anninh/anninh";
import Bandocdieutra from "./page/bandocdieutra/bandocdieutra";
import BonPhuong from "./page/bonphuong/bonphuong";
import Chinhsach from "./page/chinhsach/chinhsach";
import ChinhTri from "./page/chinhtri/chinhtri";
import Chuyendong from "./page/chuyendong/chuyendong";
import Congdoan from "./page/congdoan/congdoan";
import DiaPhuong from "./page/diaphuong/diaphuong";
import Donghanh from "./page/donghanh/donghanh";
import DaoTaoTuyenSinh from "./page/dt-ts/dt-ts";
import Giaoduc from "./page/giaoduc/giaoduc";
import Giaoducdothi from "./page/giaoducdothi/giaoducdothi";
import Giaoducphapluat from "./page/giaoducphapluat/giaoducphapluat";
import Hocduong from "./page/hocduong/hocduong";
import Home from "./page/home/home";
import Ketnoi from "./page/ketnoi/ketnoi";
import Khoahoccongnghe from "./page/khoahoccongnghe/conghocongnghe";
import KinhTe from "./page/kinhte/kinhte";
import Media from "./page/media/media";
import Nhanai from "./page/nhanai/nhanai";
import Phapdinh from "./page/phapdinh/phapdinh";
import Suckhoe from "./page/suckhoe/suckhoe";
import Thegioi from "./page/thegioi/thegioi";
import Thethao from "./page/thethao/thethao";
import Thoisu from "./page/thoisu/thoisu";
import ThoiSuXaHoi from "./page/thoisuxahoi/thoisuxahoi";
import Traodoi from "./page/traodoi/traodoi";
import Vanhoa from "./page/vanhoa/vanhoa";

export const route = [
  {
    path: "/giao-duc",
    Component: Giaoduc,
    rss: "https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-17.rss&minify=on",
  },
  {
    path: "/thoi-su",
    Component: Thoisu,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fthoi-su-1.rss",
  },
  {
    path: "/giao-duc-phap-luat",
    Component: Giaoducphapluat,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fphap-luat-phap-luat-8.rss",
  },
  {
    path: "/ket-noi",
    Component: Ketnoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fket-noi-2.rss",
  },
  {
    path: "/trao-doi",
    Component: Traodoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Ftrao-doi-3.rss",
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
  {
    path: "/",
    Component: Home,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fhome.rss",
  },
  {
    path: "/chinh-sach",
    Component: Chinhsach,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchinh-sach-27.rss",
  },
  {
    path: "/dia-phuong",
    Component: DiaPhuong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fdia-phuong-78.rss",
  },
  {
    path: "/tuyen-sinh-du-hoc",
    Component: DaoTaoTuyenSinh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Ftuyen-sinh-du-hoc-26.rss",
  },
  {
    path: "/giao-duc-bon-phuong",
    Component: BonPhuong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-bon-phuong-49.rss",
  },
  {
    path: "/chuyen-dong",
    Component: Chuyendong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchuyen-dong-87.rss",
  },
  // Thời sự
  {
    path: "giao-duc-do-thi",
    Component: Giaoducdothi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-do-thi-98.rss",
  },
  {
    path: "/thoi-su-xa-hoi",
    Component: ThoiSuXaHoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fthoi-su-xa-hoi-97.rss",
  },
  {
    path: "/chinh-tri",
    Component: ChinhTri,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchinh-tri-34.rss",
  },
  {
    path: "/kinh-te",
    Component: KinhTe,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fkinh-te-38.rss",
  },
  {
    path: "/an-ninh",
    Component: Anninh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fan-ninh-25.rss",
  },
  {
    path: "/phap-dinh",
    Component: Phapdinh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fphap-dinh-83.rss",
  },
  {
    path: "/goc-nhin",
    Component: Bandocdieutra,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgoc-nhin-53.rss",
  },
  {
    path: "/cong-doan",
    Component: Congdoan,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fcong-doan-74.rss",
  },
  {
    path: "/dong-hanh",
    Component: Donghanh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fdong-hanh-88.rss",
  },
  {
    path: "/khoa-hoc",
    Component: Khoahoccongnghe,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fkhoa-hoc-36.rss",
  },
];
