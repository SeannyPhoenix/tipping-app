import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/AppHeader';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack(props){
  return(
    <Container>
      <AppHeader {...props}/>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </Container>
  )
}