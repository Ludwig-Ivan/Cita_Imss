import React from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import Item from './Lista';

export const Consulta = (props) => {

  const { vc, setVC, listpac, setListPac } = props

  return (
    <Modal animationType='slide' visible={vc} >
      <SafeAreaView style={styles.contenido}>
        <Text style={styles.Titulo}>Consulta{' '}
          <Text style={styles.TituloBold}>Citas</Text>
        </Text>

        <View style={styles.Form}>
          <Pressable style={styles.boton1} onPress={setVC}>
            <Text style={styles.centro}>
              Salir
            </Text>
          </Pressable>

          <FlatList style={styles.lista} data={listpac} renderItem={({ item }) => {
            return (
              <Item item={item} listpac={listpac} setListPac={setListPac} />
            )
          }}
          />

          <Pressable style={styles.boton1} onPress={() => { }}>
            <Text style={styles.centro}>
              Consultar
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({

  lista: {
    height: 350,
    width: '100%',
    backgroundColor: '#FBFADA',
  },

  item: {
    backgroundColor: '#FFA',
    height: 50,
    width: 240,
  },

  contenido: {
    backgroundColor: '#FBFADA',
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Form: {
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  boton1: {
    backgroundColor: '#436850',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: 200,
  },

  centro: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '900',
  },

  Titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#12372A',
  },

  TituloBold: {
    fontWeight: '900',
  },
});

