import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["#60a5fa", "#3b82f6"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        {/* Google Login */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-google" size={22} color="#DB4437" />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-facebook" size={22} color="#1877F2" />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Apple Login */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={22} color="#000" />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Email Login */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="mail-outline" size={22} color="#4B5563" />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>

        {/* Already have account */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Register using Email</Text>
          <Link href="/auth/registerScreen" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}> Here</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginVertical: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#6b7280",
  },
  loginLink: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
