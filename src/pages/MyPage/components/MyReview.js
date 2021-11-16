import React, { useState } from 'react';
import CommentList from './CommentList';
import styled from 'styled-components';

export default function MyReview({ roomList, reviews, getMyReview }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [selected, setSelected] = useState('');
  const [commentLists, setCommentLists] = useState([]);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  const onChangeSelect = e => {
    setSelected(e.target.value);
  };

  const handleCommtLists = e => {
    e.preventDefault();
    if (!name || !comment || !selected) {
      alert('후기를 작성 해 주세요!');
    } else {
      alert('작성이 완료되었습니다!');
      setName('');
      setComment('');
      setSelected('');
    }

    if (name && comment && selected) {
      setCommentLists(
        [
          {
            name: name,
            comment: comment,
            locationOption: selected,
          },
        ].concat(commentLists)
      );

      fetch('url', {
        method: 'POST',
        headers: {
          Authorization: process.env.REACT_APP_USER_TOKEN,
        },
        body: commentLists,
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            alert('프로필이 업로드 되었습니다!');
            getMyReview();
          } else {
            alert('프로필 사진을 업로드 해 주세요!');
          }
        });
    }
  };

  return (
    <CommentWrapper>
      <Comment>
        <CommentTextInput
          type="text"
          placeholder="제목을 입력하세요."
          value={name}
          onChange={onChangeName}
        />
        <CommentText
          rows="2"
          cols="80"
          placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를사용하시면 비공개될 수 있습니다."
          value={comment}
          onChange={onChangeComment}
        />
        <CommentBtn>
          <NoticeBtn onChange={onChangeSelect} value={selected}>
            <option selected value="">
              숙소를 선택하세요.
            </option>
            {roomList &&
              roomList.map((item, idx) => {
                return (
                  <option value={item.title} key={idx}>
                    {item.title}
                  </option>
                );
              })}
          </NoticeBtn>
          <Btn type="submit" onClick={handleCommtLists}>
            리뷰 남기기
          </Btn>
        </CommentBtn>
      </Comment>
      <CommentLists>
        <CommentList reviews={reviews} />
      </CommentLists>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  margin: 2rem 0;
`;

const Comment = styled.form`
  margin: 0 auto;
  width: 600px;
`;

const CommentTextInput = styled.input`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
  outline: none;
`;

const CommentText = styled.textarea`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 8px 8px;
  outline: none;
`;

const CommentBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 5rem;
  width: 600px;
`;

const NoticeBtn = styled.select`
  padding: 10px 20px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const CommentLists = styled.div`
  display: block;
`;
