import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

export default Item = ({item}) => {
    const { id, paciente, propietario, email, fecha, sintomas } = item

    return (
        <View style={style.item} >
            <Text>
                {paciente+' '+propietario}
            </Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        item: {
            backgroundColor: '#FFA',
            height: 50,
            width: 240,
        }
    }
)