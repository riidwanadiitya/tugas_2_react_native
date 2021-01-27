import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Barang from './components/Barang'

export class App extends Component {
  render() {
    return (
      <View>
        <Text> TUGAS 2 REACT NATIVE </Text>
        <Barang namaBelanja="================ Total Belanja ================" />
      </View>
    )
  }
}

export default App
