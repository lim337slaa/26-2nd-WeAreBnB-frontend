import React from 'react';
import MyLogDetail from './MyLogDetail';
import styled from 'styled-components';

export default function MyReservation({ roomList }) {
  return (
    <MyLogWrapper>
      <MyLogDetail roomList={roomList} />
    </MyLogWrapper>
  );
}

const MyLogWrapper = styled.div`
  position: relative;
  padding-bottom: 3rem;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
`;
