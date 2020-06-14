import styled from 'styled-components/native';
import CIcon from '@expo/vector-icons/Feather';
import { Dimensions, Platform } from 'react-native';

export const Container = styled.View`
  position: absolute;
  bottom: ${Platform.select({ ios: 60, android: 40 })};
  width: ${Dimensions.get('window').width - 20};
  left: 10px;
  flex-direction: row;
  padding: 0px 20px;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 10px;
  background: ${props => props.color ? props.color : "#333" };
  elevation: 8;
`;

export const Icon = styled(CIcon).attrs({
  size: 20
})`
  padding: 10px;
  border-radius: 4px;
`;