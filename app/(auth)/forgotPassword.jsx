import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <LinearGradient
      colors={["#60a5fa", "#3b82f6"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email to reset your password
        </Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#9ca3af"
        />

        {/* Reset Button */}
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#3b82f6", "#2563eb"]}
            style={styles.resetButton}
          >
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Back to Login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Remembered your password?</Text>
          <Link href="/auth/loginPage" asChild>
            <Text style={styles.loginLink}> Login</Text>
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
  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    color: "#111827",
  },
  resetButton: {
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  resetButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#6b7280",
  },
  loginLink: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
