import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const SettingsScreen = () => {
  const [language, setLanguage] = useState('English');
  const [quoteType, setQuoteType] = useState('motivation');
  const [changeTime, setChangeTime] = useState('Daily');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/img/ico_ko.png')} style={styles.image} />
        <Text style={styles.text}>KO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={require('./assets/img/ico_en.png')} style={styles.image} />
        <Text style={styles.text}>EN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  button:{
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:25,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:70,
    height:70
  },
  text:{
    color:'#fff',
    fontSize:24,
    marginTop:10,
    fontWeight:'bold',
  }
});

export default SettingsScreen;
