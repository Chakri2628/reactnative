

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import LeftNavigation from '../LeftNavigation';

const EmployeeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <LeftNavigation /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Employee Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  contentContainer: {
    flex: 1,
    zIndex:0,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default EmployeeScreen;
