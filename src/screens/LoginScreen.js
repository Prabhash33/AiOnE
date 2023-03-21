import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Toast from 'react-native-simple-toast';

const LoginScreen = ({ navigation }) => {
    console.log(navigation);

    function handleNavigation(screen) {
        navigation.navigate(screen);
        Toast.show('Screen: '+screen, Toast.SHORT);
    }
    return (
        <View>
            <Text>Login Screen</Text>
            <TouchableOpacity style={{ backgroundColor: "yellow", padding: 30, margin: 20 }}
                onPress={() => handleNavigation("Home")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;