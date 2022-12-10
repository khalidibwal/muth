import React from "react";
import { View, StyleSheet, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import { Rating } from "@rneui/themed";
import { Card } from "@rneui/themed";

export default function Ratings(props) {
  const { matkul } = props.route.params;
  function alertRating(rating) {
    console.warn("Rating is:" + rating);
  }
  return (
    <ImageBackground style={Styles.container} source={require('../../../assets/Home/home.png')}>
      <Card containerStyle={Styles.cardStyle}>
        <Rating
          showRating
          onFinishRating={() => alertRating()}
          style={{ paddingVertical: 10 }}
        />
        <Text style={Styles.txtmatkul}>{matkul}</Text>
        <TextInput multiline={true} numberOfLines={2} style={Styles.input} placeholder='Berikan Alasannya'/>
        <TouchableOpacity style={Styles.appButtonContainer}>
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
  input:{
    height: 150,
    margin: 25,
    padding: 10,
    borderWidth:1,
    borderRadius:10
  },
  txtmatkul:{
    textAlign:'center',
    top:10
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
