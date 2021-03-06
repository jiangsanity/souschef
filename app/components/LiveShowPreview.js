import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const LiveShowPreview = ({ recipeName, headChef, showVideoDetail, videoID, navigation, time, color }) => {
    return (
        <TouchableOpacity 
            style={videoWrapperColored(color)}
            onPress={showVideoDetail} >
                
            <View style={mealPreviewStyles.leftWrapper}>
                {/* <View style={mealPreviewStyles.videoPreview}/> */}
                {/* <YouTube
                    videoId={videoID} // The YouTube video ID
                    play={false} // control playback of video with true/false
                    fullscreen={false} // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    // onReady={setReady(true)}
                    // onChangeState={e => setState(e.state)}
                    // onChangeQuality={e => setQuality(e.quality)}
                    // onError={e => setError(e.error)}
                    style={mealPreviewStyles.videoPreview}
                /> */}
                {/* </View> */}
                <View style={mealPreviewStyles.leftText}>
                    <Text style={mealPreviewStyles.txt}>{recipeName}</Text>
                    <Text>{headChef}</Text>
                </View>
                <View style={mealPreviewStyles.rightText}>
                    <Text style={mealPreviewStyles.timeText}>{time}</Text>
                </View>
            </View>
            <View>
                <Text style={mealPreviewStyles.txt}>></Text>
            </View>
        </TouchableOpacity>
	)
}

mealPreviewStyles = StyleSheet.create({
    leftText: {
        padding: 5
    },
    rightText: {
        padding: 20,
        flex: 1
    },
    timeText: {
        textAlign: 'right',
        fontSize: 20,
        fontWeight: "bold"
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
        fontWeight: "bold",
        color: 'black'
    },
    videoWrapper: {
        backgroundColor: "#fff",
        padding: 10,
        // paddingTop: 15,
        // paddingBottom: 15,
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

videoWrapperColored = (color) => {
    if (typeof color === "undefined") {
        color = 'white';
    }
    return {
        backgroundColor: "#fff",
        padding: 10,
        // paddingTop: 15,
        // paddingBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        backgroundColor: color,
    }
}

export default LiveShowPreview;