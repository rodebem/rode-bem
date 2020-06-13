import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const DrawerBotton = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 40 })};
  left: 20px;
`;

export const DrawerBottonIcon = styled(Icon)`
  
`;

export const FilterButton = styled(Button).attrs({
  textColor: Colors.backgroundColor
})`
  position: absolute;
  bottom: ${Platform.select({ ios: 60, android: 40 })};
  width: ${Dimensions.get('window').width - 20};
  left: 10px;
`;
