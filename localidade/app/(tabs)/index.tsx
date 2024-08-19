import { View, Image, StyleSheet, Platform } from 'react-native';

import Home from './home'
import { jsiConfigureProps } from 'react-native-reanimated/lib/typescript/reanimated2/core';
export default function HomeScreen() {
  return(
    <View style= {styles.container}></View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFF',
}});
