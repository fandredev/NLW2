import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoIcon from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps<S> {
  title: S;
}

const PageHeader: React.FC<PageHeaderProps<string>> = ({ title }) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoIcon} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default PageHeader;
