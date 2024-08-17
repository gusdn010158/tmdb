import "./App.css";
import Header from "./Header";
import Say from "./Say";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="sc1">
          <div className="discover">
            <div className="wrapper">
              <div className="wrap">
                <div className="titles">
                  <h2>Welcome</h2>
                  <h3>
                    Millions of movies, TV shows and people to discover. Explore
                    now.
                  </h3>
                </div>
                <div className="search">
                  <form action="form_ok.php" method="get" className="dd">
                    <input
                      id="input1"
                      type="text"
                      placeholder="영화,TV프로그램,인물,검색"
                    ></input>
                    <input id="input2" type="submit" value="Search"></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc5">
          <div className="sc5_div">
            <div className="sc5_txt">
              <h2>
                "That 's A"<br></br>"Wrap 2022"
              </h2>
            </div>
            <div className="sc5_txt2">
              <h3>The best(and worst) from 2022.</h3>
              <h4>check it out</h4>
            </div>
          </div>
        </section>

        <Say />

        <section className="sc4">
          <div className="sc4_3">
            <div className="sc4_4">
              <div className="sc4_header">
                <h2>최신 예고편</h2>
                <div className="sc4_s">
                  <div className="sc4_sa">
                    <h3>스트리밍</h3>
                  </div>
                  <div className="sc4_sb">
                    <h3>TV</h3>
                  </div>
                  <div className="sc4_sc">
                    <h3>대여</h3>{" "}
                  </div>
                  <div className="sc4_sd">
                    <h3>극장</h3>
                  </div>
                </div>
              </div>
              <div className="sc4_content">
                <div className="sc4_content_in">
                  <div className="sc4_content1">
                    <div className="sc4_content1_img"></div>
                    <div className="sc4_content1_txt">
                      <h3>트레이닝 데이</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content2">
                    <div className="sc4_content2_img"></div>
                    <div className="sc4_content2_txt">
                      <h3>분노의 13번가</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content3">
                    <div className="sc4_content3_img"></div>
                    <div className="sc4_content3_txt">
                      <h3>사진사의 여자</h3> 설명
                    </div>
                  </div>
                  <div className="sc4_content4">
                    <div className="sc4_content4_img"></div>
                    <div className="sc4_content4_txt">
                      <h3>코브라 카이</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content5">
                    <div className="sc4_content5_img"></div>
                    <div className="sc4_content5_txt">
                      <h3>괴롭히지마요 나가토로양</h3>설명
                    </div>
                  </div>
                  <div className="sc4_content6">
                    <div className="sc4_content6_img"></div>
                    <div className="sc4_content6_txt">
                      <h3>라이즈 오브 더 풋솔져</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content7">
                    <div className="sc4_content7_img"></div>
                    <div className="sc4_content7_txt">
                      <h3>만달로리안</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content8">
                    <div className="sc4_content8_img"></div>
                    <div className="sc4_content8_txt">
                      <h3>웬즈데이</h3>
                      설명
                    </div>
                  </div>
                  <div className="sc4_content9">
                    <div className="sc4_content9_img"></div>
                    <div className="sc4_content9_txt">
                      <h3>사랑의 블랙홀</h3>
                      설명
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc6">
          <div className="sc6_2">
            <div className="sc6_3">
              <div className="sc6_4">
                <div className="sc6_header">
                  <h2>What's Popular</h2>
                  <div className="sc6_header_button">
                    <div className="sc6_header_b">
                      <div className="sc6_header_button1">
                        <h3>스트리밍</h3>
                      </div>
                      <div className="sc6_header_button2">
                        <h3>TV</h3>
                      </div>
                      <div className="sc6_header_button3">
                        <h3>대여</h3>
                      </div>
                      <div className="sc6_header_button4">
                        <h3>극장</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc6_content">
                  <div className="sc6_content_in">
                    <div className="sc6_content_in1">
                      <div className="in111_img"></div>
                      <div className="in111_img_content">
                        <h2>빅 4</h2>12월 19, 2022
                      </div>
                    </div>
                    <div className="sc6_content_in2">
                      <div className="in222_img"></div>
                      <div className="in222_img_content">
                        <h2>바이킹스</h2>3월 03, 2013
                      </div>
                    </div>
                    <div className="sc6_content_in3">
                      <div className="in333_img"></div>
                      <div className="in333_img_content">
                        <h2>슈츠</h2>6월 23, 2011
                      </div>
                    </div>
                    <div className="sc6_content_in4">
                      <div className="in444_img"></div>
                      <div className="in444_img_content">
                        <h2>릭 앤 모티</h2>12월 02, 2013
                      </div>
                    </div>
                    <div className="sc6_content_in5">
                      <div className="in555_img"></div>
                      <div className="in555_img_content">
                        <h2>왕좌의 게임</h2>4월 17, 2011
                      </div>
                    </div>
                    <div className="sc6_content_in6">
                      <div className="in666_img"></div>
                      <div className="in666_img_content">
                        <h2>스파이더맨: 노 웨이 홈</h2>12월 15, 2021
                      </div>
                    </div>
                    <div className="sc6_content_in7">
                      <div className="in777_img"></div>
                      <div className="in777_img_content">
                        <h2>나니아 연대기: 사자, 마녀 그리고 옷장</h2>12월 07,
                        2005
                      </div>
                    </div>
                    <div className="sc6_content_in8">
                      <div className="in888_img"></div>
                      <div className="in888_img_content">
                        <h2>루시퍼</h2>1월 25, 2016
                      </div>
                    </div>
                    <div className="sc6_content_in9">
                      <div className="in999_img"></div>
                      <div className="in999_img_content">
                        <h2>레슨 플랜</h2>11월 23, 2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc3">
          <div className="sc3_2">
            <div className="sc3_3">
              <div className="sc3_4">
                <div className="sc3_header">
                  <h2>Free To Watch</h2>
                  <div className="sc3_header_button">
                    <div className="sc3_header_b">
                      <div className="sc3_header_button1">
                        <h3>영화</h3>
                      </div>
                      <div className="sc3_header_button2">
                        <h3>TV</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc3_content">
                  <div className="sc3_content_in">
                    <div className="sc3_content_in1">
                      <div className="in1_img"></div>
                      <div className="in1_img_content">
                        <h2>메트로 폴리스</h2>2월 06, 1927
                      </div>
                    </div>
                    <div className="sc3_content_in2">
                      <div className="in2_img"></div>
                      <div className="in2_img_content">
                        <h2>부러진 화살</h2>8월 01일,1950
                      </div>
                    </div>
                    <div className="sc3_content_in3">
                      <div className="in3_img"></div>
                      <div className="in3_img_content">
                        <h2>쾌찬차</h2>8월17,1984
                      </div>
                    </div>
                    <div className="sc3_content_in4">
                      <div className="in4_img"></div>
                      <div className="in4_img_content">
                        <h2>디아볼릭</h2>1월29,1955
                      </div>
                    </div>
                    <div className="sc3_content_in5">
                      <div className="in5_img"></div>
                      <div className="in5_img_content">
                        <h2>살아있는 시체들의 밤</h2>10월 04,1968
                      </div>
                    </div>
                    <div className="sc3_content_in6">
                      <div className="in6_img"></div>
                      <div className="in6_img_content">
                        <h2>골드랜섬</h2>5월 05,2016
                      </div>
                    </div>
                    <div className="sc3_content_in7">
                      <div className="in7_img"></div>
                      <div className="in7_img_content">
                        <h2>스니치: 마약과의 전쟁</h2>11월 11,2011
                      </div>
                    </div>
                    <div className="sc3_content_in8">
                      <div className="in8_img"></div>
                      <div className="in8_img_content">
                        <h2>위시 어폰</h2>7월 07,2017
                      </div>
                    </div>
                    <div className="sc3_content_in9">
                      <div className="in9_img"></div>
                      <div className="in9_img_content">
                        <h2>멋진 인생</h2>12월 20,1946
                      </div>
                    </div>
                    <div className="sc3_content_in10">
                      <div className="in10_img"></div>
                      <div className="in10_img_content">
                        <h2>역마차</h2>9월 03,1939
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc7">
          <div className="sc7_content">
            <div className="sc7_title">Join Today</div>
            <div className="sc7_txt">
              <div className="sc7_txt1">
                <p className="sc7_main">
                  {" "}
                  Get access to maintain your own <em>custom personal lists</em>
                  ", "<em>track what you've seen</em>and search and filter for{" "}
                  <em>what to watch next</em>—regardless if it's in theatres, on
                  TV or available on popular streaming services like Netflix,
                  Amazon Prime Video, Disney Plus, wavve, and Watcha.
                </p>
                <p className="sc7_button">
                  <a
                    href="/signup?language=ko"
                    class="rounded background_color border_color purple"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="sc7_txt2">
                <ul>
                  <li>Enjoy TMDB ad free</li>
                  <li>Maintain a personal watchlist</li>
                  <li>
                    Filter by your subscribed streaming services and find
                    something to watch
                  </li>
                  <li>Log the movies and TV shows you've seen</li>
                  <li>Build custom lists</li>
                  <li>Contribute to and improve our database</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sc8">
          <div className="sc8_1">
            <div className="sc8_2">
              <div className="sc8_3">
                <div className="sc8_header">
                  <h2>리더보드</h2>
                  <div>
                    <p>
                      <span className="span1"></span>All Time Edits
                    </p>
                    <p>
                      <span className="span2"></span>Edits This Week
                    </p>
                  </div>
                </div>
                <div className="sc8_main">
                  <ol className="sc8_ol">
                    <li>
                      <div className="circle1"></div>
                      <div className="sc8_text1">
                        <h2>marsters</h2>
                        <div className="text1_line1">
                          <div></div>
                          <h4>91975</h4>
                        </div>
                        <div className="text1_line2">
                          <div></div>
                          <h4>47712</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle2"></div>
                      <div className="sc8_text2">
                        <h2>ruizafon</h2>
                        <div className="text2_line1">
                          <div></div>
                          <h4>227767</h4>
                        </div>
                        <div className="text2_line2">
                          <div></div>
                          <h4>13505</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle3"></div>
                      <div className="sc8_text3">
                        <h2>heli5m</h2>
                        <div className="text3_line1">
                          <div></div>
                          <h4>522083</h4>
                        </div>
                        <div className="text3_line2">
                          <div></div>
                          <h4>8409</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle4"></div>
                      <div className="sc8_text4">
                        <h2>qualitylover</h2>
                        <div className="text4_line1">
                          <div></div>
                          <h4>304302</h4>
                        </div>
                        <div className="text4_line2">
                          <div></div>
                          <h4>6753</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle5"></div>
                      <div className="sc8_text5">
                        <h2>lineker</h2>
                        <div className="text5_line1">
                          <div></div>
                          <h4>1422258</h4>
                        </div>
                        <div className="text5_line2">
                          <div></div>
                          <h4>6129</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle6"></div>
                      <div className="sc8_text6">
                        <h2>pingu51</h2>
                        <div className="text6_line1">
                          <div></div>
                          <h4>439642</h4>
                        </div>
                        <div className="text6_line2">
                          <div></div>
                          <h4>5801</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle7"></div>
                      <div className="sc8_text7">
                        <h2>cam1170</h2>
                        <div className="text7_line1">
                          <div></div>
                          <h4>14216</h4>
                        </div>
                        <div className="text7_line2">
                          <div></div>
                          <h4>4642</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle8"></div>
                      <div className="sc8_text8">
                        <h2>franick</h2>
                        <div className="text8_line1">
                          <div></div>
                          <h4>88309</h4>
                        </div>
                        <div className="text8_line2">
                          <div></div>
                          <h4>3496</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle9"></div>
                      <div className="sc8_text9">
                        <h2>knrrrzzz</h2>
                        <div className="text9_line1">
                          <div></div>
                          <h4>3229</h4>
                        </div>
                        <div className="text9_line2">
                          <div></div>
                          <h4>3229</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="circle10"></div>
                      <div className="sc8_text10">
                        <h2>litemods</h2>
                        <div className="text10_line1">
                          <div></div>
                          <h4>10283</h4>
                        </div>
                        <div className="text10_line2">
                          <div></div>
                          <h4>3167</h4>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      </main>
    </div>
  );
}

export default App;
