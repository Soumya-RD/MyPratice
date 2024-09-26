import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User1 = ({ navigation }) => {

    return (
        <View>
            <Text>User1</Text>
            {/* <Button title='next' onPress={() => navigation.navigate("User2")} /> */}
        </View>
    )
}

export default User1;

const styles = StyleSheet.create({})