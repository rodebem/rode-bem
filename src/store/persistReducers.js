import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'rodebem-app',
      storage: AsyncStorage,
      whitelist: ['auth', 'map'],
    },
    reducers,
  );

  return persistedReducer;
};
