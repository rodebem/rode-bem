import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather';
import Colors from '../../../../../../constants/Colors';

export const Container = styled.View`
  padding: 15px 20px 20px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  
`;

export const CloseButtonIcon = styled(Icon).attrs({
  name: 'x',
  color: Colors.backgroundColor,
  size: 25
})`
  
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleIcon = styled(Icon).attrs({
  size: 50,
  color: '#fff',
  name: 'sliders'
})`
  margin-right: 15px;
`;

export const TitleText = styled.Text`
  color: ${Colors.backgroundColor};
  font-size: 30px;
`;

export const End = styled.View`
  
`;
