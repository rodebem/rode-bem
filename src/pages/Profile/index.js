import React from 'react';

import {
  Container,
  Height,
  Title,
  Image,
  Content
} from './styles';

import UploadImage from './components/UploadImage';

const Profile = () => {
  return (
    <Container>
      <Height>
        <UploadImage />
        <Title>Jadson José</Title>
      </Height>
      <Content>

      </Content>
    </Container>
  );
}

export default Profile;
