import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
function Mone() {
  const [Mone, setMone] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Mone")
      .then((response) => {
        setMone(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Mon>
        <h2>주간 사이트 기여자 - 기간 : November 05-11</h2>
        {Mone.map((item, index) => (
          <Mfuc key={index}>
            <Mhthr>{item.num}</Mhthr>
            <Mimg src={item.img} alt={index} />
            <div>
              <Mhtwo>{item.name}</Mhtwo>
              <Mhnine>{item.text}</Mhnine>
            </div>
          </Mfuc>
        ))}
      </Mon>
    </div>
  );
}

export default Mone;
const Mon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Mhthr = styled.div`
  font-size: 20px;
`;
const Mimg = styled.img`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
`;
const Mfuc = styled.div`
  display: flex;
  align-items: center;
`;

const Mhtwo = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const Mhnine = styled.div`
  font-weight: 200;
  font-size: 13px;
`;
