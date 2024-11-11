import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  const [isPlusToastVisible, setPlusToastVisible] = useState(false);
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <Head>
      <Content>
        <ContentM>
          <ContentO>
            <Nlogo to="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="tmdb"
              />
            </Nlogo>

            <MovieMenu />
            <TvMenu />
            <PeopleMenu />
            <MoreMenu />
          </ContentO>

          <div>
            <Ftitle>
              <Fimg
                onClick={() => setPlusToastVisible(!isPlusToastVisible)}
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
              />
              {isPlusToastVisible && (
                <Plustoast>
                  찾으시는 영화나 TV 프로그램이 없나요? 로그인 하셔서 직접
                  만들어주세요.
                </Plustoast>
              )}
              <F2
                onMouseEnter={() => setLangDropdownOpen(true)}
                onMouseLeave={() => setLangDropdownOpen(false)}
                active={isLangDropdownOpen}
              >
                KO
              </F2>
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

const SubMenu = ({ left, items, basePath }) => (
  <StyledSubMenu left={left}>
    {items.map((item, index) => (
      <SubMenuItem to={`${basePath}/${index}`} key={index}>
        {item}
      </SubMenuItem>
    ))}
  </StyledSubMenu>
);

function MovieMenu() {
  const [movieMenuOpen, setMovieMenuOpen] = useState(false);
  const movieItems = ["인기", "현재 상영중", "개봉 예정", "높은 평점"];

  return (
    <TitleN
      onMouseEnter={() => setMovieMenuOpen(true)}
      onMouseLeave={() => setMovieMenuOpen(false)}
    >
      영화
      {movieMenuOpen && (
        <SubMenu left="220px" items={movieItems} basePath="/Search/movies" />
      )}
    </TitleN>
  );
}

function TvMenu() {
  const [tvMenuOpen, setTvMenuOpen] = useState(false);
  const tvItems = ["인기", "오늘 방영", "TV 방영중", "높은 평점"];

  return (
    <TitleN
      onMouseEnter={() => setTvMenuOpen(true)}
      onMouseLeave={() => setTvMenuOpen(false)}
    >
      TV 프로그램
      {tvMenuOpen && (
        <SubMenu left="300px" items={tvItems} basePath="/Search/tv" />
      )}
    </TitleN>
  );
}

function PeopleMenu() {
  const [peopleMenuOpen, setPeopleMenuOpen] = useState(false);
  const peopleItems = ["인기 인물"];

  return (
    <TitleN
      onMouseEnter={() => setPeopleMenuOpen(true)}
      onMouseLeave={() => setPeopleMenuOpen(false)}
    >
      인물
      {peopleMenuOpen && (
        <SubMenu left="410px" items={peopleItems} basePath="/Search/people" />
      )}
    </TitleN>
  );
}

function MoreMenu() {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreItems = ["토론 내역", "기여 랭킹", "지원", "API"];

  return (
    <TitleN
      onMouseEnter={() => setMoreMenuOpen(true)}
      onMouseLeave={() => setMoreMenuOpen(false)}
    >
      More
      {moreMenuOpen && (
        <SubMenu left="480px" items={moreItems} basePath="/more" />
      )}
    </TitleN>
  );
}

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

const Nlogo = styled(Link)`
  object-fit: fill;
  display: block;
  margin-right: 16px;
  width: 154px;
  height: 20px;
`;

const TitleN = styled.li`
  list-style: none;
  margin-right: 10px;
  padding: 15px;
  font-weight: 60px;
  cursor: pointer;
`;

const StyledSubMenu = styled.ul`
  background-color: white;

  position: absolute;
  top: 50px;
  left: ${(props) => props.left};
  list-style: none;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const Plustoast = styled.ul`
  background-color: white;
  top: 55px;
  margin: 0;
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  color: black;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  right: 240px;
  position: absolute;
`;
const SubMenuItem = styled(Link)`
  padding: 5px 10px;
  color: black;
  display: flex;
  text-decoration: none;
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
  background-color: ${(props) => (props.active ? "white" : "#032541")};
  color: ${(props) => (props.active ? "black" : "white")};
`;

const Ftitle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 370px;
  padding: 0;
`;

export default Header;
