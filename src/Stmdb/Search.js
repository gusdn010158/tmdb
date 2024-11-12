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
import Stvone from "./Stvone";
import Stvtwo from "./Stvtwo";
import Stvthree from "./Stvthree";
import Stvfour from "./Stvfour";
import Spleplo from "./Spleplo";
import Mone from "./Mone";

const movieItems = [
  { name: "인기 영화", path: "/Search/movies/0" },
  { name: "현재 상영 영화", path: "/Search/movies/1" },
  { name: "개봉 예정 영화", path: "/Search/movies/2" },
  { name: "높은 평점의 인기영화", path: "/Search/movies/3" },
  { name: "인기TV프로그램", path: "/Search/tv/0" },
  { name: "오늘 방영할 TV프로그램", path: "/Search/tv/1" },
  { name: "현재 방영중인TV프로그램", path: "/Search/tv/2" },
  { name: "높은 평점의 TV프로그램", path: "/Search/tv/3" },
  { name: "인기인물", path: "/Search/people/0" },
  { name: "", path: "/Search/more/0" },
];

function Search() {
  const location = useLocation();

  const currentMovieItem = movieItems.find(
    (item) => item.path === location.pathname
  );
  const pageTitle = currentMovieItem ? currentMovieItem.name : "페이지 제목";

  // const isPeopleRoute = location.pathname === "/Search/people/0";
  const isHiddenRoute =
    location.pathname === "/Search/people/0" ||
    location.pathname === "/Search/more/0";
  return (
    <Serach>
      <Shtwo>{pageTitle}</Shtwo>
      <Serr>
        {!isHiddenRoute && (
          <Sertitle>
            <Swjd />
            <Slook />
            <Sfeel />
            <Sec>검색</Sec>
          </Sertitle>
        )}
        <Routes>
          <Route path="/movies/0" element={<Spopular />} />
          <Route path="/movies/1" element={<Stwo />} />
          <Route path="/movies/2" element={<Sthree />} />
          <Route path="/movies/3" element={<Sfour />} />
          <Route path="/tv/0" element={<Stvone />} />
          <Route path="/tv/1" element={<Stvtwo />} />
          <Route path="/tv/2" element={<Stvthree />} />
          <Route path="/tv/3" element={<Stvfour />} />
          <Route path="/people/0" element={<Spleplo />} />
          <Route path="/more/0" element={<Mone />} />
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
  left: 330px;
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
