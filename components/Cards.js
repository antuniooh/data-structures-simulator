import React, {Component} from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let scale = width / height;


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
    width: '100%',
    height: '100%',
    alignItems: "center",
    flex: 1, 
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '10px',
    margin:'auto'

  },
  image:{
    width: '100%',
    height: '50%',
  },
  title:{
    fontSize: (20 + (26 - 14) * ((width - 300) / (1600 - 300))),
    color: '#070d59',
  },
  subtitle:{
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop:5*scale,
    fontSize: (15 + (26 - 14) * ((width - 300) / (1600 - 300))),
    color: '#ee6f57',
    marginLeft: 5*scale

  },
  text:{
    fontSize: (10 + (26 - 14) * ((width - 300) / (1600 - 300))),
    color: 'black',
    margin: 5*scale
  }
});


export default Cards;