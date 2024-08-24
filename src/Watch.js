// import React, { useState } from "react";
// import "./Watch.css";
// function Watch(props) {
//   const [watching] = useState([
//     {
//       id: "1",
//       title: "메트로 폴리스",
//       date: "2월 06, 1927",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/vODOVn29fr0nLF9MVfpfKDcxuXF.jpg",
//     },
//     {
//       id: "2",
//       title: "부러진 화살",
//       date: "8월 01일, 1950",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/1gafYQCpDxtfIj7HYBNs4Z3m4oW.jpg",
//     },
//     {
//       id: "3",
//       title: "쾌찬차",
//       date: "8월 17, 1984",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/beJtpNbbNJpdhVWlRqmutM1q31m.jpg",
//     },
//     {
//       id: "4",
//       title: "디아볼릭",
//       date: "1월 29, 1955",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/6wmNcHjXnBEhlAvsUUR6ytdLKHO.jpg",
//     },
//     {
//       id: "5",
//       title: "살아있는 시체들의 밤",
//       date: "10월 04, 1968",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/b6yJXwYAXgqJKNdOrEQxxbQ8oG4.jpg",
//     },
//     {
//       id: "6",
//       title: "골드랜섬",
//       date: "5월 05, 2016",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/yTfzOGKAKRqsvXToImspDlOGHaa.jpg",
//     },
//     {
//       id: "7",
//       title: "스니치: 마약과의 전쟁",
//       date: "11월 11, 2011",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/rhVrb6e2xX3VVDZNIfRIo0oQwZT.jpg",
//     },
//     {
//       id: "8",
//       title: "위시 어폰",
//       date: "7월 07, 2017",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/kHiSfrIh5NDoVZDCcQhzq3KHcsB.jpg",
//     },
//     {
//       id: "9",
//       title: "멋진 인생",
//       date: "12월 20, 1946",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/vmvfQoLet0VRPIWsJJ0Ns7rhbWT.jpg",
//     },
//     {
//       id: "10",
//       title: "역마차",
//       date: "9월 03, 1939",
//       img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uIWZB1lzxk6RGwzakM2lMnRah86.jpg",
//     },
//   ]);

//   return (
//     <section className="sc3">
//       <div className="sc3_2">
//         <div className="sc3_3">
//           <div className="sc3_4">
//             <div className="sc3_header">
//               <h2>Free To Watch</h2>
//               <div className="sc3_header_button">
//                 <div className="sc3_header_b">
//                   <div className="sc3_header_button1">
//                     <h3>영화</h3>
//                   </div>
//                   <div className="sc3_header_button2">
//                     <h3>TV</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="sc3_content">
//               <div className="sc3_content_in">
//                 {watching.map((item) => (
//                   <div key={item.id} className="sc3_content_in1">
//                     <img className="in1_img" alt="img" src={item.img} />
//                     <div className="in1_img_content">
//                       <h2>{item.title}</h2>
//                       {item.date}
//                     </div>
//                   </div>
//                 ))}
//                 ;
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Watch;
import React, { useState } from "react";
import "./App.css";

function MediaSection({ title, headerButtons, items }) {
  return (
    <section className="media-section">
      <div className="media-section-inner">
        <div className="media-section-content">
          <div className="media-section-header">
            <h2>{title}</h2>
            <div className="media-section-header-buttons">
              {headerButtons.map((button, index) => (
                <div key={index} className="media-section-header-button">
                  <h3>{button}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="media-section-body">
            {items.map((item) => (
              <MediaItem
                key={item.id}
                title={item.title}
                date={item.date}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaItem({ title, date, img }) {
  return (
    <div className="media-item">
      <img className="media-item-img" alt={title} src={img} />
      <div className="media-item-content">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
}

function Popular() {
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
    // 추가 아이템들...
  ]);

  const headerButtons = ["스트리밍", "TV", "대여", "극장"];

  return (
    <MediaSection
      title="What's Popular"
      headerButtons={headerButtons}
      items={popular}
    />
  );
}

function Watch() {
  const [watching] = useState([
    {
      id: 1,
      title: "메트로 폴리스",
      date: "2월 06, 1927",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/vODOVn29fr0nLF9MVfpfKDcxuXF.jpg",
    },
    {
      id: 2,
      title: "부러진 화살",
      date: "8월 01일, 1950",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/1gafYQCpDxtfIj7HYBNs4Z3m4oW.jpg",
    },
    // 추가 아이템들...
  ]);

  const headerButtons = ["영화", "TV"];

  return (
    <MediaSection
      title="Free To Watch"
      headerButtons={headerButtons}
      items={watching}
    />
  );
}

function Say() {
  const [isToday, setIsToday] = useState(true);

  const Toggle = () => {
    setIsToday(!isToday);
  };

  const trendingItems = [
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
    // 추가 아이템들...
  ];

  const headerButtons = [
    <a href="/" onClick={Toggle}>
      {isToday ? "오늘" : "이번 주"}
    </a>,
    <a href="/">이번 주</a>,
  ];

  return (
    <MediaSection
      title="트렌딩"
      headerButtons={headerButtons}
      items={trendingItems}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Popular />
      <Watch />
      <Say />
    </div>
  );
}

export default App;
