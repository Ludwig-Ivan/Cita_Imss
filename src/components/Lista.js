import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Editar } from './Editar'
import InfoPaciente from './InfoPaciente'

export default Item = (props) => {
    const { item, listpac, setListPac } = props;
    const { id, paciente, propietario, email, fecha, sintomas } = item;
    const [vm, setVM] = useState(false);
    const [vi, setVI] = useState(false);

    Borrar = () => {
        listpac.splice(listpac.indexOf(item), 1)
        setListPac([...listpac]);
    };

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return nuevaFecha.toLocaleDateString('es-ES', opciones)
    };

    return (
        <View style={style.item} >
            <Pressable onLongPress={() => { setVI(true) }}>
                <Text style={style.pac_pro}>
                    {paciente + '\n' + propietario}
                </Text>
                <Text style={style.email_fec}>
                    {email + '\n' + formatearFecha(fecha)}
                </Text>
                <Text>
                    {sintomas}
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Pressable style={style.boton2} onPress={() => { setVM(true) }}>
                        <Text style={style.centro}>
                            Editar
                        </Text>
                    </Pressable>
                    <Pressable style={style.boton2} onPress={Borrar}>
                        <Text style={style.centro}>
                            Eliminar
                        </Text>
                    </Pressable>
                </View>
            </Pressable>
            <Editar vm={vm} setVM={() => { setVM(false) }} listpac={listpac} setListPac={setListPac} item={item} />
            <InfoPaciente vi={vi} setVI={() => { setVI(false) }} item={item} formatFec={formatearFecha} />
        </View>
    )
};

const style = StyleSheet.create(
    {
        centro: {
            textAlign: 'center',
            fontSize: 18,
            color: '#FFF',
            fontWeight: '900',
        },

        boton2: {
            backgroundColor: '#436850',
            padding: 0,
            margin: 5,
            borderRadius: 10,
            width: 100,
        },

        pac_pro: {
            fontSize: 20,
            fontWeight: '900',
        },
        email_fec: {
            fontStyle: 'italic',
            color: '#0006',
        },
        item: {
            backgroundColor: '#FFF',
            height: 150,
            width: '100%',
            marginBottom: 10,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.65,
            elevation: 4,
            padding: 5,
        }
    }
);