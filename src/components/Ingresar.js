import React, { useState } from 'react'
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker';

export const Ingresar = (prop: { vi: boolean, setVI: () => void }) => {
  const [pac, setPac] = useState('');
  const [pro, setPro] = useState('');

  return (
    <Modal animationType='slide' visible={prop.vi} >
      <ScrollView>
        <SafeAreaView style={styles.contenido}>
          <Text style={styles.Titulo}>Ingresa a{' '}
            <Text style={styles.TituloBold}>Citas</Text>
          </Text>

          <View style={styles.Form}>
            <Pressable style={styles.boton2} onLongPress={prop.setVI}>
              <Text style={styles.centro}>
                Salir
              </Text>
            </Pressable>
            <View>
              <Text style={styles.label1}> Nombre del Propietario: </Text>
              <TextInput style={styles.input} placeholder='Nombre Propietario' placeholderTextColor={'#666'} onChangeText={setPro} value={pro} />
            </View>
            <View>
              <Text style={styles.label1}> Paciente: </Text>
              <TextInput style={styles.input} placeholder='Nombre paciente' placeholderTextColor={'#666'} onChangeText={setPac} value={pac} />
            </View>
            <Pressable style={styles.boton1} onLongPress={() => {}}>
            <Text style={styles.centro}>
              Consultar
            </Text>
          </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  picker: {
    marginTop: 20,
  },

  contenido: {
    backgroundColor: '#FBFADA',
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 615,
  },

  Form: {
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '80%',
  },

  label1: {
    fontSize: 20,
    paddingBottom: 3,
  },

  boton1: {
    backgroundColor: '#436850',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    width: 200,
  },

  boton2: {
    backgroundColor: '#436850',
    padding: 10,
    borderRadius: 10,
    width: 200,
  },

  centro: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '900',
  },

  input: {
    backgroundColor: '#FFF',
    fontSize: 15,
    borderRadius: 5,
    paddingVertical: 8,
    width: 280,
    textAlign: 'center',
    borderColor: '#436850DD',
    borderWidth: 2,
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
