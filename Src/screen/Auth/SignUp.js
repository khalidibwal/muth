import React, {useContext, useState} from "react";
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
import { Card } from "@rneui/themed";
import { ContextProv } from "../../context/ContextProv";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Register() {
  const navigation = useNavigation();
  const {user, setUser,mykelas,setMyKelas,names,setNames} = useContext(ContextProv)
  const [pass,setPass] = useState('')

  const defaultValues = JSON.stringify({
    username: user,
    password: pass,
    kelas: mykelas,
    name: names,
  });

  const HandleName = (e) =>{
    setNames(e)
  }
  const HandleUser = (e) =>{
    setUser(e)
  }
  const HandlePass = (e)=>{
    setPass(e)
  }
  const HandleClass = (e) =>{
    setMyKelas(e)
  }

  const HandleSubmit = (event) => {
    // console.warn(defaultValues)
    axios
      .post(
        `https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/auth/signup`,
        defaultValues,{
          "headers": {
            'Content-Type': 'application/json',
          }
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate('home',{
            myToken: response.data.authToken
          })
        }
      })
      .catch((error) => console.warn(error, "Wrong Username or Password"));
  };

  function LoginPage() {
    navigation.navigate("login");
  }
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
        <TextInput style={Styles.input} placeholder="Nama alias" onChangeText={HandleName} />
        <TextInput style={Styles.input} placeholder="kelas" onChangeText={HandleClass} />
        <TextInput style={Styles.input} placeholder="Username" onChangeText={HandleUser}/>
        <TextInput
          style={Styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={HandlePass}
        />
        <TouchableOpacity activeOpacity={0.7} style={Styles.appButtonContainer} onPress={HandleSubmit}>
          <Text style={Styles.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => LoginPage()}>
          <Text style={Styles.txtCenter}>Anda Memiliki akun, Klik Disini</Text>
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
    top: 20,
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
  card: {
    width: "80%",
    borderRadius: 10,
  },
  txtCenter: {
    marginTop: 10,
    textAlign: "center",
  },
});
