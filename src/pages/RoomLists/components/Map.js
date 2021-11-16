/* global google */
import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styled from 'styled-components';

const Map = () => {
  const [locations, setLocations] = useState([]);

  const loader = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const infoWindow = useRef(null);
  const mapBoxRef = useRef();

  const mapOptions = {
    center: { lat: 41.3954, lng: 2.162 },
    zoom: 12,
  };

  useEffect(() => {
    loader.current = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
      version: 'weekly',
    });

    fetch('/data/Locations.json')
      .then(res => res.json())
      .then(data => setLocations(data));

    loader.current.load().then(() => {
      map.current = new google.maps.Map(mapBoxRef.current, mapOptions);
      infoWindow.current = new google.maps.InfoWindow();
      marker.current = locations.map(item => {
        const { lat, lng, name } = item.location;
        return new google.maps.Marker({
          position: { lat: lat, lng: lng }, // 백엔드와 통신 시 latitude, longintude로 들어오게 될 예정이어서 줄이지 않고 일단 놔두었습니다.
          map: map.current,
          title: `${name}`,
          label: `${name}`,
          optimized: false,
        });
      });
      return marker;
    });

    const script = document.createElement('script');
    script.src = { loader };
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MapLoad>
      <Box
        ref={mapBoxRef}
        id="map"
        onClick={() => {
          infoWindow.current.close();
          infoWindow.current.setContent(
            marker.current.map(marker && (marker => marker.getTitle()))
          );
          infoWindow.current.open(
            marker.current.map(marker && (marker => marker.getMap())),
            marker.current
          );
        }}
      />
    </MapLoad>
  );
};

export default Map;

const MapLoad = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.borderColor};
`;
