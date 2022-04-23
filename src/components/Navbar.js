import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <View style={[styles.headerContainer, theme]}>
            <Text style={[styles.headerText, theme]}>AWD | Elective Course at BTECH</Text>
            <TouchableOpacity onPress={changeAuthStatus}>
                <Text style={[styles.headerText, theme]}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
            </TouchableOpacity>
            <View style={styles.headerTabContainer}>
                <Text style={styles.headerTab}>Overview</Text>
                <Text style={styles.headerTab}>Contact</Text>
                <Text style={styles.headerTab}>Support</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#5882FA',
        height: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
    },
    headerText: {
        marginTop: 25,
        fontSize: 24,
        color: 'white',
    },
    headerTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        backgroundColor: '#819FF7',
        alignSelf: 'flex-end',
    },
    headerTab: {
        fontSize: 18,
        paddingVertical: 10
    }
});

export default Navbar;

