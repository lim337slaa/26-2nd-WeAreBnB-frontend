import React from 'react';
import styled from 'styled-components';

function DetailConvenience({ roomOption }) {
  return (
    <Wrapper>
      <ConvenTitle>숙소 편의시설</ConvenTitle>
      <ConvenList>
        {roomOption.map((option, idx) => {
          return (
            <ConvenItem key={idx}>
              <ItemIcon>
                <img alt="icon" src={option.roomOption_url} />
              </ItemIcon>
              <ItemTitle>{option.roomOption_name}</ItemTitle>
            </ConvenItem>
          );
        })}
      </ConvenList>
    </Wrapper>
  );
}

export default DetailConvenience;

const Wrapper = styled.div`
  padding: 35px 0;
  color: ${props => props.theme.TextColor};
  font-family: 'Noto Sans KR', cursive;
`;

const ConvenTitle = styled.div`
  margin-bottom: 20px;
  font-size: 22px;
`;

const ConvenList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ConvenItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 40px;
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  font-size: 24px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemTitle = styled.p`
  font-size: 16px;
`;
