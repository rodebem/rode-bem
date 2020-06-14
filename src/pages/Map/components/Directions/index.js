import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

// import { Container } from './styles';

export default function Directions({ destination, origin, onReady }) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyBnz5T7J0jKr1p7gTHK7214sMeViVRvMPc"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
