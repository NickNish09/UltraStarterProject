import {styles} from '../../styles/SignUp';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FacebookBtn = ({onPress}) => (
  <View style={styles.buttonGroup}>
    <TouchableOpacity
      style={[styles.buttonContainer, styles.fabookButton]}
      onPress={onPress}
    >
      <View style={styles.socialButtonContent}>
        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
        <Text style={styles.loginText}>Continue with facebook</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default FacebookBtn;
