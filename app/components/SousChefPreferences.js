import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";

const SousChefPreferences = ({ route, navigation }) => {
    return (
        <SafeAreaView style={PreferencesStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={PreferencesStyles.infoContainer}>
                    <Text style={[PreferencesStyles.text, { fontSize: 36 }]}>George Maroun</Text>
                    <Text style={[PreferencesStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>SousChef</Text>
                </View>
                <View style={PreferencesStyles.statsContainer} />

                <View style={PreferencesStyles.optionWrapper} >
                    <View style={PreferencesStyles.leftWrapper} >
                        <View style={PreferencesStyles.leftText}>
                            <Text style={PreferencesStyles.text, {fontSize: 18}}>Experience Level: Beginner</Text>
                        </View>
                    </View>
                </View>

                <View style={PreferencesStyles.optionWrapper} >
                    <View style={PreferencesStyles.leftWrapper} >
                        <View style={PreferencesStyles.leftText}>
                            <Text style={PreferencesStyles.text, {fontSize: 18}}>Favorite Cuisines: Italian, Japanese</Text>
                        </View>
                    </View>
                </View>

                <View style={PreferencesStyles.optionWrapper} >
                    <View style={PreferencesStyles.leftWrapper} >
                        <View style={PreferencesStyles.leftText}>
                            <Text style={PreferencesStyles.text, {fontSize: 18}}>Allergies & Restrictions: Nuts, Gluten</Text>
                        </View>
                    </View>
                </View>

                <View style={PreferencesStyles.optionWrapper} >
                    <View style={PreferencesStyles.leftWrapper} >
                        <View style={PreferencesStyles.leftText}>
                            <Text style={PreferencesStyles.text, {fontSize: 18}}>Goals: Mixology, Master of Meats</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const PreferencesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
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

export default SousChefPreferences;