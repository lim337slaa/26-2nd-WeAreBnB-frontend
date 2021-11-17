import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

function DetailTitle({ title, average, reviewCount, location }) {
  const locationShorter = () => {
    let arr = [];
    arr = location.split(' ').reverse().splice(1);
    return arr.join(', ');
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitleContain>
        <AiFillStar className="iconColor" />
        <StarReview>{average}</StarReview>
        <ReviewCount>(후기 {reviewCount}개)</ReviewCount>
        <Location>{locationShorter()}</Location>
      </SubTitleContain>
    </Wrapper>
  );
}

export default DetailTitle;

const Wrapper = styled.div`
  height: 100px;
  font-family: 'Noto Sans KR', cursive;
`;

const Title = styled.h1`
  margin: 22px 0 15px 0;
  font-size: 26px;
`;

const SubTitleContain = styled.p`
  display: flex;
  .iconColor {
    color: ${props => props.theme.keyColor};
  }
`;

const StarReview = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ReviewCount = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.subTextColor};
`;

const Location = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.subTextColor};
`;
