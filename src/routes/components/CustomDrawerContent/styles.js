import styled from 'styled-components/native';
import Colors from '../../../constants/Colors';

export const Container = styled.View`
  padding: 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  background: ${Colors.backgroundColor};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #ddd;
  margin-bottom: 10px;
  border-color: #fff;
  border-width: 1px;
`;

export const User = styled.View``;

export const Name = styled.Text`
  margin-left: 6px;
  color: #fff;
`;

export const Points = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  color: #fff;
`;

export const Value = styled.Text`
  font-size: 40px;
  color: #fff;
`;
