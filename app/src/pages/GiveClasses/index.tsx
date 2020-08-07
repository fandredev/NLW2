import React from "react";
import { View, ImageBackground, Text } from "react-native";

import styles from "./styles";

import giveClassesBGImg from "../../assets/images/give-classes-background.png";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateToLanding() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBGImg}
        style={styles.content}
        resizeMode={"contain"}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateToLanding}>
        <Text style={styles.okButtonText}>Tudo bem!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
