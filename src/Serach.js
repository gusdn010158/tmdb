import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
function Search() {
  const [oncc, setOncc] = useState(true);
  const [oncc1, setOncc1] = useState(true);
  const [oncc2, setOncc2] = useState(true);

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/popular")
      .then((response) => {
        setPopular(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Serach>
      <h2>제목들</h2>
      <Serr>
        <Sertitle>
          <Sertitled>
            <div>정렬</div>
            <div onClick={() => setOncc(!oncc)}>
              {oncc ? <AiOutlineRight /> : <AiOutlineDown />}
            </div>
          </Sertitled>

          <Sertitled>
            <div>볼수있는 곳</div>
            <div onClick={() => setOncc1(!oncc1)}>
              {oncc1 ? <AiOutlineRight /> : <AiOutlineDown />}
            </div>
          </Sertitled>
          <Sertitled>
            <div>필터</div>
            <div onClick={() => setOncc2(!oncc2)}>
              {oncc2 ? <AiOutlineRight /> : <AiOutlineDown />}
            </div>
          </Sertitled>
          <Sec>검색</Sec>
        </Sertitle>
        <SerCard>
          {popular.map((item, index) => (
            <SerCards key={index}>
              <Serimgs src={item.img} alt={item.id} />
              <Sername>
                <SerW>{item.title}</SerW>
                <div>{item.date}</div>
              </Sername>
            </SerCards>
          ))}
        </SerCard>
      </Serr>
    </Serach>
  );
}

export default Search;
const Sec = styled.div`
  border-radius: 20px;
  border: 1px solid gray;
  background-color: gray;
  margin: 20px;
  padding: 5px 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
const Sertitled = styled.div`
  margin: 20px;
  box-shadow: 1px 1px 1px 1px gray;
  padding: 5px 20px;
  border-radius: 5px;
  height: 40px;
  width: 220px;
  font-size: 18px;
  font-weight: 800;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Serr = styled.div`
  display: flex;
`;
const Sertitle = styled.div`
  width: 300px;
`;
const SerCards = styled.div`
  margin: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px gray;
  border: 1px solid gray;
  width: 200px;
  height: 350px;
`;

const SerW = styled.div`
  font-weight: 800;
  font-size: 17px;
`;
const Serimgs = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;
const Sername = styled.div`
  font-size: 16px;

  padding: 20px 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Serach = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SerCard = styled.div`
  width: 1000px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
