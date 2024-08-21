import React from "react";
import "./Bottom.css";

function Bottom() {
  const sections = [
    {
      title: "THE BASICS",
      links: [
        "TMDB에 대해",
        "문의 하기",
        "Support Forums",
        "API",
        "System Status",
      ],
    },
    {
      title: "참여하기",
      links: ["기여 지침서", "새 영화 추가", "새 TV 프로그램 추가"],
    },
    {
      title: "커뮤니티",
      links: ["가이드 라인", "토론 내역", "기여 랭킹", "Twitter"],
    },
    {
      title: "법적 사항",
      links: ["서비스 이용약관", "API Terms of Use", "개인정보약관"],
    },
  ];

  return (
    <section className="sc9">
      <nav className="sc9_nav">
        <div className="sc9_logo">
          <div className="sc9_l"></div>
          <a className="sc9_b" href="/signup?language=ko">
            커뮤니티 참여
          </a>
        </div>
        {sections.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </section>
  );
}

export default Bottom;
