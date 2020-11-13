import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import ListTypes from './AboutTypes';

const List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      >
        <ListTypes> </ListTypes>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#102559'
  },
});

export default List;