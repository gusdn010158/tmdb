import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Section from "./Section";
import Togglebtn from "./Togglebtn";

const StyledSection = styled.section`
  width: 1300px;
  height: 448px;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

const InnerWrapper = styled.div`
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 20px;
`;

const Content = styled.div`
  overflow-x: auto;
  width: 100%;
  height: 100%;

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
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
`;

function Popular() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");
  const [popular, setPopular] = useState([]);

  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

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
    <StyledSection>
      <Container>
        <ContentWrapper>
          <InnerWrapper>
            <Header>
              <Title>What's Popular</Title>
              <Togglebtn
                titles={["스트리밍", "TV", "대여", "극장"]}
                onToggle={handleToggle}
              />
            </Header>
            <Content>
              <ContentInner>
                {popular.map((item) => (
                  <Section
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    date={item.date}
                  />
                ))}
              </ContentInner>
            </Content>
          </InnerWrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

export default Popular;
