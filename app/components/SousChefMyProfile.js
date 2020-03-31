import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SousChefMyProfile = ({ route, navigation }) => {
    const showSettings = (i) => {
        navigation.navigate("AccountSettings", {
        });
    }

    const showPreferences = (i) => {
        navigation.navigate("Preferences", {
        });
    }

    return (
        <SafeAreaView style={profileViewerStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={profileViewerStyles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={profileViewerStyles.profileImage}>
                        <Image source={require("../assets/profile-pic.jpg")} style={profileViewerStyles.image} resizeMode="center"></Image>
                    </View>
                    {/* <View style={profileViewerStyles.add}>
                        <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                    </View> */}
                </View>

                <View style={profileViewerStyles.infoContainer}>
                    <Text style={[profileViewerStyles.text, { fontWeight: "200", fontSize: 36 }]}>George Maroun</Text>
                    <Text style={[profileViewerStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>SousChef</Text>
                </View>
                
                <View style={profileViewerStyles.statsContainer}>
                    {/* <View style={profileViewerStyles.statsBox}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>483</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>Videos</Text>
                    </View> */}
                    <View style={[profileViewerStyles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>300</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>Followers</Text>
                    </View>
                    <View style={profileViewerStyles.statsBox}>
                        <Text style={[profileViewerStyles.text, { fontSize: 24 }]}>4 Years</Text>
                        <Text style={[profileViewerStyles.text, profileViewerStyles.subText]}>As SousChef</Text>
                    </View>
                </View>
                <View style={profileViewerStyles.statsContainer} />
                <View >
                    <TouchableOpacity
                        style={profileViewerStyles.optionWrapper}
                        onPress={showSettings} >
                        <View style={profileViewerStyles.leftWrapper} >
                            <View style={profileViewerStyles.leftText}>
                                <Text style={profileViewerStyles.text, {fontSize: 20}}>Account Settings</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        style={profileViewerStyles.optionWrapper} 
                        onPress={showPreferences} >
                        <View style={profileViewerStyles.leftWrapper} >
                            <View style={profileViewerStyles.leftText}>
                                <Text style={profileViewerStyles.text, {fontSize: 20}}>Preferences</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
        overflow: "hidden"
    },
    add: {
        backgroundColor: "#4d7bb0",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
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
    settingsContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginTop: 20,
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    leftWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    leftText: {
        padding: 5
    },
    optionWrapper: {
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
})

export default SousChefMyProfile;
