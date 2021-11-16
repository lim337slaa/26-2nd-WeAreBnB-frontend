import React from 'react';
import styled from 'styled-components';

function Map() {
  return (
    <MapBox>
      <GoogleMap>맵자리</GoogleMap>
    </MapBox>
  );
}

export default Map;

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid green;
`;

const GoogleMap = styled.div`
  width: 800px;
  height: 1650px;
`;
