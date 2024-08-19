import React from "react";
import "./Bottom.css";
function Bottom(props) {
  return (
    <section className="sc9">
      <nav className="sc9_nav">
        <div className="sc9_logo">
          <div className="sc9_l"></div>
          <a className="sc9_b" href="/signup?language=ko">
            커뮤니티 참여
          </a>
        </div>
        <div>
          <h2>THE BASICS</h2>
          <ul>
            <li>TMDB에 대해</li>
            <li>문의 하기</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <h2>참여하기</h2>
          <ul>
            <li>기여 지침서</li>
            <li>새 영화 추가</li>
            <li>새 TV 프로그램 추가</li>
          </ul>
        </div>
        <div>
          <h2>커뮤니티</h2>
          <ul>
            <li>가이드 라인</li>
            <li>토론 내역</li>
            <li>기여 랭킹 </li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h2>법적 사항</h2>
          <ul>
            <li>서비스 이용약관</li>
            <li>API Terms of Use</li>
            <li>개인정보약관 </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Bottom;
