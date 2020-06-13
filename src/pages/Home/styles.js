import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.backgroundColor};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 50px 20px 40px 20px;
  justify-content: space-between;
`;

export const DrawerButton = styled.TouchableOpacity`

`;

export const DrawerButtonIcon = styled(Icon).attrs({
  color: '#fff',
  size: 25,
  name: 'menu'
})`
 
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  color: #fff;
`;

export const TitleIcon = styled(Icon).attrs({
  color: '#fff',
  size: 50,
  name: 'activity'
})`
  margin-right: 15px;
`;

export const End = styled.View`

`;