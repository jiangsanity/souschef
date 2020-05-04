import React from "react";
import {
	StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    SegmentedControlIOS,
    View,
    Alert,
    ScrollView,
} from 'react-native';

const HeadChefActiveVouchers = ({ route, navigation }) => {
    const viewVoucher = () => {
        navigation.navigate("VoucherView", {
        });
    }

    return (
        <SafeAreaView style={activeVoucherStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                    <TouchableOpacity
                        style={activeVoucherStyles.optionWrapper}
                        >
                        <View style={activeVoucherStyles.leftWrapper} >
                            <View style={activeVoucherStyles.leftText}>
                                <Text style={activeVoucherStyles.text, {fontSize: 20, fontWeight: 'bold'}}>TOMATOKING</Text>
                                <Text style={activeVoucherStyles.text, {fontSize: 12, color: "orange"}}>Ends: 08-01-2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={activeVoucherStyles.optionWrapper}
                        >
                        <View style={activeVoucherStyles.leftWrapper} >
                            <View style={activeVoucherStyles.leftText}>
                                <Text style={activeVoucherStyles.text, {fontSize: 20, fontWeight: 'bold'}}>CANOLI22</Text>
                                <Text style={activeVoucherStyles.text, {fontSize: 12, color: "red"}}>Ends: 05-23-2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={activeVoucherStyles.optionWrapper}
                        onPress={viewVoucher}
                        >
                        <View style={activeVoucherStyles.leftWrapper} >
                            <View style={activeVoucherStyles.leftText}>
                                <Text style={activeVoucherStyles.text, {fontSize: 20, fontWeight: 'bold'}}>FARFARINA</Text>
                                <Text style={activeVoucherStyles.text, {fontSize: 12, color: "orange"}}>Ends: 09-18-2020</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={activeVoucherStyles.optionWrapper}
                        >
                        <View style={activeVoucherStyles.leftWrapper} >
                            <View style={activeVoucherStyles.leftText}>
                                <Text style={activeVoucherStyles.text, {fontSize: 20, fontWeight: 'bold'}}>FARINA20</Text>
                                <Text style={activeVoucherStyles.text, {fontSize: 12, color: "green"}}>Ends: 04-23-2021</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
		</SafeAreaView>
    );
}

activeVoucherStyles = StyleSheet.create({
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    leftWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    leftText: {
        padding: 5
    },

    scrollview: {
        marginHorizontal: 30,
        width: "75%"
    },
    segmented: {
        height: 40, 
        marginBottom: 40, 
        borderColor: 'white', 
        borderWidth: 2
    },
    spacer: {
        height: 20
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 200,
        textAlign: 'center'
    },
    txt: {
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
        textAlign: 'left'
    },
    txt2: {
        fontSize: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        margin: 20,
        padding: 10,
        borderRadius: 5
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
        borderColor: "gray",
        borderTopWidth: 1,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
});

export default HeadChefActiveVouchers;