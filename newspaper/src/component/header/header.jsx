import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/header/logo_gdtd.jpg";
import logo_center from "../../img/header/logo_xdlng.png";
import Search from "../search/search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
 
  return (
    <div id="header" className="w-full">
      <div className="header_top flex">
        <div className="time">
          <p>Thứ Năm, 23/05/2024 - 08:35</p>
        </div>
        <div className="phone">
          <div className="phone_icon ">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </div>
          <div className="phone_container">
            <div className="title">
              <p>Đường dây nóng:</p>
            </div>
            <div className="container">
              <p>096.733.5089</p>
            </div>
          </div>
        </div>
        <div className="email">
          <div className="email_icon">
            <FontAwesomeIcon icon={faMailBulk} />
          </div>
          <div className="email_container">
            <div className="title">
              <p>Email:</p>
            </div>
            <div className="container">
              <p>gdtddientu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header_container py-3">
        <div className="logo_left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo_center">
          <img src={logo_center} alt="Logo" />
        </div>
        <div className="logo_right">
          <Search className={'display: flex'}/>
          <div className="image">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
