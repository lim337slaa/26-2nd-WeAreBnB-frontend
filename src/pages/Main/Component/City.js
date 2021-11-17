import React from 'react';
import styled from 'styled-components';

function CityCard(props) {
  const { id, key, src, title, subtitle, backgroundcolor } = props;

  return (
    <div>
      <Container backgroundcolor={backgroundcolor}>
        <ImgContainer>
          <img alt="error" src={src} />
        </ImgContainer>
        <subContainer>
          <Text>{title}</Text>
          <SubText>{subtitle}</SubText>
        </subContainer>
      </Container>
    </div>
  );
}

export default CityCard;

const Container = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${props => props.backgroundcolor};
  border-radius: 15px;
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  img {
    width: 300px;
    height: 200px;
  }

  border-radius: 15px;
`;

const Text = styled.div`
  width: 100px;
  height: 75px;

  margin: 30px 0px 0px 20px;
  font-size: 36px;
  color: white;
`;

const SubText = styled.div`
  margin: 0px 0px 0px 20px;
  font-size: 20px;
  color: white;
`;
