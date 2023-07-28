import React from 'react';
import './Header.css';
function Header() {
    let lastScroll = document.documentElement.scrollTop || 0
    document.addEventListener('scroll', function(){
      let scrollTop = document.documentElement.scrollTop
      
      if(scrollTop > lastScroll) {
        document.getElementsByClassName('h').classList.add('tada');
      } else {
        document.getElementsByClassName('h').classList.remove('tada');

      }
      lastScroll = scrollTop
    })
   
    return (
      
        <header className="h">
         
        <div className ="c">
      <div className="content_m">
       
          <div className="content_o">
        <a className="n_logo" href="/?language=ko"> 
        <img src="./images/tmdb.png" alt="tmdb"/>
                </a>
              
             
    <ul className="n_title">
      <li className="title_a">영화</li>
      <li className="title_a">tv프로그램</li>
      <li className="title_a">인물</li>  
      <li className="title_a">more</li>
    </ul> 
    </div>
      


        <div className="f"> 
        <ul className ="f_title">
      <li className="f1">➕</li>
      <li className="f2">KO</li>
      <li className="f1">로그인</li>
      <li className="f1">회원가입</li>
      <li className="f1">🔍</li>
      </ul> 
        </div>
        </div>
    </div>
   
    </header>
    );
}

export default Header;