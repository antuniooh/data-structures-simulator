import React, {Component} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

class Cards extends Component{
  constructor(props){
    super(props);
  }
    render(){
        let { title, subtitle, text, image } = this.props;

        return(
           <View style = {styles.cards}
               onStartShouldSetResponder={this.props.clique}
            >
              <Image
                  source={require('../assets/ldde.png')}
                  style={styles.image}/>
              <Text style={styles.title}></Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
              <Text style={styles.text}> {text} </Text>
           </View>
        );
    }
}

const styles= StyleSheet.create({
  cards: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    flex: 1, 
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '10px',
  },
  image:{
    width: '100%',
    height: '30%',
  },
  title:{
    fontSize: '36px',
    color: '#070d59',
  },
  subtitle:{
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#ee6f57',
  },
  text:{
    fontSize: '15px',
    color: 'black',
  }
});

export default Cards;