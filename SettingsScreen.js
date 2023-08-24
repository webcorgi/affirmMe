import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text} from 'react-native';

const SettingsScreen = () => {
  const [language, setLanguage] = useState('English');
  const [quoteType, setQuoteType] = useState('motivation');
  const [changeTime, setChangeTime] = useState('Daily');

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      {/* <Picker selectedValue={language} onValueChange={(itemValue) => setLanguage(itemValue)}>
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Korean" value="Korean" />
      </Picker>
      <Picker selectedValue={quoteType} onValueChange={(itemValue) => setQuoteType(itemValue)}>
        <Picker.Item label="Self-Love" value="self-love" />
      </Picker>
      <Picker selectedValue={changeTime} onValueChange={(itemValue) => setChangeTime(itemValue)}>
        <Picker.Item label="Hourly" value="Hourly" />
      </Picker> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SettingsScreen;
