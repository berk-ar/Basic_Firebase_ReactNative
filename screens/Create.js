import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { addData } from '../helpers/db_helper';

export default class Create extends Component {
  state = { firstName: '', lastName: '' }

  handleAddButton = async () => {
    if (this.state.firstName && this.state.lastName) {
      await addData('users', this.state)
    }
  }

  handleFirstNameInput = (text) => {
    this.setState({ ...this.state, firstName: text })
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Your firstname' onChangeText={this.handleFirstNameInput} />
        <TextInput placeholder='Your middlename' onChangeText={text => this.setState({ ...this.state, middleName: text })} />
        <TextInput placeholder='Your lastname' onChangeText={text => this.setState({ ...this.state, lastName: text })} />
        <Button title='Add Record' onPress={this.handleAddButton} />
        <StatusBar style="auto" />
      </View>
    );
  }
}