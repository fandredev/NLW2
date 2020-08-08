import React, { useState } from "react";

import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadingFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }
  useFocusEffect(() => {
    loadingFavorites();
  });
  return (
    <View style={styles.container}>
      <PageHeader title="Meus profys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 8 }}
      >
        {favorites.map((teacher: Teacher<string, number>) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}
export default Favorites;
