import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
} from 'react-native';

const MyPage = ({ text }) => {
    return (
        <SafeAreaView>
            <Text>{text}</Text>
        </SafeAreaView>
    )
}

export default MyPage;