import React from 'react';
import styled from 'styled-components';
import { FiWifi } from 'react-icons/fi';
import { BsDoorClosed } from 'react-icons/bs';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { POINTDESC } from './DetailData';

function DetailPointDesc() {
  const icons = [
    <MdOutlineCleaningServices key={0} />,
    <FiWifi key={0} />,
    <BsDoorClosed key={0} />,
    <FiMapPin key={0} />,
  ];

  return (
    <Wrapper>
      {POINTDESC.map((check, index) => {
        return (
          <PointDiv key={check.id}>
            <PointIcon>{icons[index]}</PointIcon>
            <PointDesc>
              <DescTitle>{check.title}</DescTitle>
              <DescSubTitle>{check.desc}</DescSubTitle>
            </PointDesc>
          </PointDiv>
        );
      })}
    </Wrapper>
  );
}

export default DetailPointDesc;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-bottom: 1px solid ${props => props.theme.underLineColor};
  font-family: 'Noto Sans KR', cursive;
`;

const PointDiv = styled.div`
  display: flex;
  margin-top: 30px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const PointIcon = styled.div`
  font-size: 24px;
`;

const PointDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const DescTitle = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

const DescSubTitle = styled.div`
  font-size: 14px;
  color: #717171;
`;
