import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubeViewer = ({ route, navigation }) => {
	// const [ready, setReady] = useState(true);
	// const [state, setState] = useState(null);
	// const [quality, setQuality] = useState(null);
	// const [error, setError] = useState(null);

	// useEffect(() => {
		
	// })

	// const videoID = KVZ-P-ZI6W4

	const { videoID, recipeName, ingredients, length, headChef } = route.params;
	
	return (
		<SafeAreaView style={videoStyles.container}>
			<View>
				<YouTube
					videoId={videoID} // The YouTube video ID
					play={false} // control playback of video with true/false
					fullscreen={false} // control whether the video should play in fullscreen or inline
					loop // control whether the video should loop when ended
					// onReady={setReady(true)}
					// onChangeState={e => setState(e.state)}
					// onChangeQuality={e => setQuality(e.quality)}
					// onError={e => setError(e.error)}
					style={videoStyles.video}
				/>
			</View>
			
			<View style={videoStyles.information}>
				<View style={videoStyles.row}>
					<Text style={videoStyles.large}>{recipeName}</Text>
					<Text style={videoStyles.large}>5/5 stars</Text>
				</View>
				<View style={videoStyles.row}>
					<Text style={videoStyles.medium}>{headChef}</Text>
					<Text style={videoStyles.medium}>{length} mins</Text>
				</View>
				<View>
					{}
				</View>
			</View>
		</SafeAreaView>

	)
}

videoStyles = StyleSheet.create({
	video: {
		alignSelf: 'stretch',
		height: 300
	},
	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 3
	},
	information:  {
		margin: 10
	},
	large: {
		fontSize: 24,
		fontWeight: "500"
	},
	medium: {
		fontSize: 20
	},
	container: {
		display: "flex",
		flexDirection: "column"
		// backgroundColor: '#999'
	}
})

export default YoutubeViewer;