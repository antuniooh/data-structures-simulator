import React, {Component} from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

class Cards extends Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
           <View style = {styles.cards}
               onStartShouldSetResponder={this.props.clique}
            >
              <Image
                  source={this.props.image}
                  style={styles.image}/>
              <Text style={styles.title}> {this.props.title}</Text>
              <Text style={styles.subtitle}>{this.props.subtitle}</Text>
              <Text style={styles.text}>{this.props.text}</Text>
           </View>
        );
    }
}

const styles= StyleSheet.create({
  cards: {
    flex: 1, 
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '10px',
    margin:'auto'

  },
  image:{
    width: '100%',
    height: '30%',
  },
  title:{
    fontSize: 40,
    color: '#070d59',
    textAlign:'center'
  },
  subtitle:{
    fontWeight: 'bold',
    marginTop:5,
    fontSize: 20,
    textAlign:'center',
    color: '#ee6f57',
  },
  text:{
    fontSize: 15,
    color: 'black',
    margin: 5
  }
});


export default Cards;