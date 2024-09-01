import Board from "./Board";
import Bottom from "./Bottom";
import First from "./First";
import Header from "./Header";
import Join from "./Join";
import Latest from "./Latest";
import Popular from "./Popular";
import Say from "./Say";
import Watch from "./Watch";
import styled from "styled-components";
function App() {
  return (
    <APP>
      <Header />

      <Main>
        <First />
        <Say />

        <Latest />

        <Popular />

        <Watch />

        <Join />

        <Board />
        <Bottom />
      </Main>
    </APP>
  );
}

export default App;
const APP = styled.div`
  width: 100%;
  height: 2000px;
  box-sizing: border-box;
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;
