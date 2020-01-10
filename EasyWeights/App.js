/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Screens from './Navigation/Screens';

export default class App extends React.Component {
    render() {
          return (
          <View style={{flex:1}}>
            <Screens />
          </View>
      );
    }
}
const styles = StyleSheet.create({
  
});

