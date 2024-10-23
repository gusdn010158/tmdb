// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// function Board() {
//   const [text, setText] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/text")
//       .then((response) => {
//         setText(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <Section>
//       <Container>
//         <InnerContainer>
//           <FlexColumn>
//             <Header>
//               <HeaderTitle>리더보드</HeaderTitle>
//               <HeaderDetails>
//                 <DetailItem>
//                   <GreenCircle></GreenCircle>All Time Edits
//                 </DetailItem>
//                 <DetailItem>
//                   <OrangeCircle></OrangeCircle>Edits This Week
//                 </DetailItem>
//               </HeaderDetails>
//             </Header>
//             <MainContent>
//               <List>
//                 {text.map((item, index) => (
//                   <ListItem key={index}>
//                     <Circle></Circle>
//                     <TextContainer>
//                       <Username>{item.username}</Username>
//                       <TextLine>
//                         <GreenBar
//                           style={{
//                             width: `${item.allTimeEdits / 100}px`,
//                           }}
//                         ></GreenBar>
//                         <EditCount>{item.allTimeEdits}</EditCount>
//                       </TextLine>
//                       <TextLine>
//                         <OrangeBar
//                           style={{
//                             width: `${item.weeklyEdits / 30}px`,
//                           }}
//                         ></OrangeBar>
//                         <EditCount>{item.weeklyEdits}</EditCount>
//                       </TextLine>
//                     </TextContainer>
//                   </ListItem>
//                 ))}
//               </List>
//             </MainContent>
//           </FlexColumn>
//         </InnerContainer>
//       </Container>
//     </Section>
//   );
// }

// export default Board;

// const Section = styled.section`
//   box-sizing: border-box;
//   height: 478px;
//   width: 1300px;
//   margin-bottom: 10px;
// `;

// const Container = styled.div`
//   box-sizing: border-box;
//   height: 100%;
//   width: 100%;
// `;

// const InnerContainer = styled.div`
//   box-sizing: border-box;
//   padding: 40px;
//   height: 100%;
// `;

// const FlexColumn = styled.div`
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
// `;

// const Header = styled.div`
//   display: flex;
// `;

// const HeaderTitle = styled.h2`
//   padding-right: 20px;
//   margin: 0;
// `;

// const HeaderDetails = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const DetailItem = styled.p`
//   font-size: 0.9em;
//   display: flex;
//   margin: 0;
// `;

// const GreenCircle = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #00e45f;
//   height: 10px;
//   width: 10px;
//   border-radius: 50%;
//   border: 1px solid #00e45f;
//   margin-right: 5px;
// `;

// const OrangeCircle = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #e45000;
//   height: 10px;
//   width: 10px;
//   border-radius: 50%;
//   border: 1px solid #e45000;
//   margin-right: 5px;
// `;

// const MainContent = styled.div`
//   padding-top: 20px;
//   height: 100%;
//   box-sizing: border-box;
// `;

// const List = styled.ol`
//   padding: 0;
//   box-sizing: border-box;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//   display: flex;
//   width: 50%;
//   margin-bottom: 15px;
// `;

// const Circle = styled.div`
//   height: 56px;
//   width: 56px;
//   border-radius: 50%;
//   background-color: #61dafb;
//   margin-right: 10px;
// `;

// const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Username = styled.h2`
//   margin: 0;
// `;

// const TextLine = styled.div`
//   display: flex;
// `;

// const GreenBar = styled.div`
//   width: 60px;
//   border-radius: 5px;
//   border: 1px solid #00e45f;
//   background-color: #00e45f;
//   margin-right: 5px;
//   margin-bottom: 5px;
// `;

// const OrangeBar = styled.div`
//   width: 450px;
//   border-radius: 5px;
//   border: 1px solid #e45000;
//   background-color: #e45000;
//   margin-right: 5px;
//   margin-bottom: 5px;
// `;

// const EditCount = styled.h4`
//   font-size: 0.1em;
//   margin: 0;
// `;
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Board() {
  const [text, setText] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/text");
        setText(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <InnerContainer>
          <FlexColumn>
            <HeaderSection />
            <MainContent>
              <List>
                {text.map((item, index) => (
                  <ListItem key={index}>
                    <Circle />
                    <TextContainer>
                      <Username>{item.username}</Username>
                      <EditStats
                        allTimeEdits={item.allTimeEdits}
                        weeklyEdits={item.weeklyEdits}
                      />
                    </TextContainer>
                  </ListItem>
                ))}
              </List>
            </MainContent>
          </FlexColumn>
        </InnerContainer>
      </Container>
    </Section>
  );
}

export default Board;

const HeaderSection = () => (
  <Header>
    <HeaderTitle>리더보드</HeaderTitle>
    <HeaderDetails>
      <DetailItem>
        <GreenCircle /> All Time Edits
      </DetailItem>
      <DetailItem>
        <OrangeCircle /> Edits This Week
      </DetailItem>
    </HeaderDetails>
  </Header>
);

const EditStats = ({ allTimeEdits, weeklyEdits }) => (
  <>
    <TextLine>
      <GreenBar style={{ width: `${allTimeEdits / 100}px` }} />
      <EditCount>{allTimeEdits}</EditCount>
    </TextLine>
    <TextLine>
      <OrangeBar style={{ width: `${weeklyEdits / 30}px` }} />
      <EditCount>{weeklyEdits}</EditCount>
    </TextLine>
  </>
);

const Section = styled.section`
  box-sizing: border-box;
  height: 478px;
  width: 1300px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const InnerContainer = styled.div`
  box-sizing: border-box;
  padding: 40px;
  height: 100%;
`;

const FlexColumn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
`;

const HeaderTitle = styled.h2`
  padding-right: 20px;
  margin: 0;
`;

const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.p`
  font-size: 0.9em;
  display: flex;
  margin: 0;
`;

const GreenCircle = styled.span`
  background-color: #00e45f;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #00e45f;
  margin-right: 5px;
`;

const OrangeCircle = styled.span`
  background-color: #e45000;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #e45000;
  margin-right: 5px;
`;

const MainContent = styled.div`
  padding-top: 20px;
  height: 100%;
  box-sizing: border-box;
`;

const List = styled.ol`
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  width: 50%;
  margin-bottom: 15px;
`;

const Circle = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  background-color: #61dafb;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.h2`
  margin: 0;
`;

const TextLine = styled.div`
  display: flex;
`;

const GreenBar = styled.div`
  border-radius: 5px;
  border: 1px solid #00e45f;
  background-color: #00e45f;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const OrangeBar = styled.div`
  border-radius: 5px;
  border: 1px solid #e45000;
  background-color: #e45000;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const EditCount = styled.h4`
  font-size: 0.1em;
  margin: 0;
`;
