import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator= () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Imaan is my bestie
      </Text>
      <Button
        title="Imaan?"
        onPress={() => Alert.alert('the best bestie')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Friendships with genuine women are the strongest bonds. Sisters who welcome you into their world no question asked Alhamdulillsh 
      </Text>
      <Button
        title="The Sisterhood"
        color="#f194ff"
        onPress={() => Alert.alert('Long Live the Sisterhood')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This is not up for debate
      </Text>
      <Button
        title="At ALL"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Press Right button if you believe in the sister hood
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('You bitch press on the right button ')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('I am a believer')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;