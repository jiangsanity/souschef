import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WatchHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

WatchHeader.defaultProps = {
  title: 'Watch Video',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default WatchHeader;