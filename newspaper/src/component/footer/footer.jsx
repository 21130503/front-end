import "./footer.scss";

import Logo from "../../img/footer-gdtd.png";
function Footer() {
  return (
    <div className="footer flex w-full">
      <div className="left flex-1">
        <div className="image">
          <a href="#" className="link">
            <img src={Logo} alt="gdtd" />
          </a>
        </div>
        <div className="content font-bold">
          <p>BÁO GIÁO DỤC & THỜI ĐẠI</p>
        </div>
      </div>
      <div className="center flex-1 px-4">
        <div className="text-1 font-bold">
          <p>
            CƠ QUAN CỦA BỘ GIÁO DỤC VÀ ĐÀO TẠO - DIỄN ĐÀN TOÀN XÃ HỘI VÌ SỰ
            NGHIỆP GIÁO DỤC
          </p>
        </div>
        <div className="text-2">
          <p>Cơ quan chủ quản: BỘ GIÁO DỤC VÀ ĐÀO TẠO</p>
          <p>Số giấy phép 479/GP-BTTTT, cấp ngày 29/10/2020, ISSN 1859-2945.</p>
          <p>Tổng Biên tập: Triệu Ngọc Lâm</p>
          <p>Phó Tổng Biên tập: Dương Thanh Hương - Nguyễn Đức Tuân</p>
          <p>
            ® Ghi rõ nguồn “Báo Giáo dục & Thời đại” khi phát hành lại thông tin
            từ website.
          </p>
        </div>
      </div>
      <div className="right flex-1 px-4">
        <div className="text-1">
          <div className="title font-bold">
            <p>TRỤ SỞ CHÍNH</p>
          </div>
          <div className="content">
            <p>Tòa soạn: 15 - Hai Bà Trưng - Q.Hoàn Kiếm - Hà Nội.</p>
            <p>Điện thoại: 024 3936 9800</p>
            <p>Hotline: 0967 335 089</p>
            <p>Email : gdtddientu@gmail.com</p>
          </div>
        </div>
        <div className="text-2 py-2">
          <div className="title font-bold">
            <p>LIÊN HỆ QUẢNG CÁO, TRUYỀN THÔNG VÀ ĐẶT BÁO</p>
          </div>
          <div className="content">
            <p>Phòng Truyền thông và Dự án</p>
            <p>Hotline: 0886 059 988</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
