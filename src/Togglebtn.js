import React, { useState } from "react";
import "./Togglebtn.css";
function Togglebtn({ title1, title2 }) {
  const [selected, setSelected] = useState("movie"); // 초기 상태는 'movie'로 설정

  const handleClick = (type) => {
    setSelected(type);
  };
  return (
    <div className="sc3_header_b">
      <div
        className={`sc3_btn1 ${selected === "movie" ? "active" : ""}`}
        onClick={() => handleClick("movie")}
      >
        <h3>{title1}</h3>
      </div>
      <div
        className={`sc3_btn2 ${selected === "tv" ? "active" : ""}`}
        onClick={() => handleClick("tv")}
      >
        <h3>{title2}</h3>
      </div>
    </div>
  );
}

export default Togglebtn;
