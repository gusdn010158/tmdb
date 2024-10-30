import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Togglebtn from "./Togglebtn";
import axios from "axios";

const Section = styled.section`
  width: 1300px;
  height: 388px;
  background-image: url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/8kxhwABuQhoybGr6TPdrV8w5FLm.jpg);
  background-color: linear-gradient(
    to right,
    rgba(3, 37, 65, 0.75),
    rgba(3, 37, 65, 0.75)
  );
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  height: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0,
      #fff 100%
    );
    pointer-events: none; //마우스 이벤트를 차단
    opacity: ${(props) =>
      props.hasScrollEffect
        ? 1
        : 0}; // opacity가  hasScrollEffect이 true가 되었을때 1이 되게 아니면 0
    transition: opacity 0.3s linear; // 트랜지션 추가
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
`;

const Header = styled.div`
  align-items: center;
  padding-left: 30px;
  display: flex;
  color: aliceblue;
`;

const Title = styled.h2`
  border-color: #032541;
  border-radius: 30px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 30px;
`;

const Content = styled.div`
  height: 250px;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cfd3da;
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const ContentInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
`;

const ContentItem = styled.div`
  margin-left: 40px;
  width: 300px;
  min-width: 300px;
`;

const ContentImage = styled.img`
  border-radius: 5px;
  height: 168px;
  width: 100%;
  background-size: cover;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContentText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentTextTitle = styled.h3`
  padding-top: 20px;
  margin: 0;
`;

function Latest() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");
  const [latestItems, setLatestItems] = useState([]);
  const [hasScrollEffect, setHasScrollEffect] = useState(true);
  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/latestItems")
      .then((response) => {
        setLatestItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleScroll = (e) => {
    const { scrollLeft } = e.target; //가로 스크롤 위치를 나타냄

    setHasScrollEffect(scrollLeft === 0); //가로스크롤이 0일시hasScrollEffect이 true
  };
  return (
    <Section>
      <Wrapper onScroll={handleScroll} hasScrollEffect={hasScrollEffect}>
        <ContentWrapper>
          <Header>
            <Title>최신 예고편</Title>
            <Togglebtn
              titles={["인기", "스트리밍", "TV", "대여", "극장"]}
              onToggle={handleToggle}
              useWhiteTheme={true}
            />
          </Header>
          <Content>
            <ContentInner>
              {latestItems.map((item) => (
                <ContentItem key={item.id}>
                  <ContentImage alt="img" src={item.img} />
                  <ContentText>
                    <ContentTextTitle>{item.title}</ContentTextTitle>
                    설명
                  </ContentText>
                </ContentItem>
              ))}
            </ContentInner>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
}

export default Latest;
