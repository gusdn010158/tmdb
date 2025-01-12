import React, { useState, useEffect } from "react";
import data from "../server/db.json";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

function Sfeel(props) {
  const [isFilterOpen, setFilterOpen] = useState(true);
  const [genreItems, setGenreItems] = useState([]);

  useEffect(() => {
    setGenreItems(data.Ditems);
  }, []);
  return (
    <Sertitled>
      <Sertitledtop onClick={() => setFilterOpen(!isFilterOpen)}>
        <div>필터</div>
        <div>{isFilterOpen ? <AiOutlineDown /> : <AiOutlineRight />}</div>
      </Sertitledtop>
      {isFilterOpen && (
        <>
          <Sercon>
            <div>시청 유무</div>
            <div>
              <input type="radio" name="viewStatus" /> 전체
            </div>
            <div>
              <input type="radio" name="viewStatus" /> 안 본 영화
            </div>
            <div>
              <input type="radio" name="viewStatus" /> 본 영화
            </div>
          </Sercon>

          <Sercon>
            <div>장르</div>
            {genreItems.map((item) => (
              <Diwkd key={item.Ditem}>{item.Ditem}</Diwkd>
            ))}
          </Sercon>

          <div>키워드</div>
          <Sinput />
        </>
      )}
    </Sertitled>
  );
}

export default Sfeel;

const Sertitledtop = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  cursor: pointer;
`;
const Sertitled = styled.div`
  margin: 0px 20px 20px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
  border-radius: 10px;
  width: 220px;
  font-size: 18px;
  font-weight: 800;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Sercon = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0px 10px 0px;
`;
const Sinput = styled.input`
  width: 210px;
  height: 20px;
`;
const Diwkd = styled.div`
  border-radius: 40px;
  margin: 3px;
  border: 1px solid black;
  padding: 2px 10px;
  display: inline-block; /* 텍스트 길이에 맞게 width 조정 */
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
`;
