/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker
} from 'react-native';

class PickerTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4].map((i) => {
        return (
          <Picker.Item key={i} label={i.toString()} value={i} />
        )
      })
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let newItem = this.state.items.length + 1;
    let items = this.state.items.slice(0,3);
    this.setState({items: items});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{marginBottom: 10}} onPress={this.addItem}>
          <Text>Add New Item</Text>
        </TouchableOpacity>
        <Picker style={{width: 400,}}
          selectedValue={this.state.selected}
          onValueChange={(value) => this.setState({selected: value})}
        >
          {this.state.items}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'steelblue',

  },
});

AppRegistry.registerComponent('PickerTest', () => PickerTest);
