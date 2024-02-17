import React, { useState } from 'react'
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-picker';

export const Formulario = (prop: { vm: boolean, setVM: () => void }) => {
  const [pac, setPac] = useState('');
  const [pro, setPro] = useState('');
  const [email, setEmail] = useState('');
  const [fec, setFec] = useState(new Date());
  const [sin, setSin] = useState('');

  return (
    <Modal animationType='slide' visible={prop.vm}>
      <ScrollView>
        <SafeAreaView style={styles.contenido}>
          <Text style={styles.Titulo}>Nueva {' '}
            <Text style={styles.TituloBold}>Cita</Text>
          </Text>

          <View style={styles.Form}>
            <Pressable style={styles.boton2} onLongPress={prop.setVM}>
              <Text style={styles.centro}>
                Cancelar
              </Text>
            </Pressable>
            <View>
              <Text style={styles.label1}> Nombre del Paciente: </Text>
              <TextInput style={styles.input} placeholder='Nombre del Paciente' placeholderTextColor={'#666'} onChangeText={setPac} value={pac} />
            </View>
            <View>
              <Text style={styles.label1}> Nombre del Propietario: </Text>
              <TextInput style={styles.input} placeholder='Nombre Propietario' placeholderTextColor={'#666'} onChangeText={setPro} value={pro} />
            </View>
            <View>
              <Text style={styles.label1}> Email Propietario: </Text>
              <TextInput style={styles.input} keyboardType='email-address' placeholder='Email Propietario' placeholderTextColor={'#666'} onChangeText={setEmail} value={email} />
            </View>
            <View>
              <Text style={styles.label1}> Fecha Alta </Text>
              <DatePicker style={styles.picker} mode='date' androidVariant='nativeAndroid' date={fec} locale='es' onDateChange={() => { }} />
            </View>
            <View>
              <Text style={styles.label1}> Sintomas: </Text>
              <TextInput style={styles.input} placeholder='Sintomas' placeholderTextColor={'#666'} multiline numberOfLines={4} onChangeText={setSin} value={sin} />
            </View>
          </View>

          <Pressable style={styles.boton1} onLongPress={() => console.log('eso')}>
            <Text style={styles.centro}>
              Registrar
            </Text>
          </Pressable>

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
    backgroundColor: '#C7C8CC',
    display: "flex",
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  Form: {
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 800,
  },

  label1: {
    fontSize: 20,
    paddingBottom: 3,
  },

  boton1: {
    backgroundColor: '#0004',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    width: 200,
  },

  boton2: {
    backgroundColor: '#0004',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: 200,
  },

  centro: {
    textAlign: 'center',
    fontSize: 20,
  },

  input: {
    backgroundColor: '#FFF',
    fontSize: 15,
    borderRadius: 5,
    paddingVertical: 8,
    width: 280,
    textAlign: 'center',
  },

  Titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },

  TituloBold: {
    fontWeight: '900',
  },
});

