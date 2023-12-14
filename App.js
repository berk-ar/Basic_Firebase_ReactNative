import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { addData } from './helpers/db_helper';
import Create from './screens/Create';
import ReadMany from './screens/ReadMany';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Create />
        <ReadMany />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});