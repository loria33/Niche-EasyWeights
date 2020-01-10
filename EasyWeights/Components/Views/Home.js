import React from 'react';
import { StyleSheet, Dimensions, ScrollView,View,Text } from 'react-native';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
 

  render(){
    return (
      <View style={styles.home}>
          <Text>Home screen</Text>
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