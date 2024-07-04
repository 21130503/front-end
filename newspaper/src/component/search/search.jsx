import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.scss";
import { route } from "../../route";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Search({ className }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClickButtonSearch = () => {
    if (value) {
      navigate(`/search/value=${value}`);
    }
  };
  const handleChange = (e) => {
    if (e.target.value.startsWith(" ")) {
      return;
    } else {
      setValue(e.target.value);
    }
  };
  console.log(value);

  return (
    <div className={`${(className, "search")}`}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="search_ip"
      />
      <div onClick={handleClickButtonSearch} className="icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Search;
