import React, { useState } from "react";
import "./Latest.css";
import Togglebtn from "./Togglebtn";

function Latest() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };

  const [latestItems] = useState([
    {
      id: 1,
      title: "트레이닝 데이",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/8kxhwABuQhoybGr6TPdrV8w5FLm.jpg",
    },
    {
      id: 2,
      title: "분노의 13번가",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/gluQnLUHCAxDZyJrYkyMQh2H8yF.jpg",
    },
    {
      id: 3,
      title: "사진사의 여자",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDobm15VCxWW2MZX3CQey0L6XLj.jpg",
    },
    {
      id: 4,
      title: "코브라 카이",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
    },
    {
      id: 5,
      title: "괴롭히지마요 나가토로양",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/u6NTVBHWVpQ2KDQHVkjAxf9XMMe.jpg",
    },
    {
      id: 6,
      title: "라이즈 오브 더 풋솔져",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/7uFcnzXTRpSax0QqF8lT1VWPNFO.jpg",
    },
    {
      id: 7,
      title: "만달로리안",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    },
    {
      id: 8,
      title: "웬즈데이",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    },
    {
      id: 9,
      title: "사랑의 블랙홀",
      img: "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/ttBydD0SynC0TMkW3AcnmsySkLp.jpg",
    },
  ]);

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
