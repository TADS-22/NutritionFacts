import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const EmptyResult = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.message}>
                {'Sorry!\nNo results where found for your query.'}
            </Text>
        </View>
    )
}

export default EmptyResult