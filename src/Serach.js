import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
function Search({ items }) {
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
      <h2>페이지제목</h2>
      <Serr>
        <Sertitle>
          {oncc ? (
            <Sertitled>
              <Sertitledtop>
                <div>정렬</div>
                <div onClick={() => setOncc(!oncc)}>
                  <AiOutlineDown />
                </div>
              </Sertitledtop>
            </Sertitled>
          ) : (
            <Sertitled>
              <Sertitledtop>
                <div>정렬</div>
                <div onClick={() => setOncc(!oncc)}>
                  <AiOutlineRight />
                </div>
              </Sertitledtop>
              <div>결과 정렬 기준</div>
            </Sertitled>
          )}
          {oncc1 ? (
            <Sertitled>
              <Sertitledtop>
                <div>볼수있는 곳</div>
                <div onClick={() => setOncc1(!oncc1)}>
                  <AiOutlineDown />
                </div>
              </Sertitledtop>
            </Sertitled>
          ) : (
            <Sertitled>
              <Sertitledtop>
                <div>볼수있는 곳</div>
                <div onClick={() => setOncc1(!oncc1)}>
                  <AiOutlineRight />
                </div>
              </Sertitledtop>
              <div>나의 스트리밍 서비스</div>
              <div>국가</div>
            </Sertitled>
          )}
          {oncc2 ? (
            <Sertitled>
              <Sertitledtop>
                <div>필터</div>
                <div onClick={() => setOncc2(!oncc2)}>
                  <AiOutlineDown />
                </div>
              </Sertitledtop>
              <div>시청유무</div>
              <div>시청방법</div>
              <div>개봉일</div>
              <div>장르</div>
              <div>키워드</div>
            </Sertitled>
          ) : (
            <Sertitled>
              <Sertitledtop>
                <div>필터</div>
                <div onClick={() => setOncc2(!oncc2)}>
                  <AiOutlineRight />
                </div>
              </Sertitledtop>
            </Sertitled>
          )}

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
  margin: 0px 20px 20px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
  border-radius: 10px;

  width: 220px;
  font-size: 18px;
  font-weight: 800;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;
const Sertitledtop = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;
const Serr = styled.div`
  display: flex;
`;
const Sertitle = styled.div`
  width: 300px;
`;
const SerCards = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  width: 17%;
  height: 370px;
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
