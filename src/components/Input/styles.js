import styled from 'styled-components/native';

export const Container = styled.View`
align-items: center;
`;

export const Field = styled.View`
  padding: 0 10px;
  height: 50px;
  background: #eee;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#828282',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #828282;
`;

export const Error = styled.Text`
  align-self: stretch;
  margin-left: 5px;
  color: #f00;
`;
