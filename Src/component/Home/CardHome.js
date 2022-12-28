import { Card } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function CardHome(props) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={Styles.box}
      >
        <Card containerStyle={Styles.box}>
          <Image source={props.src} style={Styles.logo} />
          <Text style={Styles.titleCenter}>{props.bookTitle}</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 190,
    height: 200,
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 5,
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
  },
  titleCenter: {
    textAlign: "center",
  },
});
