import React from 'react'
import { FlatList, Text } from 'react-native'

const Lista = () => {
    const { pacientes } = props
    return (
        <Text>
            <FlatList
                data={pacientes}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                    <Text>Hola</Text>
                }}>
                

            </FlatList>
        </Text >
    )
}

export default Lista
