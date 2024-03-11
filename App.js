import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>ramadhan</Text>
      <Text style={styles.bigBlue}>taqabalAllah</Text>
      <Text style={[styles.bigBlue, styles.red]}>yippieeeeeeee</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigGreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;