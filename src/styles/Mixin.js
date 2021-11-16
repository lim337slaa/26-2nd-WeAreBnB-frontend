import { css } from 'styled-components';

// const Navigation = styled.nav`
//   position: fixed;
//   left: 0;
//   top: 0;
//   right: 0;
// `;

const RingVariant = (radius, stroke = '10') => css`
  position: absolute;
  border-radius: 50%;
  height: ${radius * 2}px;
  width: ${radius * 2}px;
  border: ${stroke}px solid rgba(0, 0, 0, 0.5);
`;

const flexMix = (align, justify) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;
