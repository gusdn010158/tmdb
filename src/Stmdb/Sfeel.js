import React, { useState, useEffect } from "react";
import data from "../server/db.json";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

function Sfeel() {
  const [isFilterOpen, setFilterOpen] = useState(true);
  const [genreItems, setGenreItems] = useState([]);

  useEffect(() => {
    setGenreItems(data.Ditems);
  }, []);

  return (
    <FilterContainer>
      <FilterHeader type="button" onClick={() => setFilterOpen(!isFilterOpen)}>
        <span>필터</span>
        <IconWrapper>
          {isFilterOpen ? <AiOutlineDown /> : <AiOutlineRight />}
        </IconWrapper>
      </FilterHeader>

      {isFilterOpen && (
        <>
          <FilterSection>
            <SectionTitle>시청 유무</SectionTitle>
            <RadioGroup>
              <label>
                <input type="radio" name="viewStatus" value="all" /> 전체
              </label>
              <label>
                <input type="radio" name="viewStatus" value="unwatched" /> 안 본
                영화
              </label>
              <label>
                <input type="radio" name="viewStatus" value="watched" /> 본 영화
              </label>
            </RadioGroup>
          </FilterSection>

          <FilterSection>
            <SectionTitle>장르</SectionTitle>
            <GenreList>
              {genreItems.map((item, index) => (
                <GenreItem key={index}>{item.Ditem}</GenreItem>
              ))}
            </GenreList>
          </FilterSection>

          <FilterSection>
            <SectionTitle>키워드</SectionTitle>
            <KeywordInput type="text" placeholder="검색어를 입력하세요" />
          </FilterSection>
        </>
      )}
    </FilterContainer>
  );
}

export default Sfeel;

const FilterContainer = styled.section`
  margin: 0 20px 20px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 220px;
  font-size: 18px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const FilterSection = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const GenreItem = styled.span`
  border-radius: 40px;
  border: 1px solid black;
  padding: 4px 10px;
  font-size: 14px;
  white-space: nowrap;
`;

const KeywordInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding: 5px;
  margin-top: 8px;
`;
