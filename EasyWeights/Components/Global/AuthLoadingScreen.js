import React from 'react';
import * as AuthActions from '../../Actions/AuthActions';

import {
  StatusBar,
  Text,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = 1
    
    const isConnected = true;

    this.props.navigation.navigate(isConnected? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
       <Text>asasas</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen