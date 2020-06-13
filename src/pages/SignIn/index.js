import React from 'react';

import {
  Container,
  Logo,
  Title,
  Input,
  SignInButton
} from './styles';

import logo from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={logo} />

      <Title>Entre com suas credenciais</Title>

      <Input
        icon="mail"
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder="Email"
      />

      <Input
        icon="lock"
        secureTextEntry
        placeholder="Senha"
      />

      <SignInButton onPress={() => navigation.navigate('Main')}>
        Entrar
      </SignInButton>
    </Container>
  );
}

export default SignIn;