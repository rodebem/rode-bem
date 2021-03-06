import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UpdateImage({ profile }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={profile}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#fff',
          marginBottom: 20,
          borderWidth: 4,
          borderColor: '#fff'
        }} />
      <TouchableOpacity
        onPress={pickImage}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 4
        }}
      >
        <Text>Alterar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}