// // import React from "react";
// // import styled from "styled-components";
// // import Spopular from "./Spopular";
// // import Swjd from "./Swjd";
// // import Slook from "./Slook";
// // import Sfeel from "./Sfeel";
// // import { Route, Routes } from "react-router-dom";
// // import Stwo from "./Stwo";
// // function Search() {
// //   return (
// //     <Serach>
// //       <Shtwo>페이지 제목</Shtwo>
// //       <Serr>
// //         <Sertitle>
// //           <Swjd />
// //           <Slook />
// //           <Sfeel />
// //           <Sec>검색</Sec>
// //         </Sertitle>
// //         <Routes>
// //           <Route path="/" element={<Spopular />} />
// //           <Route path="/two" element={<Stwo />} />
// //           <Route path="/three" element={<Sthree />} />
// //           <Route path="/four" element={<Sfour />} />
// //           <Route path="/five" element={<Sfive/>} />
// //         </Routes>
// //       </Serr>
// //     </Serach>
// //   );
// // }

// // export default Search;

// // const Serach = styled.div`
// //   margin-top: 140px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// // `;

// // const Shtwo = styled.h2`
// //   position: absolute;
// //   top: 70px;
// //   left: 370px;
// // `;
// // const Serr = styled.div`
// //   display: flex;
// // `;
// // const Sertitle = styled.div`
// //   width: 300px;
// // `;

// // const Sec = styled.div`
// //   border-radius: 20px;
// //   background-color: gray;
// //   margin: 20px;
// //   padding: 5px 20px;
// //   height: 30px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   font-size: 18px;
// // `;
// import React from "react";
// import styled from "styled-components";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Spopular from "./Spopular";
// import Swjd from "./Swjd";
// import Slook from "./Slook";
// import Sfeel from "./Sfeel";
// import Stwo from "./Stwo";

// function Search() {
//   const location = useLocation();

//   // 경로별 제목을 설정하는 객체
//   const pageTitles = {
//     "Serach/": "1번 페이지",
//     "Serach/two": "2번 페이지",
//   };

//   // 현재 경로에 맞는 제목을 pageTitles에서 가져옴
//   const pageTitle = pageTitles[location.pathname] || "페이지 제목";

//   return (
//     <Serach>
//       <Shtwo>{pageTitle}</Shtwo>
//       <Serr>
//         <Sertitle>
//           <Swjd />
//           <Slook />
//           <Sfeel />
//           <Sec>검색</Sec>
//         </Sertitle>
//         <Routes>
//           <Route path="/" element={<Spopular />} />//인기
//           <Route path="/two" element={<Stwo />} />//현재 상영중
//           <Route path="/three" element={<Sthree />} />//개봉 예정
//           <Route path="/four" element={<Sfour />} />//높은 평점

//         </Routes>
//       </Serr>
//     </Serach>
//   );
// }

// export default Search;

// const Serach = styled.div`
//   margin-top: 140px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Shtwo = styled.h2`
//   position: absolute;
//   top: 70px;
//   left: 370px;
// `;

// const Serr = styled.div`
//   display: flex;
// `;

// const Sertitle = styled.div`
//   width: 300px;
// `;

// const Sec = styled.div`
//   border-radius: 20px;
//   background-color: gray;
//   margin: 20px;
//   padding: 5px 20px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 18px;
// `;
// import React from "react";
// import styled from "styled-components";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Spopular from "./Spopular";
// import Swjd from "./Swjd";
// import Slook from "./Slook";
// import Sfeel from "./Sfeel";
// import Stwo from "./Stwo";
// import Sthree from "./Sthree";
// import Sfour from "./Sfour";

// // movieItems 배열에 이름(name), 경로(path), 컴포넌트(component)를 추가
// const movieItems = [
//   { name: "인기", path: "/movies/0", component: <Spopular /> },
//   { name: "현재 상영중", path: "/movies/1", component: <Stwo /> },
//   { name: "개봉 예정", path: "/movies/2", component: <Sthree /> },
//   { name: "높은 평점", path: "/movies/3", component: <Sfour /> },
// ];

// function Search() {
//   const location = useLocation();

//   // 현재 경로에 맞는 제목을 movieItems에서 가져옴
//   const currentMovieItem = movieItems.find(
//     (item) => item.path === location.pathname
//   );
//   const pageTitle = currentMovieItem ? currentMovieItem.name : "페이지 제목";

//   return (
//     <Serach>
//       <Shtwo>{pageTitle}</Shtwo>
//       <Serr>
//         <Sertitle>
//           <Swjd />
//           <Slook />
//           <Sfeel />
//           <Sec>검색</Sec>
//         </Sertitle>
//         <Routes>
//           {movieItems.map((item, index) => (
//             <Route key={index} path={item.path} element={item.component} />
//           ))}
//         </Routes>
//       </Serr>
//     </Serach>
//   );
// }

// export default Search;

// const Serach = styled.div`
//   margin-top: 140px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Shtwo = styled.h2`
//   position: absolute;
//   top: 70px;
//   left: 370px;
// `;

// const Serr = styled.div`
//   display: flex;
// `;

// const Sertitle = styled.div`
//   width: 300px;
// `;

// const Sec = styled.div`
//   border-radius: 20px;
//   background-color: gray;
//   margin: 20px;
//   padding: 5px 20px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 18px;
// `;
// Search.js
import React from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import Spopular from "./Spopular";
import Swjd from "./Swjd";
import Slook from "./Slook";
import Sfeel from "./Sfeel";
import Stwo from "./Stwo";
import Sthree from "./Sthree";
import Sfour from "./Sfour";

// movieItems 배열에 이름(name), 경로(path), 컴포넌트(component)를 추가
const movieItems = [
  { name: "인기", path: "/Search/movies/0", component: <Spopular /> },
  { name: "현재 상영중", path: "/Search/movies/1", component: <Stwo /> },
  { name: "개봉 예정", path: "/Search/movies/2", component: <Sthree /> },
  { name: "높은 평점", path: "/Search/movies/3", component: <Sfour /> },
];

function Search() {
  const location = useLocation();

  // 현재 경로에 맞는 제목을 movieItems에서 가져옴
  const currentMovieItem = movieItems.find(
    (item) => item.path === location.pathname
  );
  const pageTitle = currentMovieItem ? currentMovieItem.name : "페이지 제목";

  return (
    <Serach>
      <Shtwo>{pageTitle}</Shtwo>
      <Serr>
        <Sertitle>
          <Swjd />
          <Slook />
          <Sfeel />
          <Sec>검색</Sec>
        </Sertitle>
        <Routes>
          {movieItems.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
        </Routes>
      </Serr>
    </Serach>
  );
}

export default Search;

const Serach = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Shtwo = styled.h2`
  position: absolute;
  top: 70px;
  left: 370px;
`;

const Serr = styled.div`
  display: flex;
`;

const Sertitle = styled.div`
  width: 300px;
`;

const Sec = styled.div`
  border-radius: 20px;
  background-color: gray;
  margin: 20px;
  padding: 5px 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
