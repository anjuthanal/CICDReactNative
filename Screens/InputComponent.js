import React,{useState} from "react";
import { View,Text,TextInput,StyleSheet, Button } from "react-native";
import Crashes from "appcenter-crashes";

const InputComponent = (props) => {
  const[banner,setBanner] = useState('');
  const setNameHandler = (enteredName) =>{
    setBanner(enteredName);
  }

  const[nameList,setNameList] = useState([]);
  const getNameList = () =>{
    setNameList([...nameList,banner])
    setBanner('');
  }
  return(
    <View style={styles.container}>
      <TextInput  
        style={styles.textInputContainer} 
        placeholder="Enter Name"
        onChangeText={setNameHandler}
        value={banner}/>
      <Button title='ADD' 
      onPress={getNameList}/>
      <Text>Hello : {nameList.join('*')}</Text>
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