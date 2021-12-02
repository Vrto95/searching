import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.text}>Արագ Որոնում</Text>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        {/* ste qo uzac logon kdnes ;) */}
        <Text style={styles.subText}>Արագ, Թեթև, Հարմար</Text>
      </View>
      <View style={styles.buttonsConainer}>
        <AppButton
          title="Շարունակել"
          onPress={() => {
            console.log("login");
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Օգտագգործելով տվյալ հավելվածը դուք</Text>
        <Text style={styles.info}>
          Ընդունում եք պայմանները համաձայն օգտագործողի
        </Text>
        <Text style={styles.info}>
          համաձայնագրի և գաղտնիության քաղաքականության
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A6985",
    flex: 1,
    // width: "100%",   ete joges stylert backgroundi trnum en kbaces es comment@, mardes karoxa ogni ;)
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 100,
    borderWidth: 1,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  subText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 50,
  },
  buttonsConainer: {
    padding: 23,
    paddingHorizontal: "30%",
    width: "100%",
  },
  infoContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  info: {
    color: "white",
    fontSize: 12,
  },
});

export default WelcomeScreen;
