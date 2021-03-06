import React, { useState } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {

    
	return (
		<SafeAreaView style={homeStyles.container}>
			<Text style={homeStyles.titleText}>
                SousChef!
            </Text>
            <Image source={require('../image.png')} style={homeStyles.img}/>
            <TouchableOpacity 
                style={homeStyles.button}
                onPress={() => navigation.navigate("LoginScreen")} >
                <Text style={homeStyles.txt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={homeStyles.button} 
                onPress={() => navigation.navigate("RegisterScreen")} >
                <Text style={homeStyles.txt}>Register</Text>
            </TouchableOpacity>
		</SafeAreaView>
	)
}

homeStyles = StyleSheet.create({
	container: {
		backgroundColor: '#4d7bb0',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 60,
        marginTop: 100,
        marginBottom: 20,
        padding: 10,
        textAlign: 'center'
    },
    txt: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        backgroundColor: '#ccc',
        width: 200,
        alignItems: 'center',
        margin: 20,
        padding: 10,
        borderRadius: 5
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginBottom: 40
    }
});

export default HomeScreen;