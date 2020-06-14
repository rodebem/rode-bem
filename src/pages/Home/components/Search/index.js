 
import React, { useState } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Search({ onLocationSelected }) {
  const [śearchFocus, setSearchFocus] = useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: "AIzaSyBnz5T7J0jKr1p7gTHK7214sMeViVRvMPc",
        language: "pt"
      }}
      textInputProps={{
        onFocus: () => { setSearchFocus(true) },
        onBlur: () => { setSearchFocus(false) },
        autoCaptalize: "none",
        autoCorrect: false,
      }}
      listViewDisplayed={śearchFocus}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          width: '100%'
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 0,
          paddingTop: 0,
          paddingRight: 20,
          paddingBottom: 0,
          paddingLeft: 20,
          marginTop: 0,
          marginRight: 0,
          marginLeft: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#ddd',
          fontSize: 18
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          marginTop: 10
        },
        description: {
          fontSize: 16
        },
        row: {
          height: 58
        }
      }}
    />
  );
}