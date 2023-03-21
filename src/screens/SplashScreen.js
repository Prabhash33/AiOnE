import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NameLogoComponent from '../components/NameLogo.component';

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <NameLogoComponent/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: 
    {
        backgroundColor: "#432344",
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default SplashScreen;