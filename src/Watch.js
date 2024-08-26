import React, { useState } from "react";
import "./Watch.css";
import Section from "./Section";
import Togglebtn from "./Togglebtn";
function Watch(props) {
  const [watching] = useState([
    {
      id: "1",
      title: "메트로 폴리스",
      date: "2월 06, 1927",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/vODOVn29fr0nLF9MVfpfKDcxuXF.jpg",
    },
    {
      id: "2",
      title: "부러진 화살",
      date: "8월 01일, 1950",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/1gafYQCpDxtfIj7HYBNs4Z3m4oW.jpg",
    },
    {
      id: "3",
      title: "쾌찬차",
      date: "8월 17, 1984",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/beJtpNbbNJpdhVWlRqmutM1q31m.jpg",
    },
    {
      id: "4",
      title: "디아볼릭",
      date: "1월 29, 1955",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/6wmNcHjXnBEhlAvsUUR6ytdLKHO.jpg",
    },
    {
      id: "5",
      title: "살아있는 시체들의 밤",
      date: "10월 04, 1968",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/b6yJXwYAXgqJKNdOrEQxxbQ8oG4.jpg",
    },
    {
      id: "6",
      title: "골드랜섬",
      date: "5월 05, 2016",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/yTfzOGKAKRqsvXToImspDlOGHaa.jpg",
    },
    {
      id: "7",
      title: "스니치: 마약과의 전쟁",
      date: "11월 11, 2011",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/rhVrb6e2xX3VVDZNIfRIo0oQwZT.jpg",
    },
    {
      id: "8",
      title: "위시 어폰",
      date: "7월 07, 2017",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/kHiSfrIh5NDoVZDCcQhzq3KHcsB.jpg",
    },
    {
      id: "9",
      title: "멋진 인생",
      date: "12월 20, 1946",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/vmvfQoLet0VRPIWsJJ0Ns7rhbWT.jpg",
    },
    {
      id: "10",
      title: "역마차",
      date: "9월 03, 1939",
      img: "https://www.themoviedb.org/t/p/w220_and_h330_face/uIWZB1lzxk6RGwzakM2lMnRah86.jpg",
    },
  ]);

  return (
    <section className="sc3">
      <div className="sc3_2">
        <div className="sc3_3">
          <div className="sc3_4">
            <div className="sc3_header">
              <h2>Free To Watch</h2>

              <Togglebtn title1="영화" title2="TV" />
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
