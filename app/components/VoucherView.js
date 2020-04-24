import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Button, Alert} from "react-native";

const VoucherView = ({ route, navigation }) => {

    return (
        <SafeAreaView style={voucherViewStyles.container}>
            <ScrollView>
                <Text style={voucherViewStyles.headingText}>
                    Code: FARFARINA
                </Text>
                <Text style={voucherViewStyles.headingText}>
                    Ends on: 09-18-2020
                </Text>
                <Text style={voucherViewStyles.text}>
                    Enjoy a free month of premium content from La Farina and show this offer at your next visit to get a $10 credit towards your bill!
                </Text>


            </ScrollView>
        </SafeAreaView>
        
    );
}

const voucherViewStyles = StyleSheet.create({
    headingText: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontWeight: 'bold',
        padding: 10,
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        padding: 10,
    },
})

export default VoucherView;