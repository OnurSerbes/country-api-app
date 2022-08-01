import { useEffect, useState } from "react"
import { View, Text, ScrollView, Image } from "react-native"
import { getCustomData } from "../util/api"

function CountriesDetailScreen({route, navigation}){

    const name = route.params.name
    const flag = route.params.flag
    const population = route.params.population
    const language = route.params.language
    const capital= route.params.capital

    return (
        <View>
            <Image source={{uri: flag}}/>
            <Text>{name}</Text>
            <Text>{population}</Text>
            <Text>{language}</Text>
            <Text>{capital}</Text>
        </View>
    )

}

export default CountriesDetailScreen