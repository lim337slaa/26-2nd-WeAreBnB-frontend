import React from 'react';
import styled from 'styled-components';

function DetailImages({ roomImage }) {
  return (
    <Wrapper>
      <MainBox>
        <img alt="roomImg" src={roomImage[0]} />
      </MainBox>
      <SubBox>
        {roomImage.slice(1).map((image, idx) => {
          return (
            <SubImage key={idx}>
              <img alt="test" src={image} />
            </SubImage>
          );
        })}
      </SubBox>
    </Wrapper>
  );
}

export default DetailImages;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  height: 400px;
`;

const MainBox = styled.div`
  width: 560px;
  border-radius: 15px 0 0 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  width: 550px;
`;

const SubImage = styled.div`
  width: 270px;
  height: 195px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:nth-child(2) {
    border-radius: 0 15px 0 0;
  }

  &:nth-child(4) {
    border-radius: 0 0 15px 0;
  }
`;
