

'use strict'
import React, { Component } from 'react';
import {useActions} from 'react-redux';
import { Alert, Image, TouchableOpacity, Text, View, ScrollView, Animated, ActivityIndicator } from 'react-native';
import NavigationService from '../../Navigation/NavigationService';
import { NavigationActions, withNavigation, SafeAreaView } from 'react-navigation';
import { bindActionCreators } from 'redux';
//usage 




class Drawer extends Component {
  constructor(props, context) {
    super(props, context);

  }

  navigateToScreen = (route) => () => {


    const { navigate } = this.props.navigation;
    let aa = withNavigation;

    if (this.props.navigation.state.routeName == 'HomePage') {
     // console.log('this.props.navigation.state.routeName ' + this.props.navigation.state.routeName)

    }
    else {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }

  }

  closeDrawer() {
    this.props.navigation.closeDrawer();
  }
 
  componentDidMount() {

  }




  render() {
   
    const { navigate } = this.props.navigation;
   
    return (
      <SafeAreaView style={styles.SafeAreaView} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView style={{marginTop:20}}>
            <Text>sdsdsdsd</Text>
            
        </ScrollView>
      </SafeAreaView>
    );

  }
}

const styles = {
  SafeAreaView: {
    backgroundColor: '#ffffffD9',
    flex: 1
  },
 
}


//mapDispatchToProps is deleted and dispatch is there by default
export default Drawer;

Drawer.defaultProps = {
  iconSize: 20,
};