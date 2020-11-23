import React, { useState } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import BotaoHome from './CustomButtonHome';
import estilos from '../estilo';

export default class InformationTypes extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Card containerStyle={estilos.card}>
            <Card.Title style={estilos.titleCard}>
              Fila Estática Circular
            </Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/home-circle.png')} />
            <Text style={estilos.textoCard}>
              Um buffer circular, fila circular, buffer cíclico ou buffer de
              anel é uma estrutura de dados que usa um único buffer de tamanho
              fixo como se estivesse conectado de ponta a ponta. Essa estrutura
              se presta facilmente ao buffer de fluxos de dados . Assim, um
              algoritmo de leitura que leia a última posição do buffer e
              necessite continuar lendo irá retornar ao início do buffer e
              proceder a leitura a partir daí. O mesmo vale para algoritmos de
              escrita, sendo que a escrita numa posição não-vazia provoca a
              perda do conteúdo original.
            </Text>
          </Card>

           <Card containerStyle={estilos.card}>

            <Card.Title style={estilos.titleCard}>
              Lista Dinâmica Duplamente Encadeada
            </Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/home-ldde.png')} />
            <Text style={estilos.textoCard}>
              {' '}
              Em ciência da computação, uma lista duplamente ligada (ou lista
              duplamente encadeada) é uma estrutura de dados ligada que consiste
              de um conjunto de registros sequencialmente ligados chamados de
              nós e é uma extensão da lista simplesmente ligada (ou lista
              simplesmente encadeada). Cada nó contem dois campos, chamados de
              links ou enlaces, que são referências para o nó anterior e para o
              nó posterior na sequência de nós. Os links anteriores e
              posteriores dos nós inicial e final, respectivamente, apontam para
              algum tipo de terminador, tipicamente um nó sentinela ou nulo,
              para facilitar o percorrimento da lista. Se houver apenas um nó
              sentinela, a lista será vinculada circularmente através do nó
              sentinela. Ele pode ser conceituado como duas listas unicamente
              vinculadas formadas a partir dos mesmos itens de dados, mas em
              ordens sequenciais opostas.
            </Text>
          </Card>

          <Card containerStyle={estilos.card}>

            <Card.Title style={estilos.titleCard}>Tabela Hash</Card.Title>
            <Card.Divider />
            <Card.Image source={require('../assets/home-hash.png')} />
            <Text style={estilos.textoCard}>
              {' '}
              Em ciência da computação, uma tabela de dispersão (também
              conhecida por tabela de espalhamento ou tabela hash, do inglês
              hash) é uma estrutura de dados especial, que associa chaves de
              pesquisa a valores. Seu objetivo é, a partir de uma chave simples,
              fazer uma busca rápida e obter o valor desejado. É algumas vezes
              traduzida como tabela de escrutínio.
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
