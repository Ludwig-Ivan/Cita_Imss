import React, { useState } from 'react'
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker';

export const Editar = (props) => {

  const { vm, setVM, listpac, setListPac, item } = props
  const [id, setId] = useState(item.id)
  const [pac, setPac] = useState(item.paciente);
  const [pro, setPro] = useState(item.propietario);
  const [email, setEmail] = useState(item.email);
  const [fec, setFec] = useState(item.fecha);
  const [sin, setSin] = useState(item.sintomas);

  const Paciente = {
    id: id,
    paciente: pac,
    propietario: pro,
    email: email,
    fecha: fec,
    sintomas: sin,
  };

  const Vaciar = () => {
    setId(new Date)
    setPac('')
    setPro('')
    setEmail('')
    setFec(new Date)
    setSin('')
    setVM()
  };

  return (
    <Modal animationType='slide' visible={vm}>
      <ScrollView>
        <SafeAreaView style={styles.contenido}>
          <Text style={styles.Titulo}>Editar {' '}
            <Text style={styles.TituloBold}>Cita</Text>
          </Text>

          <View style={styles.Form}>
            <Pressable style={styles.boton2} onPress={setVM}>
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
              <DatePicker style={styles.picker} mode='date' androidVariant='nativeAndroid' date={fec} locale='es' onDateChange={setFec} />
            </View>
            <View>
              <Text style={styles.label1}> Sintomas: </Text>
              <TextInput style={styles.input} placeholder='Sintomas' placeholderTextColor={'#666'} multiline numberOfLines={4} onChangeText={setSin} value={sin} />
            </View>
          </View>

          <Pressable style={styles.boton1} onPress={() => {
            if (pac, pro, email, sin == '') {
              Alert.alert(
                '',
                'No dejes campos vacios...'
              )
              return
            }

            listpac.splice(listpac.indexOf(item), 1, Paciente)
            setListPac([...listpac]);
            Alert.alert(
              '',
              'CITA REGISTRADA'
            )
            Vaciar()
          }}>
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
    backgroundColor: '#FBFADA',
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
    backgroundColor: '#436850',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10,
    width: 200,
  },

  boton2: {
    backgroundColor: '#436850',
    padding: 10,
    margin: 5,
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

