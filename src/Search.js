import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import axios from "axios";
import Spopular from "./Spopular";
import { useParams } from "react-router-dom";
function Search() {
  const [isSortOpen, setSortOpen] = useState(false);
  const [isStreamingOpen, setStreamingOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(true);
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [streamingServices, setStreamingServices] = useState([]);
  const [genreItems, setGenreItems] = useState([]);
  const [sortOptions, setSortOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ddaysRes, ditemsRes, servicesRes] = await Promise.all([
          axios.get("http://localhost:3001/Ddays"), //정렬 부분 데이터
          axios.get("http://localhost:3001/Ditems"), //필터 데이터
          axios.get("http://localhost:3001/streamingServices"), //볼수있는 곳 데이터
        ]);
        setSortOptions(ddaysRes.data);
        setGenreItems(ditemsRes.data);
        setStreamingServices(servicesRes.data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${category}`);
        setData(response.data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
    fetchData();
  }, [category]);
  return (
    <Serach>
      <Shtwo>페이지 제목</Shtwo>
      <Serr>
        <Sertitle>
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

          <Sertitled>
            <Sertitledtop onClick={() => setStreamingOpen(!isStreamingOpen)}>
              <div>볼 수 있는 곳</div>
              <div>
                {isStreamingOpen ? <AiOutlineDown /> : <AiOutlineRight />}
              </div>
            </Sertitledtop>
            {isStreamingOpen && (
              <Sertitledbottom>
                <div>나의 구독 중 서비스</div>
                {streamingServices.map((service) => (
                  <Serconimg
                    key={service.id}
                    src={service.img}
                    alt={service.id}
                  />
                ))}
              </Sertitledbottom>
            )}
          </Sertitled>

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

          <Sec>검색</Sec>
        </Sertitle>
        <Spopular data={data} />
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
const Sertitledtop = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  cursor: pointer;
`;
const Sertitledbottom = styled.div``;
const Sercon = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0px 10px 0px;
`;
const Selec = styled.select`
  width: 100%;
  height: 40px;
  margin: 10px 0px 20px;
  background-color: gray;
  border-radius: 5px;
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
const Serconimg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  padding: 2px;
  border-radius: 10px;
`;
