import React, { useState, useEffect } from "react";
import "./Popular.css";
import axios from "axios";
import Section from "./Section";
import Togglebtn from "./Togglebtn";

function Popular() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:4000/popular")
      .then((response) => {
        setPopular(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    return () => {
      setPopular(false);
    };
  }, []);
  return (
    <section className="sc6">
      <div className="sc6_2">
        <div className="sc6_3">
          <div className="sc6_4">
            <div className="sc6_header">
              <h2>What's Popular</h2>
              <Togglebtn
                titles={["스트리밍", "TV", "대여", "극장"]}
                onToggle={handleToggle}
              />
            </div>
            <div className="sc6_content">
              <div className="sc6_content_in">
                {popular.map((item) => (
                  <Section
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    date={item.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
