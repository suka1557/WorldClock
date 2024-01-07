/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // Text,
  // useColorScheme,
  View,
} from 'react-native';

// import HomePageImage from './components/HomePageImage';
import HomePageMessage from './components/HomePageMessage';
import LocationPicker from './components/LocationPicker';
import { TimeGapContextProvider } from './context/TimeGapContext';
import AnalogClock2 from './components/Clock2';
import styles from './styling/styles';
function App(): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <TimeGapContextProvider>
      <AnalogClock2/>
      <LocationPicker />
      </TimeGapContextProvider>
      <HomePageMessage></HomePageMessage>
    </View>
  );
}



export default App;
