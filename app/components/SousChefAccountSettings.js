import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Button } from "react-native";

const SousChefAccountSettings = ({ route, navigation }) => {
    return (
        <SafeAreaView style={accountSettingsStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={accountSettingsStyles.infoContainer}>
                    <Text style={[accountSettingsStyles.text, { fontSize: 36 }]}>George Maroun</Text>
                    <Text style={[accountSettingsStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>SousChef</Text>
                </View>
                <View style={accountSettingsStyles.statsContainer} />

                <View style={accountSettingsStyles.optionWrapper} >
                    <View style={accountSettingsStyles.leftWrapper} >
                        <View style={accountSettingsStyles.leftText}>
                            <Text style={accountSettingsStyles.text, {fontSize: 18}}>Name: George Maroun</Text>
                        </View>
                    </View>
                    <View style={accountSettingsStyles.rightText}>
                        <Button title="Change" style={accountSettingsStyles.text, {color: "#0000FF", fontSize: 8}}> </Button>
                    </View>
                </View>

                <View style={accountSettingsStyles.optionWrapper} >
                    <View style={accountSettingsStyles.leftWrapper} >
                        <View style={accountSettingsStyles.leftText}>
                            <Text style={accountSettingsStyles.text, {fontSize: 18}}>Email: gmaroun30@gmail.com</Text>
                        </View>
                    </View>
                    <View style={accountSettingsStyles.rightText}>
                        <Button title="Change" style={accountSettingsStyles.text, {color: "#0000FF", fontSize: 8}}> </Button>
                    </View>
                </View>

                <View style={accountSettingsStyles.optionWrapper} >
                    <View style={accountSettingsStyles.leftWrapper} >
                        <View style={accountSettingsStyles.leftText}>
                            <Text style={accountSettingsStyles.text, {fontSize: 18}}>Password: pass</Text>
                        </View>
                    </View>
                    <View style={accountSettingsStyles.rightText}>
                        <Button title="Change" style={accountSettingsStyles.text, {color: "#0000FF", fontSize: 8}}> </Button>
                    </View>
                </View>

                <View style={accountSettingsStyles.optionWrapper} >
                    <View style={accountSettingsStyles.leftWrapper} >
                        <View style={accountSettingsStyles.leftText}>
                            <Text style={accountSettingsStyles.text, {fontSize: 18}}>Mobile Number: (404)906-1139</Text>
                        </View>
                    </View>
                    <View style={accountSettingsStyles.rightText}>
                        <Button title="Change" style={accountSettingsStyles.text, {color: "#0000FF", fontSize: 8}}> </Button>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}


const accountSettingsStyles = StyleSheet.create({
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
    rightText: {
        padding: 11,
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

export default SousChefAccountSettings;