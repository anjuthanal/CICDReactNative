import React from "react";
import { View,Text,TextInput,StyleSheet, Button } from "react-native";
import InputComponent from "./Screens/InputComponent";

export default App = () => {
  return(
    <View style={styles.container}>
      <Text>My First CI CD Sample</Text>
      <InputComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  textInputContainer:{
    borderEndWidth:2,
    margin:20,
    borderEndColor:'#ccc'
  }
});