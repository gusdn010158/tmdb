import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #032541;
  border-radius: 30px;
  display: inline-flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.useWhiteTheme && `border: 1px solid rgba(30, 213, 169, 1);`}
`;

const Button = styled.div`
  border-radius: 30px;
  cursor: pointer;
  flex: 1;
  color: black;
  margin: 0;
  padding: 4px 15px;
  background: ${(props) => (props.active ? "#032541" : "transparent")};
  color: ${(props) => (props.active ? "black" : "inherit")};

  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 80px;
    background: ${(props) =>
      props.active
        ? "linear-gradient(to right, rgb(2, 252, 119), rgb(0, 255, 247))"
        : "none"};
    -webkit-background-clip: ${(props) => (props.active ? "text" : "none")};
    -webkit-text-fill-color: ${(props) =>
      props.active ? "transparent" : "black"};
    color: ${(props) => (props.active ? "black" : "inherit")};
  }

  ${(props) =>
    props.useWhiteTheme &&
    props.active &&
    `
    background: rgba(30, 213, 169, 1);
    
    h3 {
      background: black;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}

  ${(props) =>
    props.useWhiteTheme &&
    !props.active &&
    `
    h3 {
      color: white;
    }
  `}
`;

function Togglebtn({ titles, onToggle, useWhiteTheme }) {
  const [selected, setSelected] = useState(titles[0]); // 초기 상태는 첫 번째 제목으로 설정

  const handleClick = (title) => {
    setSelected(title);
    onToggle(title); // 선택된 값을 부모 컴포넌트로 전달
  };

  return (
    <Container useWhiteTheme={useWhiteTheme}>
      {titles.map((title) => (
        <Button
          key={title}
          active={selected === title}
          onClick={() => handleClick(title)}
          useWhiteTheme={useWhiteTheme}
        >
          <h3>{title}</h3>
        </Button>
      ))}
    </Container>
  );
}

export default Togglebtn;
