import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
    const Stack = createStackNavigator();
    return (
        < NavigationContainer>
            <Stack.Navigator initialRouteName="User1">
                <Stack.Screen name="User1" component={User1} />
                <Stack.Screen name="User2" component={User2} />
            </Stack.Navigator>
        </ NavigationContainer>
    )
}
export default App;