import React, { useState } from "react";

import { View, Image, Text, Linking } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

export interface Teacher<S, N> {
  avatar: S;
  bio: S;
  cost: N;
  id: N;
  name: S;
  subject: S;
  whatsapp: S;
}
export interface TeacherItemProps {
  teacher: Teacher<string, number>;
  favorited: boolean;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const { name, avatar, subject, cost, bio, whatsapp, id } = teacher;
  const [isFavorited, setIsFavoriteds] = useState(favorited);

  function handleWhatsappContact() {
    api.post("connections", {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
  }
  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher<string, number>) => {
          return teacherItem.id === teacher.id;
        }
      );
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavoriteds(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavoriteds(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.subject}>{subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"    "}
          <Text style={styles.priceValue}>R$ {cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unFavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleWhatsappContact}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};
export default TeacherItem;
