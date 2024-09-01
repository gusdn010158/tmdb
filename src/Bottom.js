import React from "react";
import styled from "styled-components";

function Bottom() {
  const sections = [
    {
      title: "THE BASICS",
      links: [
        "TMDB에 대해",
        "문의 하기",
        "Support Forums",
        "API",
        "System Status",
      ],
    },
    {
      title: "참여하기",
      links: ["기여 지침서", "새 영화 추가", "새 TV 프로그램 추가"],
    },
    {
      title: "커뮤니티",
      links: ["가이드 라인", "토론 내역", "기여 랭킹", "Twitter"],
    },
    {
      title: "법적 사항",
      links: ["서비스 이용약관", "API Terms of Use", "개인정보약관"],
    },
  ];

  return (
    <Section>
      <Nav>
        <Logo>
          <LogoImage />
          <JoinLink href="/signup?language=ko">커뮤니티 참여</JoinLink>
        </Logo>
        {sections.map((section, index) => (
          <SectionBlock key={index}>
            <SectionTitle>{section.title}</SectionTitle>
            <LinkList>
              {section.links.map((link, i) => (
                <LinkItem key={i}>{link}</LinkItem>
              ))}
            </LinkList>
          </SectionBlock>
        ))}
      </Nav>
    </Section>
  );
}

export default Bottom;

const Section = styled.section`
  box-sizing: border-box;
  height: 320px;
  width: 100%;
  background-color: #031d33;
`;

const Nav = styled.nav`
  margin: 40px;
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

const SectionBlock = styled.div`
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

const LinkItem = styled.li``;
