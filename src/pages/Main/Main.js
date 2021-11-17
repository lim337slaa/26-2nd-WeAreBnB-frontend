import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import City from './Component/City';
import img from './house.jpeg';

function Main() {
  const [CardData, setCardData] = useState([]);
  useEffect(() => {
    fetch('./data/CityData.json')
      .then(res => res.json())
      .then(data => {
        setCardData(data);
      });
  }, []);

  return (
    <>
      <Background>
        <Content>
          <ContentText>위어비앤비가 여행지를 찾아드릴게요!</ContentText>
        </Content>
        <TextBox>설레는 다음 여행을 위한 아이디어</TextBox>
        <CardContainer>
          {CardData.map(card => {
            return (
              <City
                key={card.id}
                id={card.id}
                src={card.src}
                title={card.title}
                subtitle={card.subTitle}
                backgroundcolor={card.backgroundcolor}
              />
            );
          })}
        </CardContainer>
      </Background>
      );
    </>
  );
}

export default Main;

const Background = styled.div`
  width: 100%;
  height: 1500px;
  background-color: #fff;
`;

const Content = styled.div`
  background-image: url(${img});
  max-width: 1280px;
  height: 720px;
  margin-left: 70px;
`;

const ContentText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  padding: 200px 300px 0px 300px;
`;

const TextBox = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 100px 0px 0px 70px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 70px 70px 0px 70px;
  max-width: 1280px;
`;
