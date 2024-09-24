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
              <Selec>
                <option value="option1">인기도 내림차순</option>
                <option value="option2">인기도 오름차순</option>
                <option value="option3">평점 내림차순</option>
                <option value="option4">평점 오름차순</option>
                <option value="option5">상영일 오름차순</option>
                <option value="option6">상영일 내림차순</option>
              </Selec>
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
              <Sertitledbottom>
                <div>나의 스트리밍 서비스</div>
                <Sercon>
                  <div>국가</div>
                  <Serconimg src="https://media.themoviedb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/dQeAar5H991VYporEjUspolDarG.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/97yvRBw1GzX7fXprcF80er19ot.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/hPcjSaWfMwEqXaCMu7Fkb529Dkc.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/5gmEivxOGPdq4Afpq1f8ktLtEW1.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/2E03IAZsX4ZaUqM7tXlctEPMGWS.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/crFbxg6jkiKc14gpIGMkre9Y3mu.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/fj9Y8iIMFUC6952HwxbGixTQPb7.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/eKVmLFHW5PeNhuR7Nedd8OIxW2M.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/oR1aNm1Qu9jQBkW4VrGPWhqbC3P.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/k2YgZyxij5RcnS1qqUYEUrJB4oQ.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/5zqbck5mo8PuVbGu2ngBUdn5Yga.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/vLZKlXUNDcZR7ilvfY9Wr9k80FZ.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/6dET59jNU0ADysghEjl8Unuc7Ca.jpg" />
                  <Serconimg src="https://media.themoviedb.org/t/p/original/mSH24WQcRDJ2fsL5iucXqqRnSRb.jpg" />
                </Sercon>
              </Sertitledbottom>
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
              <div>
                <Sercon>
                  <div>시청유무</div>

                  <div>
                    <input
                      type="radio"
                      id="option1"
                      name="group1"
                      value="value1"
                    />
                    전체
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option2"
                      name="group1"
                      value="value2"
                    />
                    안본영화
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="option3"
                      name="group1"
                      value="value3"
                    />
                    본 영화
                  </div>
                </Sercon>
              </div>
              <div>
                <Sercon>
                  <div>시청방법</div>
                  <input
                    type="checkbox"
                    id="option1"
                    name="option1"
                    value="value1"
                  />
                  전체 시청 방법
                </Sercon>
              </div>
              <div>
                <Sercon>
                  <div>장르</div>
                  <Diwkd>SF</Diwkd>
                  <Diwkd>TV영화</Diwkd>
                  <Diwkd>가족</Diwkd>
                  <Diwkd>공포</Diwkd>
                  <Diwkd>다큐멘터리</Diwkd>
                  <Diwkd>드라마</Diwkd>
                  <Diwkd>로맨스</Diwkd>
                  <Diwkd>모험</Diwkd>
                  <Diwkd>미스터리</Diwkd>
                  <Diwkd>범죄</Diwkd>
                  <Diwkd>서부</Diwkd>
                  <Diwkd>스릴러</Diwkd>
                  <Diwkd>애니메이션</Diwkd>
                  <Diwkd>액션</Diwkd>
                  <Diwkd>역사</Diwkd>
                  <Diwkd>음악</Diwkd>
                  <Diwkd>전쟁</Diwkd>
                  <Diwkd>코미디</Diwkd>
                  <Diwkd>판타지</Diwkd>
                </Sercon>
              </div>
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
const Diwkd = styled.div`
  border-radius: 40px;
  margin: 3px;
  border: 1px solid black;
  padding: 2px 10px; /* 텍스트 주변에 여백을 주기 위해 패딩 추가 */
  display: inline-block; /* 텍스트 길이에 맞게 width 조정 */
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
`;
const Sertitledtop = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;
const Serconimg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  padding: 2px;
  border-radius: 10px;
`;
const Sertitledbottom = styled.div``;
const Sercon = styled.div`
  border-bottom: 1px solid black;
`;
const Selec = styled.select`
  width: 100%;
  height: 40px;
  margin: 10px 0px 20px;
  background-color: gray;
  border-radius: 5px;
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
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
