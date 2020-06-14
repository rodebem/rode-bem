import React, { useState } from 'react';
import { Modal, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Header from './components/Header';
import Content from './components/Content';

import { closeModalFilter } from '../../../../store/modules/map/actions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Details() {
  const dispatch = useDispatch();
  const filterModalOpen = useSelector(state => state.map.filterModalOpen);

  const handleModalClose = () => {
    dispatch(closeModalFilter());
  }

  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      transparent={false}
      statusBarTranslucent
      visible={filterModalOpen}
      onRequestClose={() => handleModalClose()}
      presentationStyle={{ flex: 1, backgroundColor: Colors.backgroundColor }}
    >
      <View style={{ flex: 1, backgroundColor: '#1F4969' }}>
        <Header onClick={() => handleModalClose()} />
        <Content />
      </View>
    </Modal>
  );
}
