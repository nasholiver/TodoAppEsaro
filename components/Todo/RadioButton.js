import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ selected, onSelect }) => (
  <TouchableOpacity onPress={onSelect}>
    <View style={[styles.radio, selected && styles.selected]}>
      {selected && <View style={styles.innerSquare} />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  radio: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black', // Color for unchecked square radio
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderColor: 'black', // Color for checked square radio
  },
  innerSquare: {
    width: 18,
    height: 18,
    backgroundColor: '#62D2C3', // Color for inner square of checked radio
  },
});

export default RadioButton;
