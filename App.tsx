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
import styles from './styling/styles';

function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <HomePageImage ></HomePageImage>
      <View style={{flex: 0.2}} />
      <HomePageMessage></HomePageMessage>
    </View>
  );
}



export default App;
