import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home2 from './src/Home2';
import Login from './src/Login';
import SignUp from './src/SignUp';

const Stack = createNativeStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{ headerShown: false}}
            initialRouteName='Home2'
            >
                <Stack.Screen name='Home2' component={Home2}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;