import styled from 'styled-components/native';
import Button from '../../../../components/Button';
import Colors from '../../../../constants/Colors';
import { Platform, Dimensions } from 'react-native';

export const Container = styled.View`
  background: ${Colors.backgroundColor};
`;

export const FilterButton = styled(Button).attrs({
  textColor: Colors.backgroundColor
})`
  position: absolute;
  bottom: ${Platform.select({ ios: 60, android: 40 })};
  width: ${Dimensions.get('window').width - 20};
  left: 10px;
`;