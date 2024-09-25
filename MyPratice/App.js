import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Button } from "react-native";

const App = () => {
    const [bgcolor, setBgcolor] = useState("#fff");
    const changeColor = () => {
        setBgcolor(color => (color === "#fff" ? "#000" : "#fff"));
    }
    const changeTextColor = bgcolor === "#fff" ? "#000" : "#fff";
    return (
        <View style={[styles.Conatiner, { backgroundColor: bgcolor }]}>
            <TouchableOpacity onPress={changeColor} style={styles.Button}>
                <Text style={[styles.buttonText, { color: changeTextColor }]}>SWAP</Text>
            </TouchableOpacity>
            <Text style={[styles.text, { color: changeTextColor }]}>Jay Jagannath Odisha!</Text>
            <Text style={[styles.text, { color: changeTextColor }]}> My self Soumya Ranjan Dalai</Text>
            <Text style={[styles.text, { color: changeTextColor }]}>From Bhadrak,BAsudevpur</Text>
        </View>
    );
};

export default App;
const styles = StyleSheet.create({
    Conatiner: {
        marginTop: 100,
        marginLeft: 100,
        flex:1
    },
    Button: {
        borderWidth: 1,
        width: 70,
        marginLeft: 100,
        backgroundColor:'green'
    }

})