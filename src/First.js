import React from "react";
import styled from "styled-components";
import movieImage from "./images/movie.jpg";

function First(props) {
  return (
    <>
      <Sc1Section>
        <DiscoverDiv>
          <WrapperDiv>
            <WrapDiv>
              <TitlesDiv>
                <h2>Welcome</h2>
                <h3>
                  Millions of movies, TV shows and people to discover. Explore
                  now.
                </h3>
              </TitlesDiv>
              <SearchDiv>
                <form action="form_ok.php" method="get" className="dd">
                  <Input1
                    id="input1"
                    type="text"
                    placeholder="영화,TV프로그램,인물,검색..."
                  />
                  <Input2 id="input2" type="submit" value="Search" />
                </form>
              </SearchDiv>
            </WrapDiv>
          </WrapperDiv>
        </DiscoverDiv>
      </Sc1Section>

      <Sc5Section>
        <Sc5Div>
          <Sc5Text>
            <h2>
              "That 's A"
              <br />
              "Wrap 2022"
            </h2>
          </Sc5Text>
          <Sc5Text2>
            <h3>The best(and worst) from 2022.</h3>
            <h4>check it out</h4>
          </Sc5Text2>
        </Sc5Div>
      </Sc5Section>
    </>
  );
}

export default First;

const Sc1Section = styled.section`
  width: 1300px;
  height: 360px;
`;

const DiscoverDiv = styled.div`
  position: relative;
  width: 1300px;
  margin-top: 40px;
  height: 320px;
  background-image: url(${movieImage});
`;

const WrapperDiv = styled.div`
  flex-direction: column;
  position: relative;
  width: 1300px;
  height: 244px;
`;

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1220px;
  height: 194px;
  padding: 40px;
  margin: 0;
`;

const TitlesDiv = styled.div`
  margin: 0;
  padding: 0;
  color: white;
  margin-bottom: 56px;

  h2 {
    margin: 0;
    font-size: 50px;
  }

  h3 {
    margin: 0;
    font-size: 25px;
  }
`;

const SearchDiv = styled.div`
  position: relative;
`;

const Input1 = styled.input`
  position: absolute;
  border-radius: 30px;
  width: 1170px;
  border: none;
  padding: 13px 0px 13px 20px;
  font-size: 16px;
  color: gray;
`;

const Input2 = styled.input`
  font-size: 15px;
  color: #fff;
  position: absolute;
  border-radius: 30px;
  width: 110px;
  height: 48px;
  top: 0px;
  right: 25px;
  border: none;
  background: linear-gradient(to right, rgb(54, 188, 168), rgb(44, 230, 240));
`;

const Sc5Section = styled.section`
  box-sizing: border-box;
  object-fit: cover;
  background-image: url(https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg);
  background-blend-mode: multiply;
  background-color: rgb(93, 93, 180);
  width: 1300px;
  height: 300px;
  background-position: 50% 50%;
`;

const Sc5Div = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 300px;
  flex-direction: column;
  padding: 30px 40px;
`;

const Sc5Text = styled.div`
  width: 31%;
  display: inline;

  h2 {
    margin: 0;
    font-family: "Inter";
    font-weight: 700;
    font-size: 60px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

const Sc5Text2 = styled.div`
  position: relative;
  width: 33%;
  font-family: "Inter";
  padding-top: 5px;
  display: inline;
  color: #fff;

  h3 {
    position: absolute;
    margin: 0;
    margin-bottom: 20px;
  }

  h4 {
    top: 40px;
    margin: 0;
    position: absolute;
    display: inline;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 8px 16px;
  }
`;
