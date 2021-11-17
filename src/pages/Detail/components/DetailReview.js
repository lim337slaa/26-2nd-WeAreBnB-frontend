import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

function DetailReview({ review, reviewAverage, reviewCount }) {
  return (
    <Wrapper>
      <ReviewTitle>
        <AiFillStar className="reviewIcon" />
        <ReviewTitleText>
          {reviewAverage} · 후기 {reviewCount}개
        </ReviewTitleText>
      </ReviewTitle>
      <ReviewList>
        {review &&
          review.map((review, idx) => {
            return (
              <ReviewItem key={idx}>
                <ItemHeader>
                  <ItemPicture>
                    <img
                      alt="userImage"
                      src={
                        review.user_profile
                          ? review.user_profile
                          : 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
                      }
                    />
                  </ItemPicture>
                  <ItemUser>
                    <UserName>{review.username}</UserName>
                    <UserDate>{review.date}</UserDate>
                  </ItemUser>
                  <ItemAverage>
                    <AiFillStar className="reviewSubIcon" />
                    <ItemRating>{review.rating}</ItemRating>
                  </ItemAverage>
                </ItemHeader>
                <ItemTitle>{review.title}</ItemTitle>
                <ItemDesc>{review.content}</ItemDesc>
              </ReviewItem>
            );
          })}
      </ReviewList>
    </Wrapper>
  );
}

export default DetailReview;

const Wrapper = styled.div`
  padding: 35px 0;
  border-bottom: 1px solid ${props => props.theme.underLineColor};
  color: ${props => props.theme.TextColor};
  font-family: 'Noto Sans KR', cursive;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .reviewIcon {
    margin-right: 4px;
    font-size: 20px;
    color: ${props => props.theme.keyColor};
  }
`;

const ReviewTitleText = styled.span`
  margin-right: 10px;
  font-size: 22px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 200px;
  padding-right: 120px;
  overflow: hidden;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-bottom: 20px;
`;

const ItemPicture = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-right: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;

const UserDate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.subTextColor};
`;

const ItemAverage = styled.div`
  margin-left: 270px;
  font-size: 16px;
  font-weight: bold;

  .reviewSubIcon {
    margin-right: 4px;
    font-size: 15px;
    color: ${props => props.theme.keyColor};
  }
`;

const ItemRating = styled.span`
  margin-right: 10px;
  font-size: 16px;
`;

const ItemTitle = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const ItemDesc = styled.div`
  font-size: 16px;
  color: ${props => props.theme.subTextColor};
`;
