
import { createAppContainer } from "react-navigation";
import { createStackNavigator,TransitionPresets } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

//App stack//
import Home from '../Components/Views/Home';
import Profile from '../Components/Views/Profile';

//Auth stack//
import Login from '../Components/Views/Login';

//Drawer//
import drawer from '../components/comGdrawer';

import {Dimensions} from 'react-native';

const AppStack = createStackNavigator(
  {
    HomePage: {
      screen: Home,
    },
    ProfilePage: {
      screen: Profile,
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
     
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {screen: AppStack}
  },{
   
    drawerBackgroundColor:'ffffffD9',
    overlayColor:'#ffffffDD',
    drawerWidth:Dimensions.get('window').width * 0.7,
   
    contentComponent: drawer,
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: RootControllerView,
    AppStack: AppDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
export default createAppContainer(AppNavigator);