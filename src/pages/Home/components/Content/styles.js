import styled from 'styled-components/native';
import CInput from '../../../../components/Input';
import Button from '../../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 25px 30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background: #fff;
`;

export const Title = styled.Text`
  text-align: center;
  margin: 20px 0px 20px 0px;
  font-size: 16px;
`;

export const Input = styled(CInput)`
  margin-bottom: 20px;
`;

export const SearchButton = styled(Button)`
  margin-top: 20px;  
`;
