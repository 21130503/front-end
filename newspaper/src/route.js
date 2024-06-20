import Anninh from "./page/anninh/anninh";
import Bandocdieutra from "./page/bandocdieutra/bandocdieutra";
import BonPhuong from "./page/bonphuong/bonphuong";
import Chinhsach from "./page/chinhsach/chinhsach";
import ChinhTri from "./page/chinhtri/chinhtri";
import Chuyendong from "./page/chuyendong/chuyendong";
import GocChuyenGia from "./page/chuyengia/Gochuyengia";
import Congdoan from "./page/congdoan/congdoan";
import NewsDetail from "./page/detail/detail";
import DiaPhuong from "./page/diaphuong/diaphuong";
import Donghanh from "./page/donghanh/donghanh";
import DaoTaoTuyenSinh from "./page/dt-ts/dt-ts";
import Duhoc from "./page/duhoc/duhoc";
import Giaoduc from "./page/giaoduc/giaoduc";
import Giaoducdothi from "./page/giaoducdothi/giaoducdothi";
import Giaoducphapluat from "./page/giaoducphapluat/giaoducphapluat";
import Guongmat from "./page/guongmat/guongmat";
import Hocduong from "./page/hocduong/hocduong";
import Home from "./page/home/home";
import Ketnoi from "./page/ketnoi/ketnoi";
import Khoahoccongnghe from "./page/khoahoccongnghe/conghocongnghe";
import Kinang from "./page/kinang/kinang";
import KinhTe from "./page/kinhte/kinhte";
import Media from "./page/media/media";
import Nhanai from "./page/nhanai/nhanai";
import Phapdinh from "./page/phapdinh/phapdinh";
import Phuongphap from "./page/phuongphap/phuongphap";
import SangTac from "./page/sangtac/Sangtac";
import Suckhoe from "./page/suckhoe/suckhoe";
import Thechat from "./page/thechat/thechat";
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
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-17.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/thoi-su",
    Component: Thoisu,
    rss: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fthoi-su-1.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/giao-duc-phap-luat",
    Component: Giaoducphapluat,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fphap-luat-phap-luat-8.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/ket-noi",
    Component: Ketnoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fket-noi-2.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/trao-doi",
    Component: Traodoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Ftrao-doi-3.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/hoc-duong",
    Component: Hocduong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fhoc-duong-5.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
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
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fhome.rss&api_key=bpvuiptcb4x9b8nfxmwjjojxe3toucwqfsdyanra",
  },
  {
    path: "/chinh-sach",
    Component: Chinhsach,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchinh-sach-27.rss&api_key=bpvuiptcb4x9b8nfxmwjjojxe3toucwqfsdyanra",
  },
  {
    path: "/dia-phuong",
    Component: DiaPhuong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fdia-phuong-78.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/tuyen-sinh-du-hoc",
    Component: DaoTaoTuyenSinh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Ftuyen-sinh-du-hoc-26.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/giao-duc-bon-phuong",
    Component: BonPhuong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-bon-phuong-49.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/chuyen-dong",
    Component: Chuyendong,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchuyen-dong-87.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  // Thời sự
  {
    path: "giao-duc-do-thi",
    Component: Giaoducdothi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgiao-duc-do-thi-98.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/thoi-su-xa-hoi",
    Component: ThoiSuXaHoi,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fthoi-su-xa-hoi-97.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/chinh-tri",
    Component: ChinhTri,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fchinh-tri-34.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/kinh-te",
    Component: KinhTe,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fkinh-te-38.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/an-ninh",
    Component: Anninh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fan-ninh-25.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/phap-dinh",
    Component: Phapdinh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fphap-dinh-83.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/goc-nhin",
    Component: Bandocdieutra,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgoc-nhin-53.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/cong-doan",
    Component: Congdoan,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fcong-doan-74.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/dong-hanh",
    Component: Donghanh,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fdong-hanh-88.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/khoa-hoc",
    Component: Khoahoccongnghe,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fkhoa-hoc-36.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/chi-tiet",
    Component: NewsDetail,
  },
  {
    path: "/sang-tac",
    Component: SangTac,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fsang-tac-82.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/phuong-phap",
    Component: Phuongphap,
    rss: " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fphuong-phap-31.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/goc-chuyen-gia",
    Component: GocChuyenGia,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fgoc-chuyen-gia-63.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/ki-nang-song",
    Component: Kinang,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fky-nang-song-39.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/du-hoc",
    Component: Duhoc,
    rss: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgiaoducthoidai.vn%2Frss%2Fdu-hoc-72.rss&api_key=yzf7jare8f7g2tykhyn9mcbfs4rnnahrry0bme00",
  },
  {
    path: "/guong-mat",
    Component: Guongmat,
    rss: "",
  },
  {
    path: "/the-chat",
    Component: Thechat,
    rss: "",
  },
];
