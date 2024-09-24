import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const App = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const [look, setLook] = useState(true);
    const showpassword = () => {
        if (look == true) {
            setLook(false);
        }
        else {
            setLook(true);
        }
    }

    return (
        <View style={styles.Conatiner}>
            <TextInput placeholder="Enter your name"

                style={{
                    borderWidth: 1,
                    marginTop: 100,
                    padding: 3,
                    width: 250,
                    textAlign: 'center',
                    marginLeft: 50,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    backgroundColor: '#fff'
                }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput placeholder="Enter your email"
                style={{
                    borderWidth: 1,
                    marginTop: 10,
                    padding: 3,
                    width: 250,
                    textAlign: 'center',
                    marginLeft: 50,
                    borderRadius: 5,
                    fontWeight: 'bold',
                    backgroundColor: '#fff'
                }}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={{
                flexDirection: 'row', borderWidth: 1,
                marginTop: 10,

                width: 250,
                borderRadius: 5,
                marginLeft: 50,
                backgroundColor: '#fff'
            }}>
                <TextInput placeholder="Enter your Password"
                    style={{

                        padding: 3,
                        textAlign: 'center',
                        marginLeft: 35,
                        fontWeight: 'bold',
                        width: 180,

                    }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={look}
                />
                <TouchableOpacity>
                    <EvilIcons name="eye" size={30} color="black" onPress={showpassword}
                        style={{ marginLeft: 3, marginTop: 3 }}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{
                borderWidth: 1, marginTop: 20, width: 150, height: 30, alignItems: 'center', marginLeft: 100,
                borderRadius: 10, backgroundColor: '#023047'
            }}
                onPress={() => setDisplay(true)}
            >
                <Text style={{ fontWeight: 'bold', padding: 4, color: '#fff' }}>
                    Display
                </Text>
                {
                    display ? <View style={{
                        fontWeight: 'bold',
                        fontSize: 24, textAlign: 'center',
                        marginTop: 27, width: 400,
                    }}>

                        <Text style={styles.displayText}>
                            Name:{name}
                        </Text>
                        <Text style={styles.displayText} >
                            Email:{email}
                        </Text>
                        <Text style={styles.displayText} >
                            Password:{password}
                        </Text>

                    </View> : null
                }

            </TouchableOpacity>

        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        backgroundColor: '#bbd0ff'
    },
    displayText: {
        fontWeight: 'bold',
        marginLeft: 55,
        marginTop: 10
    }
})