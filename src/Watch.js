import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
import data from "./server/db.json";

const SectionContainer = styled.section`
  width: 1300px;
  height: 481px;
`;

const InnerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;

  h2 {
    margin: 0;
    margin-right: 20px;
  }
`;

const Content = styled.div`
  overflow-x: auto;
  width: 100%;
  height: 400px;
  padding-top: 20px;

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

function Watch(props) {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");
  const [hasScrollEffect, setHasScrollEffect] = useState(true);
  const [watching, setWatching] = useState([]);
  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setWatching(data.watching);
  }, []);
  const handleScroll = (e) => {
    const { scrollLeft } = e.target; //가로 스크롤 위치를 나타냄

    setHasScrollEffect(scrollLeft === 0); //가로스크롤이 0일시hasScrollEffect이 true
  };
  return (
    <SectionContainer>
      <InnerContainer>
        <ContentWrapper>
          <Header>
            <h2>Free To Watch</h2>
            <Togglebtn titles={["영화", "TV"]} onToggle={handleToggle} />
          </Header>
          <Content onScroll={handleScroll}>
            <ContentInner hasScrollEffect={hasScrollEffect}>
              {watching.map((item) => (
                <Section
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  date={item.date}
                />
              ))}
            </ContentInner>
          </Content>
        </ContentWrapper>
      </InnerContainer>
    </SectionContainer>
  );
}

export default Watch;
