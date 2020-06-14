import React from 'react';

import {
  Container,
  Height,
  Name,
  Content,
  Title,
  Item,
  Label,
  ItemButton,
  ItemButtonIcon,
  Divider
} from './styles';

import UploadImage from './components/UploadImage';

const Profile = () => {
  return (
    <Container>
      <Height>
        <UploadImage />
        <Name>Jadson José</Name>
      </Height>
      <Content>
        <Title>Dados Pessoais</Title>
        <Item>
          <Label>Fulano de Tal</Label>
          <ItemButton>
            <ItemButtonIcon name="edit" />
          </ItemButton>
        </Item>
        <Item>
          <Label>fuladodetal@gmail.com</Label>
          <ItemButton>
            <ItemButtonIcon name="edit" />
          </ItemButton>
        </Item>
        <Item>
          <Label>(99) 9998196 - 5234</Label>
          <ItemButton>
            <ItemButtonIcon name="edit" />
          </ItemButton>
        </Item>
        <Title>Notificações</Title>
        <Item>
          <Label>Habilitar notificações</Label>
          <ItemButton>
            <ItemButtonIcon name="square" />
          </ItemButton>
        </Item>
        <Item>
          <Label>Habilitar avisos de saúde</Label>
          <ItemButton>
            <ItemButtonIcon name="check-square" />
          </ItemButton>
        </Item>
        <Title>Alertas de monitoramento</Title>
        <Item>
          <Label>Notificar autoridades</Label>
          <ItemButton>
            <ItemButtonIcon name="check-square" />
          </ItemButton>
        </Item>
        <Item>
          <Label>Contatos pessoais</Label>
          <ItemButton>
            <ItemButtonIcon name="plus" />
          </ItemButton>
        </Item>
        <Divider />
        <Item>
          <Label>Mãe</Label>
          <ItemButton>
            <ItemButtonIcon name="x" />
          </ItemButton>
        </Item>
        <Item>
          <Label>Esposa</Label>
          <ItemButton>
            <ItemButtonIcon name="x" />
          </ItemButton>
        </Item>
      </Content>
    </Container>
  );
}

export default Profile;
