import React from 'react';
import styled from 'styled-components';

function DetailDesc({ desc }) {
  return <Wrapper>{desc}</Wrapper>;
}

export default DetailDesc;

const Wrapper = styled.div`
  padding: 35px 0;
  border-bottom: 1px solid ${props => props.theme.underLineColor};
  color: ${props => props.theme.TextColor};
  font-family: 'Noto Sans KR', cursive;
  line-height: 22px;
  font-size: 16px;
`;
