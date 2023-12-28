/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomePageImage from './components/HomePageImage';
import HomePageMessage from './components/HomePageMessage';

function App(): React.JSX.Element {
  return (
    <View>
      <HomePageImage ></HomePageImage>
      <HomePageMessage></HomePageMessage>
    </View>
  );
}



export default App;
