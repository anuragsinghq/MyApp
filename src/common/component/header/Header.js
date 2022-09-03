import React from 'react';
import styles from './style';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
}

export default Header;
