import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import FilterButton from './components/FilterButton';
import RoomBox from './components/RoomBox';
import Map from './components/Map';
import { SUB_FILTER } from './components/data';

const LIMIT = 15;
const PAGES = new Array(1, 2, 3);

function RoomLists() {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [roomType, setRoomtype] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const moveDetailPage = id => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    if (roomType.length > 0 && (minPrice || maxPrice)) {
      fetch(
        // `/data/Rooms.json`
        `http://10.58.6.228:8000/rooms?price_max=${maxPrice}&price_min=${minPrice}&limit=15&offset=${page}&${roomType}`
      )
        .then(res => res.json())
        .then(data => setRooms(data.results));
    }

    if (roomType.length === 0 && (minPrice || maxPrice)) {
      fetch(
        // `/data/Rooms.json`
        `http://10.58.6.228:8000/rooms?price_max=${maxPrice}&price_min=${minPrice}&limit=15&offset=${page}`
      )
        .then(res => res.json())
        .then(data => setRooms(data.results));
    }
  }, [minPrice, maxPrice, roomType, page]);

  const applyPriceFilterCondition = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    const query = `price_max=${max}&price_min=${min}`;
    navigate(`?${query}&limit=15&offset=${page}`);
  };

  const applyRoomTypeCondition = types => {
    const query = `price_max=${maxPrice}&price_min=${minPrice}`;

    const selectRoomType = [];

    types.map(type => {
      selectRoomType.push(`room_type=${type}`);
    });

    const roomTypeQuery = selectRoomType.join('&');
    setRoomtype(roomTypeQuery);

    !selectRoomType.length > 0
      ? navigate(`?${query}&limit=15&offset=${page}`)
      : navigate(`?${query}&${roomTypeQuery}&limit=15&offset=${page}`);
  };

  return (
    <div>
      <Filter>
        <PriceFilter>
          <FilterButton
            name="요금"
            applyPriceFilterCondition={applyPriceFilterCondition}
          />
        </PriceFilter>
        <TypeFilter>
          <FilterButton
            name="숙소 유형"
            applyRoomTypeCondition={applyRoomTypeCondition}
          />
        </TypeFilter>
        <Line />
        <SubFilter>
          {SUB_FILTER.map(subfilter => {
            return <FilterButton key={subfilter.id} name={subfilter.name} />;
          })}
        </SubFilter>
        <br />
      </Filter>
      <RoomList>
        <div className="roomList">
          {rooms.map(room => {
            return (
              <RoomBox
                key={room.room_id}
                id={room.room_id}
                images={room.images}
                roomType={room.room_type}
                title={room.title}
                roomDetail={room.room_detail}
                roomOption={room.room_options}
                price={room.price}
                starRating={room.rating}
                review={room.review}
                moveDetailPage={moveDetailPage}
              />
            );
          })}
          <Pagination>
            {PAGES.map((page, index) => {
              return (
                <PageNumber
                  key={index + 1}
                  onClick={() => {
                    setPage(LIMIT * index);
                  }}
                >
                  {page}
                </PageNumber>
              );
            })}
          </Pagination>
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
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const PriceFilter = styled.div`
  min-width: 60px;
`;

const TypeFilter = styled.div`
  min-width: 95px;
`;

const Line = styled.div`
  height: 20px;
  margin: 0 0 0 10px;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

const SubFilter = styled.div`
  ${flexMix('center', 'space-beween')};
  flex-wrap: wrap;
  height: 50px;
  border: none;
  overflow: hidden;
`;

const RoomList = styled.div`
  ${flexMix('center', '')};
`;

const Pagination = styled.div`
  ${flexMix('center', 'center')};
  width: 100%;
  height: 30px;
`;

const PageNumber = styled.button`
  margin: 5px;
  border: none;
  background-color: ${({ theme }) =>
    props =>
      props.checked ? theme.borderColor : '#fff'};
  border-radius: 50%;
`;
