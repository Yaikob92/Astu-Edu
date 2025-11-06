import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import onboardingData from "../data/onboardingData";

const { width, height } = Dimensions.get("window");
export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = onboardingData[currentIndex];
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/(auth)");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainLogo}>
        <Image source={require("../assets/images/onboardLogo.png")}></Image>
        <Text style={styles.logotitle}>BUSINESS EDUCATION</Text>
      </View>

      <Image style={styles.onboardingImage} source={data.image}></Image>

      <View style={styles.overView}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        <Ionicons name="arrow-forward" size={20} color="#0066ff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    backgroundColor: "#fefefe",
  },
  mainLogo: {
    alignItems: "center",
    marginTop: 35,
  },

  logotitle: {
    marginTop: 10,
    fontSize: 17,
    letterSpacing: 8,
    fontWeight: "bold",
  },
  onboardingImage: {
    width: width * 0.8,
    height: height * 0.3,
    marginVertical: 20,
  },

  overView: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 24,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0066ff",
  },
});
