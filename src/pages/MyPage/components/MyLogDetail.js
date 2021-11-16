import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const IMG_WIDTH = 660;
const SLIDE_WIDTH = 820;

export default function MyLogDetail({ roomList }) {
  const WHOLE_WIDTH = roomList.length * 330;
  const [slideImgLong, setSlideImgLong] = useState(0);

  const movePrevSlideImg = () => {
    if (SLIDE_WIDTH > Math.abs(slideImgLong)) {
      setSlideImgLong(0);
    } else if (slideImgLong === 0) {
      return;
    } else {
      setSlideImgLong(slideImgLong + IMG_WIDTH);
    }
  };

  const moveNextSlideImg = () => {
    const IMG_SLIDE_LENGTH = Math.floor(WHOLE_WIDTH / IMG_WIDTH) - 1;
    const isClosedEndPoint =
      IMG_SLIDE_LENGTH * IMG_WIDTH === Math.abs(slideImgLong);
    if (isClosedEndPoint) {
      setSlideImgLong(
        slideImgLong - (WHOLE_WIDTH - Math.abs(slideImgLong) - SLIDE_WIDTH - 30)
      );
    } else if (Math.abs(slideImgLong) === WHOLE_WIDTH - SLIDE_WIDTH - 30) {
      return;
    } else {
      setSlideImgLong(slideImgLong - IMG_WIDTH);
    }
  };

  return (
    <DetailContainer>
      <BsChevronLeft
        className="prev"
        onClick={() => movePrevSlideImg()}
        size="30"
      />

      <SlideWrapper slideImgLong={slideImgLong}>
        {roomList &&
          roomList.map((info, idx) => {
            return (
              <Link to={`/rooms/${info.reservation_id}`} key={idx}>
                <DetailWrapper>
                  <RoomImg
                    style={{
                      backgroundImage: `url(${info.image_url})`,
                    }}
                  >
                    <WrapperCover className="WrapperCover" />
                  </RoomImg>
                  <div>
                    <Location>{info.address}</Location>
                    <House>{info.title}</House>
                    <RoomDate>
                      {info.check_in} - {info.check_out}
                    </RoomDate>
                  </div>
                </DetailWrapper>
              </Link>
            );
          })}
      </SlideWrapper>

      <BsChevronRight
        className="next"
        onClick={() => moveNextSlideImg()}
        size="30"
      />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  position: relative;

  .prev {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: black;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    z-index: 99;

    &:hover {
      color: white;
    }
  }

  .next {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    color: black;
    color: black;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    z-index: 99;

    &:hover {
      color: white;
    }
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  position: relative;
  width: 820px;
  transition: all 0.5s ease 0s;
  transform: translate3d(${props => props.slideImgLong}px, 0, 0);
  z-index: 98;
`;

const DetailWrapper = styled.div`
  margin-right: 30px;
  width: 300px;
  cursor: pointer;

  &:hover .WrapperCover {
    opacity: 1;
  }
`;

const RoomImg = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 400px;
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const WrapperCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  opacity: 0;
  transition: 0.3s;
`;

const Location = styled.p`
  margin-bottom: 0.5rem;
`;

const House = styled.h4`
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
`;

const RoomDate = styled.p`
  font-size: 0.9rem;
  color: #999;
`;
