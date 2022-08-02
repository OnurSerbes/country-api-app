import { View, Text, Image, StyleSheet } from "react-native"

function CountriesDetail({name, population, flag, capital, language, timezone}){
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image style={styles.image} source={{uri: flag}}/>
        </View>
        <View style={styles.titleContainer}>
         <Text style={styles.mainText}>{name}</Text>
        </View>
        <View style={styles.subContainer}>
        <Text style={styles.subText}>Capital : {capital} City</Text>
          <Text style={styles.subText}>Popualation : {population} people</Text>
          <Text style={styles.subText}>Language : {language}</Text>
          <Text style={styles.subText}>Current Timezone : {timezone}</Text>
        </View>
      </View>
    )
}

export default CountriesDetail

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#014f86',
      flex: 1
    },
    titleContainer:{
      alignItems: 'center',
      
    },
    subContainer: {
      padding: 10,
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      backgroundColor: '#61a5c2',
      borderRadius: 10,
      flex: 1,
      borderWidth: 2,
      borderColor: '#ffffff'
    },
    mainText: {
      color: '#ffffff',
      margin: 5,
      fontSize: 35,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 23,
      color: '#ffffff',
      fontWeight: '500',

    },
    image:{
      width: '80%',
      height: 200,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#ffffff'
    },
    imageContainer:{
      alignItems: 'center',
    }
})