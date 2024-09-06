// import React from "react";

// import styled from "styled-components";
// function Header() {
//   return (
//     <Head>
//       <Content>
//         <ContentM>
//           <ContentO>
//             <Nlogo>
//               <img
//                 src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
//                 alt="tmdb"
//               />
//             </Nlogo>

//             <Title>
//               <TitleN>영화</TitleN>
//               <TitleN>tv프로그램</TitleN>
//               <TitleN>인물</TitleN>
//               <TitleN>more</TitleN>
//             </Title>
//           </ContentO>

//           <div>
//             <Ftitle>
//               <Fimg src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" />

//               <F2>KO</F2>
//               <F1>로그인</F1>
//               <F1>회원가입</F1>

//               <Fimg src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" />
//             </Ftitle>
//           </div>
//         </ContentM>
//       </Content>
//     </Head>
//   );
// }

// export default Header;
// const Head = styled.div`
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0px;
//   left: 0;
//   height: 64px;
//   width: 100%;
//   z-index: 10;
//   background-color: #032541;
//   transition: all 2s;
// `;
// const Content = styled.div`
//   width: 70%;
//   display: flex;
//   justify-content: center;
// `;
// const ContentM = styled.div`
//   display: flex;
//   justify-content: space-between;
//   position: relative;
//   top: 0;
//   left: 0;
//   background-color: #032541;
//   width: 100%;
//   padding: 0 40px;
// `;
// const ContentO = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: nowrap;
//   align-items: center;
//   overflow: visible;
// `;
// const Nlogo = styled.div`
//   object-fit: fill;
//   display: block;
//   margin-right: 16px;
//   width: 154px;
//   height: 20px;
// `;
// const Title = styled.ul`
//   display: flex;

//   margin: 0;
//   padding: 0;
// `;
// const TitleN = styled.li`
//   list-style: none;
//   margin-right: 10px;

//   padding: 15px;
//   font-weight: 60px;
// `;

// const F1 = styled.li`
//   width: 70px;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   list-style: none;

//   font-weight: 60px;
// `;

// const Fimg = styled.img`
//   width: 70px;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   list-style: none;

//   font-weight: 60px;
// `;
// const F2 = styled.li`
//   list-style: none;
//   font-size: 12px;
//   padding: 5px;
//   border-radius: 5px;
//   border: 1px solid #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 60px;
// `;
// const Ftitle = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 370px;
//   padding: 0;
// `;
import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  // 각 메뉴의 하위 메뉴 상태를 관리하는 useState
  const [movieMenuOpen, setMovieMenuOpen] = useState(false);
  const [tvMenuOpen, setTvMenuOpen] = useState(false);
  const [peopleMenuOpen, setPeopleMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <Head>
      <Content>
        <ContentM>
          <ContentO>
            <Nlogo>
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="tmdb"
              />
            </Nlogo>

            <Title>
              <TitleN onClick={() => setMovieMenuOpen(!movieMenuOpen)}>
                영화
              </TitleN>
              {movieMenuOpen && (
                <SubMenu>
                  <SubMenuItem>인기</SubMenuItem>
                  <SubMenuItem>상영 중</SubMenuItem>
                  <SubMenuItem>개봉 예정</SubMenuItem>
                  <SubMenuItem>높은 평점</SubMenuItem>
                </SubMenu>
              )}

              <TitleN onClick={() => setTvMenuOpen(!tvMenuOpen)}>
                tv프로그램
              </TitleN>
              {tvMenuOpen && (
                <SubMenu>
                  <SubMenuItem>인기</SubMenuItem>
                  <SubMenuItem>방영 중</SubMenuItem>
                  <SubMenuItem>오늘 방영</SubMenuItem>
                  <SubMenuItem>높은 평점</SubMenuItem>
                </SubMenu>
              )}

              <TitleN onClick={() => setPeopleMenuOpen(!peopleMenuOpen)}>
                인물
              </TitleN>
              {peopleMenuOpen && (
                <SubMenu>
                  <SubMenuItem>인기 배우</SubMenuItem>
                  <SubMenuItem>인기 감독</SubMenuItem>
                </SubMenu>
              )}

              <TitleN onClick={() => setMoreMenuOpen(!moreMenuOpen)}>
                more
              </TitleN>
              {moreMenuOpen && (
                <SubMenu>
                  <SubMenuItem>뉴스</SubMenuItem>
                  <SubMenuItem>트렌드</SubMenuItem>
                </SubMenu>
              )}
            </Title>
          </ContentO>

          <div>
            <Ftitle>
              <Fimg src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" />

              <F2>KO</F2>
              <F1>로그인</F1>
              <F1>회원가입</F1>

              <Fimg src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" />
            </Ftitle>
          </div>
        </ContentM>
      </Content>
    </Head>
  );
}

export default Header;

// styled-components 스타일링
const Head = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0;
  height: 64px;
  width: 100%;
  z-index: 10;
  background-color: #032541;
  transition: all 2s;
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;
const ContentM = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  background-color: #032541;
  width: 100%;
  padding: 0 40px;
`;
const ContentO = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  overflow: visible;
`;
const Nlogo = styled.div`
  object-fit: fill;
  display: block;
  margin-right: 16px;
  width: 154px;
  height: 20px;
`;
const Title = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
const TitleN = styled.li`
  list-style: none;
  margin-right: 10px;
  padding: 15px;
  font-weight: 60px;
  cursor: pointer;
`;

const SubMenu = styled.ul`
  background-color: white;
  color: black;
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubMenuItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const F1 = styled.li`
  width: 70px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-weight: 60px;
`;

const Fimg = styled.img`
  width: 70px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-weight: 60px;
`;

const F2 = styled.li`
  list-style: none;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 60px;
`;

const Ftitle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 370px;
  padding: 0;
`;
