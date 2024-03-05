import React from 'react'
import { Modal, Pressable, SafeAreaView, Text, StyleSheet, View } from 'react-native'

const InfoPaciente = (props) => {

  const { vi, setVI, item, formatFec } = props;
  const { id, paciente, propietario, email, fecha, sintomas } = item;

  return (
    <Modal visible={vi} >
      <SafeAreaView style={styles.contenido} >
        <Text style={styles.Titulo}>{paciente}</Text>
        <View style={styles.caja}>
          <Text style={styles.textos}>{propietario}</Text>
          <Text style={styles.textos}>{formatFec(fecha)}</Text>
          <Text style={styles.textos}>{email}</Text>
          <Text style={styles.textos}>{sintomas}</Text>
        </View>

        <Pressable onPress={setVI} style={styles.boton1}>
          <Text style={styles.centro}>
            Regresar
          </Text>
        </Pressable>
      </SafeAreaView>
    </Modal>

  )
}

export default InfoPaciente

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#FBFADA',
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
  },

  caja: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
    height: '60%',
    justifyContent: 'space-around',
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.65,
    elevation: 6,
  },

  boton1: {
    backgroundColor: '#436850',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: 200,
    alignSelf: 'center',
  },

  centro: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '900',
  },

  Titulo: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 30,
    color: '#12372A',
  },

  textos: {
    fontSize: 20,
    color: '#000',
  },

  TituloBold: {
    fontWeight: '900',
  },
});