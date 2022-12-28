import React,{useContext, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Card } from "@rneui/themed";
import { ContextProv } from "../../context/ContextProv";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [pass, setPass] = useState('')
    const {user, setUser, myToken, setMyToken} = useContext(ContextProv) 
    const navigation = useNavigation();
    const defaultValues = {
      username: user,
      password: pass,
    };
    function registerPage(){
        navigation.navigate('regis')
    }
    const handleUser = (e) =>{
      setUser(e)
    }
    const handlePass = (e) =>{
      setPass(e)
    }
    const HandleSubmit = () => {
      axios
        .post(
          `https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/auth/login`,
          defaultValues,{
            "headers": {
              'Content-Type': 'application/json',
            }
          }
        )
        .then((response) => { 
          if (response.status === 200) {
            console.warn(response.data)           
            // navigation.navigate('home',{
            //  myToken: response.data.authToken,
            // },)
            navigation.push('home',{
              screen: 'homescreen',
              params : {myToken: response.data.authToken}
            })
          }
        })
        .catch((error)=> alert(error,'Wrong Username or Password'))
    };
    
  return (
    <ImageBackground
      style={Styles.container}
      source={require("../../../assets/Home/home.png")}
    >
      <Image
        source={require("../../../assets/Logo/muth.png")}
        style={Styles.logo}
      />
      <Card containerStyle={Styles.card}>
        <TextInput style={Styles.input} placeholder="Username" name='username' onChangeText={handleUser}/>
        <TextInput style={Styles.input} placeholder="Password" name='password' onChangeText={handlePass} secureTextEntry={true}/>
        <TouchableOpacity activeOpacity={0.7} style={Styles.appButtonContainer} onPress={()=> HandleSubmit()}>
          <Text style={Styles.appButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> registerPage()}>
        <Text style={Styles.txtCenter}>Tidak memiliki akun ? Daftar Disini</Text>
        </TouchableOpacity>
      </Card>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  logo: {
    width: 200,
    height: 200,
    top:20
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#44a6c6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  card:{
    width:'80%',
    borderRadius:10
  },
  txtCenter:{
    marginTop:10,
    textAlign:'center'
  }
});
