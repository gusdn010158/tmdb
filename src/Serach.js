import React from "react";
import styled from "styled-components";

function Search() {
  // 예시 데이터 배열
  const data = Array(16).fill({
    imgSrc:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
    name: "반지의 제왕: 힘의 반지",
    date: "9월 01, 2022",
  });

  return (
    <Serach>
      <h2>제목들</h2>
      <Serr>
        <Sertitle>
          <Sertitled>정렬</Sertitled>
          <Sertitled>볼수있는 곳</Sertitled>
          <Sertitled>필터</Sertitled>
          <Sertitled>검색</Sertitled>
        </Sertitle>
        <SerCard>
          {data.map((item, index) => (
            <SerCards key={index}>
              <Serimgs src={item.imgSrc} alt={item.name} />
              <Sername>
                {item.name} {item.date}
              </Sername>
            </SerCards>
          ))}
        </SerCard>
      </Serr>
    </Serach>
  );
}

export default Search;

const Sertitled = styled.div`
  margin: 20px;
  border-radius: 5px;
  height: 50px;
  font-size: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
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
  border: 1px solid black;
  width: 200px;
  height: 350px;
`;
const Serimgs = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 5px;
`;
const Sername = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
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
