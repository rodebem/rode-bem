import React, { useState, useRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import { getPixelSize } from './utils';

import Directions from '../Directions';
import { useSelector, useDispatch } from 'react-redux';

import { openModalEvaluate } from '../../../../store/modules/map/actions';

export default function Map () {
  const dispatch = useDispatch();
  const destination = useSelector(state => state.map.destination);
  const [route, setRoute] = useState(null);

  let mapView = useRef();

  const handleEvaluateModalOpen = () => {
    dispatch(openModalEvaluate());
  }

  function fitCoordinates() {
    mapView.fitToCoordinates(route && route.coordinates, {
      edgePadding: {
        right: 50,
        left: 50,
        top: 50,
        bottom: 350
      }
    })
  }

  useEffect(() => {
    if(route) {
      fitCoordinates();
    }
  }, [route]);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          ref={el => mapView = el}
          region={{
            latitude: -3.7899266,
            longitude: -38.5891584,
          }}
          showsUserLocation
          loadingEnabled
        >
          <Directions
            origin={{
              latitude: -3.7899266,
              longitude: -38.5891584,
            }}
            destination={{
              latitude: -23.6815303,
              longitude: -46.8761689
            }}
            onReady={result => {
              setRoute({
                duration: Math.floor(result.duration),
                coordinates: result.coordinates
              });
            }}
          />
          <Marker
            coordinate={{
              latitude: -15.7333119,
              longitude: -47.6754431
            }}
            onPress={() => handleEvaluateModalOpen()}
          />

          <Marker
            coordinate={{
              latitude: -11.7100705,
              longitude: -44.9720191
            }}
          />

          <Marker
            coordinate={{
              latitude: -3.7899266,
              longitude: -38.5891584,
            }}
          />

          <Marker
            coordinate={{
              latitude: -23.6815303,
              longitude: -46.8761689
            }}
          />
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});