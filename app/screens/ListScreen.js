import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

import Card from '../components/Card';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pockemons: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://gabbyapp.com/pockemons/data.json');
      const data = await response.json();
      this.setState({pockemons: data});
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {pockemons} = this.state;

    return (
      <FlatList
        style={styles.screen}
        data={pockemons}
        keyExtractor={(pockemon) => pockemon.name}
        numColumns={2}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <Card
            title={item.name}
            imageUrl={'https://gabbyapp.com/' + item.picture}
            onPress={() => this.props.navigation.navigate('Детали', item)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {flexGrow: 1, alignItems: 'center'},
  screen: {
    padding: 10,
    backgroundColor: '#f8f4f4',
  },
});
