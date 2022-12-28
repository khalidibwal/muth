import React,{useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Rating, AirbnbRating } from "@rneui/themed";
import axios from "axios";
import { Card } from "@rneui/themed";

export default function Ratings(props) {
  const { matkul, user_id, teacherId } = props.route.params;
  const [rated, setRating] = useState(1)
  const [description, setdesc] = useState('')
  function alertRating(rating) {
    // alert("Rating is:" + rating);
    setRating(rating)
  }
  const handleDesc = (e) =>{
    setdesc(e)
  }
  const defaultValues = {
    user_data_id: user_id,
    biodata_guru_id: teacherId,
    rating: rated,
    desc:description
  };
  const HandleSubmit = (e) =>{
    if (description !== "") {
      axios
        .post(
          `https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/teacher_rate`,
          defaultValues
        )
        .then((response) => {
          console.warn(response)
          // navigation.navigate('rate',
          // {user_id:response.data.user_data_id, teacherId: response.data.id})
        })
        .catch((error) => console.warn(error));
    }
    else{
      alert('Mohon untuk Tidak DI kosongkan kolom komentar')
    }
  }
  return (
    <ImageBackground
      style={Styles.container}
      source={require("../../../assets/Home/home.png")}
    >
      <Card containerStyle={Styles.cardStyle}>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Bad",
            "Good",
            "very Good",
            "Excelent",
          ]}
          defaultRating={1}
          onFinishRating={(e)=> alertRating(e)}
          size={20}
        />
        <Text style={Styles.txtmatkul}>{rated}/5</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={Styles.input}
          placeholder="Berikan Alasannya"
          onChangeText={handleDesc}
        />
        <TouchableOpacity style={Styles.appButtonContainer} onPress={()=> HandleSubmit()}>
          <Text style={Styles.appButtonText}>Submit</Text>
        </TouchableOpacity>
      </Card>
    </ImageBackground>
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
    borderRadius: 10,
  },
  input: {
    height: 150,
    margin: 25,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  txtmatkul: {
    textAlign: "center",
    top: 10,
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
});
