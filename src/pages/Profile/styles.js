import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/Feather';

import Colors from '../../constants/Colors';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${Colors.backgroundColor};
`;

export const Height = styled.View`
  align-items: center;
  padding: 80px 20px 40px 20px;
  background: ${Colors.backgroundColor};
`;

export const Name = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding: 30px 20px 40px 20px;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0px;
`;

export const Item = styled.View`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

export const ItemButton = styled.TouchableOpacity`
  background: #F2F2F2;
  padding: 10px;
  border-radius: 10px;
`;

export const ItemButtonIcon = styled(Icon).attrs({
  size: 20
})`
  font-size: 16px;
`;

export const Divider = styled.View`
  height: 1px;
  background: #ddd;
  margin: 10px 0px;
`;