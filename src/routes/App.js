import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStacks from './appStacks';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      {AppStacks()}
    </NavigationContainer>
    </Provider>
  )
}

export default App;