import React from 'react';
import styled from 'styled-components';

function DetailHostTitle({ hostName, roomType, maxGuest, bedRoom, bed, bath }) {
  return (
    <Wrapper>
      <HostTitle>
        {hostName}님이 호스팅하는 {roomType}
      </HostTitle>
      <HostSubTitle>
        최대 인원 {maxGuest}명 · 침실 {bedRoom}개 · 침대 {bed}개 · 욕실 {bath}개
      </HostSubTitle>
    </Wrapper>
  );
}

export default DetailHostTitle;

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.underLineColor};
  color: ${props => props.theme.TextColor};
  font-family: 'Noto Sans KR', cursive;
`;

const HostTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
`;

const HostSubTitle = styled.p`
  padding-bottom: 25px;
  font-size: 16px;
`;
