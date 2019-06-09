// App.js
import { createStackNavigator, createAppContainer } from "react-navigation";
import { 
    HomeScreen,
    Another 
} from './screens'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Another: {
      screen: Another
    }
});
  
export default createAppContainer(AppNavigator);