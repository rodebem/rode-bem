import styled from 'styled-components/native';
import CInput from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 20px 20px;
  align-items: center;
  background: #1F4969;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 210px;
  height: 174px;
`;

export const Title = styled.Text`
  margin: 30px;
  font-size: 18px;
  color: #fff;
`;

export const Input = styled(CInput)`
  margin: 5px 0px;
`;

export const SignInButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
