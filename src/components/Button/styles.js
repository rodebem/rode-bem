import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

export const Container = styled(RectButton)`
  height: 50px;
  background: ${Colors.tintColor};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${props => (props.color ? props.color : '#fff')};
  font-size: 16px;
  font-weight: bold;
`;

export const IconButton = styled(Icon).attrs({
  size: 25
})`
  margin-left: 10px;
`;
