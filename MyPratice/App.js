import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const App = () => {
    const [text, setText] = useState("Ram");

    return (
        <View style={{ marginTop: 200 }}>
            <Text>{text}</Text>
            <Button title="Click" onPress={() => setText("Sita")} />

        </View>
    );
}
export default App;
const styles = StyleSheet.create({

})