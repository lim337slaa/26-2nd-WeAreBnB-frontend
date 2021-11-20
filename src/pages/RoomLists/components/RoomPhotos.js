import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const IMG_WIDTH = 300;

function RoomPhotos({ imgs }) {
  const [imgCurrentSlideIndex, setImgCurrentSlideIndex] = useState(0);

  const movePrevSlideImg = () => {
    if (imgCurrentSlideIndex === 0) {
      setImgCurrentSlideIndex((imgs.length - 1) * -IMG_WIDTH);
    }
    if (imgCurrentSlideIndex < 0) {
      setImgCurrentSlideIndex(imgCurrentSlideIndex + IMG_WIDTH);
    }
  };

  const moveNextSlideImg = () => {
    if (
      imgCurrentSlideIndex < 0 &&
      imgCurrentSlideIndex === (imgs.length - 1) * -IMG_WIDTH
    ) {
      setImgCurrentSlideIndex(0);
    }
    if (imgCurrentSlideIndex > (imgs.length - 1) * -IMG_WIDTH) {
      setImgCurrentSlideIndex(imgCurrentSlideIndex - IMG_WIDTH);
    }
  };

  return (
    <RoomPhotoBox>
      <BsChevronLeft className="prev" onClick={movePrevSlideImg} />
      {imgs.map((img, idx) => (
        <RoomPhoto
          key={idx + 1}
          src={img}
          imgCurrentSlideIndex={imgCurrentSlideIndex}
        />
      ))}
      <BsChevronRight className="next" onClick={moveNextSlideImg} />
    </RoomPhotoBox>
  );
}

export default RoomPhotos;

const RoomPhotoBox = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  overflow: hidden;

  .prev,
  .next {
    display: none;
  }

  &:hover {
    .prev {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translate(0, -50%);
      color: black;
      z-index: 1;
    }

    .next {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(0, -50%);
      color: black;
    }
  }
`;

const RoomPhoto = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  transition: all 0.3s ease 0s;
  transform: translate3d(${props => props.imgCurrentSlideIndex}px, 0, 0);
`;
