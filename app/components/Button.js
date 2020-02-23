import React from 'react';
import{Stylesheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>


    )

}

const styles = Stylesheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        width '100%',
        backgroundColor:'#00aeef',
        borderRadius: 4,
        alignItems: 'center',
    },

     text: {
        color:'white',
        fontWeight: '700',
        fontSize: 10,
     }






});

export{Button};