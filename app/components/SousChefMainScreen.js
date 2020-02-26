import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    NativeComponent
} from 'react-native';
import MealPreview from './MealPreview';
import * as firebase from 'firebase';

const SousChefMainScreen = ({ route, navigation }) => {
    const { user } = route.params;
    // const URL_INDIVIDUAL = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/dev/videos/suggested?user=jjiang312&experience=1";
    const URL_LIST = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/live/videos/list/food";

    const [videos, setVideos] = useState([]);

    const showVideoDetail = (i) => {
        console.log(i);
        navigation.navigate("YoutubeViewer", {
            videoID: videos[i].videoID,
            recipeName: videos[i].recipeName,
            ingredients: videos[i].ingredients,
            length: videos[i].length,
            headChef: videos[i].headChef
        });
    }

    useEffect(() => {
        // fetch(URL_INDIVIDUAL)
        //     .then(res => res.json())
        //     .then(json => {
        //         setVideoID(json.videoID);
        //         setRecipeName(json.recipeName);
        //     })
        //     .catch(err => console.log(err.message));

        fetch(URL_LIST)
            .then(res => res.json())
            .then(json => {
                let videosInfo = json["videos"].map(v => {
                    return {
                        headChef: v.headChef,
                        recipeName: v.recipeName,
                        ingredients: v.ingredients,
                        videoID: v.videoID,
                        length: v.time
                    }
                });
                setVideos(videosInfo);
            })
            .catch(err => console.log(err.message));
    });

    return (
		<SafeAreaView style={sousChefMainStyles.container}>
			<Text style={sousChefMainStyles.titleText}>
                SousChef Landing Screen
            </Text>
            <View style={sousChefMainStyles.videosContainer}>
                {/* <MealPreview 
                    recipeName={recipeName}
                    headChef="George Maroun"
                    showVideoDetail={showVideoDetail} />
                <MealPreview 
                    recipeName={recipeName}
                    headChef="George Maroun"
                    showVideoDetail={showVideoDetail} />
                <MealPreview 
                    recipeName={recipeName}
                    headChef="George Maroun"
                    showVideoDetail={showVideoDetail} /> */}
                {videos.map((v, i) => {
                    return (
                        <MealPreview 
                            recipeName={v.recipeName}
                            headChef={v.headChef}
                            showVideoDetail={() => showVideoDetail(i)}
                            key={v.videoID} />
                    )
                })}
            </View>
		</SafeAreaView>
	)
}

sousChefMainStyles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
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
        // backgroundColor: "#eee"
    },
});

export default SousChefMainScreen;