import React from "react";
import "./First.css";
function First(props) {
  return (
    <>
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
    </>
  );
}

export default First;
