import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import LiveShowPreview from './LiveShowPreview';
import YouTube from 'react-native-youtube';

const LiveShowSreen = ({ route, navigation }) => {
    return (
        <SafeAreaView style={liveShowStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={liveShowStyles.sectionText}>
                    Suggested Live
                </Text>
                <View>
                    <YouTube
                        videoId={'eylOhqj8xcQ'} // The YouTube video ID
                        play={true} // control playback of video with true/false
                        fullscreen={false} // control whether the video should play in fullscreen or inline
                        loop // control whether the video should loop when ended
                        // onReady={setReady(true)}
                        // onChangeState={e => setState(e.state)}
                        // onChangeQuality={e => setQuality(e.quality)}
                        // onError={e => setError(e.error)}
                        startTime={30}
                        style={liveShowStyles.video}
                    />
                </View>
                <Text></Text>
                <Text style={liveShowStyles.sectionText}>
                    Upcoming Shows
                </Text>
                <View style={liveShowStyles.videosContainer}>
                    <LiveShowPreview 
                        recipeName={"Baked Ziti"}
                        headChef={"Tony Soprano"}
                        time={"LIVE"}
                        color={'#66FF66'}
                    />
                    <LiveShowPreview 
                        recipeName={"Basil Parmesan Drumsticks"}
                        headChef={"Liv De`Tallo"}
                        time={"5:00 PM"}
                        color={'#FFFF99'}
                    />
                    <LiveShowPreview 
                        recipeName={"Friday Cocktails"}
                        headChef={"Barren Bar"}
                        time={"LIVE"}
                        color={'#66FF66'}
                    />
                    <LiveShowPreview 
                        recipeName={"Loaded Nachos"}
                        headChef={"Kelly Tolla"}
                        time={"10:00 PM"}
                        color={'#FFB266'}
                    />
                    <LiveShowPreview 
                        recipeName={"Fried Chicken"}
                        headChef={"Soul Kitchen"}
                        time={"6:30 PM"}
                        color={'#FFFF99'}
                    />
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}
// const showVideoDetail = () => {
//     navigation.navigate("YoutubeViewer", {
//         videoID: videos.food[i].videoID,
//         recipeName: videos.food[i].recipeName,
//         ingredients: videos.food[i].ingredients,
//         length: videos.food[i].length,
//         headChef: videos.food[i].headChef,
//         user: user
//     });
// }
const liveShowStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    video: {
		alignSelf: 'stretch',
		height: 300
	},
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 20,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 180,
        height: 180,
        borderRadius: 120,
        overflow: "hidden",
        resizeMode: 'contain',
        borderWidth: 3,
        borderColor: "black"
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "black"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    circleFrame: {
        borderRadius: 127,
        width: 190,
        height: 190,
        backgroundColor: '#4d7bb0',
    },
      videosContainer: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        // backgroundColor: "#eee"
    },
    sectionText: {
        fontSize: 34,
        padding: 10,
        fontWeight: "bold",
        backgroundColor: "white"
    },
    sectionTextBlank: {
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
        backgroundColor: "white"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 5,
        borderColor: "#00FF00"
    },
    
})

export default LiveShowSreen;
