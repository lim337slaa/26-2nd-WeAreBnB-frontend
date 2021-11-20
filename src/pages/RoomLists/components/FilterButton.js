import React, { useState } from 'react';
import styled from 'styled-components';
import PriceFilter from './PriceFilter';
import RoomTypeFilter from './RoomTypeFilter';

function FilterButton({
  name,
  applyPriceFilterCondition,
  applyRoomTypeCondition,
}) {
  const [selected, setSelected] = useState(false);

  const selectButton = () => {
    setSelected(!selected);
  };

  const matchFilterName = name => {
    if (name === '요금') {
      return (
        <PriceFilter
          visibleFilter={selected}
          applyPriceFilterCondition={applyPriceFilterCondition}
          selectButton={selectButton}
        />
      );
    }
    if (name === '숙소 유형') {
      return (
        <RoomTypeFilter
          visibleFilter={selected}
          applyRoomTypeCondition={applyRoomTypeCondition}
          selectButton={selectButton}
        />
      );
    }
  };

  return (
    <Filter>
      <Button onClick={selectButton} buttonClick={selected}>
        {name}
      </Button>
      {(applyRoomTypeCondition || applyPriceFilterCondition) && (
        <ShowFilter>{name && matchFilterName(name)}</ShowFilter>
      )}
    </Filter>
  );
}

export default FilterButton;

const Filter = styled.div`
  position: relative;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  width: 100%;
  background-color: ${props => (!props.buttonClick ? '#fff' : '#f7f7f7')};
  border: 1px solid ${props => (!props.buttonClick ? '#ebebeb' : 'black')};
  border-radius: 50px;
  font-family: ${({ theme }) => theme.fontTheme};

  &:hover {
    border: 1px solid black;
  }
`;

const ShowFilter = styled.div`
  position: absolute;
  top: 55px;
  z-index: 2;
`;
