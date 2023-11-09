// AppNavigator.js

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccountScreen from './components/Authentication/CreateAccountScreen';
import LoginScreen from './components/Authentication/LoginScreen';
import TodoListScreen from './components/Todo/TodoListScreen';
 import SplashScreen from './components/Todo/SplashScreen';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="splash">
         <Stack.Screen name="splash" component={SplashScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={CreateAccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name="TodoList" component={TodoListScreen} options={{ headerShown: false }} /> 

      
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
