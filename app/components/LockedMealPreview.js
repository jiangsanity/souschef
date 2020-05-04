import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Image,
    
} from 'react-native';
import YouTube from 'react-native-youtube';

const LockedMealPreview = ({ recipeName, headChef, showVideoDetail, videoID, navigation }) => {
    return (
        <TouchableOpacity 
            style={lockedPreviewStyles.videoWrapper}
            onPress={() => Alert.alert('Locked! Subscribe to view early')} >
            <View style={lockedPreviewStyles.leftWrapper}>
                {/* <View style={lockedPreviewStyles.videoPreview}> */}
                <Image source={require('../assets/lock.png')} style={lockedPreviewStyles.videoPreview}/>
                {/* <YouTube
                    videoId={videoID} // The YouTube video ID
                    play={false} // control playback of video with true/false
                    fullscreen={false} // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    // onReady={setReady(true)}
                    // onChangeState={e => setState(e.state)}
                    // onChangeQuality={e => setQuality(e.quality)}
                    // onError={e => setError(e.error)}
                    style={lockedPreviewStyles.videoPreview}
                /> */}
                {/* </View> */}
                <View style={lockedPreviewStyles.leftText}>
                    <Text style={lockedPreviewStyles.txt}>{recipeName}</Text>
                    {/* <Text>{headChef}</Text> */}
                    <Text style={lockedPreviewStyles.subtxt}> Available: 04-30-2020</Text>
                </View>
            </View>
            <View>
                <Text style={lockedPreviewStyles.txt}>></Text>
            </View>
        </TouchableOpacity>
	)
}

lockedPreviewStyles = StyleSheet.create({
    leftText: {
        padding: 5
    },
    leftWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    videoPreview: {
        width: 70,
        height: 50,
        backgroundColor: "#ccc"
    },
    txt: {
        fontSize: 20,
        color: 'red'
    },
    subtxt: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        flexDirection: "row",
    },
    videoWrapper: {
        backgroundColor: "#fff",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }
});

export default LockedMealPreview;