import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const width = Dimensions.get('window').width;
const displayH = width.height;

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102559',
    padding:10
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    padding:50,
  },
});

export default CustomButton;
