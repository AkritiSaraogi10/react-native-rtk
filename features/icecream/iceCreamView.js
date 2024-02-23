import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
import { View, Text, Button, TextInput } from 'react-native'

export const IcecreamView = () => {
    const [value, setValue] = React.useState(1)
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Number of ice creams - {numOfIcecreams}</Text>
            <Button onPress={() => dispatch(ordered())} title='Order Ice cream' />
            <TextInput
                value={value.toString()}  
                onChangeText={e => setValue(parseInt(e) || 0)}  
            />

            <Button onPress={() => dispatch(restocked(value))}
                title='Restock Ice creams'
            />
        </View>
    )
}