import React, { useState } from 'react';
import styled from 'styled-components';

function FilterButton(props) {
  const [selected, setSelected] = useState(false);

  const SelectButton = () => {
    setSelected(!selected);
  };

  return (
    <Button onClick={SelectButton} buttonClick={selected}>
      {props.name}
    </Button>
  );
}

export default FilterButton;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${props => (!props.buttonClick ? '#fff' : '#f7f7f7')};
  border: 2px solid ${props => (!props.buttonClick ? '#ebebeb' : 'black')};
  border-radius: 50px;
  font-family: ${({ theme }) => theme.fontTheme};

  &:hover {
    border: 2px solid black;
  }
`;
