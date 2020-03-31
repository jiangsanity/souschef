import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";

const AccountSettings = ({ route, navigation }) => {
    return (
        <SafeAreaView style={accountSettingsStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={accountSettingsStyles.infoContainer}>
                    <Text style={[accountSettingsStyles.text, { fontSize: 36 }]}>George Maroun</Text>
                    <Text style={[accountSettingsStyles.text, { color: "#AEB5BC", fontSize: 14 }]}>SousChef</Text>
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
})

export default AccountSettings;