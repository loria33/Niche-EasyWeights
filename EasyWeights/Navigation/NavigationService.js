// NavigationService.js

import { NavigationActions,StackActions,DrawerActions } from 'react-navigation';

let _navigator;
let _store = null;

function setTopLevelNavigator(navigatorRef,store) {
  _navigator = navigatorRef;
  _store = store;
}

function navigate(routeName, params) {
  _store.dispatch(setCurrentRoute(routeName));
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

const closeDrawer = () => {
  _navigator.dispatch(DrawerActions.toggleDrawer())
}


function navigateReset(routeName, params) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  navigateReset,
  closeDrawer,
};