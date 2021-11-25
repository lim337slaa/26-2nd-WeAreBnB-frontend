/* global google */
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import styled from 'styled-components';

const ICONS = {
  white: 'images/marker_white.png',
  black: 'images/marker_black.png',
};

const MAP_OPTION = {
  center: { lat: 37.5116419, lng: 127.0442542 },
  zoom: 14,
};

const Map = ({ rooms, highlight }) => {
  const map = useRef('');
  const loader = useRef(null);
  const marker = useRef([]);
  const infoWindow = useRef(null);
  const mapBoxRef = useRef('');

  useEffect(() => {
    loader.current = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
      version: 'weekly',
    });

    loader.current.load().then(() => {
      map.current = new google.maps.Map(mapBoxRef.current, {
        center: !rooms[0]
          ? { lat: 37.5116419, lng: 127.0442542 }
          : { lat: rooms[0].latitude, lng: rooms[0].longitude },
        zoom: 14,
      });
      infoWindow.current = new google.maps.InfoWindow({});
      rooms.map(item => {
        const priceNumber = item.price.toLocaleString();
        return createMarker(
          item.latitude,
          item.longitude,
          item.title,
          ICONS.white,
          priceNumber
        );
      });
    });

    const script = document.createElement('script');
    script.src = loader.current;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [rooms]);

  const createMarker = (lat, lng, iconTitle, icon, price) => {
    marker.current = new google.maps.Marker({
      position: { lat: Number(lat), lng: Number(lng) },
      map: map.current,
      title: iconTitle,
      icon: {
        url: icon,
        size: new google.maps.Size(100, 30),
        origin: new google.maps.Point(0, 0),
        anthor: new google.maps.Point(0, 0),
        scaleSize: new google.maps.Size(100, 100),
      },
      label: {
        text: `₩${price}`,
        fontWeight: '700',
        fontSize: '16px',
        color: '#ff385c',
      },
      optimized: false,
    });
  };

  rooms.map(item => {
    const icon = !(highlight === item.room_id) ? ICONS.white : ICONS.black;
    const priceNumber = item.price.toLocaleString();
    return createMarker(
      item.latitude,
      item.longitude,
      item.title,
      icon,
      priceNumber
    );
  });

  return (
    <MapLoad>
      <Box
        ref={mapBoxRef}
        className="box"
        onClick={() => {
          infoWindow.current.close();
          infoWindow.current.setContent(marker.current.getTitle());
          infoWindow.current.open(marker.current.getMap(), marker.current);
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
  height: 90vh;
  background-color: ${({ theme }) => theme.borderColor};
`;
