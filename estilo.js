import { StyleSheet, StatusBar } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#150940',
  },
  caixa: {
    margin: 15,
    height: 40,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 8,
    textDecorationStyle: 'none',
    width: 315,
    border: 'none',
    outline: 'none',
  },
  menuStyle: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderBottomColor: 'white',
    color: 'red',
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    padding:10
  },
  columnStyle: {
    flexDirection: 'column',
  },
  botao: {
    backgroundColor: '#F2B749',
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    marginRight:5
  },
  texto: {
    color: 'white',
    fontSize: 15,
  },
  containerHome: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#150940',
    alignItems: 'center',
  },
  botaoHome: {
    backgroundColor: '#F2B749',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 100,
    padding: 15,
    marginBottom:15
  },
  textoHome: {
    textAlign:'center',
    color: 'white',
    fontSize: 20,
    fontWeight:"bold",
  },
  titleCards:{
    fontSize: '36px',
    color: '#150940',
  },
});

export default estilos;
