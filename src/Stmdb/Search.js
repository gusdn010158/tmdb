import React from "react";
import styled from "styled-components";
import Spopular from "./Spopular";
import Swjd from "./Swjd";
import Slook from "./Slook";
import Sfeel from "./Sfeel";
import { Route, Routes } from "react-router-dom";
import Stwo from "./Stwo";
function Search() {
  return (
    <Serach>
      <Shtwo>페이지 제목</Shtwo>
      <Serr>
        <Sertitle>
          <Swjd />
          <Slook />
          <Sfeel />
          <Sec>검색</Sec>
        </Sertitle>
        <Routes>
          <Route path="/" element={<Spopular />} />
          <Route path="/two" element={<Stwo />} />
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
