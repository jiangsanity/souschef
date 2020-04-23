import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    NativeComponent
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
// import { TabNavigator } from '@react-navigation'
import HeadChefUpload from './HeadChefUpload';
import ProfileViewer from './ProfileViewer';
import MealPreview from './MealPreview';

const Tab = createBottomTabNavigator();


const HeadChefMainScreen = ({ route, navigation }) => {
    // const { user } = route.params;

    const BASE_URL = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/live/videos/list/";

    const [videos, setVideos] = useState({
        food: [],
        drink: []
    });

    const showVideoDetail = (i) => {
        navigation.navigate("YoutubeViewer", {
            videoID: videos.food[i].videoID,
            recipeName: videos.food[i].recipeName,
            ingredients: videos.food[i].ingredients,
            length: videos.food[i].length,
            headChef: videos.food[i].headChef
        });
    }

    useEffect(() => {
        const getData = async () => {
            let responseA = await fetch(BASE_URL + "food");
            let jsonA = await responseA.json();
            let foodVideosInfo = jsonA["videos"].map(v => {
                return {
                    headChef: v.headChef,
                    recipeName: v.recipeName,
                    ingredients: v.ingredients,
                    videoID: v.videoID,
                    length: v.time
                }
            })
            // foodVideosInfo = foodVideosInfo.filter(v => v.headChef === "Cooking Foodie");
            setVideos({
                food: foodVideosInfo,
                drink: []
            });
        }
        getData();
    }, []);

    return (
		<SafeAreaView style={headChefMainStyles.container}>
            <Text style={headChefMainStyles.sectionText}>
                Food Recipes
            </Text>
            <View style={headChefMainStyles.videosContainer}>
                {videos["food"].map((v, i) => {
                    return (
                        <MealPreview 
                            recipeName={v.recipeName}
                            headChef={v.headChef}
                            showVideoDetail={() => showVideoDetail(i)}
                            videoID={v.videoID}
                            key={v.videoID} />
                    )
                })}
            </View>
        </SafeAreaView>
	)
}

const HeadChefTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Explore" component={HeadChefMainScreen} />
            <Tab.Screen name="DM" component={DMPlaceholder} />
            <Tab.Screen name="Upload" component={HeadChefUpload} />
            <Tab.Screen name="Library" component={LibraryPlaceholder} />
            <Tab.Screen name="Profile" component={ProfileViewer} />
        </Tab.Navigator>
    )
}

const DMPlaceholder = () => {
    return (
        <View>
            <Text>DMs</Text>
        </View>
    )
}

const LibraryPlaceholder = () => {
    return (
        <View>
            <Text>Library</Text>
        </View>
    )
}

const headChefMainStyles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',
    },
    button: {
        fontSize: 20,
        width: 200,
        backgroundColor: "#9b9",
        padding: 10,
        borderRadius: 5
    },
    medium: {
        fontSize: 20,
        textAlign: 'center'
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
    sectionText: {
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
        backgroundColor: "#ddd"
    },
    txt: {
        fontSize: 20,
        color: 'black'
    },
    videosContainer: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        // backgroundColor: "#eee"
    },
});

export default HeadChefTabNavigator;