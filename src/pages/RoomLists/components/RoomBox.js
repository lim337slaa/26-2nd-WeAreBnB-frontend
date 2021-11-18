import React from 'react';
import styled, { css } from 'styled-components';
import RoomPhotos from './RoomPhotos';
import { AiFillStar } from 'react-icons/ai';

function RoomList(props) {
  const {
    images,
    roomType,
    title,
    roomDetail,
    roomOption,
    price,
    starRating,
    review,
  } = props;

  return (
    <RoomBox>
      <div className="roomBoxLeft">
        <RoomPhotos img={images[0]} />
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
          {roomOption.slice(0, 5).map(option => (
            <RoomOption> {option} </RoomOption>
          ))}
        </RoomOptionWrap>
        <RoomBoxBottom>
          <RoomReviewWrap>
            <AiFillStar style={starStyle} />
            <StarScore>{starRating}</StarScore>
            <Review>(후기 {review}개)</Review>
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
    </RoomBox>
  );
}

export default RoomList;

const flexMix = (align = 'center', justify = 'center') => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const RoomBox = styled.div`
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
  padding-right: 10px;
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
    margin: 5px;
  }

  &.night {
    font-weight: 400;
  }
`;
