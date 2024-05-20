import React from 'react' 
import { TouchableOpacity, Text, StyleSheet }  from 'react-native'


export default function Botao({title, onPress}){
    return(
        <TouchableOpacity style={styles.button}  onPress={onPress}> 

        <Text style={styles.buttonText}>{title} </Text>
        
        </TouchableOpacity>
    )
}
    const styles = StyleSheet.create({
        button: {
            marginTop: 10,
            backgroundColor: '#6200EE',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },

        buttonText: {
            color: '#FFF',
            fontSize: 20,
            fontWeight:'bold',
        },


    })


