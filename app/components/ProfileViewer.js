import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Alert, TouchableOpacity } from "react-native";
import MealPreview from './MealPreview';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProfileViewer = ({ route, navigation }) => {
    return (
        <SafeAreaView style={profileViewerStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={profileViewerStyles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={profileViewerStyles.profileImage}>
                        {/* <View style={profileViewerStyles.circleFrame}> */}
                        <Image source={require("../assets/profile-pic.jpeg")} style={profileViewerStyles.image} resizeMode="center"></Image>
                        {/* </View> */}
                    </View>
                    {/* <View style={profileViewerStyles.add}>
                        <Ionicons name="add-circle-outline"></Ionicons>
                    </View> */}
                    <Image source={require("../assets/dm.png")} style={profileViewerStyles.dm} resizeMode="center"></Image>
                    <TouchableOpacity style={profileViewerStyles.add2} onPress={() => Alert.alert('Followed The Cooking Foodie')} >
                        <Image source={require("../assets/add-icon.png")} style={profileViewerStyles.add} resizeMode="center"></Image>
                    </TouchableOpacity>
                </View>

                <View style={profileViewerStyles.infoContainer}>
                    <Text style={[profileViewerStyles.text, { fontWeight: "200", fontSize: 36 }]}>The Cooking Foodie</Text>
                    <Text style={[profileViewerStyles.text, { color: "#AEB5BC", fontSize: 18 }]}>Food-Tuber</Text>
                    <Text style={[profileViewerStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>Response Time: less than 30 mins</Text>
                </View>
                
                <View style={profileViewerStyles.statsContainer}>
                    <View style={profileViewerStyles.statsBox}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>386</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>Videos</Text>
                    </View>
                    <View style={[profileViewerStyles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>786K</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>Followers</Text>
                    </View>
                    <View style={profileViewerStyles.statsBox}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>3 Years</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>Experience</Text>
                    </View>
                </View>
                <Text style={profileViewerStyles.sectionTextBlank}>
                </Text>
                <Text style={profileViewerStyles.sectionText}>
                    Food Recipes
                </Text>
                <View style={profileViewerStyles.videosContainer}>
                    <MealPreview 
                        recipeName={"Mac n Cheese"}
                        headChef={"Cooking Foodie"}
                    />
                    <MealPreview 
                        recipeName={"Baked Carrot Fries"}
                        headChef={"Cooking Foodie"}
                    />
                    <MealPreview 
                        recipeName={"Nigerian Meat Pie"}
                        headChef={"Cooking Foodie"}
                    />
                    <MealPreview 
                        recipeName={"Vanilla Cupcakes"}
                        headChef={"Cooking Foodie"}
                    />
                    <MealPreview 
                        recipeName={"Cornbread"}
                        headChef={"Cooking Foodie"}
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
const profileViewerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
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
        fontSize: 12,
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
        borderColor: "black", 
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
    add2: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 62,
        height: 62,
        borderRadius: 31,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0,
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
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
        backgroundColor: "#ddd"
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

export default ProfileViewer;