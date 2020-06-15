import React from 'react';
import { Modal, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header';
import Content from './components/Content';

import { closeModalEvaluate } from '../../../../store/modules/map/actions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function RestaurantDetails() {
  const dispatch = useDispatch();
  const evaluateModalOpen = useSelector(state => state.map.evaluateModalOpen);

  const handleModalClose = () => {
    dispatch(closeModalEvaluate());
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      statusBarTranslucent
      visible={evaluateModalOpen}
      onRequestClose={() => handleModalClose()}
      presentationStyle={{ flex: 1, backgroundColor: Colors.backgroundColor }}
    >
      <View style={{ flex: 1 }}>
        <Header onClick={() => handleModalClose()} />
        <Content />
      </View>
    </Modal>
  );
}
