import React from "react";
import { View,Text,TextInput,StyleSheet, Button } from "react-native";
import Crashes from "appcenter-crashes";

const InputComponent = (props) => {
  return(
    <View style={styles.container}>
      <TextInput  
        style={styles.textInputContainer} 
        placeholder="Enter Name"/>
      <Button title='ADD' onPress={()=> Crashes.generateTestCrash()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    alignItems:'center',
    justifyContent:'center'
  },
  textInputContainer:{
    borderEndWidth:2,
    margin:20,
    borderEndColor:'#ccc'
  }
});

export default InputComponent;