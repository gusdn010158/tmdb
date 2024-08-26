import React, { useState } from "react";
import "./Say.css";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
function Say() {
  const [trendingItems] = useState([
    {
      id: 1,
      title: "라스트 오브 어스",
      date: "1월 15, 2023",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    },
    {
      id: 2,
      title: "아바타:물의길",
      date: "12월 14, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/z56bVX93oRG6uDeMACR7cXCnAbh.jpg",
    },
    {
      id: 3,
      title: "더 메뉴",
      date: "11월 18, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/2Bi9OTGNAkNjStDnMDR93GPgwFY.jpg",
    },
    {
      id: 4,
      title: "메간",
      date: "12월 28, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/v0TtgXaZZ6NeDxKackgQK9byEDL.jpg",
    },
    {
      id: 5,
      title: "바빌론",
      date: "12월 22, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/5Wnt03vRoKphp1ADWgHKus20vLX.jpg",
    },
    {
      id: 6,
      title: "웬즈데이",
      date: "11월 23, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/tNWCukAMubqisamYURvo5jw61As.jpg",
    },
    {
      id: 7,
      title: "스노우 폴스",
      date: "1월 17, 2023",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/wfZklSVDJPpHT0Arq4A8GY8Q9S9.jpg",
    },
    {
      id: 8,
      title: "헌터스",
      date: "2월 20, 2020",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/rbtgorwuTBoAu0Qm5IvZoQl75WU.jpg",
    },
    {
      id: 9,
      title: "sick",
      date: "9월 24, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/yisnA4KdZOfJeDve3DekgUpeCe9.jpg",
    },
    {
      id: 10,
      title: "페일 블루아이",
      date: "12월 23, 2022",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/hnwq7IbbmBVLGaXcdoTiEk4Z63q.jpg",
    },
  ]);

  return (
    <section className="sc2">
      <div className="sc2_2">
        <div className="sc2_3">
          <div className="sc2_4">
            <div className="sc2_header">
              <h2>트렌딩</h2>
              <Togglebtn title1="오늘" title2="이번주" />
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
