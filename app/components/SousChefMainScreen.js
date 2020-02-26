import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    NativeComponent
} from 'react-native';

const SousChefMainScreen = ({ route, navigation }) => {
    const { user } = route.params;
    const URL = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/dev/videos/suggested?user=jjiang312&experience=1";

    const [videoID, setVideoID] = useState("");
    const [recipeName, setRecipeName] = useState("");

    const showVideoDetail = () => {
        console.log(videoID);
        navigation.navigate("YoutubeViewer", {
            videoID: videoID,
            recipeName: recipeName
        });
    }

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                setVideoID(json.videoID);
                setRecipeName(json.recipeName);
            })
            .catch(err => console.log(err.message));
    });

    return (
		<SafeAreaView style={sousChefMainStyles.container}>
			<Text style={sousChefMainStyles.titleText}>
                SousChef Landing Screen
            </Text>
            <View style={sousChefMainStyles.videosContainer}>
                <TouchableOpacity 
                    style={sousChefMainStyles.videoWrapper}
                    onPress={showVideoDetail} >
                    <Text style={sousChefMainStyles.txt}>{recipeName}</Text>
                    <Text style={sousChefMainStyles.txt}>></Text>
                </TouchableOpacity>
            </View>
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

export default SousChefMainScreen;