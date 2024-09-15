import React from "react";
import styled from "styled-components";
function Search() {
  return (
    <Serach>
      <Sertitle>
        <h2>제목들</h2>
        <div>컴포넌트1</div>
        <div>컴포넌트 2</div>
        <div>서치 12 더 크게</div>
      </Sertitle>
      <SerCard>
        <div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>카드들</div>
          <div>서치 부분</div>
        </div>
        <div>더불러오기</div>
      </SerCard>
    </Serach>
  );
}

export default Search;
const Sertitle = styled.div`
  width: 300px;
  background-color: red;
`;

const Serach = styled.div`
  margin-top: 70px;
  display: flex;

  justify-content: center;
`;
const SerCard = styled.div`
  width: 900px;
  background-color: cadetblue;
`;
