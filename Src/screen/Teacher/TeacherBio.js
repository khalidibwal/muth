import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function TeacherBio(props) {
  const navigation = useNavigation();
  const [Teacher, setTeacher] = useState("");
  const { params, id } = props.route.params;
  const defaultValues = {
    user_data_id: id,
    matpel: params,
    guru: Teacher,
  };
  const HandleTeacher = (e) => {
    setTeacher(e);
  };
  const handleSubmit = () => {
    if (Teacher !== "") {
      axios
        .post(
          `https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/biodata_guru`,
          defaultValues
        )
        .then((response) => {
          navigation.navigate('rate',
          {user_id:response.data.user_data_id, teacherId: response.data.id})
        })
        .catch((error) => console.warn(error));
    }
    else{
      alert('Mohon untuk Di isi')
    }
  };

  return (
    <ImageBackground
      style={Styles.container}
      source={require("../../../assets/Home/home.png")}
    >
      <Card containerStyle={Styles.cardStyle}>
        <Text style={Styles.matpel}>Mata Pelajaran : {params}</Text>
        <TextInput
          style={Styles.input}
          placeholder="Siapakah Nama Guru Anda ?"
          onChangeText={HandleTeacher}
        />
        <TouchableOpacity
          style={Styles.appButtonContainer}
          activeOpacity={0.7}
          onPress={handleSubmit}
        >
          <Text style={Styles.appButtonText}>Selanjutnya</Text>
        </TouchableOpacity>
      </Card>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cardStyle: {
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 25,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
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
  matpel: {
    left: 30,
  },
});
