import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import FilterButton from './FilterButton/FilterButton';
import RoomBox from './RoomList/RoomList';
import Map from './Map/Map';

function RoomLists() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('/data/Rooms.json')
      .then(res => res.json())
      .then(data => setRooms(data.results));
  }, []);

  return (
    <div className="RoomList">
      <Filter>
        <MainFilter>
          {/* TODO: map */}
          <FilterButton name="요금" />
          <FilterButton name="숙소 유형" />
        </MainFilter>
        <SubFilter>
          <FilterButton name="취소 수수료 없음" />
          <FilterButton name="수변에 인접" />
          <FilterButton name="주방" />
          <FilterButton name="무선 인터넷" />
          <FilterButton name="요금" />
        </SubFilter>
        <br />
      </Filter>
      <RoomList>
        <div className="roomBoxs">
          {/* TODO: map */}
          {rooms.map(room => {
            return (
              <RoomBox
                key={room.id}
                images={room.images}
                roomType={room.room_type}
                title={room.title}
                roomDetail={room.room_detail}
                roomOption={room.room_options}
                price={room.price}
                starRating={room.rating}
                review={room.review}
              />
            );
          })}
        </div>
        <Map />
      </RoomList>
    </div>
  );
}

export default RoomLists;

const flexMix = (align = 'center', justify = 'center') => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const Filter = styled.div`
  ${flexMix('center', 'space-beween')};
  width: 100%;
  padding: 20px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const MainFilter = styled.div`
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  margin-right: 5px;
  padding-right: 5px;
`;

const SubFilter = styled.div`
  border: none;
  color: yellow;
`;

const RoomList = styled.div`
  ${flexMix('center', 'space-beween')};
`;
