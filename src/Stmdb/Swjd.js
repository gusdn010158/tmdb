import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
function Swjd(props) {
  const [isSortOpen, setSortOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Ddays`);
        setSortOptions(response.data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Sertitled>
      <Sertitledtop onClick={() => setSortOpen(!isSortOpen)}>
        <div>정렬</div>
        <div>{isSortOpen ? <AiOutlineDown /> : <AiOutlineRight />}</div>
      </Sertitledtop>
      {isSortOpen && (
        <>
          <div>결과 정렬 기준</div>
          <Selec>
            {sortOptions.map((option) => (
              <option key={option.dday}>{option.dday}</option>
            ))}
          </Selec>
        </>
      )}
    </Sertitled>
  );
}

export default Swjd;
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
const Selec = styled.select`
  width: 100%;
  height: 40px;
  margin: 10px 0px 20px;
  background-color: gray;
  border-radius: 5px;
`;
