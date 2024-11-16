// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";
// function Mone() {
//   const [Mone, setMone] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/Mone")
//       .then((response) => {
//         setMone(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div>
//       <Mon>
//         <h2>주간 사이트 기여자 - 기간 : November 05-11</h2>
//         {Mone.map((item, index) => (
//           <Mfuc key={index}>
//             <Mhthr>{item.num}</Mhthr>
//             <Mimg src={item.img} alt={index} />
//             <div>
//               <Mhtwo>{item.name}</Mhtwo>
//               <Mhnine>{item.text}</Mhnine>
//             </div>
//           </Mfuc>
//         ))}
//       </Mon>
//     </div>
//   );
// }

// export default Mone;
// const Mon = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;
// const Mhthr = styled.div`
//   font-size: 20px;
// `;
// const Mimg = styled.img`
//   background-color: black;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   margin: 10px;
// `;
// const Mfuc = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Mhtwo = styled.div`
//   font-weight: 600;
//   font-size: 18px;
// `;
// const Mhnine = styled.div`
//   font-weight: 200;
//   font-size: 13px;
// `;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Mone() {
  const [Mone, setMone] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Mone")
      .then((response) => {
        setMone(response.data);

        // 차트 데이터 변환
        const chartFormattedData = response.data.map((item, index) => ({
          date: `Day ${index + 1}`, // 간단한 날짜 표현
          value: item.contributions || 0, // 기여도를 데이터로 사용
        }));
        setChartData(chartFormattedData);
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

function SimpleChart({ data }) {
  const width = 600; // 차트 너비
  const height = 400; // 차트 높이
  const padding = 50; // 여백

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
