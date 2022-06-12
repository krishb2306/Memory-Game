import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MemoryBox({onPressFunction, data, keyContent}) {
  
  return (
    <TouchableOpacity 
    onPress={() => {onPressFunction()}}
    disabled = {!data[keyContent].enabled}
    style={styles.button}
    >
    
    <Image
        style={styles.confImage}
        source={data[keyContent].flipped  == true ? data[keyContent].source: require("./assets/pink.png")}
      />
    </TouchableOpacity>
  
    
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 100,
    marginTop: -30,
  },
  bigPink: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
  red: {
    color: 'red',
  },
  confImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 10,
  },
  button: {
    flexDirection:"row", 
    width: windowWidth/5,
    height: windowHeight/13,
    alignItems:'center',
    justifyContent:'center',
    padding: 30
  },

});


