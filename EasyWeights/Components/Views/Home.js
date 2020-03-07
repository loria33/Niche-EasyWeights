import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity,View,Text,Image } from 'react-native';
import NavigationService from '../../Navigation/NavigationService'
import {useActions} from 'react-redux';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
 
  constructor() {
    super();
    this.gotoPayments = this.gotoPayments.bind(this);
  }
  
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle:'Easy Weights',
    
    headerStyle: {
        backgroundColor: '#00adee',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height:60,
      },
    headerLeft: () =>
      
      <TouchableOpacity style={{ paddingLeft: 20,marginBottom:5}} onPress={() => navigation.openDrawer()}>
            <Image style={{  width:25,height:25}} source={require('../../Assets/Icons/menu-icon.png')} />
        </TouchableOpacity>
    
  });

  gotoPayments = () => {
    this.props.navigation.navigate('Payments');
  }
  render(){
    return (
      <View style={styles.home}>
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