import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigationContainer } from '@react-naigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import StarMapScreen from "./screens/StarMap";
import SpaceCraftScreen from "./screens/SpaceCraft";
import DailyPicScreen from "./screens/DailyPic";
import Home from "./screens/Home"

 function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{
       headerShown:false
     }}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="StarMap" component={StarMapScreen} />
       <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
       <Stack.Screen name="DailyPic" component={DailyPicScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;