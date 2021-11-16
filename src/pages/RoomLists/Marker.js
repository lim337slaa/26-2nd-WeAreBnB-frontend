import React from 'react';
import styled from 'styled-components';

function Marker() {
  return (
    <MarkerBox>
      <Marke />
    </MarkerBox>
  );
}

export default Marker;

const MarkerBox = styled.div`
  display: flex;
`;

const Marke = styled.div`
  width: 80px;
  height: 30px;
  background-color: green;
  color: #fff;
  border-radius: 50px;
`;
