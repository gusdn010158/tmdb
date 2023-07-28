import React from 'react';
import {useState} from 'react';
import './Say.css';
function Say() {
    const [message,setMessage]=useState();
    const Toggle=()=>{
      setMessage(!message);
    };
    

    return (
        <section className="sc2">
<div className="sc2_2">
  <div className="sc2_3">
    <div className="sc2_4">
      <div className="sc2_header">
        <h2>트렌딩</h2>
        <div className="sc2_header_button">
        <div className="sc2_header_b">
        <div className="sc2_header_button1" onClick={Toggle}>
            <h3>
            <a href="/">오늘</a>
            </h3>
            </div>
            <div className="sc2_header_button2" >
            <h3>
            <a href="/" >이번 주</a>
            </h3></div>
    </div> 
         
        </div>
      </div>
      {/* onChange={setMessage ? "sc2_content" :"sc2_1content"} */}
            <div className="sc2_content">
      <div className="sc2_content_in">
        <div className="sc2_content_in1">
          <div className="in11_img"></div>
          <div className="in11_img_content"><h2>라스트 오브 어스</h2>1월 15, 2023</div>
        </div>
        <div className="sc2_content_in2">
        <div className="in22_img"></div>
          <div className="in22_img_content"><h2>아바타:물의길</h2>12월 14, 2022</div>
        </div>
        <div className="sc2_content_in3">
        <div className="in33_img"></div>
          <div className="in33_img_content"><h2>더 메뉴</h2>11월 18, 2022</div>
        </div>
        <div className="sc2_content_in4">
        <div className="in44_img"></div>
          <div className="in44_img_content"><h2>메간</h2>12월 28, 2022</div>
        </div>
        <div className="sc2_content_in5">
        <div className="in55_img"></div>
          <div className="in55_img_content"><h2>바빌론</h2>12월 22, 2022</div>
        </div>
        <div className="sc2_content_in6">
        <div className="in66_img"></div>
          <div className="in66_img_content"><h2>웬즈데이</h2>11월 23, 2022</div>
        </div>
        <div className="sc2_content_in7">
        <div className="in77_img"></div>
          <div className="in77_img_content"><h2>스노우 폴스</h2>1월 17, 2023</div>
        </div>
        <div className="sc2_content_in8">
        <div className="in88_img"></div>
          <div className="in88_img_content"><h2>헌터스</h2>2월 20, 2020</div>
        </div>
        <div className="sc2_content_in9">
        <div className="in99_img"></div>
          <div className="in99_img_content"><h2>sick</h2>9월 24, 2022</div>
        </div>
        <div className="sc2_content_in10">
        <div className="in1010_img"></div>
          <div className="in1010_img_content"><h2>페일 블루아이</h2>12월 23, 2022</div>
        </div>
      </div>
      </div>
    
    </div>
      </div>
      </div>
    </section>       
    );
}

export default Say;