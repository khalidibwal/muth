import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Card, AirbnbRating } from "@rneui/themed";
import axios from "axios";

export default function AllData() {
  const [fetchall, setFetch] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    axios
      .get(`https://x8ki-letl-twmt.n7.xano.io/api:zNdwddYo/teacher_rate`)
      .then((response) => setFetch(response.data));
  };
  return (
    <View style={Styles.container}>
      <ScrollView>
        {fetchall.map((resp) => {
          return (
            <View style={Styles.borserStyle}>
              <Card containerStyle={Styles.cardStyle} key={resp.id}>
                <AirbnbRating
                  reviews={["Terrible", "Bad", "Good", "very Good", "Excelent"]}
                  defaultRating={resp.rating}
                  isDisabled={true}
                  size={20}
                />
                <Text>Rating : {resp.rating}</Text>
                {resp._biodata_guru_of_user_data.map((teach) => {
                  return (
                    <View>
                      <Text>Nama Guru : {teach.guru}</Text>
                      <Text>Mata Pelajaran : {teach.matpel}</Text>
                    </View>
                  );
                })}
                <Text>komentar : {resp.desc}</Text>
              </Card>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
  },
  cardStyle: {
    borderRadius: 10,
  },
  borserStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
});
