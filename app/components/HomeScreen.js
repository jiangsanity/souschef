import React, { useState } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from 'react-native';

const HomeScreen = ({ navigation }) => {


    
	return (
		<SafeAreaView style={homeStyles.container}>
			<Text style={homeStyles.titleText}>
                SousChef!
            </Text>
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
        fontSize: 45,
        marginTop: 200,
        marginBottom: 180,
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
        margin: 40,
        padding: 10,
        borderRadius: 5
    }
});

export default HomeScreen;