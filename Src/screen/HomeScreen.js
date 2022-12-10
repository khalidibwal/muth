import React, {useContext, useEffect, useState} from "react";
import { Input } from "@rneui/themed";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "@rneui/themed";
import { ContextProv } from "../context/ContextProv";
import CardHome from "../component/Home/CardHome";
import {
  AntDesign,
  Octicons,
  Fontisto,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen(props) {
  const [idBIO, setBIO] = useState(0)
  const Navigation = useNavigation();
  const {
    myToken, setMyToken,
    user, setUser,
    mykelas,setMyKelas,
    names,setNames 
  } = useContext(ContextProv)

  useEffect(() => {
    const Token = props.route.params.myToken;
    console.warn(Token)
    const isAuthorized = () => {
      axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/auth/me`, {
          headers: {
            Authorization: 'Bearer '+ Token,
          },
        })
        .then((response) => {
          if (response.data.username !== null) {
            console.warn(response.data)
            setNames(response.data.name)
            setUser(response.data.username)
            setMyKelas(response.data.kelas)
            setBIO(response.data.id)
            setMyToken(Token)
          } else {
            Navigation.navigate('login');
          }
        })
        .catch(error => console.warn(error,'error data'))
    };
    isAuthorized();
  }, []);
  const navigation = useNavigation();
  const attr = {
    book: require("../../assets/Logo/book.png"),
  };
  function toTeacherPage(title){
    navigation.navigate('teacher',
    {params:title,id:idBIO})
  }
  return (
    <View style={Styles.container}>
      <Card containerStyle={Styles.searchCard}>
        <Input
          style={Styles.search}
          autoFocus={true}
          leftIcon={{ type: FontAwesome5, name: "search" }}
        />
      </Card>
      <Text style={Styles.txtCtg}>Kategori Matkul</Text>
      <View style={Styles.cardStyle}>
        <CardHome src={attr.book} bookTitle="Bahasa Inggris" onPress={()=>toTeacherPage('Bahasa Inggris')} />
        <CardHome src={attr.book} bookTitle="Bahasa Indonesia" onPress={()=>toTeacherPage('Bahasa Indonesia')} />
        <CardHome src={attr.book} bookTitle="IPA" onPress={()=>toTeacherPage('IPA')} />
        <CardHome src={attr.book} bookTitle="IPS" onPress={()=>toTeacherPage('IPS')} />
        <CardHome src={attr.book} bookTitle="Sejarah" onPress={()=>toTeacherPage('Sejarah')} />
        <CardHome src={attr.book} bookTitle="PKN" onPress={()=>toTeacherPage('PKN')}/>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cardStyle: {
    flexDirection: "row",
    borderRadius: 10,
    flexWrap: "wrap",
    margin: 25,
  },
  search: {
    height: 40,
    margin: 15,
    padding: 10,
  },
  searchCard: {
    borderRadius: 10,
  },
  txtCtg: {
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    top: 10,
  },
  verticalScroll: {
    height: 300,
    width: 160,
  },
});
