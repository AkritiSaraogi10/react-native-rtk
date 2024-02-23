import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
export const CakeView = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Number of cakes - {numOfCakes}</Text>
            <Button onPress={() => dispatch(ordered())} title='Order Cake' />
            <Button onPress={() => dispatch(restocked(5))} title='Restock Cakes' />
        </View>
    )
}