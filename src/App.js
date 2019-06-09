// App.js
import { createStackNavigator, createAppContainer } from "react-navigation";
import { appRoute } from './route'

const AppNavigator = createStackNavigator(appRoute, { initialRouteName: 'Home', headerMode: 'none' });
  
export default createAppContainer(AppNavigator);