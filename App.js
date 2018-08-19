import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Himal Jay you are the awesome react developer  </Text>
        <Text>Changes    jbk,bvjghvghcjfxgdxdgxzgdz   you make will automatically reload I love you.</Text>
        <Text>Shake your phone to nbm vgjvopen the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
