import axios from "axios";

export const getData = async function(setData){
    await axios.get('https://restcountries.com/v2/all')
    .then((json)=> setData(json.data))
    .catch((e)=>{
        console.log(e)
    })
}

export const getCustomData = async function(setData, countryName){
    await axion.get(`https://restcountries.com/v3.1/name/${countryName}`)
    then((json)=> setData(json.data))
    .catch((e)=>{
        console.log(e)
    }) 
}