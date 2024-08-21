import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="h">
      <div className="c">
        <div className="content_m">
          <div className="content_o">
            <a className="n_logo" href="/?language=ko">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="tmdb"
              />
            </a>

            <ul className="n_title">
              <li className="title_a">영화</li>
              <li className="title_a">tv프로그램</li>
              <li className="title_a">인물</li>
              <li className="title_a">more</li>
            </ul>
          </div>

          <div className="f">
            <ul className="f_title">
              <img
                className="f1"
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
              />

              <li className="f2">KO</li>
              <li className="f1">로그인</li>
              <li className="f1">회원가입</li>

              <img
                className="f1"
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
              />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
