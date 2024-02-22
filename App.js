import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native';
import { Formulario } from './src/components/Formulario';
import { Consulta } from './src/components/Ingresar';

const App = () => {

  const [vm, setVM] = useState(false);
  const [vi, setVI] = useState(false);

  const regreso = () => {
    setVM(false);
  }

  const atras = () => {
    setVI(false);
  }

  return (
    <SafeAreaView style={styles.Centro}>

      <Text style={styles.Title}>
        Citas {'\n'}
        <Text style={styles.Subtitle}>IMSS</Text>
      </Text>

      <Image style={styles.imglogo} source={require('./src/img/imss-logo.png')}></Image>

      <View style={styles.Botones}>
        <Pressable style={styles.boton1} onPress={() => setVM(true)}>
          <Text style={styles.centro}>
            Registrate
          </Text>
        </Pressable>

        <Pressable style={styles.boton2} onPress={() => setVI(true)}>
          <Text style={styles.centro}>
            Consulta
          </Text>
        </Pressable>
      </View>

      <Formulario vm={vm} setVM={regreso} />
      <Consulta vi={vi} setVI={atras} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imglogo: {
    width: 200,
    height: 200,
  },

  centro: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '900',
  },

  boton1: {
    backgroundColor: '#436850',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    width: 200,
  },

  boton2: {
    backgroundColor: '#436850',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    width: 200,
  },

  Centro: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-around',
    backgroundColor: '#FBFADA',
  },

  Title: {
    fontSize: 50,
    textAlign: 'center',
    color: '#12372A',
  },

  Subtitle: {
    fontSize: 60,
    fontWeight: '900',
  },

  Botones: {
    height: 200,
    justifyContent: 'space-around',
  }
});

export default App
