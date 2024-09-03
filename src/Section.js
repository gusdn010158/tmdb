import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin-left: 20px;
  width: 150px;
  min-width: 150px;
  height: 100%;
`;

const Image = styled.img`
  border-radius: 5%;
  width: 100%;
  height: 220px;
  display: inline-block;
  box-sizing: border-box;
`;

const Content = styled.div`
  flex-wrap: wrap;
  padding: 26px 10px 12px 10px;
  height: 100px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;

function Section({ title, date, img }) {
  return (
    <SectionContainer>
      <Image src={img} alt="aa" />
      <Content>
        <Title>{title}</Title>
        {date}
      </Content>
    </SectionContainer>
  );
}

export default Section;
