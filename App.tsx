import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { Pressable } from 'react-native';
import { Formulario } from './src/components/Formulario';

const App = () => {

  const [vm, setVM] = useState(false);

  const regreso = () => {
    setVM(false);
  }

  return (
    <SafeAreaView style={styles.Centro}>

      <Text style={styles.Title}>
        Citas {'\n'}
        <Text style={styles.Subtitle}>IMSS</Text>
      </Text>

      <View style={styles.Botones}>
        <Pressable style={styles.boton1} onPress={() => setVM(true)}>
          <Text style={styles.centro}>
            Registrate
          </Text>
        </Pressable>

        <Pressable style={styles.boton2} onPress={() => { }}>
          <Text style={styles.centro}>
            Ingresa
          </Text>
        </Pressable>
      </View>

      <Formulario vm={vm} setVM={regreso} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centro: {
    textAlign: 'center',
    fontSize: 20,
  },

  boton1: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    width: 200,
  },

  boton2: {
    backgroundColor: 'green',
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
    backgroundColor: '#E3E1D9',
  },

  Title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 30,
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
