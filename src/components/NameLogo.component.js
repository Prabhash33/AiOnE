import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import LogoName from "../../res/LogoName.png"

const NameLogoComponent = () => {
    return(
        <View>
            <Image source={LogoName} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
        logo: {
            width: '50%',
            height: undefined,
            aspectRatio: 140 / 75,
        }
});

export default NameLogoComponent;