// import React, { useState } from "react";
// import "./Togglebtn.css";
// function Togglebtn({ title1, title2 }) {
//   const [selected, setSelected] = useState("movie"); // 초기 상태는 'movie'로 설정

//   const handleClick = (type) => {
//     setSelected(type);
//   };
//   return (
//     <div className="sc3_header_b">
//       <div
//         className={`sc3_btn1 ${selected === "movie" ? "active" : ""}`}
//         onClick={() => handleClick("movie")}
//       >
//         <h3>{title1}</h3>
//       </div>
//       <div
//         className={`sc3_btn2 ${selected === "tv" ? "active" : ""}`}
//         onClick={() => handleClick("tv")}
//       >
//         <h3>{title2}</h3>
//       </div>
//     </div>
//   );
// }

// export default Togglebtn;
import React, { useState } from "react";
import "./Togglebtn.css";

function Togglebtn({ titles, onToggle }) {
  const [selected, setSelected] = useState(titles[0]); // 초기 상태는 첫 번째 제목으로 설정

  const handleClick = (title) => {
    setSelected(title);
    onToggle(title); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <div className="sc3_header_b">
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
