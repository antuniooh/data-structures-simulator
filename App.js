import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import estilos from './estilo';
import ListTypes from './components/ListTypes';
import Hash from './components/Hash';
import FEC from './components/FEC';
import LDDE from './components/LDDE';

const Tab = createBottomTabNavigator();

class MyTabs extends React.Component{
  render(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Estruturas" component={ListTypes}
            options={{
            tabBarLabel:"FEC",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "circle" color={"gray"} size={size}/>
            )
          }}
          />
            <Tab.Screen name="Informações" component={FEC} 
            options={{
            tabBarLabel:"FEC",
            tabBarIcon: ({cor, size}) => (
              <MaterialCommunityIcons name = "circle" color={"gray"} size={size}/>
            )
          }}
          />
        </Tab.Navigator>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MyTabs} />
                <Stack.Screen name="FEC" component={FEC} />
                <Stack.Screen name="LDDE" component={LDDE} />
                <Stack.Screen name="Hash" component={Hash} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
