import React from 'react';
import styled, { css } from 'styled-components';
import RoomPhotos from './RoomPhotos';
import { AiFillStar } from 'react-icons/ai';

function RoomBox({
  images,
  roomType,
  title,
  roomDetail,
  roomOption,
  price,
  starRating,
  review,
}) {
  return (
    <RoomBoxs>
      <div className="roomBoxLeft">
        <RoomPhotos classNmae="roomImg" imgs={images} />
      </div>
      <div className="roomBoxRight">
        <RoomType>{roomType}</RoomType>
        <RoomName>{title}</RoomName>
        <Line />

        <DetailTypeWrap>
          <DetailType>최대인원 {roomDetail.max_guest}</DetailType>
          <DetailType>•</DetailType>
          <DetailType>침실 {roomDetail.bedroom}개</DetailType>
          <DetailType>•</DetailType>
          <DetailType>침대 {roomDetail.bed}개</DetailType>
          <DetailType>•</DetailType>
          <DetailType>욕실 {roomDetail.bath}개</DetailType>
        </DetailTypeWrap>
        <RoomOptionWrap>
          {roomOption.slice(0, 5).map((option, index) => (
            <RoomOption key={index + 1}> {option} </RoomOption>
          ))}
        </RoomOptionWrap>
        <RoomBoxBottom>
          <RoomReviewWrap>
            <AiFillStar style={starStyle} />
            <StarScore>{starRating}</StarScore>
            <Review>(후기 {!review ? 0 : review}개)</Review>
          </RoomReviewWrap>
          <RoomPrice>
            <DiscountPriceWrap>
              <DiscountPrice>₩{price.toLocaleString()}</DiscountPrice>
              <DiscountPrice className="slash">/</DiscountPrice>
              <DiscountPrice className="night">박</DiscountPrice>
            </DiscountPriceWrap>
            <DiscountPriceWrap className="price">
              총액 149,000원
            </DiscountPriceWrap>
          </RoomPrice>
        </RoomBoxBottom>
      </div>
    </RoomBoxs>
  );
}

export default RoomBox;

const flexMix = (align = 'center', justify = 'center') => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const RoomBoxs = styled.div`
  ${flexMix('center', 'flex-start')}
  position: relative;
  max-width: 900px;
  padding: 20px 0;
  margin: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  .roomBoxRight {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

const RoomType = styled.div`
  margin: 5px 10px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 13px;
`;

const RoomName = styled.h3`
  width: 400px;
  margin: 5px 10px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Line = styled.div`
  width: 40px;
  margin: 10px 0px 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const DetailTypeWrap = styled.div`
  ${flexMix('center', 'flex-start')}
  margin: 5px 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const DetailType = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 13px;
`;

const RoomOptionWrap = styled.div`
  ${flexMix('center', 'flex-start')}
  margin: 5px 10px;
  font-size: 13px;
`;

const RoomOption = styled.span`
  padding-right: 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const RoomBoxBottom = styled.div`
  ${flexMix('flex-end', 'space-between')}
  margin: 40px 10px 5px 10px;
`;

const RoomReviewWrap = styled.div`
  ${flexMix('center', 'space-between')}
`;

const starStyle = {
  color: 'red',
  marginBottom: '3px',
};

const StarScore = styled.div`
  font-weight: 700;
  font-size: 13px;
`;

const Review = styled.div`
  ${flexMix('center', 'space-between')};
  color: ${({ theme }) => theme.fontColor};
  font-size: 13px;
`;

const RoomPrice = styled.div`
  ${flexMix('flex-end', '')}
  flex-direction:column;
`;

const DiscountPriceWrap = styled.div`
  ${flexMix('center', 'space-between')}
  font-size: 18px;

  &.price {
    color: ${({ theme }) => theme.fontColor};
    font-size: 14px;
    text-decoration: underline;
  }
`;

const DiscountPrice = styled.div`
  font-weight: 700;

  &.slash {
    font-weight: 400;
    margin: 5px;
  }

  &.night {
    font-weight: 400;
  }
`;
