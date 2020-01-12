/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import configurestore from './configurestore';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar } from 'react-native';
import Screens from './Navigation/Screens';

const store = configurestore();

export default class App extends React.Component {
    render() {
          return (
          <Provider store={store}>
              <View style={{flex:1}}>
                <Screens />
              </View>
          </Provider>
      );
    }
}
const styles = StyleSheet.create({
  
});

