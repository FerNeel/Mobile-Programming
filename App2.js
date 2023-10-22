import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Notif from './Screens/Notif';
import Penjumlahan from './Screens/Penjumlahan';
import Perkalian from './Screens/Perkalian';
import Pengurangan from './Screens/Pengurangan';
import Pembagian from './Screens/Pembagian';
import Home2 from './src/Home2';

const Drawer = createDrawerNavigator();

export default function App2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"> 
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notif" component={Notif} /> 
        <Drawer.Screen name="Penjumlahan" component={Penjumlahan} /> 
        <Drawer.Screen name="Pengurangan" component={Pengurangan} /> 
        <Drawer.Screen name="Perkalian" component={Perkalian} /> 
        <Drawer.Screen name="Pembagian" component={Pembagian} /> 
        <Drawer.Screen name="Home2" component={Home2} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}