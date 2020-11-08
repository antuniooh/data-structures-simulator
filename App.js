import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListTypes from "./components/AboutTypes";
import Login from "./components/LDDE";
import Cadastro from "./components/FEC";
import List from "./components/a";

import estilos from './estilo';

const Stack = createBottomTabNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LDDE" component={Login}
          options={{
            tabBarLabel:"LDDE",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "home" color={cor} size={size}/>
            )
          }}
          />
          <Stack.Screen name="FEC" component={Cadastro}
           options={{
            tabBarLabel:"FEC",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "account-details" color={cor} size={size}/>
            )
          }}
          />
          <Stack.Screen name="About" component={List}
           options={{
            tabBarLabel:"Cadastro",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "account-details" color={cor} size={size}/>
            )
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
