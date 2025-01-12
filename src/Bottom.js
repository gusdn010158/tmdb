import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./server/db.json";

function Bottom() {
  const [sect, setSect] = useState([]);

  useEffect(() => {
    setSect(data.sections);
  }, []);
  return (
    <Section>
      <Nav>
        <LogoSection />
        {sect.map((section, index) => (
          <SectionBlock
            key={index}
            title={section.title}
            links={Object.values(section.links)}
          />
        ))}
      </Nav>
    </Section>
  );
}

export default Bottom;

const LogoSection = () => (
  <Logo>
    <LogoImage />
    <JoinLink href="/signup?language=ko">커뮤니티 참여</JoinLink>
  </Logo>
);

const SectionBlock = ({ title, links }) => (
  <Block>
    <SectionTitle>{title}</SectionTitle>
    <LinkList>
      {links.map((link, i) => (
        <li key={i}>{link}</li>
      ))}
    </LinkList>
  </Block>
);

const Section = styled.section`
  box-sizing: border-box;
  height: 320px;
  width: 100%;
  background-color: #031d33;
`;

const Nav = styled.nav`
  margin-top: 40px;
  padding: 40px;

  display: flex;
  align-content: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 40px;
`;

const LogoImage = styled.div`
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/8/89/Tmdb.new.logo.svg);
  height: 94px;
  width: 130px;
`;

const JoinLink = styled.a`
  font-size: 18px;
  border-radius: 5px;
  font-weight: 900;
  padding: 10px 20px;
  color: rgb(1, 180, 228);
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #fff;
`;

const Block = styled.div`
  padding-right: 20px;
`;

const SectionTitle = styled.h2`
  color: #fff;
`;

const LinkList = styled.ul`
  padding: 0;
  color: #fff;
  list-style: none;
`;
