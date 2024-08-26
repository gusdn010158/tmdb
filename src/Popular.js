import React, { useState } from "react";
import "./Popular.css";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
function Popular() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };
  const [popular] = useState([
    {
      id: 1,
      title: "빅 4",
      date: "12월 19, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/8Q7Zxnxdn64nGrA1qklKNnFJ7QB.jpg",
    },
    {
      id: 2,
      title: "바이킹스",
      date: "3월 03, 2013",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg",
    },
    {
      id: 3,
      title: "슈츠",
      date: "6월 23, 2011",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/lvYWwQj89ioSk9WzhC1KEujmpWa.jpg",
    },
    {
      id: 4,
      title: "릭 앤 모티",
      date: "12월 02, 2013",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/7iVwF5l0jkIkIOVSvHI6HM4gKU5.jpg",
    },
    {
      id: 5,
      title: "왕좌의 게임",
      date: "4월 17, 2011",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/lxfllsQQ32gKglUxrM61WaFeNcy.jpg",
    },
    {
      id: 6,
      title: "스파이더맨: 노 웨이 홈",
      date: "12월 15, 2021",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
    },
    {
      id: 7,
      title: "나니아 연대기: 사자, 마녀 그리고 옷장",
      date: "12월 07, 2005",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/xo86KtpjsGZRuI3vF17aHxHNX3E.jpg",
    },
    {
      id: 8,
      title: "루시퍼",
      date: "1월 25, 2016",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
    },
    {
      id: 9,
      title: "레슨 플랜",
      date: "11월 23, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/e4nR9m6nY7HpaaeiEL1ixaYqReq.jpg",
    },
  ]);

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

export default Popular;
