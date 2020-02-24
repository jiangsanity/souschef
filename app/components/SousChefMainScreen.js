import React, { useState } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
} from 'react-native';

const SousChefMainScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={sousChefMainStyles.container}>
			<Text style={sousChefMainStyles.titleText}>
                SousChef Landing Screen
            </Text>
		</SafeAreaView>
	)
}

sousChefMainStyles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        color: 'black',
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

export default SousChefMainScreen;