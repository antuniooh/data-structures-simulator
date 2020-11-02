import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Botao extends Component{
    render(){
        return(
            <input
                style={{backgroundColor:"blue",
                width:40, fontSize:'18pt',
                color:"white"}}

                type="button"
                value={this.props.children}
                onClick={this.props.clique}
                >
            </input>
        );
    }
}

export default Botao;