import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import SousChefMainScreen from './components/SousChefMainScreen';
import HeadChefMainScreen from './components/HeadChefMainScreen';
import YoutubeViewer from './components/YoutubeViewer';
import * as firebase  from 'firebase';
import UploadRecipeScreen from './components/UploadRecipeScreen';
import SousChefAccountSettings from './components/SousChefAccountSettings';
import SousChefPreferences from './components/SousChefPreferences';
import SousChefRedeemVoucher from './components/SousChefRedeemVoucher';
import SousChefMyVouchers from './components/SousChefMyVouchers';
import HeadChefActiveVouchers from './components/HeadChefActiveVouchers'
import HeadChefGenerateVoucher from './components/HeadChefGenerateVoucher'
import ProfileViewer from './components/ProfileViewer';


const App = () => {
	const Stack = createStackNavigator();

	const firebaseConfig = {
		apiKey: "AIzaSyAnYhPlb9HskZ0BmpfbkVCMKhWbS0wfEsY",
		authDomain: "souschef-50dec.firebaseapp.com",
		databaseURL: "https://souschef-50dec.firebaseio.com",
		projectId: "souschef-50dec",
		storageBucket: "souschef-50dec.appspot.com",
		messagingSenderId: "944322068444",
		appId: "1:944322068444:web:9e66f3f067eb20815b9919",
		measurementId: "G-NK5BEDJZXW"
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	// firebase.analytics();

	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName="HomeScreen" 
				screenOptions={{
					headerTitleStyle: {
						color: 'white',
					},
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#4d7bb0',
					}
				}} >
				<Stack.Screen 
					name={"HomeScreen"} 
					component={HomeScreen}
					options={{
						title: "",
						headerStyle: {
							shadowRadius: 0,
							shadowOffset: {
								height: 0
							},
							backgroundColor: '#4d7bb0'
						}
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
				<Stack.Screen 
					name={"SousChefMainScreen"} 
					component={SousChefMainScreen}
					
					options={{
						title: "",
						headerTitle: () => <Text style={appStyles.mainScreenTitle}>Welcome</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						},
						headerLeft: null
					}} />
				<Stack.Screen 
					name={"HeadChefMainScreen"} 
					component={HeadChefMainScreen}
					
					options={{
						title: "", // THIS IS HOW YOU MAKE THE BACK BUTTON JUST SAY "BACK"
						headerTitle: () => <Text style={appStyles.mainScreenTitle}>Welcome</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						},
						headerLeft: null
					}} />
				<Stack.Screen 
					name={"YoutubeViewer"} 
					component={YoutubeViewer}
					options={{
						title: "",
						headerTitle: () => <Text style={appStyles.titleBlack}>Recipe</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"UploadRecipeScreen"} 
					component={UploadRecipeScreen}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Create Recipe</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"SousChefAccountSettings"} 
					component={SousChefAccountSettings}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Account Settings</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"SousChefPreferences"} 
					component={SousChefPreferences}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Preferences</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"HeadChefActiveVouchers"} 
					component={HeadChefActiveVouchers}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Active Vouchers</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"HeadChefGenerateVoucher"} 
					component={HeadChefGenerateVoucher}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Generate Voucher</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"SousChefRedeemVoucher"} 
					component={SousChefRedeemVoucher}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>Redeem A Voucher</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"SousChefMyVouchers"} 
					component={SousChefMyVouchers}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>My Vouchers</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						}
					}} />
				<Stack.Screen 
					name={"ProfileViewer"} 
					component={ProfileViewer}
					options={{
						headerTitle: () => <Text style={appStyles.titleBlack}>HeadChef Profile</Text>,
						headerStyle: {
							backgroundColor: '#eee',
						},
						
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
	},
	titleBlack: {
		color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 30,
	},
	mainScreenTitle: {
		color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'times',
        fontSize: 30,
	}
})

export default App;