import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import estilos from './estilo';

import ListTypes from './components/ListTypes';
import InformationTypes from './components/InformationTypes';
import Hash from './components/Hash';
import FEC from './components/FEC';
import LDDE from './components/LDDE';

const Tab = createBottomTabNavigator();

class MyTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Estruturas') {
              iconName = focused ? 'circle' : 'circle-outline';
            } else if (route.name === 'Informações') {
              iconName = focused ? 'comment-question' : 'comment-question-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F29849',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Estruturas" component={ListTypes} />
        <Tab.Screen name="Informações" component={InformationTypes} />
      </Tab.Navigator>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
    style={estilos.container}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            title: 'Lista de Estruturas',
            headerStyle: {
              backgroundColor: '#F2B749',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="FEC" component={FEC} 
        options={{
            title: 'Fila Estática Circular',
            headerStyle: {
              backgroundColor: '#F2B749',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="LDDE" component={LDDE} 
        options={{
            title: 'Lista Dinâmica Duplamente Encadeada',
            headerStyle: {
              backgroundColor: '#F2B749',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        <Stack.Screen name="Hash" component={Hash} 
        options={{
            title: 'Tabela Hash',
            headerStyle: {
              backgroundColor: '#F2B749',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
