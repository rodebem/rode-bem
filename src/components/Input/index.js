import React, { useRef } from 'react';
import Icon from '@expo/vector-icons/Feather';

import { Container, Field, TInput } from './styles';

function Input({ name, style, icon, ...rest }) {
  const inputRef = useRef(null);

  return (
    <Container style={style}>
      <Field>
        {icon && <Icon name={icon} size={20} color="#828282" />}
        <TInput {...rest} />
      </Field>
    </Container>
  );
}

export default Input;
