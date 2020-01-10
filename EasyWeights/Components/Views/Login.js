import React from 'react';

import { StyleSheet, Dimensions, ScrollView,View,Text } from 'react-native';
const { width } = Dimensions.get('screen');

class Login extends React.Component {
 
  render() {
    return (
        
          <Text style={{fontSize:100,color:'black'}}>Login screen</Text>
      
    );
  }
}

const styles = StyleSheet.create({
  home: {
   
  },
});

export default Login;