import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as firebase from 'firebase';
import MealPreview from './MealPreview';

const Favorites = ({ route, navigation }) => {

	const { user } = route.params;
	
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		let userRef = firebase.database().ref(`users/${user.userType}/${user.uid}`);

		userRef.on('value', snapshot => {
			// updates every time the user adds or removes one from favorites
			let userVal = snapshot.val();
			setFavorites(userVal["favorites"]);
		});
		
	}, []);

	return (
		<SafeAreaView style={favoritesStyles.container}>
			<ScrollView>
				<Text style={favoritesStyles.sectionText}>
					Favorite Recipes
				</Text>
				<View>
					{favorites.map(favTemplate => {
						return (
							<MealPreview  //let favTemplate = [videoID, recipeName, headChef];
								recipeName={favTemplate[1]}
								headChef={favTemplate[2]}
								videoID={favTemplate[0]}/>
						)
					})}
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}

const favoritesStyles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignContent: 'center',
    },
	sectionText: {
        fontSize: 24,
        padding: 10,
        fontWeight: "500",
        backgroundColor: "#ddd"
    },
})

export default Favorites;