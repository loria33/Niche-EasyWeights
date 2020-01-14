import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity,View,Text } from 'react-native';
import NavigationService from '../../Navigation/NavigationService'
import {useActions} from 'react-redux';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
 
  constructor() {
    super();
    
    this.gotoPayments = this.gotoPayments.bind(this);

  }

  gotoPayments = () => {
    this.props.navigation.navigate('Payments');
  }
  render(){
    return (
      <View style={styles.home}>
          <Text>Home screen</Text>
          <TouchableOpacity onPress={() => this.gotoPayments()}>
               <Text>Go to Payments</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
    flex:1
  },
});

export default Home;