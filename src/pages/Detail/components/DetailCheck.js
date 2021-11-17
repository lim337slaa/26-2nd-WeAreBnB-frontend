import React from 'react';
import styled from 'styled-components';
import { CHECKLIST } from './DetailData';

function DetailCheck() {
  return (
    <Wrapper>
      <CheckTitle>알아두어야 할 사항</CheckTitle>
      <CheckList>
        {CHECKLIST.map((check, index) => {
          return (
            <CheckContent key={index}>
              <CheckText>
                {check.title}
                {check.list.map((check, index) => {
                  return <CheckSubText key={index}>{check}</CheckSubText>;
                })}
              </CheckText>
            </CheckContent>
          );
        })}
      </CheckList>
    </Wrapper>
  );
}

export default DetailCheck;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  font-family: 'Noto Sans KR', cursive;
`;

const CheckTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 22px;
`;

const CheckList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 300px;
`;

const CheckContent = styled.div`
  width: 33%;
  height: 100%;
`;

const CheckText = styled.ul`
  font-size: 16px;
  font-weight: bold;
`;

const CheckSubText = styled.li`
  padding: 10px 0;
  font-size: 16px;
  font-weight: normal;
  color: #717171;

  &:nth-child(1) {
    margin-top: 10px;
  }
`;
