import React, { useState, useEffect } from "react";
import "./Say.css";
import axios from "axios";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
function Say() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };

  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/trendingItems")
      .then((response) => {
        setTrendingItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="sc2">
      <div className="sc2_2">
        <div className="sc2_3">
          <div className="sc2_4">
            <div className="sc2_header">
              <h2>트렌딩</h2>
              <Togglebtn titles={["오늘", "이번주"]} onToggle={handleToggle} />
            </div>

            <div className="sc2_content">
              <div className="sc2_content_in">
                {trendingItems.map((item) => (
                  <Section img={item.img} title={item.title} date={item.date} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Say;
