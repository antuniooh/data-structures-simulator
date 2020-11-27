import { StyleSheet, StatusBar } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070082',
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
    padding: 10,
  },
  caixaHash: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 5,
    height: 40,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 8,
    textDecorationStyle: 'none',
    width: 150,
    border: 'none',
    outline: 'none',
    padding: 10,
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
    padding: 10,
  },
  columnStyle: {
    flexDirection: 'column',
  },
  botao: {
    backgroundColor: '#01837D',
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    marginRight: 5,
  },
  texto: {
    color: 'white',
    fontSize: 15,
  },
  titleCard: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Roboto',
  },
  textoCard: {
    color: 'black',
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 0,
  },
  containerHome: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 5,
  },
  botaoHome: {
    flexDirection: 'row',
    backgroundColor: '#01837D',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 120,
    padding: 15,
    marginBottom: 15,
  },
  textoHome: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    width: '45%',
  },
  titleCards: {
    fontSize: '36px',
    color: '#150940',
  },
  image: {
   flex: 1,
    width: "100%",
    resizeMode: 'contain'
     }
});

export default estilos;
