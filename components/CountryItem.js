import { Pressable, View, Text, Image, StyleSheet } from "react-native"

function CountryItem({title, imageUrl, onPress}){
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CountryItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
    }
})