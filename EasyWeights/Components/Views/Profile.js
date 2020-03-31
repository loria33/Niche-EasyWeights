import React from 'react';
import { StyleSheet, Dimensions, ScrollView,View,Text } from 'react-native';
const { width } = Dimensions.get('screen');

class Profile extends React.Component {
 

  render() {
    return (
      <View flex center style={styles.home}>
          <Text>Profile screen</Text>
          <Text>MyBar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
});

export default Profile;