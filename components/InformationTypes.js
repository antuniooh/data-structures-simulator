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
            <Text style={estilos.textoCard}>
              Uma fila é uma estrutura de dados que admite remoção e inserção de
              novos elementos. Nesse caso em questão, ela é estática, ou seja,
              há uma predefinição do tamanho máximo. A fila estática circular,
              possui um arranjo no qual o sucessor de cada elemento está na
              próxima posição do arranjo e quando chega ao final (tamanho
              máximo), termina-se a fila. Basicamente é um vetor de valores, e
              esse vetor é representado na forma de um círculo. Além disso, essa
              estrutura contém duas variáveis de extrema importância para
              compreender a lógica. A primeira é a variável início e a segunda
              “final”. Elas têm nomes bem sugestivos quanto a suas funções, por
              exemplo, quando há uma nova inserção o final da fila é
              incrementado. E quando se atinge o limite máximo da fila o início
              e o fim apontam para o mesmo lugar, fazendo com que isso seja de
              fato uma fila circular.
            </Text>
            <Card.Divider />
            <Card.Image
              source={require('../assets/CIRCLE.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Construtor: Para iniciar a estrutura necessita-se de um vetor
              vazio, o tamanho máximo e as variáveis “início” e “final” iguais a
              zero. Assim como mostra a implementação abaixo.
            </Text>
            <Card.Image
              source={require('../assets/contrutor_FEC.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Inserir: Como já foi dito anteriormente a inserção encadeia os
              valores, o novo valor é posto na posição depois do atual. Além
              disso, a variável “final” é agora incrementada, pois o fim da fila
              é outro.
            </Text>
            <Card.Image
              source={require('../assets/insert_FEC.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              No código acima há a implementação da inserção na fila estática
              circular. Primeiro recebe-se o valor que se deseja inserir e
              confere se é possível inserir, isso é feito no primeiro “if”, para
              validar se o a fila não está completamente cheia. Caso não esteja,
              o novo valor é inserido no atual índice da variável “final” e logo
              após a mesma é incrementada
            </Text>

            <Text style={estilos.textoCard}>
              Remover: A remoção apenas remove o último valor da fila e
              incrementa a variável início, diminuindo assim a fila.
            </Text>
            <Card.Image
              source={require('../assets/remove_FEC.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              No código acima há a implementação da remoção na fila estática
              circular. Primeiro confere se é possível remover, isso é feito no
              primeiro “if”, para validar se a fila não está completamente
              vazia. Caso não esteja, o valor é removido da fila e a variável
              “início” é incrementada. Nesse código há uma variável no parâmetro
              da função, essa variável recebe o último valor da fila, antes dela
              ser removida. O intuito é poder printar de forma dinâmica o que
              foi removido do vetor
            </Text>

            <Text style={estilos.textoCard}>
              Pesquisa: A pesquisa itera toda a fila até encontrar o valor
              correto, caso tenha sucesso enviará “true”, caso contrário,
              “false”.
            </Text>
            <Card.Image
              source={require('../assets/search_FEC.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              No código acima há a implementação da pesquisa na fila estática
              circular. Itera-se todo o vetor de elementos da fila, retornando o
              resultado da pesquisa.
            </Text>
            <Text style={estilos.textoCard}>
              Limpar: Para limpar a estrutura basta remover todos os valores da
              fila e fazer o início ser igual ao “final” da fila.
            </Text>
            <Card.Image
              source={require('../assets/clear_FEC.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              No código acima há a implementação da limpeza na fila estática
              circular. Remove-se todos os elementos do vetor e faz as variáveis
              “início” e “final” serem iguais.
            </Text>
          </Card>

          <Card containerStyle={estilos.card}>
            <Card.Title style={estilos.titleCard}>
              Lista Dinâmica Duplamente Encadeada
            </Card.Title>
            <Text style={estilos.textoCard}>
              A lista dinâmica duplamente encadeada é uma lista em que cada nó
              possui uma ligação ao nó anterior, ao próximo, um valor. Além
              disso, a estrtura conta com 2 ponteiros “início” e “fim” mostrando
              o início e fim da lista. Na implementação utilizada no projeto foi
              implementado uma LDDE ordenada, um ponto negativo desta estrutura
              é que a busca nela é linear, ou seja, para encontrarmos um valor,
              devemos percorrer toda a lista nó por nó até encontrarmos o valor
              desejado.
            </Text>
            <Card.Divider />
            <Card.Image
              source={require('../assets/home-ldde.png')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Construtor: Para iniciar a estrutura necessita-se iniciarmos o
              “first” e “last” da lista como null, pois a lista inicia vazia.
              Definimos também seu tamanho como 0.
            </Text>
            <Card.Image
              source={require('../assets/contrutor_LDDE.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Node: Para podermos utilizar a ldde criamos um nó que possuirá um
              valor, ponteiro para o nó anterior e um ponteiro para o próximo
              nó.
            </Text>
            <Card.Image
              source={require('../assets/node_LDDE.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Inserir: Para inserir um valor, criamos um novo nó e iteramos na
              LDDE, por meio dos ponteiros “ptrAnt” e “ptrAtual”, até encontrar
              a posição em que este novo nó deve ser inserido, respeitando a
              ordenação crescente dos valores. Além disso, o size é incrementado
            </Text>
            <Card.Image
              source={require('../assets/insert_LDDE.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Remover: Para remover um nó pelo valor, nós devemos primeiro
              iterar sobre a LDDE até encontrar o nó a ser removido, quando ele
              é encontrado, devemos alterar seus ponteiros anterior e posterior
              conectando os seus nós vizinhos um ao outros, para que assim não
              seja perdida a referência ao resto da lista. Além disso, o size é
              decrementado.
            </Text>
            <Card.Image
              source={require('../assets/remove_LDDE.png')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Remover: Função responsável por limpar a LDDE, isto é feito
              definido o “início” e o “fim” da lista como null, deste modo a
              lista se torna vazia, pois não temos mais nó algum no início da
              lista.
            </Text>
            <Card.Image
              source={require('../assets/clear_LDDE.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Pesquisar: Função responsável por iterar na lista da LDDE
              procurando pelo valor dado, esta função retorna “true” se o valor
              for encontrado e “false” caso ele não tenha sido encontrado.
            </Text>
            <Card.Image
              source={require('../assets/search_LDDE.jpeg')}
              style={estilos.image}
            />
          </Card>

          <Card containerStyle={estilos.card}>
            <Card.Title style={estilos.titleCard}>Tabela Hash</Card.Title>
            <Text style={estilos.textoCard}>
              A tabela hash é uma estrutura de dados em que é mapeado uma chave
              para um valor, esta estrutura foi desenvolvida para ser rápida,
              possuindo inserção e remoção e busca em O(1), em que dado uma
              chave é feito o hash desta chave, para assim obter a posição para
              a inserção do valor na tabela hash, contudo apesar desta estrutura
              possuir grande rapidez, ela também possui um grande problema, em
              que dependendo do modo que a hash da chave é feita, isto pode
              causar colisões, isto é mais de 1 chave pode ser mapeada para
              ocupar a mesma posição na hash table.
            </Text>
            <Card.Divider />
            <Card.Image
              source={require('../assets/home_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Hash: Como já foi dito anteriormente, é necessário fazer o hash da
              chave dada pelo usuário para assim definir a posição em que o
              valor será armazenado, esta função pode ser implementada de
              diversas formas, uma das formas seria o resto da divisão da chave
              dada pelo usuário pelo tamanho total da hash.
            </Text>
            <Card.Image
              source={require('../assets/hash_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Inserir: Esta função é responsável por mapear um valor a uma
              determinada chave, utilizando a função hash anteriormente
              explicada para obter a posição de inserção do valor, se o número
              de elementos inseridos na tabela hash ultrapassar sua capacidade é
              chamada a função resize dobrando sua capacidade de armazenamento.
            </Text>
            <Card.Image
              source={require('../assets/insert_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Redimensionar: Esta função é responsável por dobra a capacidade da
              tabela hash, caso o número de elementos inseridos ultrapasse a sua
              capacidade atual, deste modo ela se torna dinâmica podendo ser
              inseridos quantos valores o usuário quiser.
            </Text>
            <Card.Image
              source={require('../assets/resize_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Remover: Esta função é responsável por remover um item do vetor
              pela sua chave, é feito a hash desta chave para obter a posição do
              elemento, se este elemento existir ele é removido.
            </Text>
            <Card.Image
              source={require('../assets/remove_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Pesquisar: Esta função é responsável por buscar o valor de uma
              chave especifica dada perlo usuário, para isto é feita a hash da
              chave, assim obtendo sua posição no vetor e é retornado se ele
              possuiu sucesso ao encontrar a chave.
            </Text>
            <Card.Image
              source={require('../assets/search_HASH.jpeg')}
              style={estilos.image}
            />
            <Text style={estilos.textoCard}>
              Limpar: Esta função é responsável por limpar toda a hash table.
              Para isso, atribui-se um vetor vazio para o vetor “_storage”,
              limpando assim a estrutura.
            </Text>
            <Card.Image
              source={require('../assets/clear_HASH.jpeg')}
              style={estilos.image}
            />
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
