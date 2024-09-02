// import React, { useState, useEffect } from "react";
// import "./Say.css";
// import axios from "axios";
// import Section from "./Section";
// import Togglebtn from "./Togglebtn";
// function Say() {
//   const [selectedCategory, setSelectedCategory] = useState("스트리밍");

//   const handleToggle = (category) => {
//     setSelectedCategory(category);
//     // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
//   };

//   const [trendingItems, setTrendingItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/trendingItems")
//       .then((response) => {
//         setTrendingItems(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <section className="sc2">
//       <div className="sc2_2">
//         <div className="sc2_3">
//           <div className="sc2_4">
//             <div className="sc2_header">
//               <h2>트렌딩</h2>
//               <Togglebtn titles={["오늘", "이번주"]} onToggle={handleToggle} />
//             </div>

//             <div className="sc2_content">
//               <div className="sc2_content_in">
//                 {trendingItems.map((item) => (
//                   <Section img={item.img} title={item.title} date={item.date} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Say;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Section from "./Section";
import Togglebtn from "./Togglebtn";

// Styled Components
const StyledSection = styled.section`
  width: 1300px;
  height: 443px;
  background-image: url(https://www.themoviedb.org/assets/2/v4/misc/trendi…25c187814c0a2efef225494c038098d62317d923f8415.svg);
  background-position: 50% 200px;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const InnerWrapper = styled.div`
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 20px;
`;

const Content = styled.div`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  padding-top: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cfd3da;
    background-clip: padding-box;
    border: 5px solid transparent;
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const ContentInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

function Say() {
  const [selectedCategory, setSelectedCategory] = useState("스트리밍");
  const [trendingItems, setTrendingItems] = useState([]);

  const handleToggle = (category) => {
    setSelectedCategory(category);
    // 여기에서 카테고리 변경에 따른 추가 작업을 수행할 수 있습니다.
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/trendingItems")
      .then((response) => {
        setTrendingItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledSection>
      <Container>
        <ContentWrapper>
          <InnerWrapper>
            <Header>
              <Title>트렌딩</Title>
              <Togglebtn titles={["오늘", "이번주"]} onToggle={handleToggle} />
            </Header>
            <Content>
              <ContentInner>
                {trendingItems.map((item) => (
                  <Section
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    date={item.date}
                  />
                ))}
              </ContentInner>
            </Content>
          </InnerWrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
}

export default Say;
