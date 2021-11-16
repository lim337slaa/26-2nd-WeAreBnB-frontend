import React from 'react';
import styled from 'styled-components';

export default function CommentList({ reviews }) {
  return (
    <div>
      {reviews &&
        reviews.map((comment, idx) => {
          return (
            <CommentWrapper key={idx}>
              <UserWrapper>
                <NameWrapper>
                  <User>
                    <Name>{comment.user_name}</Name>
                    <Room>{comment.room}</Room>
                  </User>
                  <Date>{comment.created_at.slice(0, 10)}</Date>
                </NameWrapper>
              </UserWrapper>
              <CommentText>
                <Title>{comment.title}</Title>
                <Text>{comment.content}</Text>
              </CommentText>
            </CommentWrapper>
          );
        })}
    </div>
  );
}

const CommentWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const NameWrapper = styled.div`
  width: 200px;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 0.5rem; ;
`;

const Name = styled.p`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Room = styled.p`
  width: 70%;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Date = styled.p`
  font-size: 12px;
`;

const CommentText = styled.div`
  padding: 2rem 0;
`;

const Title = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  word-break: keep-all;
`;

const Text = styled.p`
  line-height: 1.3rem;
  word-break: keep-all;
`;
