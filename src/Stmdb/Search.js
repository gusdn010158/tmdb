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

const movieItems = [
  { name: "인기", path: "/Search/movies/0" },
  { name: "현재 상영중", path: "/Search/movies/1" },
  { name: "개봉 예정", path: "/Search/movies/2" },
  { name: "높은 평점", path: "/Search/movies/3" },
];

function Search() {
  const location = useLocation();

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
          <Route path="/movies/0" element={<Spopular />} />
          <Route path="/movies/1" element={<Stwo />} />
          <Route path="/movies/2" element={<Sthree />} />
          <Route path="/movies/3" element={<Sfour />} />
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
