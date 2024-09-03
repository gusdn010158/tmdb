import React from "react";
import styled from "styled-components";
import bkimg from "./images/vb.jpg";

const Section = styled.div`
  box-sizing: border-box;
  background-size: cover;
  width: 1300px;
  height: 307px;
  background-image: url(${bkimg});
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  justify-content: flex-start;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

const Text = styled.div`
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  height: 200px;
`;

const Text1 = styled.div`
  padding-right: 20px;
  width: 70%;
  font-size: 19px;
  color: #fff;
`;

const MainText = styled.p`
  color: #fff;
`;

const Button = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  font-style: none;
  padding: 8px;
  border: 1px solid blueviolet;
  border-radius: 5px;
  background-color: blueviolet;
`;

const Text2 = styled.div`
  color: #fff;
`;

function JoinText() {
  return (
    <Text1>
      <MainText>
        Get access to maintain your own <em>custom personal lists</em>,{" "}
        <em>track what you've seen</em> and search and filter for{" "}
        <em>what to watch next</em> — regardless if it's in theatres, on TV, or
        available on popular streaming services like Netflix, Amazon Prime
        Video, Disney Plus, wavve, and Watcha.
      </MainText>
      <p>
        <Button
          href="/signup?language=ko"
          className="rounded background_color border_color purple"
        >
          Sign Up
        </Button>
      </p>
    </Text1>
  );
}

function JoinBenefits() {
  const benefits = [
    "Enjoy TMDB ad free",
    "Maintain a personal watchlist",
    "Filter by your subscribed streaming services and find something to watch",
    "Log the movies and TV shows you've seen",
    "Build custom lists",
    "Contribute to and improve our database",
  ];

  return (
    <Text2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </Text2>
  );
}

function Join() {
  return (
    <Section>
      <Content>
        <Title>Join Today</Title>
        <Text>
          <JoinText />
          <JoinBenefits />
        </Text>
      </Content>
    </Section>
  );
}

export default Join;
