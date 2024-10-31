// SecondaryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
    <Text style={styles.secondaryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  secondaryButton: {
    width: 132,
    height: 45,
    borderWidth: 1,
    borderColor: '#62A4B0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#62A4B0',
    fontFamily: 'System',
    textAlign: 'center',
  },
});

export default SecondaryButton;
