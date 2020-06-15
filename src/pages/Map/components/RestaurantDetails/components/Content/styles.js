import styled from 'styled-components/native';
import CInput from '../../../../../../components/Input';
import Button from '../../../../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0px 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #fff;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  background: #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 100;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
`;

export const Input = styled(CInput)`
  margin: 20px 0px;
`;

export const SaveButtonArea = styled.TouchableOpacity``;

export const SaveButton = styled(Button)`
  margin: 20px;
`;