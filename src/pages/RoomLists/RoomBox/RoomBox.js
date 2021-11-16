import React from 'react';
import styled, { css } from 'styled-components';
import RoomPhotos from '../RoomPhotos/RoomPhotos';
import { AiFillStar } from 'react-icons/ai';

function RoomList() {
  return (
    <Container>
      <div className="roomBoxLeft">
        <RoomPhotos />
      </div>
      <div className="roomBoxRight">
        <RoomType>선릉의 소형 주택</RoomType>
        <RoomName>
          [빈방 203] 리모델링 신축 이태원역 도보5분 이름이 길면 자를것
        </RoomName>
        <Line />

        <DetailTypeWrap>
          {/* TODO: 옵션 분리 맵으로 구성 */}
          <DetailType>최대 인원 2명</DetailType>
          <DetailType>•</DetailType>
          <DetailType>침실 1개</DetailType>
          <DetailType>•</DetailType>
          <DetailType>욕실 1개</DetailType>
        </DetailTypeWrap>
        <RoomOptionWrap>
          {/* TODO: 옵션 분리 맵으로 구성 */}
          <RoomOption>주방</RoomOption>
          <RoomOption>•</RoomOption>
          <RoomOption>무선인터넷</RoomOption>
          <RoomOption>•</RoomOption>
          <RoomOption>에어컨</RoomOption>
        </RoomOptionWrap>
        <RoomBoxBottom>
          <RoomReviewWrap>
            <AiFillStar style={starStyle} />
            <StarScore>4.5</StarScore>
            <Review>(후기 4500개)</Review>
          </RoomReviewWrap>
          <RoomPrice>
            <DiscountPriceWrap>
              <DiscountPrice>149,000원</DiscountPrice>
              <DiscountPrice className="slash">/ 박</DiscountPrice>
            </DiscountPriceWrap>
            <DiscountPriceWrap className="price">
              총액 149,000원
            </DiscountPriceWrap>
          </RoomPrice>
        </RoomBoxBottom>
      </div>
    </Container>
  );
}

export default RoomList;

const flexMix = (align = 'center', justify = 'center') => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const Container = styled.div`
  ${flexMix('center', 'flex-start')}
  max-width: 1120px;
  padding: 30px 0;
  margin: 0 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const RoomType = styled.div`
  margin: 10px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 16px;
`;

const RoomName = styled.h3`
  width: 450px;
  margin: 10px;
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Line = styled.div`
  width: 40px;
  margin: 20px 0px 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const DetailTypeWrap = styled.div`
  ${flexMix('center', 'flex-start')}
  margin: 5px 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const DetailType = styled.span`
  color: ${({ theme }) => theme.fontColor};
`;

const RoomOptionWrap = styled.div`
  ${flexMix('center', 'flex-start')}
  margin: 5px 10px;
`;

const RoomOption = styled.span`
  color: ${({ theme }) => theme.fontColor};
`;

const RoomBoxBottom = styled.div`
  ${flexMix('flex-end', 'space-between')}
  margin: 70px 10px 5px 10px;
`;

const RoomReviewWrap = styled.div`
  ${flexMix('center', 'space-between')}
`;

const starStyle = { color: 'red' };

const StarScore = styled.div`
  font-weight: 700;
`;

const Review = styled.div`
  ${flexMix('center', 'space-between')};
  color: ${({ theme }) => theme.fontColor};
`;

const RoomPrice = styled.div`
  ${flexMix('flex-end', '')}
  flex-direction:column;
`;

const DiscountPriceWrap = styled.div`
  ${flexMix('center', 'space-between')}
  font-size: 20px;

  &.price {
    color: ${({ theme }) => theme.fontColor};
    font-size: 16px;
    text-decoration: underline;
  }
`;

const DiscountPrice = styled.div`
  font-weight: 700;

  &.slash {
    font-weight: 400;
    margin: 5px 0 5px 5px;
  }
`;
