import React, { useState } from 'react';
import styled from 'styled-components';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import { FlexMix } from '../../../styles/Mixin';

function PriceFilter({
  visibleFilter,
  applyPriceFilterCondition,
  selectButton,
}) {
  // FIXME: minPrice 한번 지정 후 수정 안되는 문제 해결 필요
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(500000);

  const erasedCondition = () => {
    setMinPrice(10000);
    setMaxPrice(500000);
  };

  return (
    <Wrapper visibleFilter={visibleFilter}>
      <PriceFilterWrap>
        <NotiFilter>요금 조건 변경</NotiFilter>
        <SlideFilter>
          <Rheostat
            className="slider"
            min={10000}
            max={500000}
            values={[minPrice, maxPrice]}
            onValuesUpdated={e => {
              setMinPrice(e.values[0]);
              setMaxPrice(e.values[1]);
            }}
          />
        </SlideFilter>
        <ShowPriceWrap>
          <ShowPrice>
            <ShowPriceRange className="price">최저 요금</ShowPriceRange>
            <ShowPriceRange>₩ {minPrice}</ShowPriceRange>
          </ShowPrice>
          -
          <ShowPrice>
            <ShowPriceRange className="price">최고 요금</ShowPriceRange>
            <ShowPriceRange>₩ {maxPrice}</ShowPriceRange>
          </ShowPrice>
        </ShowPriceWrap>
      </PriceFilterWrap>
      <ChangeCondition>
        <Erase onClick={erasedCondition}>지우기</Erase>
        <Search
          onClick={() => {
            return (
              selectButton(), applyPriceFilterCondition(minPrice, maxPrice)
            );
          }}
        >
          검색
        </Search>
      </ChangeCondition>
    </Wrapper>
  );
}
export default PriceFilter;

const Wrapper = styled.div`
  display: ${props => (props.visibleFilter ? 'inline-block' : 'none')};
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
`;

const PriceFilterWrap = styled.div`
  ${FlexMix('center', 'center')};
  flex-direction: column;
  padding: 20px;
`;

const NotiFilter = styled.div`
  color: ${({ theme }) => theme.fontColor};
  margin: 5px;
`;

const SlideFilter = styled.div`
  width: 300px;
  margin: 20px;

  .DefaultProgressBar__vertical {
    width: 24px;
    height: 100%;
  }

  .DefaultProgressBar_progressBar {
    background-color: ${({ theme }) => theme.keyColor};
    position: absolute;
  }

  .DefaultProgressBar_progressBar__vertical {
    height: 100%;
    width: 24px;
  }

  .DefaultProgressBar_background__vertical {
    height: 100%;
    top: 0px;
    width: 15px;
  }

  .DefaultProgressBar_background__horizontal {
    height: 3px;
    top: -2px;
  }

  .DefaultHandle_handle {
    width: 24px;
    height: 24px;
    border: 1px solid #d8d8d8;
    background-color: #fcfcfc;
    border-radius: 50%;
    outline: none;
    z-index: 2;
    box-shadow: 0 2px 2px #dbdbdb;
  }

  .DefaultHandle_handle:focus {
    box-shadow: #abc4e8 0 0 1px 1px;
  }

  .DefaultHandle_handle:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #dadfe8;
  }

  .DefaultHandle_handle:before {
    content: '';
    display: block;
    position: absolute;
    background-color: #dadfe8;
  }

  .DefaultHandle_handle__horizontal {
    margin-left: -12px;
    top: -5px;
  }

  .DefaultHandle_handle__horizontal:before {
    top: 7px;
    height: 10px;
    width: 1px;
    left: 10px;
  }

  .DefaultHandle_handle__horizontal:after {
    top: 7px;
    height: 10px;
    width: 1px;
    left: 13px;
  }

  .DefaultHandle_handle__vertical {
    margin-top: -12px;
    left: -10px;
  }

  .DefaultHandle_handle__vertical:before {
    top: 10px;
  }

  .DefaultHandle_handle__vertical:after {
    top: 13px;
    left: 8px;
    height: 1px;
    width: 10px;
  }

  .DefaultHandle_handle__disabled {
    border-color: #dbdbdb;
  }

  .DefaultBackground {
    background-color: #fcfcfc;
    height: 15px;
    width: 100%;
    border: 1px solid #d8d8d8;
    position: relative;
  }

  .DefaultBackground_background__horizontal {
    height: 3px;
    top: -2px;
    left: -2px;
    bottom: 4px;
    width: 100%;
  }

  .DefaultBackground_background__vertical {
    width: 15px;
    top: 0px;
    height: 100%;
  }

  .rheostat {
    position: relative;
    overflow: visible;
  }

  .rheostat__vertical {
    height: 100%;
  }
  .handleContainer {
    height: 4px;
    top: -7px;
    left: -2px;
    bottom: 4px;
    width: 100%;
    position: absolute;
  }
  .rheostat_background {
    background-color: #fcfcfc;
    border: 1px solid #d8d8d8;
    position: relative;
  }
  .rheostat_background__horizontal {
    height: 15px;
    top: -2px;
    left: -2px;
    bottom: 4px;
    width: 100%;
  }
  .rheostat_background__vertical {
    width: 15px;
    top: 0px;
    height: 100%;
  }
`;

const ShowPriceWrap = styled.div`
  ${FlexMix('center', 'center')};
`;

const ShowPrice = styled.div`
  padding: 15px 20px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
`;

const ShowPriceRange = styled.div`
  width: 100px;
  font-size: 14px;

  &.price {
    margin: 5px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const ChangeCondition = styled.div`
  ${FlexMix('', 'space-between')};
  width: 100%;
  padding: 20px;
  font-size: 12px;
  border-top: 1px solid #000;
`;

const Erase = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  border: 0;
`;

const Search = styled.button`
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
