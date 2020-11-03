import React, {Component} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
           <View style = {styles.header}>
            <Image
                  source={require('../assets/logo.png')}
                  style={styles.image}
                  />           
            </View>
        );
    }
}
const styles= StyleSheet.create({
  header: {
    height:'15%',
    width:'100%',
    alignItems: 'center',
    backgroundColor: '#070d59',
    justifyContent: 'center',
  },
  image:{
    height:'36px',
    width:'36px'
  }
});
