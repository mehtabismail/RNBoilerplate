import { View, Text } from 'react-native'
import React from 'react'

const CustomRatings = ({ rating, Icon }) => {

    const loopingStars = () => {
        let array = []
        for (let i = 0; i < rating; i++) {
            array.push(i)
        }
        return <View style={{ flexDirection: "row" }}>
            {
                array.length > 0 && array.map(() => <Icon />)
            }
        </View>
    }
    return (
        <View>
            {loopingStars()}
        </View>
    )
}

export default CustomRatings