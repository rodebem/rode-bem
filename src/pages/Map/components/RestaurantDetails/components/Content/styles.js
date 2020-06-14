import styled from 'styled-components/native';
import Button from '../../../../../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0px 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 100;
`;

export const SaveButton = styled(Button)`
  margin: 20px;
`;