import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo.png")}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b82f6",
  },
});
