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
	
	return (
		<SafeAreaView style={styles.safeAreaView}>
			<YouTube
				videoId={route.params.videoID} // The YouTube video ID
				play={false} // control playback of video with true/false
				fullscreen={false} // control whether the video should play in fullscreen or inline
				loop // control whether the video should loop when ended
				// onReady={setReady(true)}
				// onChangeState={e => setState(e.state)}
				// onChangeQuality={e => setQuality(e.quality)}
				// onError={e => setError(e.error)}
				style={{ alignSelf: 'stretch', height: 300 }}
			/>
		</SafeAreaView>

	)
}

styles = StyleSheet.create({
	safeAreaView: {
		backgroundColor: '#999'
	}
})

export default YoutubeViewer;