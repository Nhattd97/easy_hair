import React from 'react';
import { TextInput, View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { FONT } from '../const';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, showPress, showText, multiline, keyboardType, autoFocus, onFocus }) => {

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.inputGroupText}>{label}</Text>
            <TextInput
                style={(!multiline) ? styles.inputGroupTextField : StyleSheet.flatten([styles.inputGroupTextField, { height: 120 }])}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#757575'
                underlineColorAndroid={'transparent'}
                multiline={multiline}
                returnKeyType='done'
                keyboardType={keyboardType}
                onFocus={onFocus}
            />
            <View style={styles.showPassSection}>
                <TouchableOpacity onPress={showPress} activeOpacity={1} on>
                    <Text style={styles.showTextStyle}>{showText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 10,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'
    },
    showPassSection: {
        top: 30,
        right: 20,
        //bottom: 10,
        elevation: 2,
        position: 'absolute'
    },
    showTextStyle: {
        fontFamily: FONT.APP,
        fontSize: 14,
        color: '#00528F',
        backgroundColor: '#FFFFFF',
    },
    inputGroup: {
        marginBottom: 20
    },
    inputGroupText: {
        marginBottom: 5,
        color: '#757575',
        fontSize: 12,
        fontFamily: FONT.APP,
        fontWeight: 'normal',
        backgroundColor: 'transparent',
    },
    inputGroupTextField: {
        height: 40,
        width: '100%',
        paddingTop: 10,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderColor: '#D5D9DE',
        borderWidth: 1,
        borderRadius: 6,
        shadowColor: '#AAC1C5',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.36,
        textAlignVertical: 'top'
    },
};

export { Input };

