import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
    SafeAreaView,
    Text,
    View,
    TabBarIOS
} from 'react-native';
import MealPreview from './MealPreview';

const SousChefMainScreen = ({ route, navigation }) => {
    const { user } = route.params;
    // const URL_INDIVIDUAL = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/dev/videos/suggested?user=jjiang312&experience=1";
    const BASE_URL = "https://szi75jseif.execute-api.us-east-2.amazonaws.com/live/videos/list/";

    // const [videos, setVideos] = useState([]);
    // const [drinkVideos, setDrinkVideos] = useState([]);

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

    const showDrinkVideoDetail = (i) => {
        navigation.navigate("YoutubeViewer", {
            videoID: videos.drink[i].videoID,
            recipeName: videos.drink[i].recipeName,
            ingredients: videos.drink[i].ingredients,
            length: videos.drink[i].length,
            headChef: videos.drink[i].headChef
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
            });
            let responseB = await fetch(BASE_URL + "drink");
            let jsonB = await responseB.json();
            let drinkVideosInfo = jsonB["videos"].map(v => {
                return {
                    headChef: v.headChef,
                    recipeName: v.recipeName,
                    ingredients: v.ingredients,
                    videoID: v.videoID,
                    length: v.time
                }
            });
            setVideos({
                food: foodVideosInfo,
                drink: drinkVideosInfo
                // drink: [
                //     {
                //         headChef: "How to Drink",
                //         recipeName: "Amaretto Sour",
                //         ingredients: [
                //             "1.5 oz or 44ml of Luxardo Amaretto",
                //             "0.75 oz or 22 ml of Bourbon",
                //             "1 oz or 30 ml of Lemon Juice",
                //             "1 egg white",
                //             ".25 oz or 7 ml of Rich Simple"
                //         ],
                //         videoID: "LJkdoA-qSgE",
                //         length: 5
    
                //     }
                // ]
            });
        }
        getData();
    }, []);

    console.log("render");

    return (
		<SafeAreaView style={sousChefMainStyles.container}>
			<Text style={sousChefMainStyles.sectionText}>
                Food Recipes
            </Text>
            <View style={sousChefMainStyles.videosContainer}>
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
            <Text style={sousChefMainStyles.sectionText}>
                Drink Recipes
            </Text>
            <View style={sousChefMainStyles.videosContainer}>
                {videos["drink"].map((v, i) => {
                    return (
                        <MealPreview 
                            recipeName={v.recipeName}
                            headChef={v.headChef}
                            showVideoDetail={() => showDrinkVideoDetail(i)}
                            key={v.videoID} />
                    )
                })}
            </View>
		</SafeAreaView>
	)
}

const sousChefMainStyles = StyleSheet.create({
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

export default SousChefMainScreen;