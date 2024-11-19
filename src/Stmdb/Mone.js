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

function SimpleChart({ data }) {
  const width = 600;
  const height = 400;
  const padding = 50;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = 0;
  const xScale = (index) =>
    padding + (index / (data.length - 1)) * (width - 2 * padding);
  const yScale = (value) =>
    height -
    padding -
    ((value - minValue) / (maxValue - minValue)) * (height - 2 * padding);

  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="black"
      />
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="black"
      />

      {data.map((d, i) =>
        i < data.length - 1 ? (
          <line
            key={`line-${i}`}
            x1={xScale(i)}
            y1={yScale(d.value)}
            x2={xScale(i + 1)}
            y2={yScale(data[i + 1].value)}
            stroke="blue"
          />
        ) : null
      )}

      {data.map((d, i) => (
        <circle
          key={`circle-${i}`}
          cx={xScale(i)}
          cy={yScale(d.value)}
          r={4}
          fill="red"
        />
      ))}

      {data.map((d, i) => (
        <text
          key={`date-${i}`}
          x={xScale(i)}
          y={height - padding + 20}
          textAnchor="middle"
          fontSize="10"
        >
          {d.date}
        </text>
      ))}

      {[0, maxValue / 2, maxValue].map((val, i) => (
        <text
          key={`y-label-${i}`}
          x={padding - 10}
          y={yScale(val) + 5}
          textAnchor="end"
          fontSize="10"
        >
          {val}
        </text>
      ))}
    </svg>
  );
}

export default Mone;

const ChartContainer = styled.div`
  margin-bottom: 20px;
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
