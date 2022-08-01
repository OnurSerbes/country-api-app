import {FlatList, StyleSheet} from "react-native"
import CountryItem from "../components/CountryItem"
import { useEffect, useState } from "react";
import { getData } from "../util/api";


function CountriesOverviewScreen({navigation}){

    const [data, setData] = useState([]);

    useEffect(()=>{
        getData(setData)
    }, []) 

    function renderCountryItem(itemData){

        function pressHandler(){
            navigation.navigate('CountriesDetail', {
                name: itemData.item.name,
                flag: itemData.item.flags.png,
                capital: itemData.item.captial,
                population: itemData.item.population,
                languages: itemData.item.languages.naitveName,
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

    return <FlatList 
    style={styles.listContainer}
    numColumns={2}
    data={data}
    renderItem={renderCountryItem}
    keyExtractor={(item, index) => String(index)}/>

}

export default CountriesOverviewScreen

const styles = StyleSheet.create({
    listContainer:{
        
    }
})