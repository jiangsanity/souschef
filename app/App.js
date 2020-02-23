import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';

const App = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="HomeScreen" 
				screenOptions={{
					headerTitleStyle: {
						color: 'white',
					},
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: '#6666aa',
					}
				}} >
				<Stack.Screen 
					name={"HomeScreen"} 
					component={HomeScreen}
					options={{
						title: ""
					}} />	
				<Stack.Screen 
					name={"LoginScreen"} 
					component={LoginScreen}
					options={{
						headerTitle: () => <Text style={appStyles.title}>Login</Text>
					}} />
				<Stack.Screen 
					name={"RegisterScreen"} 
					component={RegisterScreen}
					options={{
						headerTitle: () => <Text style={appStyles.title}>Register</Text>
					}} />	
			</Stack.Navigator>
		</NavigationContainer>
	)
}

appStyles = StyleSheet.create({
	title: {
		color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 30,
	}
})

export default App;