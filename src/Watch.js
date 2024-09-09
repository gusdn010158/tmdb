import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
import axios from "axios";

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
  height: 100%;
  flex-wrap: nowrap;
`;

function Watch(props) {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  const [watching, setWatching] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/watching")
      .then((response) => {
        setWatching(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SectionContainer>
      <InnerContainer>
        <ContentWrapper>
          <Header>
            <h2>Free To Watch</h2>
            <Togglebtn titles={["영화", "TV"]} onToggle={handleToggle} />
          </Header>
          <Content>
            <ContentInner>
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
