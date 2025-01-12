import React, { useState, useEffect } from "react";
import data from "../server/db.json";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
function Slook(props) {
  const [isStreamingOpen, setStreamingOpen] = useState(false);
  const [streamingServices, setStreamingServices] = useState([]);

  useEffect(() => {
    setStreamingServices(data.streamingServices);
  }, []);
  return (
    <Sertitled>
      <Sertitledtop onClick={() => setStreamingOpen(!isStreamingOpen)}>
        <div>볼 수 있는 곳</div>
        <div>{isStreamingOpen ? <AiOutlineDown /> : <AiOutlineRight />}</div>
      </Sertitledtop>
      {isStreamingOpen && (
        <Sertitledbottom>
          <div>나의 구독 중 서비스</div>
          {streamingServices.map((service) => (
            <Serconimg key={service.id} src={service.img} alt={service.id} />
          ))}
        </Sertitledbottom>
      )}
    </Sertitled>
  );
}

export default Slook;
const Serconimg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  padding: 2px;
  border-radius: 10px;
`;
const Sertitledbottom = styled.div``;
const Sertitledtop = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  cursor: pointer;
`;
const Sertitled = styled.div`
  margin: 0px 20px 20px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 20px;
  border-radius: 10px;
  width: 220px;
  font-size: 18px;
  font-weight: 800;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
