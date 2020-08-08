import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoIcon from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps<S> {
  title: S;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps<string>> = ({
  title,
  children,
  headerRight,
}) => {
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

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};
export default PageHeader;
