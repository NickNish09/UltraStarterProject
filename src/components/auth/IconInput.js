import React from "react";
import {styles} from "../../styles/SignUp";
import {Image, TextInput, View} from "react-native";

const IconInput = ({inputKey, onChangeText, isSecureTextEntry, placeholder, icon}) => (
  <View style={styles.inputContainer}>
    <Image style={[styles.icon, styles.inputIcon]} source={icon}/>
    <TextInput style={styles.inputs}
               placeholder={placeholder}
               secureTextEntry={isSecureTextEntry}
               underlineColorAndroid='transparent'
               onChangeText={val => onChangeText(inputKey, val)}
               autoCapitalize={'none'}
    />
  </View>
);

export default IconInput;
