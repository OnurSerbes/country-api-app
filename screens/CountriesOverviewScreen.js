import {FlatList, StyleSheet, View} from "react-native"
import CountryItem from "../components/CountryItem"
import { useEffect, useState } from "react";
import { getCustomData, getData} from "../util/api";
import SearchBar from "react-native-dynamic-search-bar";



function CountriesOverviewScreen({navigation}){

    const [data, setData] = useState([]);
    const [changedData, setChangedData] = useState('');

    useEffect(()=>{
        getData(setData)
    }, []) 

    useEffect(()=>{
        if (changedData) {
              getCustomData(setData, changedData)
         }
      },[changedData])

    function renderCountryItem(itemData){

        function pressHandler(){
            navigation.navigate('CountriesDetail', {
                name: itemData.item.name,
                flag: itemData.item.flags.png,
                capital: itemData.item.capital,
                population: itemData.item.population,
                timezone: itemData.item.timezones,
                language: itemData.item.languages[0]['name'],
            })
        }
        return (
            <CountryItem
            onPress={pressHandler}
            title={itemData.item.name}
            imageUrl={itemData.item.flags.png}
            />   
        )
    }

    return  (
        <View style={styles.container}>
            <SearchBar
            placeholder="Search here"
            onSearchPress = {(text)=>{setChangedData(text)}}/>
            <FlatList
            style={styles.flatlist} 
            numColumns={2}
            data={data}
            renderItem={renderCountryItem}
            keyExtractor={(item, index) => String(index)}/>
        </View>
    )

}

export default CountriesOverviewScreen

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
    },
    flatlist: {
        margin: 10,
    }
})