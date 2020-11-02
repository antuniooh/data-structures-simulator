import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView} from 'react-native';

import Header from "./components/Header";
import ListTypes from "./components/ListTypes";

export default  class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Header/>
        <ListTypes/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:'1',
    }
});

