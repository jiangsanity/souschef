import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    NativeComponent
} from 'react-native';

const HeadChefMainScreen = ({ route, navigation }) => {
    // const { user } = route.params;

    // useEffect(() => {

    // });

    return (
		<SafeAreaView style={sousChefMainStyles.container}>
			<Text style={sousChefMainStyles.titleText}>
                HeadChef Landing Screen
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
        alignContent: 'center',
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 30,
        marginTop: 15,
        padding: 10,
        textAlign: 'center',
    },
    txt: {
        fontSize: 20,
        color: 'black'
    },
    videosContainer: {
        padding: 8,
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        backgroundColor: "#ddd"
    },
    videoWrapper: {
        backgroundColor: "#ccc",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 5
    }
});

export default HeadChefMainScreen;