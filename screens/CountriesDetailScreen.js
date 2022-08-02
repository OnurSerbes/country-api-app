import { useEffect, useState } from "react"
import { View, Text, ScrollView, Image } from "react-native"
import CountriesDetail from "../components/CountryDetail"
import { getCustomData } from "../util/api"

function CountriesDetailScreen({route, navigation}){

    const name = route.params.name
    const flag = route.params.flag
    const population = route.params.population
    const language = route.params.language
    const capital= route.params.capital
    const timezone = route.params.timezone

    return (
        <CountriesDetail 
        name={name} flag={flag} population={population} language={language} capital={capital} timezone={timezone}/>
    )

}

export default CountriesDetailScreen