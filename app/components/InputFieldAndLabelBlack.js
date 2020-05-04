import React, {useState} from 'react';
import {
	StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const InputFieldAndLabelBlack = ({ fieldName, fieldValue, setFieldValue, secure }) => {
    return (
        <View>
            <Text style={registerStyles.txt}>{fieldName}</Text>
            <TextInput 
                placeholder={`${fieldName}...`} 
                style={inputStyles.input} 
                onChangeText={setFieldValue}
                value={fieldValue}
                autoCapitalize={"none"}
                secureTextEntry={secure} />
        </View>
    )
}

inputStyles = StyleSheet.create({
    input: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "white",
        borderRadius: 5
    },

});

export default InputFieldAndLabelBlack;