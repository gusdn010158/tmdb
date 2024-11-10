import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
function Spleplo(props) {
  const [ple, setple] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pleplo");
        setple(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Ple>
        {ple.map((item, index) => (
          <Plene>
            <Pleneimg src={item.img} alt={index} />
            <Plenetext>
              <Plenebig>{item.name}</Plenebig>
              <Plenesmall>{item.text}</Plenesmall>
            </Plenetext>
          </Plene>
        ))}
      </Ple>
    </>
  );
}

export default Spleplo;
const Ple = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
`;
const Plene = styled.div`
  width: 23%;
  height: 350px;
  margin: 10px;
`;
const Pleneimg = styled.img`
  height: 85%;
  width: 100%;
  background-color: gray;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const Plenetext = styled.div`
  height: 15%;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`;
const Plenebig = styled.div`
  font-weight: 600;
`;
const Plenesmall = styled.div`
  font-size: 12px;
  color: gray;
`;
