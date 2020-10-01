import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile120291Navigator from '../features/UserProfile120291/navigator';
import Maps120272Navigator from '../features/Maps120272/navigator';
import Settings120250Navigator from '../features/Settings120250/navigator';
import Settings120235Navigator from '../features/Settings120235/navigator';
import NotificationList120234Navigator from '../features/NotificationList120234/navigator';
import Maps120233Navigator from '../features/Maps120233/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile120291: { screen: UserProfile120291Navigator },
Maps120272: { screen: Maps120272Navigator },
Settings120250: { screen: Settings120250Navigator },
Settings120235: { screen: Settings120235Navigator },
NotificationList120234: { screen: NotificationList120234Navigator },
Maps120233: { screen: Maps120233Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
