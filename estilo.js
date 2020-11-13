import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#102559"
  },
  appButtonContainer:{
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  caixa:{
    height:40,
    borderColor:"blue",
    borderWidth: 2,
    fontSize: 18,
    width: 60
  },
  menuStyle: { 
  backgroundColor: 'green', 
  borderWidth: 1, 
  borderBottomColor: 'white' ,
  color:'red'
  },
  title:{
    color:'white',
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: '20px',
    textAlign:'center',
    margin: 10
  },
  rowStyle:{
    flexDirection:'row',
  },
  columnStyle:{
    flexDirection:'column',
  },

})

export default estilos;