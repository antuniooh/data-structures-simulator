import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102559',
  },
  caixa: {
    height: 40,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 8,
    textDecorationStyle: 'none',
    width: 60,
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
  },
  columnStyle: {
    flexDirection: 'column',
  },
});

export default estilos;
