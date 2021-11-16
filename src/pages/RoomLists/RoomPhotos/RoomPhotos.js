import React from 'react';
import styled from 'styled-components';

function RoomPhotos(props) {
  return (
    <RoomPhotoBox>
      {/* TODO: 버튼 삽입 후 여러장의 이미지 슬라이드로 넘겨주기 부드럽게! */}
      <RoomPhoto src={props.img} />
    </RoomPhotoBox>
  );
}

export default RoomPhotos;

const RoomPhotoBox = styled.div``;

const RoomPhoto = styled.img.attrs(props => ({
  src: props.src || './images/kara-eads-L7EwHkq1B2s-unsplash.jpg',
}))`
  width: 400px;
  height: 270px;
  border-radius: 20px;
`;
