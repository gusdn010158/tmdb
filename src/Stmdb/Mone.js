import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Mone() {
  const [Mone, setMone] = useState([]);
  const [chartData, setChartData] = useState([
    { date: "Day 1", value: 10 },
    { date: "Day 2", value: 20 },
    { date: "Day 3", value: 15 },
    { date: "Day 4", value: 30 },
    { date: "Day 5", value: 25 },
    { date: "Day 6", value: 40 },
    { date: "Day 7", value: 35 },
  ]);

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
      <ChartContainer>
        <SimpleChart data={chartData} />
      </ChartContainer>

      <Mon>
        <h2>주간 사이트 기여자 - 기간 : November 05-11</h2>
        {Mone.map((item, index) => (
          <Mfuc key={index}>
            <Mhthr>{item.num}</Mhthr>
            <Mimg src={item.img} alt={`user-${index}`} />
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

const ChartContainer = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;

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
