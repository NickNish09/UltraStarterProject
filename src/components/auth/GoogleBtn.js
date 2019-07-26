import React from "react";
import {styles} from "../../styles/SignUp";
import {Image, Text, TouchableOpacity, View} from 'react-native';

const GoogleBtn = ({onPress}) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      style={[styles.buttonContainer, styles.googleButton]}
      onPress={onPress}
    >
      <View style={styles.socialButtonContent}>
        <Image style={styles.icon} source={require('../../assets/images/googleIcon.png')}/>
        <Text style={styles.loginText}>Sign in with google</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default GoogleBtn;
