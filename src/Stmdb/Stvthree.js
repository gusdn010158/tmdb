import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
function Stvthree(props) {
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
    <SerCard>
      {watching.map((item, index) => (
        <SerCards key={index}>
          <Serimgs src={item.img} alt={item.id} />
          <Sername>
            <SerW>{item.title}</SerW>
            <div>{item.date}</div>
          </Sername>
        </SerCards>
      ))}
    </SerCard>
  );
}

export default Stvthree;
const SerCard = styled.div`
  width: 1000px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SerCards = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  margin: 20px;
  width: 19%;
  height: 370px;
`;
const Serimgs = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;
const Sername = styled.div`
  font-size: 16px;
  padding: 20px 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SerW = styled.div`
  font-weight: 800;
  font-size: 17px;
`;