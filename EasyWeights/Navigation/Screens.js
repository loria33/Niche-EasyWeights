
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

//App stack//
import Home from '../Components/Views/Home';
import Profile from '../Components/Views/Profile';
import AuthLoadingScreen from '../Components/Global/AuthLoadingScreen'
//Auth stack//
import Login from '../Components/Views/Login';

//Drawer//
import Drawer from '../Components/Global/Drawer';

import {Dimensions} from 'react-native';

const AppStack = createStackNavigator(
  {
    HomePage: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerShown: true
        };
      }
    },
    ProfilePage: {
      screen: Profile,
    },
  },
  {
    defaultNavigationOptions: {
     
     
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => {
        return {
          headerShown: true
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
    
    }
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: AppStack}
  },{
   
    drawerBackgroundColor:'ffffffD9',
    overlayColor:'#ffffffDD',
    drawerWidth:Dimensions.get('window').width * 0.7,
   
    contentComponent: Drawer,
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
export default createAppContainer(AppNavigator);