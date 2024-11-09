import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "./Board";
import Bottom from "./Bottom";
import First from "./First";
import Header from "./Header";
import Join from "./Join";
import Latest from "./Latest";
import Popular from "./Popular";
import Say from "./Say";
import Watch from "./Watch";
import Search from "./Stmdb/Search";
import styled from "styled-components";

function App() {
  return (
    <APP>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <First />
              <Say />
              <Latest />
              <Popular />
              <Watch />
              <Join />
              <Board />
            </Main>
          }
        />

        <Route path="/Search/*" element={<Search />} />
      </Routes>
      <Bottom />
    </APP>
  );
}

export default App;

const APP = styled.div`
  width: 100%;

  box-sizing: border-box;
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;
