import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React, useState, useEffect } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {

  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect( () =>{
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          showSplashScreen ? <Stack.Screen name="Splash Screen" component={SplashScreen} options={{ headerShown: false }} />
          :null
        }
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
