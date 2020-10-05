import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function DetailsScreen({route}) {
  const pockemons = route.params;

  return (
    <ScrollView>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{uri: 'https://gabbyapp.com/' + pockemons.picture}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{pockemons.name}</Text>
        <Text style={styles.description}>Описание</Text>
        <Text style={styles.subtitle}>{pockemons.description}</Text>
        <Text style={styles.description}>Рост</Text>
        <Text style={styles.subtitle}>{pockemons.height}</Text>
        <Text style={styles.description}>Вес</Text>
        <Text style={styles.subtitle}>{pockemons.weight}</Text>
        <Text style={styles.description}>Тип</Text>
        <Text style={styles.subtitle}>{pockemons.type}</Text>
        <View style={styles.userContainer}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    color: '#6e6969',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  detailsContainer: {
    padding: 20,
  },
  icon: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  subtitle: {
    color: '#363636',
    fontSize: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#363636',
    fontWeight: '500',
    marginBottom: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
