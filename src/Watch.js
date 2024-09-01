import React, { useState, useEffect } from "react";
import "./Watch.css";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
import axios from "axios";
function Watch(props) {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };

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
    <section className="sc3">
      <div className="sc3_2">
        <div className="sc3_3">
          <div className="sc3_4">
            <div className="sc3_header">
              <h2>Free To Watch</h2>

              <Togglebtn titles={["영화", "TV"]} onToggle={handleToggle} />
            </div>
            <div className="sc3_content">
              <div className="sc3_content_in">
                {watching.map((item) => (
                  <Section img={item.img} title={item.title} date={item.date} />
                ))}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
