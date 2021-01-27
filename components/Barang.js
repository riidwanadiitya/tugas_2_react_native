import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export class Barang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaBarang: "tester",
            jumlahBarang: 0
        }
    }

    handleInputNama = (event) => {
        this.setState({
            namaBarang: event
        })
    }

    handleInputJumlah = (event) => {
        this.setState({
            jumlahBarang: event
        })
    }


    render() {
        return (
            <View>
                <Text>Masukkan Nama Barang</Text>
                <TextInput onChangeText={this.handleInputNama} />
                <Text>Masukkan Jumlah Barang</Text>
                <TextInput keyboardType="numeric" onChangeText={this.handleInputJumlah} />

                <Text>{this.props.namaBelanja}</Text>

                <Text>Nama Barang: {this.state.namaBarang}</Text>
                <Text>Jumlah Barang: {this.state.jumlahBarang} </Text>
            </View>
        )
    }
}

export default Barang
