import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Card({title, imageUrl, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    margin: 10,
    padding: 30,
    overflow: 'hidden',
  },
  detailsContainer: {
    paddingTop: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#363636',
    flexShrink: 1,
    fontWeight: 'bold',
  },
});
