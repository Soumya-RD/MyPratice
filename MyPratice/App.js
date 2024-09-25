import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity } from "react-native";

const App = () => {
    const [text, setText] = useState("");
    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState("#fff");
    const hide = () => {
        setDisplay(false);
    }
    const clear = () => {
        setText("");
    }
    const Color = () => {
        if (color == "#fff") {
            setColor("#000");
        }
        else {
            setColor("#fff")
        }
    }
    const textColor = color === "#fff" ? "#000" : "#fff";

    return (
        <View style={[styles.Conatiner, { backgroundColor: color }]}


        >
            <TouchableOpacity onPress={Color} style={[{ borderWidth: 1, height: 30, width: 50 }]}>
                <Text style={[{ color: textColor }]}>xyz</Text>
            </TouchableOpacity>
            <TextInput placeholder="Enter your name"
                style={[{ color: textColor }]}
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <Button title="Display" onPress={() => setDisplay(true)} />
            <Button title="Hide" onPress={hide} />
            <Button title="Clear" onPress={clear} />
            {
                display ? <View>
                    <Text style={[{ color: textColor }]}>
                        {text}
                    </Text>

                </View> : null
            }
        </View>
    );
}
export default App;
const styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        marginTop: 200,


    }
})