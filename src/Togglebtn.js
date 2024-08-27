import React, { useState } from "react";
import "./Togglebtn.css";

function Togglebtn({ titles, onToggle, useWhiteTheme }) {
  const [selected, setSelected] = useState(titles[0]); // 초기 상태는 첫 번째 제목으로 설정

  const handleClick = (title) => {
    setSelected(title);
    onToggle(title); // 선택된 값을 부모 컴포넌트로 전달
  };

  // `useWhiteTheme`에 따라 클래스 추가
  const containerClass = useWhiteTheme
    ? "sc3_header_b white-theme"
    : "sc3_header_b";

  return (
    <div className={containerClass}>
      {titles.map((title) => (
        <div
          key={title}
          className={`sc3_btn ${selected === title ? "active" : ""}`}
          onClick={() => handleClick(title)}
        >
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Togglebtn;
