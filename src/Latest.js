import React, { useState, useEffect } from "react";
import "./Latest.css";
import Togglebtn from "./Togglebtn";
import axios from "axios";
function Latest() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };
  const [latestItems, setLatestItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/latestItems")
      .then((response) => {
        setLatestItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="sc4">
      <div className="sc4_3">
        <div className="sc4_4">
          <div className="sc4_header">
            <h2>최신 예고편</h2>

            <Togglebtn
              titles={["인기", "스트리밍", "TV", "대여", "극장"]}
              onToggle={handleToggle}
              useWhiteTheme={true}
            />
          </div>
          <div className="sc4_content">
            <div className="sc4_content_in">
              {latestItems.map((item) => (
                <div key={item.id} className="sc4_content1">
                  <img className="sc4_content1_img" alt="img" src={item.img} />
                  <div className="sc4_content1_txt">
                    <h3>{item.title}</h3>
                    설명
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
